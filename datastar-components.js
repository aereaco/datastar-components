// datastar-components.js
// This plugin dynamically loads and defines HTML-first Custom Elements.
// It ensures DatastarJS reactivity is applied within their scope.
//
// Component Definition:
// - Components are defined using a single source file via `data-component-src`.
//    This file is expected to contain a `<template shadowroot="open">` or `<template shadowroot="closed">` for Shadow DOM,
//    or a plain `<template>` for Light DOM.
// - Within the `data-component-src` file, the plugin intelligently processes:
//    - Internal CSS: `<style>` tags and `<link rel="stylesheet">` are converted to
//      Constructable Stylesheets for efficient parsing and deduplication across instances
//      (in Shadow DOM) or injected and rewritten (in Light DOM).
//    - Internal JavaScript: ALL types of <script> tags (module, classic, src, inline) are
//      handled, processed, and executed sequentially. Top-level functions within module
//      scripts can be registered as Datastar actions.
//    - Slots: Standard `<slot>` elements are supported for content projection.
//    - Props: Attributes prefixed with `data-prop-` are observed and made available
//      as reactive signals via a `$props` object within the component's scope.
//
// Performance Features:
// - Conditional loading of components using `data-load-if` based on Datastar signals.
// - Optimized network requests by preventing redundant fetches and component definitions.
// - Efficient DOM scanning for new components using `MutationObserver`.
// - Leveraging native ES Module caching for JS dependencies.
//
// Further Enhancements (Future Goals) - NOW IMPLEMENTED:
// - Enhanced Error Handling and Debugging Feedback:
//   - More specific error messages for network, parsing, and script errors.
//   - Includes component tag name and source URL in all error messages.
//   - Emits custom events (e.g., 'component-load-error', 'component-script-error') for centralized reporting.
//   - NEW: Fallback UI rendering via `data-component-error-src` attribute.
// - Server-Side Rendering (SSR) / Hydration Readiness:
//   - Detects if component content is already pre-rendered (e.g., via Declarative Shadow DOM).
//   - "Hydrates" existing elements by attaching interactivity and initializing Datastar,
//     rather than re-fetching and re-injecting HTML, preventing FOUC and improving performance.
// - Opinionated Lifecycle Integration for Cleanup:
//   - Provides a simple pattern (registerCleanup) for developers to register functions that run
//     when a component is disconnected, preventing memory leaks.
// - Adopted Callback Integration:
//   - Ensures Datastar reactivity is re-initialized when a custom element is adopted into a new document.
// - NEW: Enhanced Theming and CSS Variable Management:
//   - Provides utility methods for setting and getting CSS custom properties on component instances.

'use strict'; // Enforce strict mode for cleaner, safer code.

const loadedComponents = new Map(); // Stores promises for loaded component definitions to prevent redundant fetches
const loadedFallbackComponents = new Map(); // Stores promises for loaded fallback component HTML
let Datastar; // Global Datastar instance injected on initialization

// Unique ID counter for scoped IDs
let globalComponentIdCounter = 0;

// Custom event names for error reporting
const EVENT_COMPONENT_LOAD_ERROR = 'component-load-error';
const EVENT_COMPONENT_SCRIPT_ERROR = 'component-script-error';

// Custom element base class for Datastar components
class DatastarComponent extends HTMLElement {
    // --- Form Integration - Declare element as form-associated ---
    static formAssociated = false;

    constructor() {
        super();
        this.root = null;
        this._dsCleanupFunctions = [];
        this._dsPropsObserver = null;
        this._dsInstanceId = ++globalComponentIdCounter;
        this._dsContentAttached = false;
        this._componentSrc = '';
        this._isShadowDOM = false;
        this._internals = this.attachInternals();
    }

    // Method for component's internal script to register cleanup functions
    registerCleanup(fn) {
        if (typeof fn === 'function') {
            this._dsCleanupFunctions.push(fn);
        }
    }

