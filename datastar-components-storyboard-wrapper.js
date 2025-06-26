// storybook-datastar-component-wrapper.js
// A LitElement wrapper to simplify creating Storybook stories for Datastar Components.
// This component dynamically generates the appropriate data-* attributes
// for Datastar components based on LitElement properties.

import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('storybook-datastar-component-wrapper')
export class StorybookDatastarComponentWrapper extends LitElement {
  /**
   * The URL to the Datastar Component's HTML source file.
   * This directly maps to the `data-component-src` attribute.
   * @type {string}
   */
  @property({ type: String })
  src = '';

  /**
   * An object where keys are prop names (camelCase) and values are the prop values.
   * These are converted to `data-component-prop-*` attributes on the rendered component.
   * @type {Object.<string, any>}
   */
  @property({ type: Object })
  props = {};

  /**
   * An object representing initial Datastar signals for the component's internal scope.
   * These are converted to a single `data-signals` attribute on the rendered component.
   * @type {Object.<string, any>}
   */
  @property({ type: Object })
  signals = {};

  /**
   * A boolean to control whether the `data-component-load-if` attribute is applied,
   * simulating conditional loading.
   * @type {boolean}
   */
  @property({ type: Boolean })
  loadIf = true;

  /**
   * The HTML content to be slotted into the wrapped component.
   * @type {TemplateResult}
   */
  @property({ type: Object })
  slotContent = html``;

  render() {
    // Determine the custom element tag name from the src.
    // Assumes src format like '/components/my-component.html' -> 'my-component'
    const tagNameMatch = this.src.match(/\/([a-zA-Z0-9-]+)\.html$/);
    const componentTagName = tagNameMatch ? tagNameMatch[1] : 'unknown-component';

    // Dynamically create data-component-prop-* attributes
    const propAttributes = Object.entries(this.props).map(([propName, propValue]) => {
      // Ensure propName is kebab-case for HTML attributes
      const kebabCasePropName = propName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
      // Use Lit's property binding for complex values, or stringify for simple ones
      return html`data-component-prop-${kebabCasePropName}="${propValue}"`;
    });

    // Dynamically create data-signals attribute
    // Datastar expects a single data-signals attribute with a JSON object.
    const signalsJson = JSON.stringify(this.signals);
    // Only include the data-signals attribute if there are actual signals to set
    const signalAttribute = signalsJson !== '{}' ? html`data-signals='${signalsJson}'` : html``;


    // Create a ref for the actual component instance to listen to custom events
    const componentRef = `component-${Math.random().toString(36).substr(2, 9)}`;

    // Generate event listeners for custom events by mapping 'on*' props
    // This is for Storybook actions, which are standard JS event listeners.
    // Note: This part ensures Storybook's 'action' addon can capture events
    // emitted by the Datastar component.
    const eventListeners = Object.entries(this.args || {}).map(([argName, argValue]) => {
      if (argName.startsWith('on') && typeof argValue === 'function') {
        const eventName = argName.substring(2).toLowerCase(); // e.g., 'onEditProfile' -> 'editprofile'
        return html`@${eventName}="${(e) => argValue(e.detail)}"`;
      }
      return html``;
    });


    // Construct the actual Datastar component tag as a string for innerHTML.
    // This is necessary because Lit's html`` doesn't directly support Datastar's dynamic
    // loading behavior for custom elements using data-component-src.
    const componentHtmlString = `<${componentTagName}
      data-component-src="${this.src}"
      ${propAttributes.map(attr => attr.strings.join('')).join(' ')}
      ${signalAttribute}
      ${this.loadIf ? `data-component-load-if="true"` : ''}
      id="${componentRef}"
      data-component-connected="${(e) => { // Renamed from data-on:connected
        // Attach any Storybook actions here after the component is connected.
        // This is a workaround since @event attributes on dynamic custom elements via html`` might not work as expected
        // if not directly registered by Datastar.
        // For Datastar actions, ensure they are registered globally or on the component scope.
        // For Storybook actions (like `action('eventName')`), we manually attach.
        Object.entries(this.args || {}).forEach(([argName, argValue]) => {
          if (argName.startsWith('on') && typeof argValue === 'function') {
            const eventName = argName.substring(2).toLowerCase();
            e.target.addEventListener(eventName, (event) => {
              argValue(event.detail); // Pass the detail to Storybook action
            });
          }
        });
      }}"
      data-component-disconnected="${(e) => { // Added data-component-disconnected for consistency
        // Perform any Storybook-specific cleanup or logging when component is disconnected
        // This part is less critical for general functionality but good for mirroring lifecycle.
        console.log(`Storybook Wrapper: ${componentTagName} (ID: ${componentRef}) disconnected.`);
        // If there were any cleanup for Storybook-specific mock services or listeners
        // attached *outside* the component's own lifecycle, they would go here.
      }}"
    >
      ${this.slotContent.strings.join('')}
    </${componentTagName}>`;

    return html`<div .innerHTML="${componentHtmlString}"></div>`;
  }

  // Storybook args are passed as properties, but to make event handling more robust,
  // we can also grab them explicitly if needed for manual event listener attachment.
  @property({ type: Object })
  args = {};
}