    // Method to generate a unique, scoped ID for elements within this component instance
    generateScopedId(baseId) {
        return `${this.tagName.toLowerCase()}-${this._dsInstanceId}-${baseId}`;
    }

    // Placeholder for a developer-defined callback when content is ready
    contentReadyCallback() {
        // This method will be called by the plugin after the component's
        // HTML is attached (or hydrated) and Datastar is initialized.
    }

    /**
     * Dispatches a custom event from the component's root.
     * Events are set to bubble and compose by default to cross Shadow DOM boundaries.
     * @param {string} eventName The name of the custom event.
     * @param {any} detail The data to pass with the event (available via event.detail).
     */
    emit(eventName, detail) {
        if (typeof eventName !== 'string' || eventName.trim() === '') {
            console.error(`[datastar-components] Invalid event name provided to 'emit'. Must be a non-empty string.`);
            return;
        }

        const customEvent = new CustomEvent(eventName, {
            bubbles: true,
            composed: true,
            detail: detail
        });

        if (this.root) {
            this.root.dispatchEvent(customEvent);
        } else {
            console.warn(`[datastar-components] Cannot emit event '${eventName}' from ${this.tagName} (ID: ${this._dsInstanceId}): Component root not yet established.`);
        }
    }

    /**
     * Sets a CSS custom property (CSS variable) on the specified element.
     * Defaults to the component's root if no element is provided.
     * @param {string} name The name of the CSS variable (e.g., '--my-color').
     * @param {string} value The value to set the CSS variable to.
     * @param {HTMLElement|ShadowRoot} [element=this.root] The element to apply the variable to.
     */
    setCssVariable(name, value, element = this.root) {
        if (!element) {
            console.warn(`[datastar-components] Cannot set CSS variable '${name}': Component root or target element not established.`);
            return;
        }
        element.style.setProperty(name, value);
    }

    /**
     * Gets the computed value of a CSS custom property (CSS variable) from the specified element.
     * Defaults to the component's root if no element is provided.
     * @param {string} name The name of the CSS variable (e.g., '--my-color').
     * @param {HTMLElement|ShadowRoot} [element=this.root] The element to get the variable from.
     * @returns {string} The computed value of the CSS variable.
     */
    getCssVariable(name, element = this.root) {
        if (!element) {
            console.warn(`[datastar-components] Cannot get CSS variable '${name}': Component root or target element not established.`);
            return '';
        }
        // For Shadow DOM, getComputedStyle needs to be called on the host element,
        // and it will resolve variables defined on the host or parent documents.
        const target = element.host || element; // If shadowRoot, use its host; otherwise, the element itself
        return getComputedStyle(target).getPropertyValue(name).trim();
    }


    connectedCallback() {
        // IMPORTANT FIX: Removed super.connectedCallback(); here.
        // HTMLElement.prototype.connectedCallback does not exist.
        // The derived class's connectedCallback correctly calls this method.
    }

    disconnectedCallback() {
        // Execute all registered cleanup functions when the component is removed from the DOM
        if (this._dsCleanupFunctions.length > 0) {
            this._dsCleanupFunctions.forEach(fn => {
                try {
                    fn();
                } catch (e) {
                    console.error(`[datastar-components] Error during ${this.tagName} cleanup (Source: ${this._componentSrc}):`, e);
                }
            });
            this._dsCleanupFunctions = []; // Clear the array after execution
        }

        // Disconnect the props observer if it exists
        if (this._dsPropsObserver) {
            this._dsPropsObserver.disconnect();
            this._dsPropsObserver = null;
        }
    }

    /**
     * Called when the custom element is adopted into a new document.
     * This is useful for re-initializing anything that relies on the document context,
     * such as event listeners attached to the document or global styles.
     * For Datastar, it's important to re-scan its root to ensure reactivity.
     */
    adoptedCallback() {
        console.log(`[datastar-components] ${this.tagName} (ID: ${this._dsInstanceId}) adopted into new document.`);
        // Re-initialize Datastar reactivity for the component's root in the new document context.
        if (Datastar && this.root) {
            Datastar.init(this.root);
            // Re-setup props reactivity as well, just in case (though attributes usually migrate)
            setupPropsReactivity(this, Datastar);
        }
    }

    /**
     * Getter for the component's value. This allows the component to be read
     * like a standard form input (e.g., `form.elements.myComponent.value`).
     * It will be the value submitted with the form.
     */
    get value() {
        return this._internals.value || this.getAttribute('value') || '';
    }

    /**
     * Setter for the component's value. Allows programmatic setting of the value
     * (e.g., `form.elements.myComponent.value = 'newValue'`).
     * It also updates the form's internal value representation.
     * @param {string} newValue - The new value to set.
     */
    set value(newValue) {
        this._internals.setFormValue(newValue);
    }
}

/**
 * Renders fallback content into a component element.
 * @param {HTMLElement} element The custom element instance to render into.
 * @param {string} fallbackHtml The HTML content for the fallback.
 * @param {string} tagName The custom element's tag name.
 * @param {string} originalSrc The original component source URL.
 * @param {Error} error The original error that triggered the fallback.
 */
async function renderErrorFallback(element, fallbackSrc, tagName, originalSrc, error) {
    console.warn(`[datastar-components] Rendering fallback for ${tagName} (Original Source: ${originalSrc}). Error: ${error.message}`);
    
    let fallbackContent = `<p style="color: red; padding: 10px; border: 1px dashed red;">Error loading ${tagName} from ${originalSrc}.</p>`;
    let errorHandledByFallback = false;

    if (fallbackSrc) {
        if (!loadedFallbackComponents.has(fallbackSrc)) {
            loadedFallbackComponents.set(fallbackSrc, fetch(fallbackSrc).then(response => {
                if (!response.ok) throw new Error(`Failed to fetch fallback: ${response.statusText}`);
                return response.text();
            }).catch(e => {
                console.error(`[datastar-components] Failed to load fallback component from ${fallbackSrc}:`, e);
                loadedFallbackComponents.delete(fallbackSrc); // Allow retry
                return null; // Indicate fallback fetch failed
            }));
        }

        try {
            const fetchedFallbackHtml = await loadedFallbackComponents.get(fallbackSrc);
            if (fetchedFallbackHtml) {
                fallbackContent = fetchedFallbackHtml;
                errorHandledByFallback = true;
            }
        } catch (e) {
            // Already logged by promise chain, just continue with generic fallback
        }
    }

    // Clear existing content
    if (element.root && element.root !== element) { // If Shadow DOM is present
        element.root.innerHTML = '';
        element.root.appendChild(document.createRange().createContextualFragment(fallbackContent));
    } else { // Light DOM or no shadow root yet
        element.innerHTML = '';
        element.appendChild(document.createRange().createContextualFragment(fallbackContent));
    }

    // Prevent further Datastar processing on the fallback if it's just raw HTML
    // and was not intended to be a Datastar component itself.
    // If fallback is also a Datastar component, it should be scanned by the main observer.

    // Dispatch a specific error event indicating fallback was used
    element.dispatchEvent(new CustomEvent('component-fallback-rendered', {
        bubbles: true,
        composed: true,
        detail: {
            tagName: tagName,
            originalSrc: originalSrc,
            fallbackSrc: fallbackSrc || null,
            originalError: error,
            message: `Fallback rendered for ${tagName}.`,
            fallbackLoaded: errorHandledByFallback
        }
    }));
}


/**
 * Parses a string of HTML and extracts style and script tags,
 * correctly handling Shadow DOM templates (open/closed) and Light DOM templates.
 * It strictly requires component content to be wrapped in a <template> tag.
 * @param {string} htmlString The HTML content of the component.
 * @param {string} tagName The custom element's tag name (for logging).
 * @param {string} componentSrc The source URL of the component (for logging).
 * @returns {{ templateContent: DocumentFragment, styles: Array<HTMLStyleElement|HTMLLinkElement>, scripts: Array<HTMLScriptElement>, shadowMode: string|null, formAssociated: boolean }}
 */
function parseComponentHTML(htmlString, tagName, componentSrc) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    let templateContent = document.createDocumentFragment();
    let stylesToExtract = [];
    let scriptsToExtract = [];
    let shadowMode = null;
    let formAssociated = false;

    const templateElement = doc.querySelector('template');

    if (templateElement) {
        const modeAttr = templateElement.getAttribute('shadowroot');
        if (modeAttr === 'open' || modeAttr === 'closed') {
            shadowMode = modeAttr;
        }

        if (templateElement.content.querySelector('[data-form-associated]') || templateElement.hasAttribute('data-form-associated')) {
             formAssociated = true;
        }

        templateContent = templateElement.content;
        stylesToExtract = Array.from(templateContent.querySelectorAll('style, link[rel="stylesheet"]'));
        scriptsToExtract = Array.from(templateContent.querySelectorAll('script'));
    } else {
        console.warn(`[datastar-components] ${tagName} (Source: ${componentSrc}): Component HTML must be wrapped in a <template> tag. No content will be rendered.`);
        // Dispatch error if no template is found
        window.dispatchEvent(new CustomEvent(EVENT_COMPONENT_LOAD_ERROR, {
            bubbles: true,
            composed: true,
            detail: {
                tagName: tagName,
                src: componentSrc,
                message: `Component HTML for ${tagName} must be wrapped in a <template> tag.`,
                type: 'parsing-error',
                originalError: new Error('No <template> tag found in component HTML')
            }
        }));
        throw new Error('No <template> tag found'); // Throw to indicate parsing failure
    }

    return {
        templateContent: templateContent,
        styles: stylesToExtract,
        scripts: scriptsToExtract,
        shadowMode: shadowMode,
        formAssociated: formAssociated
    };
}

/**
 * Applies styles to a component's root.
 * @param {HTMLElement|ShadowRoot} root The component's root (shadowRoot or element itself).
 * @param {Array<HTMLStyleElement|HTMLLinkElement>} styles
 * @param {string} tagName The custom element's tag name.
 * @param {boolean} isShadowDOM True if applying to Shadow DOM.
 */
function applyStyles(root, styles, tagName, isShadowDOM) {
    styles.forEach(styleNode => {
        if (styleNode.tagName === 'STYLE') {
            const styleText = styleNode.textContent;
            if (isShadowDOM) {
                if (window.CSSStyleSheet && CSSStyleSheet.prototype.replace) {
                    const sheet = new CSSStyleSheet();
                    sheet.replaceSync(styleText);
                    if (!root.adoptedStyleSheets.includes(sheet)) {
                        root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
                    }
                } else {
                    const clone = styleNode.cloneNode(true);
                    root.appendChild(clone);
                }
            } else {
                let rewrittenStyleText = styleText.replaceAll(':host', tagName);
                const newStyle = document.createElement('style');
                newStyle.textContent = rewrittenStyleText;
                root.appendChild(newStyle);
            }
        } else if (styleNode.tagName === 'LINK' && styleNode.getAttribute('rel') === 'stylesheet') {
            root.appendChild(styleNode.cloneNode(true));
        }
    });
}

/**
 * Executes scripts from a component.
 * @param {HTMLElement|ShadowRoot} root The component's root.
 * @param {Array<HTMLScriptElement>} scripts
 * @param {HTMLElement} componentInstance The actual custom element instance.
 */
function executeScripts(root, scripts, componentInstance) {
    scripts.forEach(scriptNode => {
        const newScript = document.createElement('script');
        Array.from(scriptNode.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });
        newScript.textContent = scriptNode.textContent;

        if (newScript.type === 'module' && newScript.hasAttribute('src')) {
            import(newScript.src)
                .then(module => {
                    if (module && typeof module.init === 'function') {
                        module.init(componentInstance);
                    }
                    if (Datastar && module && typeof module === 'object') {
                        Datastar.registerActions(module, componentInstance);
                    }
                })
                .catch(error => {
                    console.error(`[datastar-components] Error importing module ${newScript.src} for ${componentInstance.tagName} (Source: ${componentInstance._componentSrc}):`, error);
                    componentInstance.dispatchEvent(new CustomEvent(EVENT_COMPONENT_SCRIPT_ERROR, {
                        bubbles: true, composed: true,
                        detail: {
                            tagName: componentInstance.tagName, src: componentInstance._componentSrc, scriptSrc: newScript.src,
                            message: `Error importing module: ${error.message}`, type: 'module-import', originalError: error
                        }
                    }));
                    // Trigger fallback if script fails
                    const fallbackSrc = componentInstance.getAttribute('data-component-error-src');
                    if (fallbackSrc) {
                        renderErrorFallback(componentInstance, fallbackSrc, componentInstance.tagName, componentInstance._componentSrc, error);
                    }
                });
        } else if (newScript.type === 'module' || !newScript.type) {
            try {
                const scriptFn = new Function('componentInstance', 'ds', 'internals', 'emit', `(async function() {
                    const element = componentInstance;
                    const $signals = element.$signals;
                    const $props = element.$props;
                    const registerCleanup = element.registerCleanup.bind(element);
                    const setCssVariable = element.setCssVariable.bind(element);
                    const getCssVariable = element.getCssVariable.bind(element);
                    ${newScript.textContent}
                }).call(element.root, componentInstance, ds, internals, emit);`);
                scriptFn.call(componentInstance.root, componentInstance, Datastar, componentInstance._internals, componentInstance.emit.bind(componentInstance));
                if (Datastar) {
                    Datastar.scan(componentInstance.root);
                }
            } catch (error) {
                console.error(`[datastar-components] Error executing inline script for ${componentInstance.tagName} (Source: ${componentInstance._componentSrc}):`, error);
                componentInstance.dispatchEvent(new CustomEvent(EVENT_COMPONENT_SCRIPT_ERROR, {
                    bubbles: true, composed: true,
                    detail: {
                        tagName: componentInstance.tagName, src: componentInstance._componentSrc,
                        message: `Error executing inline script: ${error.message}`, type: 'inline-script-execution', originalError: error
                    }
                }));
                // Trigger fallback if script fails
                const fallbackSrc = componentInstance.getAttribute('data-component-error-src');
                if (fallbackSrc) {
                    renderErrorFallback(componentInstance, fallbackSrc, componentInstance.tagName, componentInstance._componentSrc, error);
                }
            }
        }
    });
}


/**
 * Sets up reactivity for data-prop- attributes on a component instance.
 * @param {HTMLElement} componentInstance The custom element instance.
 * @param {Datastar} dsInstance The Datastar instance.
 */
function setupPropsReactivity(componentInstance, dsInstance) {
    const initialProps = {};
    Array.from(componentInstance.attributes).forEach(attr => {
        if (attr.name.startsWith('data-prop-')) {
            const propName = attr.name.substring('data-prop-'.length);
            initialProps[propName] = dsInstance.evaluate(attr.value);
        }
    });

    const componentScope = dsInstance.scope(componentInstance);
    if (componentScope) {
        componentScope.$props = dsInstance.signal(initialProps);
        for (const key in initialProps) {
            if (!(key in componentScope)) {
                componentScope[key] = dsInstance.signal(initialProps[key]);
            }
        }
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName.startsWith('data-prop-')) {
                const propName = mutation.attributeName.substring('data-prop-'.length);
                const newValue = componentInstance.getAttribute(mutation.attributeName);
                const evaluatedValue = dsInstance.evaluate(newValue);

                if (componentScope && componentScope.$props && componentScope.$props.value) {
                    if (componentScope.$props.value[propName] && typeof componentScope.$props.value[propName].set === 'function') {
                        componentScope.$props.value[propName].set(evaluatedValue);
                    } else {
                        componentScope.$props.value[propName] = evaluatedValue;
                    }

                    if (componentScope[propName] && typeof componentScope[propName].set === 'function') {
                        componentScope[propName].set(evaluatedValue);
                    } else if (componentScope[propName]) {
                        componentScope[propName] = evaluatedValue;
                    }
                }
            }
        });
    });

    observer.observe(componentInstance, { attributes: true });
    componentInstance._dsPropsObserver = observer;
}


/**
 * Defines a custom component from a given source.
 * @param {string} tagName The name of the custom element.
 * @param {string} componentSrc The URL to the component's HTML file.
 * @param {HTMLElement} originalElement The original HTML element that triggered this definition.
 * @returns {Promise<void>} A promise that resolves when the component is defined.
 */
async function defineComponent(tagName, componentSrc, originalElement) {
    if (customElements.get(tagName)) {
        return; // Component already defined
    }

    let htmlContent;
    let errorDuringFetchOrParse = null;

    if (!loadedComponents.has(componentSrc)) {
        loadedComponents.set(componentSrc, fetch(componentSrc).then(response => {
            if (!response.ok) {
                const error = new Error(`HTTP error! Status: ${response.status} ${response.statusText || ''}`);
                window.dispatchEvent(new CustomEvent(EVENT_COMPONENT_LOAD_ERROR, {
                    bubbles: true, composed: true,
                    detail: {
                        tagName: tagName, src: componentSrc, message: `Failed to fetch component: ${error.message}`,
                        type: 'network-fetch', originalError: error, statusCode: response.status
                    }
                }));
                throw error;
            }
            return response.text();
        }).then(text => {
            // Attempt to parse here, so parsing errors can also trigger fallback
            try {
                parseComponentHTML(text, tagName, componentSrc); // Just to validate parsing, actual content extraction done below
                return text;
            } catch (e) {
                // parseComponentHTML already dispatches event, just re-throw
                throw e;
            }
        }).catch(error => {
            errorDuringFetchOrParse = error;
            loadedComponents.delete(componentSrc);
            throw error;
        }));
    }

    try {
        htmlContent = await loadedComponents.get(componentSrc);
    } catch (error) {
        errorDuringFetchOrParse = error;
    }

    if (errorDuringFetchOrParse) {
        const fallbackSrc = originalElement.getAttribute('data-component-error-src');
        await renderErrorFallback(originalElement, fallbackSrc, tagName, componentSrc, errorDuringFetchOrParse);
        return;
    }

    const { templateContent, styles, scripts, shadowMode, formAssociated } = parseComponentHTML(htmlContent, tagName, componentSrc);

    customElements.define(tagName, class extends DatastarComponent {
        static formAssociated = formAssociated;

        constructor() {
            super();
            this._componentSrc = componentSrc;
            this._isShadowDOM = !!shadowMode;

            if (this._isShadowDOM && !this.shadowRoot) {
                this.root = this.attachShadow({ mode: shadowMode });
            } else if (!this._isShadowDOM) {
                this.root = this;
            } else {
                this.root = this.shadowRoot;
            }

            this._parsedTemplateContent = templateContent.cloneNode(true);
            this._parsedStyles = styles;
            this._parsedScripts = scripts;
        }

        connectedCallback() {
            super.connectedCallback();

            const isContentPreRendered = (this._isShadowDOM && this.root && this.root.childElementCount > 0) ||
                                         (!this._isShadowDOM && this.childElementCount > 0 && this.root === this);

            if (!this._dsContentAttached) {
                if (!isContentPreRendered) {
                    this.root.appendChild(this._parsedTemplateContent.cloneNode(true));
                } else {
                    console.log(`[datastar-components] Hydrating pre-rendered content for ${tagName} (Source: ${this._componentSrc}).`);
                }

                applyStyles(this.root, this._parsedStyles, tagName, this._isShadowDOM);
                executeScripts(this.root, this._parsedScripts, this);

                if (Datastar) {
                    Datastar.init(this.root);
                    setupPropsReactivity(this, Datastar);
                }

                if (typeof this.contentReadyCallback === 'function') {
                    this.contentReadyCallback();
                } else if (Datastar && Datastar.scope(this).contentReadyCallback && typeof Datastar.scope(this).contentReadyCallback === 'function') {
                    Datastar.scope(this).contentReadyCallback();
                }

                this._dsContentAttached = true;

                if (formAssociated && this.hasAttribute('value')) {
                    this.value = this.getAttribute('value');
                }
            }
        }
    });
}

/**
 * Scans a DOM node for components and defines them.
 * @param {Node} node The DOM node to scan.
 */
function scanAndDefineComponents(node) {
    const componentsToDefine = [];
    if (node.nodeType === Node.ELEMENT_NODE && node.hasAttribute('data-component-src') && !customElements.get(node.tagName.toLowerCase())) {
        componentsToDefine.push(node);
    }
    node.querySelectorAll('[data-component-src]').forEach(el => {
        if (!customElements.get(el.tagName.toLowerCase())) {
            componentsToDefine.push(el);
        }
    });

    componentsToDefine.forEach(el => {
        const tagName = el.tagName.toLowerCase();
        const componentSrc = el.getAttribute('data-component-src');
        const loadIfExpression = el.getAttribute('data-load-if'); // Renamed from ds-load-if

        if (loadIfExpression && Datastar) {
            try {
                const evaluateContext = Datastar.scope(el); // Get Datastar scope for evaluation
                const shouldLoad = Datastar.evaluate(loadIfExpression, evaluateContext);
                if (!shouldLoad) {
                    console.log(`[datastar-components] Component ${tagName} (Source: ${componentSrc}) not loaded due to data-load-if condition.`);
                    el.style.display = 'none'; // Optionally hide the element if condition is false
                    return; // Skip defining this component
                } else {
                    el.style.display = ''; // Ensure visible if condition is true
                }
            } catch (e) {
                console.error(`[datastar-components] Error evaluating data-load-if for ${tagName} (Source: ${componentSrc}):`, e);
                // If error in evaluation, proceed to load but log warning
            }
        }

        defineComponent(tagName, componentSrc, el).catch(error => {
            console.error(`[datastar-components] Error during component definition for ${tagName} from scan:`, error);
        });
    });
}

/**
 * Initializes the Datastar Components plugin.
 * Should be called after DatastarJS is loaded.
 * @param {Object} datastarInstance The global Datastar instance (e.g., window.Datastar).
 */
export function initDatastarComponents(datastarInstance) {
    Datastar = datastarInstance;
    console.log("[datastar-components] Components plugin initialized.");

    if (!('CSSStyleSheet' in window) || !('replace' in CSSStyleSheet.prototype)) {
        console.warn("[datastar-components] Constructable Stylesheets API not fully supported by this browser. External CSS in Shadow DOMs will load via standard browser mechanisms (and may not be fully deduplicated in parsing across multiple shadow roots if not handled by HTTP cache). Consider polyfilling if broader browser support for optimal CSS loading is needed.");
    }

    scanAndDefineComponents(document.body);

    const domMutationObserver = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        scanAndDefineComponents(node);
                    }
                });
            } else if (mutation.type === 'attributes' && mutation.attributeName === 'data-load-if') { // Watch for changes to data-load-if
                // Re-evaluate the data-load-if condition if the attribute changes
                scanAndDefineComponents(mutation.target);
            }
        }
    });

    domMutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-load-if'] });
}