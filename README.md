**🚀🌐 Datastar Components Plugin 🌐🚀**
========================================

**HTML-First Web Components with DatastarJS Reactivity, Simplified.**

The datastar-components plugin empowers you to build reusable, reactive Web Components using the simplicity and power of HTML-first development. It seamlessly integrates with Datastar, automatically handling the complexities of Shadow DOM, CSS scoping, and comprehensive JavaScript execution, making component development a breeze.

**✨ Key Features**
------------------

*   **HTML-First Component Definition:** Define your components using intuitive HTML templates, supporting both Light DOM and Shadow DOM for flexible encapsulation.
    
*   [**Seamless DatastarJS Integration**](#): Full reactivity with DatastarJS signals and actions directly within your components.
    
*   [**Smart CSS Management**](#): Efficiently handles component-specific styles using Constructable Stylesheets for Shadow DOM and intelligent rewriting for Light DOM.
    
*   [**Robust JavaScript Execution**](#): Execute all types of \<script> tags (module, classic, external, inline) sequentially and reliably within your component's scope.
    
*   [**Reactive Prop System**](#): Pass dynamic data from parent to child components using `data-prop-*` attributes with automatic reactivity.
    
*   [**Standard Slot Support**](#): Easily project content into designated areas of your components using native <slot> elements.
    
*   [**Advanced Error Handling & Fallback UI**](#): Provides detailed error reporting and allows for defining fallback HTML snippets to render if components fail to load or initialize.
    
*   [**Native Form Integration (Form-Associated Custom Elements)**](#): Integrate your custom components directly into native HTML forms for submission and validation.
    
*   [**Enhanced Lifecycle Management (incl. Cleanup & Adoption)**](#): Offers reliable lifecycle hooks including disconnectedCallback for resource cleanup and adoptedCallback for document transitions.
    
*   [**Dynamic Theming with CSS Variables**](#): Utilities for setting and getting CSS Custom Properties to streamline component-specific and application-wide theming.
    
*   [**Optimized Performance**](#): Features like conditional loading, intelligent caching, and efficient DOM scanning ensure your application remains fast and responsive.
    
*   [**SSR & Hydration Readiness**](#): Automatically detects server-rendered content and hydrates it, providing fast initial loads and seamless interactivity.
    

**📙 Table of Contents**
------------------------

#### [**📦 Installation & Setup**](#-installation--setup-1)
    
*   [Step 1 - Include the Libraries](#step-1---include-the-libraries-)
        
*   [Step 2 - Set Up Your Development Server](#step-2---set-up-your-development-server-)
        
#### [**👷‍♂️ Creating Your First Component**](#%EF%B8%8F-creating-your-first-components)
    
*   [Seamless DatastarJS Integration](#seamless-datastarjs-integration-)
        
*   [1st Component - Light DOM](#1st-component---light-dom-my-light-counterhtml-)
        
*   [2nd Component - Shadow DOM (Open)](#2nd-component---shadow-dom-open--my-shadow-open-counterhtml-)
        
*   [3rd Component - Shadow DOM (Closed)](#3rd-component---shadow-dom-closed-my-shadow-closed-counterhtml-)
        
*   [Using Your Components in index.html](#using-your-components-in-indexhtml-)
        
#### [**📐 Functionality & Capabilities**](#-functionality--capabilities-1)
    
*   [Template Usage](#template-usage-defining-your-component-structure-)
        
*   [Styles (CSS) Management](#styles-css-management-)
        
*   [JavaScript Execution](#javascript-execution-seamlessly-dynamic-)
        
*   [Props: Passing Data Down](#props-passing-data-down-)
        
*   [Slots: Projecting Content](#slots-projecting-content-)
        
*   [Scoped IDs for Accessibility and Internal Linking](#scoped-ids-for-accessibility-and-internal-linking-thisgeneratescopedid-)

*   [Conditional Component Loading (data-load-if)](#conditional-component-loading-data-load-if-)
  
*   [Form Association (Form-Associated Custom Elements)](#form-association-form-associated-custom-elements-)
        
*   [Composing Components](#composing-components-)
        
#### [**⚡ Performance & Optimizations**](#-performance--optimizations-1)

*   [Optimized Network Requests](#optimized-network-requests--)

*   [Efficient DOM Scanning](#efficient-dom-scanning--)

*   [Native Caching](#native-caching--)

*   [Enhanced Theming and CSS Variable Management](#enhanced-theming-and-css-variable-management-)

*   [Advanced Error Handling (Fallback UI & Recovery)](#advanced-error-handling-fallback-ui--recovery-)

*   [Adopted Callback Integration](#adopted-callback-integration-)

*   [Content Ready Lifecycle Hook](#content-ready-lifecycle-hook-contentreadycallback-)

*   [Opinionated Lifecycle Integration for Cleanup](#opinionated-lifecycle-integration-for-cleanup--)

#### [**💧 Server-Side Rendering (SSR) & Hydration Readiness**](#-server-side-rendering-ssr--hydration-readiness-1)

*   [Automatic Hydration Detection](#automatic-hydration-detection-)

*   [Preventing FOUC & Performance](#preventing-fouc--performance-)

*   [Seamless Transition](#seamless-transition-)

*   [Handling Hydration of Slot Content](#handling-hydration-of-slot-content-)

*   [Hydration Benefits](#hydration-benefits-)
    
#### [**📚 Integration with Third-Party Libraries**](#-integration-with-third-party-libraries-1)

*   [Key Principles](#key-principles-)

*   [Example 1: Charting Library (Recharts-like)](#example-1-charting-library-recharts-like-)

*   [Example 2: Simple Markdown Editor (Conceptual)](#example-2-simple-markdown-editor-conceptual-)
    
#### [**📖 Integrating with Documentation Tools (e.g., Storybook)**](#-integrating-with-documentation-tools-eg-storybook-1)

*   [Key Steps for Storybook Integration](#key-steps-for-storybook-integration)

*   [Step 1 - Storybook Setup](#step-1---storybook-setup-)

*   [Step 2 - Creating Stories for Datastar Components](#step-2---creating-stories-for-datastar-components-)

*   [Benefits of Integration Pattern](#benefits-of-integration-pattern-)

#### [**🤝 Community Engagement**](#-community-engagement-1)

*   [Our Contributions](#our-contribution-)

*   [Feedback & Support](#feedback--support-)

*   [Acknowledgments](#acknowledgments-)


<br>

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>
    

📦 **Installation & Setup**
-----------------------------

To get started with the datastar-components plugin, follow these steps to set up your environment and create your first components.

### Step 1 - Include the Libraries [↑](#-installation--setup)

Ensure datastar.js is loaded **before** datastar-components.js. It's recommended to load them as ES Modules.

```html
<!DOCTYPE html>  
    <html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>My Datastar Components App</title>

    <script type="module" src="https://cdn.jsdelivr.net/npm/datastar@1.0.0-beta.11/dist/datastar.js"></script>  

    <script type="module" defer>  
        // Import the initialization function from your plugin  
        import { initDatastarComponents } from './path/to/datastar-components.js';

        // Initialize the plugin once the DOM is ready  
        document.addEventListener('DOMContentLoaded', () => {  
            initDatastarComponents(window.Datastar);  
            console.log("Datastar Components Plugin is ready! 🎉");  
        });

        // Example of listening for component errors for centralized reporting  
        window.addEventListener('component-load-error', (event) => {  
            console.error('Caught component load error:', event.detail);  
            // Example: send to an analytics service or display a user-friendly message  
            alert(`Component Load Error: ${event.detail.tagName} from ${event.detail.src} - ${event.detail.message}`);  
        });

        window.addEventListener('component-script-error', (event) => {  
            console.error('Caught component script error:', event.detail);  
            // Example: log the error and component context  
            alert(`Component Script Error in ${event.detail.tagName}: ${event.detail.error.message}`);  
        });  

        // Example of listening for fallback rendering
        window.addEventListener('component-fallback-rendered', (event) => {
            console.warn('Caught component fallback rendered:', event.detail);
            // You might log this to a monitoring system or visually indicate a degraded state.
        });
    </script>

    <style>  
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 20px; background-color: #f0f2f5; color: #333; }  
        .app-container { max-width: 960px; margin: 40px auto; padding: 30px; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }  
        h1, h2 { color: #007bff; }  
        button {  
            padding: 10px 20px;  
            background-color: #007bff;  
            color: white;  
            border: none;  
            border-radius: 6px;  
            cursor: pointer;  
            font-size: 1em;  
            transition: background-color 0.2s ease;  
        }  
        button:hover { background-color: #0056b3; }  
    </style>  
</head>  
<body>  
    <div class="app-container">  
        <h1>Welcome to Your Datastar Components App!</h1>  
        <div> 
</body>  
</html>
```

### Step 2 - Set Up Your Development Server [↑](#-installation--setup)

You'll need a simple web server to serve your component HTML files. Here’s a quick setup using Deno or Node.js with Express.

*   **Deno (server.ts)**:
    
    ```typescript
    import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";  
    import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
    
    const PORT = 8000;
    
    serve((req) => {  
        // Serves files from the current directory (or a specified 'public' folder)  
        return serveDir(req, {  
            fsRoot: "./", // Set this to your project's root or a dedicated 'public' folder  
            urlRoot: ""  
        });  
    }, { port: PORT });
    
    console.log(`Server running on http://localhost:${PORT}`);
    ```
        
        
    
*   **Run Deno Server**: Open your terminal in the directory where server.ts is saved and run:
    
    ```bash
    deno run --allow-net --allow-read server.ts
    ```
        
        
    
    Now, your index.html and component .html files can be accessed via http://localhost:8000/.
    
*   **Node.js with Express (server.js)**:
    
    1.  **Initialize npm and install Express**:
        
        ```bash
        npm init -y  
        npm install express
        ```
            
            
        
    2.  **Create server.js**:
        
        ```javascript
        const express = require('express');  
        const path = require('path');  
        const app = express();  
        const PORT = process.env.PORT || 3000;
        
        // Serve static files from the root of your project  
        // If your HTML/component files are in a 'public' folder, use:  
        // app.use(express.static(path.join(__dirname, 'public')));  
        app.use(express.static(__dirname)); 
        
        app.listen(PORT, () => {  
            console.log(`Server is running on http://localhost:${PORT}`);  
        });
        ```
            
            
        
    3.  **Run Node.js Server**:
        
        ```bash
        node server.js
        ```       
    
    Your index.html and component .html files can be accessed via http://localhost:3000/.

<br>

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>
    

**👷‍♂️ Creating Your First Components**
-------------------------------------

Let's create a few simple interactive components showcasing different template usages.

### Seamless DatastarJS Integration [↑](#%EF%B8%8F-creating-your-first-component)

The `datastar-components` plugin fundamentally integrates with DatastarJS by treating the HTML content of your components as a Datastar-enabled template. This means you can use all of Datastar's declarative attributes (e.g., `data-data`, `data-text`, `data-on`, `data-if`, `data-for`) directly within your component's HTML, without needing to manually initialize or bind Datastar within each component's JavaScript.

When a component is loaded and connected to the DOM, the plugin automatically performs a Datastar scan on the component's root (either its Shadow DOM or the component element itself in Light DOM). This scan discovers all `data-*` directives and brings them to life, creating reactive signals, binding event listeners, and managing DOM updates as specified. This "HTML-first" approach allows you to build highly interactive and dynamic components primarily with markup, reducing the need for imperative JavaScript.

Furthermore, any reactive `data-prop-*` attributes passed to your component from its parent are automatically converted into Datastar signals and made available within the component's scope via the `$props` object, ensuring seamless reactive data flow.

### 1st Component - Light DOM (my-light-counter.html) [↑](#%EF%B8%8F-creating-your-first-component)

This component will render its content directly into the main DOM. Its styles might be affected by global styles.

```html
<template>  
    <style>  
        /* Styles here can potentially leak or be affected by global CSS */  
        :host { /* This will be rewritten to `my-light-counter` */  
            display: inline-block;  
            background-color: #ffebe6;  
            border: 1px solid #ff9980;  
            padding: 15px 25px;  
            border-radius: 8px;  
            text-align: center;  
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);  
        }  
        .counter-display {  
            font-size: 2em;  
            font-weight: bold;  
            color: #cc3300;  
            margin-bottom: 15px;  
        }  
        .controls button {  
            margin: 0 5px;  
            background-color: #cc3300;  
        }  
        .controls button:hover {  
            background-color: #a32a00;  
        }  
    </style>

    <div data-data="{ count: 0 }">  
        <p>Light DOM Count: <span class="counter-display" data-text="count"></span></p>  
        <div class="controls">  
            <button data-on:click="count--">➖ Decrement</button>  
            <button data-on:click="count++">➕ Increment</button>  
        </div>  
    </div>  
</template>
```

### 2nd Component - Shadow DOM (Open)  (my-shadow-open-counter.html) [↑](#%EF%B8%8F-creating-your-first-component)

This component will create an "open" Shadow DOM, encapsulating its styles and DOM. Its internal DOM can be accessed from the outside via JavaScript.

```html
<template shadowroot="open">  
    <style>  
        /* Styles here are encapsulated within the Shadow DOM */  
        :host {  
            display: inline-block;  
            background-color: #e6f7ff;  
            border: 1px solid #91d5ff;  
            padding: 15px 25px;  
            border-radius: 8px;  
            text-align: center;  
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);  
        }  
        .counter-display {  
            font-size: 2em;  
            font-weight: bold;  
            color: #007bff;  
            margin-bottom: 15px;  
        }  
        .controls button {  
            margin: 0 5px;  
            background-color: #007bff;  
        }  
        .controls button:hover {  
            background-color: #0056b3;  
        }  
    </style>

    <div data-data="{ count: 0 }">  
        <p>Shadow (Open) Count: <span class="counter-display" data-text="count"></span></p>  
        <div class="controls">  
            <button data-on:click="count--">➖ Decrement</button>  
            <button data-on:click="count++">➕ Increment</button>  
        </div>  
    </div>  
</template>
```

### 3rd Component - Shadow DOM (Closed) (my-shadow-closed-counter.html) [↑](#%EF%B8%8F-creating-your-first-component)

This component will create a "closed" Shadow DOM, offering stronger encapsulation as its internal DOM is not directly accessible from outside JavaScript.

```html
<template shadowroot="closed">  
    <style>  
        /* Styles here are strictly encapsulated within the closed Shadow DOM */  
        :host {  
            display: inline-block;  
            background-color: #f0e6ff;  
            border: 1px solid #b366ff;  
            padding: 15px 25px;  
            border-radius: 8px;  
            text-align: center;  
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);  
        }  
        .counter-display {  
            font-size: 2em;  
            font-weight: bold;  
            color: #6600cc;  
            margin-bottom: 15px;  
        }  
        .controls button {  
            margin: 0 5px;  
            background-color: #6600cc;  
        }  
        .controls button:hover {  
            background-color: #4d0099;  
        }  
    </style>

    <div data-data="{ value: 'Secret Data' }">  
        <p>Value: <span>[hidden]</span></p>  
        <button data-on:click="console.log(value)">Try to Log</button>  
        <slot></slot>  
    </div>  
</template>
```

### Using Your Components in index.html [↑](#%EF%B8%8F-creating-your-first-component)

Now, reference your components using their HTML tags and the data-component-src attribute:

```html
<body>  
    <div class="app-container">  
        <h1>Welcome to Your Datastar Components App!</h1>  
            
        <h2>Light DOM Counter</h2>  
        <my-light-counter data-component-src="/components/my-light-counter.html"></my-light-counter>  
        <br><br>

        <h2>Shadow DOM (Open) Counter</h2>  
        <my-shadow-open-counter data-component-src="/components/my-shadow-open-counter.html"></my-shadow-open-counter>  
        <br><br>

        <h2>Shadow DOM (Closed) Counter</h2>  
        <my-shadow-closed-counter data-component-src="/components/my-shadow-closed-counter.html"></my-shadow-closed-counter>  
            
    </div>

    <script type="module">  
        import { initDatastarComponents } from '/path/to/datastar-components.js'; // Adjust path  
        document.addEventListener('DOMContentLoaded', () => {  
            initDatastarComponents(window.Datastar);  
        });  
    </script>  
</body>  
</html>
```

<br>

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>


**📐 Functionality & Capabilities**
-------------------------------------------

The `datastar-components` plugin intelligently parses your component's HTML template file and handles various aspects to create a fully functional Custom Element. Below are features used to facilitate easy development and examples on how to use them effectively.

### Template Usage: Defining Your Component Structure [↑](#-functionality--capabilities)

All component content **must** be wrapped within a tag. The type of template determines how your component's DOM and styles are managed.

*   **Basic (Light DOM):** Use a plain tag when you want your component's content to be rendered directly into the parent's DOM tree. Styles defined within this template may be affected by or affect global CSS. The plugin will rewrite :host selectors to your custom element's tag name to help with basic scoping.
    
    ```html
    <template>  
        <style>  
            /* This will be rewritten to `my-light-dom-component` */  
            :host {  
                color: blue;  
                padding: 10px;  
                border: 1px dashed blue;  
            }  
            p {  
                margin: 0;  
            }  
        </style>  
        <div data-data="{ message: 'Hello from Light DOM!' }">  
            <p data-text="message"></p>  
            <slot></slot>  
        </div>  
    </template>
    ```
        
    
    Usage:
    
    ```html
    <my-light-dom-component data-component-src="/components/my-light-dom-component.html">  
        <p>This content goes into the slot.</p>  
    </my-light-dom-component>
    ```
        
    
*   **(Shadow DOM - Open Mode):** This is the recommended approach for true encapsulation. Content within this template will be attached to an open Shadow DOM root, completely isolating its styles and DOM from the main document. "Open" means JavaScript outside the component can still access the Shadow DOM (e.g., componentElement.shadowRoot).
    
    ```html
    <template shadowroot="open">  
        <style>  
            /* Styles here are scoped to the Shadow DOM */  
            :host {  
                display: block;  
                background-color: #e6f7ff;  
                border: 1px solid #91d5ff;  
                padding: 20px;  
                border-radius: 5px;  
            }  
            h3 {  
                color: green;  
            }  
        </style>  
        <div data-data="{ count: 0 }">  
            <h3>Shadow DOM Counter (Open)</h3>  
            <p>Count: <span data-text="count"></span></p>  
            <button data-on:click="count++">Increment</button>  
            <slot></slot>  
        </div>  
    </template>
    ```
        
    
    Usage:
    
    ```html
    <my-shadow-open-component data-component-src="/components/my-shadow-open-counter.html">  
        <p>Content for open shadow slot.</p>  
    </my-shadow-open-component>
    ```
        
    
*   **(Shadow DOM - Closed Mode):** Similar to shadowroot="open" in terms of encapsulation, but the Shadow DOM root is "closed." This means JavaScript from the outside cannot directly access the component's internal DOM (e.g., componentElement.shadowRoot would return null). This provides a stronger encapsulation boundary.
    
    ```html
    <template shadowroot="closed">  
        <style>  
            /* Styles here are strictly encapsulated within the closed Shadow DOM */  
            :host {  
                display: inline-block;  
                background-color: #f0e6ff;  
                border: 1px solid #b366ff;  
                padding: 15px 25px;  
                border-radius: 8px;  
                text-align: center;  
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);  
            }  
            span {  
                font-weight: bold;  
                color: orange;  
            }  
        </style>
    
        <div data-data="{ value: 'Secret Data' }">  
            <p>Value: <span>[hidden]</span></p>  
            <button data-on:click="console.log(value)">Try to Log</button>  
            <slot></slot>  
        </div>
        ``` 
        
### Styles (CSS) Management [↑](#-functionality--capabilities)

The plugin provides smart CSS handling to ensure your components look consistent and perform well.

  * **\<style\> Tags**:
      * **Shadow DOM**: Automatically converts into efficient [**Constructable Stylesheets**](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet%23constructable_stylesheet_example)\*\*. This means styles are parsed once and reused across all instances of the same component, significantly boosting performance.
      * **Light DOM**: Styles are injected directly. The plugin intelligently rewrites :host selectors to your component's actual tag name (e.g., my-component), helping to scope styles and prevent accidental leaks into the parent document.
  * **\<link rel="stylesheet"\> Tags**:
      * External stylesheets are also handled and cached similarly to \<style\> tags, ensuring optimized loading.

### JavaScript Execution: Seamlessly Dynamic [↑](#-functionality--capabilities)

One of the most powerful features is the plugin's robust JavaScript handling. You simply include your \<script\> tags in your component's HTML, and the plugin takes care of the rest, executing them **sequentially** and reliably.

  * **All Script Types Supported**:

      * **External ES Modules**: \<script type="module" src="./my-module.js"\>\</script\>
      * **Inline ES Modules**: \<script type="module"\>console.log('Inline module\!');\</script\>
      * **External Classic Scripts**: \<script src="[https://cdn.example.com/some-lib.js](https://cdn.example.com/some-lib.js)"\>\</script\>
      * **Inline Classic Scripts**: \<script\>alert('Hello from classic script\!');\</script\>

  * **Guaranteed Sequential Order**: The plugin ensures that all scripts, regardless of type or source, run in the exact order they appear in your component's HTML. This eliminates common race conditions and simplifies your component's logic.

  * **Datastar Action Integration (registerDatastarActions)**: For **module scripts only**, you can easily expose functions as Datastar actions. This allows you to call your component's internal JavaScript logic directly from Datastar attributes like ds-on:click="myAction()".

    **Example: Component with JavaScript Actions** my-interactive-card.html:

    ```html
    <template shadowroot="open">  
        <style>  
            :host {  
                display: block; border: 1px solid #aaddff; padding: 15px; border-radius: 8px;  
                background-color: #e0faff; text-align: center;  
            }  
            .status { font-weight: bold; color: #007bff; }  
            .action-button { background-color: #28a745; }  
            .action-button:hover { background-color: #218838; }  
        </style>

        <script type="module" src="./card-logic.js"></script>

        <div ds-data="{ message: 'Ready', clickCount: 0 }">  
            <h3 ds-text="message"></h3>  
            <p>Clicks: <span ds-text="clickCount"></span></p>  
            <button ds-on:click="performAction()">Click Me!</button>  
            <script>  
                // You can also place inline classic scripts here.  
                // They will run after any preceding scripts, and before any following scripts.  
                console.log("Inline script inside my-interactive-card.html executed.");  
            </script>  
        </div>  
    </template>
    ```

    components/card-logic.js:

    ```javascript
    // components/card-logic.js  
    // Important: Adjust path to datastar-components.js if needed based on your project structure  
    import { registerDatastarActions } from '/path/to/datastar-components.js';

    export function performAction() {  
        // 'this' refers to the component instance (DatastarComponent)  
        // Access Datastar signals via 'this.Datastar.signalName' or 'this.Datastar.getSignal()'  
        // For simplicity, we'll assume a global Datastar instance for the example here.  
        // In a real app, you might pass Datastar into your component's context or access global `window.Datastar`.

        // This function will be called as a Datastar action.  
        // `this.getSignal('message')` would be the preferred way if Datastar context is setup within the component.  
        // For this example, let's directly manipulate the 'message' and 'clickCount' signals  
        // assuming standard Datastar setup where 'message' and 'clickCount' are accessible in the component's scope.  
        if (window.Datastar) {  
            const currentMessage = window.Datastar.getSignal('message').peek();  
            const currentClickCount = window.Datastar.getSignal('clickCount').peek();

            window.Datastar.getSignal('message').set(  
                currentMessage === 'Ready' ? 'Action Performed!' : 'Ready'  
            );  
            window.Datastar.getSignal('clickCount').set(currentClickCount + 1);  
            console.log("Action performed by card-logic.js!");  
        } else {  
            console.warn("Datastar not available in card-logic.js for direct signal manipulation.");  
        }  
    }

    // Register this function to be available as a Datastar action  
    document.addEventListener('DOMContentLoaded', () => {  
        if (window.Datastar && window.DatastarComponents) {  
            window.DatastarComponents.registerDatastarActions({  
                performAction: performAction // The key 'performAction' is how you'll call it in HTML  
            });  
        }  
    });
    ```

    Usage in index.html:

    ```html
    <body>  
        <div class="app-container">  
            <h2>Interactive Card with JS Actions</h2>  
            <my-interactive-card data-component-src="/components/my-interactive-card.html"></my-interactive-card>  
        </div>  
    </body>
    ```

### Props: Passing Data Down [↑](#-functionality--capabilities)

The plugin makes passing data into your components straightforward and reactive using data-prop-\* attributes.

*   **Defining a Prop**: Simply add an attribute to your component tag starting with data-prop-. The part after data-prop- becomes the prop name (camelCased automatically if using kebab-case in HTML).
    
    *   Example: data-prop-title="Hello" becomes a title prop.
        
*   **Accessing Props**: Inside your component's HTML and JavaScript, props are available via a reactive Datastar signal object named $props.
    
    *   Access in HTML: `data-text="$props.title"`
        
    *   Access in JS: `this.$props.peek().title` (if $props is a Datastar signal)
        
*   **Reactive Updates**: If a data-prop-\* attribute on the parent element changes, the corresponding $props signal inside your component will automatically update, triggering any associated Datastar reactivity. **Example: Greeting Card with Props** my-greeting-card.html:
    
    ```html
    <template shadowroot="open">  
        <style>  
            :host {  
                display: block;  
                border: 1px solid #ffd700;  
                padding: 20px;  
                border-radius: 10px;  
                background-color: #fffacd;  
                text-align: center;  
                box-shadow: 0 4px 10px rgba(0,0,0,0.08);  
            }  
            .greeting {  
                font-size: 2.2em;  
                color: #d63384;  
                margin-bottom: 10px;  
            }  
            .from-text {  
                font-size: 1.2em;  
                color: #6c757d;  
            }  
        </style>
    
        <div data-data="{ internalMessage: 'How are you?' }">  
            <p class="greeting" data-text="`${$props.salutation}, ${$props.recipient}!`"></p>  
            <p class="from-text">From: <span data-text="$props.sender"></span></p>  
            <p>Internal State: <span data-text="internalMessage"></span></p>  
        </div>
        ```
*   Usage in index.html:

    ```html
    <body>  
        <div class="app-container">  
            <h2>Greeting Card with Props</h2>  
            <my-greeting-card   
                data-component-src="/components/my-greeting-card.html"  
                data-prop-salutation="Hello"  
                data-prop-recipient="Datastar User"  
                data-prop-sender="The Plugin"  
            ></my-greeting-card>

            <button data-data="{ currentSender: 'The Plugin' }"  
                    data-on:click="currentSender = (currentSender === 'The Plugin' ? 'Your App' : 'The Plugin')">  
                Change Sender from Parent (Not Reactive Example)  
                </button>  
            <br><br>  
            <div data-data="{ dynamicSalutation: 'Hi' }">  
                <button data-on:click="dynamicSalutation = (dynamicSalutation === 'Hi' ? 'Greetings' : 'Hi')">  
                    Toggle Salutation  
                </button>  
                <my-greeting-card   
                    data-component-src="/components/my-greeting-card.html"  
                    data-attr:data-prop-salutation="dynamicSalutation"  
                    data-prop-recipient="Dynamic User"  
                    data-prop-sender="Datastar Parent"  
                ></my-greeting-card>  
            </div>  
        </div>  
    </body>  
    </html>    
    ```    

### Slots: Projecting Content [↑](#-functionality--capabilities)

Leverage standard Web Component slots to allow parent elements to inject content into specific areas of your component.

*   **Default Slot**: Place where you want any un-slotted content to appear.
    
*   **Named Slots**: Use and provide content with slot="your-slot-name" in the parent.
    
*   **Fallback Content**: Content placed directly inside a tag will be rendered if no content is provided by the parent.
    
    ```html
    <template shadowroot="open">  
        <style>  
            :host {  
                display: block; border: 1px solid #6c757d; border-radius: 8px;  
                padding: 15px; margin: 15px 0; background-color: #f8f9fa;  
            }  
            header { border-bottom: 1px solid #dee2e6; padding-bottom: 10px; margin-bottom: 10px; }  
            footer { border-top: 1px solid #dee2e6; padding-top: 10px; margin-top: 10px; font-size: 0.9em; color: #6c757d; }  
        </style>  
        <header>  
            <slot name="card-header">Default Header</slot>  
        </header>  
        <main>  
            <slot>Default Main Content</slot>  
        </main>  
        <footer>  
            <slot name="card-footer">Default Footer</slot>  
        </footer>
    ```

*   Usage in index.html:

    ```html
    <body>  
        <div class="app-container">  
            <h2>Card with Slots</h2>  
            <my-card data-component-src="/components/my-card.html">  
                <h3 slot="card-header">Custom Card Title!</h3>  
                <p>This is the main content passed into the default slot.</p>  
                <p slot="card-footer">A custom footer message.</p>  
            </my-card>
    
            <my-card data-component-src="/components/my-card.html">  
                <h3>Card with only default content</h3>  
            </my-card>  
        </div>  
    </body>  
    </html>
    ```    

### Scoped IDs for Accessibility and Internal Linking (this.generateScopedId) [↑](#-functionality--capabilities)

To prevent ID conflicts when using multiple instances of the same component, the plugin provides a generateScopedId method on the component instance. This is crucial for accessibility (e.g., ) and internal JavaScript targeting.

*   **Usage**: Call this.generateScopedId('your-base-id') within your component's JavaScript. This will return a unique ID string.
    
*   Example: In your component's HTML template (my-form-component.html):
    
    ```html
    <template shadowroot="open">  
        <style>/* ... styles ... */</style>  
        <label data-for="username-input">Username:</label>  
        <input type="text" data-id="username-input">  
        <script type="module" src="./my-form-component-logic.js"></script>  
    </template>
    ```
        
    
    In my-form-component-logic.js:
    
    ```javascript
    export function init(componentInstance) {  
        // Generate a unique ID for the input specific to this component instance  
        const inputId = componentInstance.generateScopedId('username-input');
    
        // Target the label and input based on their data- attributes or other selectors  
        const label = componentInstance.root.querySelector('label[data-for="username-input"]');  
        const input = componentInstance.root.querySelector('input[data-id="username-input"]');
    
        // Apply the unique ID  
        if (label) {  
            label.setAttribute('for', inputId);  
        }  
        if (input) {  
            input.setAttribute('id', inputId);  
        }  
    }
    ```
        
    
    Now, if you have multiple my-form-component instances, each input and its label will have a globally unique and correctly associated ID (e.g., my-form-component-1-username-input, my-form-component-2-username-input).

### Conditional Component Loading (`data-load-if`) [↑](#-functionality--capabilities)

Control when a component is loaded and rendered based on the state of a Datastar signal. This is useful for improving initial page load performance by deferring the loading of components that are not immediately visible or necessary. It also enables dynamic UI patterns where components appear or disappear based on user interaction or application state.
    
*   **Usage**: Add the `data-load-if` attribute to your component tag, specifying a Datastar signal that evaluates to `true` or `false`. The component will only be fetched and mounted when the condition is `true`.
    
*   **Expanded Use Cases & Examples**:
    
    *   **Lazy Loading a Complex Dialog/Modal**: Load a heavy modal component only when the user explicitly triggers it, improving initial page responsiveness.
        
        **`my-complex-modal.html`**:
        
        ```html
        <template shadowroot="open">
            <style>
                :host { /* ...modal styles... */ }
            </style>
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <h3>Complex Modal Title</h3>
                <p>This modal contains a lot of dynamic content and possibly other nested components.</p>
                <slot></slot>
                <button data-on:click="element.emit('close-modal')">Close</button>
            </div>
        </template>
        ```
        
        **`index.html`**:
        
        ```html
        <div data-data="{ isModalOpen: false }">
            <button data-on:click="isModalOpen = true">Open Complex Modal</button>
        
            <!-- The modal component is only loaded and rendered when isModalOpen is true -->
            <my-complex-modal
                data-component-src="/components/my-complex-modal.html"
                data-load-if="isModalOpen"
                data-on:close-modal="isModalOpen = false"
            ></my-complex-modal>
        </div>
        ```
        
    *   **User Permission-Based Loading**: Display a component only if the current user has a specific permission or role.
        
        **`user-dashboard-widget.html`**:
        
        ```html
        <template shadowroot="open">
            <style>/* ...widget styles... */</style>
            <div class="widget">
                <h4>Admin Tools</h4>
                <p>Access restricted administrative features here.</p>
                <!-- Other admin features components -->
            </div>
        </template>
        ```
        
        **`index.html`**:
        
        ```html
        <div data-data="{ userRole: 'guest' }"> <!-- Imagine this signal comes from an auth system -->
            <button data-on:click="userRole = (userRole === 'guest' ? 'admin' : 'guest')">Toggle User Role</button>
            <p>Current Role: <span data-text="userRole"></span></p>
        
            <!-- Admin widget only loads if userRole is 'admin' -->
            <user-dashboard-widget
                data-component-src="/components/user-dashboard-widget.html"
                data-load-if="userRole === 'admin'"
            ></user-dashboard-widget>
        </div>
        ```
        
    *   **Tabbed Interface (Lazy Tab Content)**: Load the content of inactive tabs only when they become active, improving the initial load of multi-tab interfaces.
        
        **`tab-content-dashboard.html`**:
        
        ```html
        <template shadowroot="open">
            <style>/* ...dashboard specific styles... */</style>
            <h3>Your Dashboard</h3>
            <p>Welcome to your personalized dashboard! Here's an overview of your activity.</p>
            <!-- Potentially other nested components like charts or feeds -->
        </template>
        ```
        
        **`tab-content-settings.html`**:
        
        ```html
        <template shadowroot="open">
            <style>/* ...settings specific styles... */</style>
            <h3>Account Settings</h3>
            <p>Manage your profile, preferences, and security settings.</p>
            <!-- Complex forms or user management components -->
        </template>
        ```
        
        **`index.html`**:
        
        ```html
        <div data-data="{ activeTab: 'dashboard' }">
            <nav class="tabs">
                <button data-on:click="activeTab = 'dashboard'" data-class:active="activeTab === 'dashboard'">Dashboard</button>
                <button data-on:click="activeTab = 'settings'" data-class:active="activeTab === 'settings'">Settings</button>
            </nav>
        
            <div class="tab-content">
                <!-- Tab content components loaded only when their tab is active -->
                <tab-content-dashboard
                    data-component-src="/components/tab-content-dashboard.html"
                    data-load-if="activeTab === 'dashboard'"
                ></tab-content-dashboard>
        
                <tab-content-settings
                    data-component-src="/components/tab-content-settings.html"
                    data-load-if="activeTab === 'settings'"
                ></tab-content-settings>
            </div>
        </div>
        ```  
 
### Form Association (Form-Associated Custom Elements) [↑](#-functionality--capabilities)

Seamlessly integrate your custom components with native HTML forms. By adding a `data-form-associated` attribute to your component's root `<template>`, your custom element can participate in form submissions, `FormData` collection, and native form behaviors like `reset()`.

*   **How it Works**:
    
    *   **`static formAssociated = true;`**: The plugin dynamically sets this property on your component's Custom Element class if `data-form-associated` is present in its template. This signals to the browser that your component wants to be a form control.
        
    *   **`this.attachInternals()`**: In your component's constructor, `this.attachInternals()` is called to get an `ElementInternals` object. This object provides the API for interacting with the form.
        
    *   **`get value()` and `set value(newValue)`**: You must implement a `value` getter and setter on your component class. The `set` method should call `this._internals.setFormValue(newValue)` to update the form's internal representation of your component's value. The `get` method should return the component's current value.
        
    *   **Lifecycle Callbacks**: Your component can optionally implement `formAssociatedCallback`, `formResetCallback`, and `formStateRestoreCallback` to react to form events.
        
*   **Requirements for Your Component Template (.html file):**
    
    1.  Add the `data-form-associated` attribute to your main `<template>` tag.
        
    2.  Include an element inside your template that can serve as the primary input for the value (e.g., `<input>`, `<textarea>`).
        
    3.  Ensure your component's JavaScript updates `element.value` (which in turn calls the setter) when the internal input changes.
        
*   **Component HTML Example (my-input-component.html):**
    
    ```html
    <template shadowroot="open" data-form-associated>
        <style>
            :host {
                display: inline-block;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-family: Inter, sans-serif;
            }
            input {
                border: none;
                outline: none;
                width: 100%;
            }
        </style>
        <!-- The data-on:input="element.value = $event.target.value" line is crucial for data binding -->
        <input type="text" placeholder="Enter value..." data-on:input="element.value = $event.target.value">
    </template>
    ```
        
    
*   **Main HTML Usage Example:**
    
    ```html
    <form data-data="{ formData: null }" data-on:submit="event.preventDefault(); formData = new FormData($event.target);">
        <label for="myCustomInput">Custom Value:</label>
        <!-- Assign a `name` attribute to your component for it to be included in FormData -->
        <my-input-component id="myCustomInput" name="custom_field_name" value="Initial Value"
                            data-component-src="/components/my-input-component.html"></my-input-component>
    
        <button type="submit">Submit Form</button>
        <button type="reset">Reset Form</button>
    
        <h3 data-if="formData" class="mt-4 text-lg font-semibold">Submitted Data:</h3>
        <pre data-if="formData" data-text="JSON.stringify(Object.fromEntries(formData), null, 2)" class="bg-gray-100 p-2 rounded"></pre>
    </form>
    ```        
    
    In this example, when the form is submitted, `formData` will correctly contain `custom_field_name: "current value of my-input-component"`. The `reset` button will also correctly revert `my-input-component` to its initial `value="Initial Value"`.


### Composing Components [↑](#-functionality--capabilities)

Datastar Components are designed for composition, allowing you to build complex user interfaces by nesting components within each other. The reactivity and prop system seamlessly extend through these nested structures, making it easy to manage data flow and interactions across your component tree.

*   **How it Works**: Simply include one Datastar component within the HTML template of another. The plugin's `MutationObserver` will detect the nested component when the parent component is rendered, and will automatically fetch and define the nested component if it hasn't been already. Data can be passed down using `data-prop-*` attributes, and events can bubble up or be emitted between components.
    
*   **Example: A User Card with a Nested Avatar Component**
    
    **`my-avatar-component.html`** (A simpler, reusable component for a user's avatar and name):
    
    ```html
    <template shadowroot="open">
        <style>
            :host {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                background-color: var(--avatar-bg, #f0f0f0);
                border-radius: var(--avatar-border-radius, 8px);
            }
            .avatar {
                width: var(--avatar-size, 48px);
                height: var(--avatar-size, 48px);
                border-radius: 50%;
                background-color: #ccc;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: calc(var(--avatar-size, 48px) * 0.5);
                color: white;
                overflow: hidden; /* To handle image cropping if used */
            }
            .avatar img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .name {
                font-weight: bold;
                color: var(--avatar-text-color, #333);
            }
        </style>
        <div class="avatar">
            <img data-attr:src="$props.imageUrl" data-if="$props.imageUrl" alt="User Avatar">
            <span data-text="$props.initials" data-if="!$props.imageUrl"></span>
        </div>
        <span class="name" data-text="$props.userName"></span>
    </template>
    ```
    
    **`my-user-profile-card.html`** (A parent component that composes `my-avatar-component`):
    
    ```html
    <template shadowroot="open">
        <style>
            :host {
                display: block;
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 20px;
                max-width: 400px;
                margin: 20px auto;
                box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                font-family: Arial, sans-serif;
                background-color: white;
                --avatar-bg: #007bff; /* CSS variable for nested component */
                --avatar-text-color: white;
                --avatar-size: 60px;
            }
            h3 {
                margin-top: 0;
                color: #333;
            }
            .details {
                margin-top: 15px;
                line-height: 1.6;
            }
        </style>
        <div data-data="{ userEmail: $props.email, bio: $props.userBio }">
            <h3>User Profile</h3>
            <!-- Nested my-avatar-component -->
            <my-avatar-component
                data-component-src="/components/my-avatar-component.html"
                data-attr:data-prop-user-name="$props.userName"
                data-attr:data-prop-initials="$props.userInitials"
                data-attr:data-prop-image-url="$props.userAvatarUrl"
            ></my-avatar-component>
    
            <div class="details">
                <p>Email: <span data-text="userEmail"></span></p>
                <p>Bio: <span data-text="bio"></span></p>
            </div>
            <button data-on:click="element.emit('edit-profile', { name: $props.userName, email: userEmail })">Edit Profile</button>
        </div>
    </template>
    ```
    
    **`index.html`** (The main page using the `my-user-profile-card`):
    
    ```html
    <body>
        <div class="app-container" data-data="{ profileName: 'Alice Johnson', profileEmail: 'alice@example.com', profileBio: 'Software Engineer', profileInitials: 'AJ', profileAvatar: 'https://placehold.co/60x60/FF5733/FFFFFF?text=AJ' }">
            <h1>Composed Components Example</h1>
    
            <my-user-profile-card
                data-component-src="/components/my-user-profile-card.html"
                data-attr:data-prop-user-name="profileName"
                data-attr:data-prop-email="profileEmail"
                data-attr:data-prop-user-bio="profileBio"
                data-attr:data-prop-user-initials="profileInitials"
                data-attr:data-prop-user-avatar-url="profileAvatar"
                data-on:edit-profile="console.log('Edit profile event received from child:', $event.detail)"
            ></my-user-profile-card>
    
            <button data-on:click="profileName = 'Bob Smith'; profileEmail = 'bob@example.com'; profileInitials='BS'; profileAvatar=''">
                Change User (No Avatar)
            </button>
            <button data-on:click="profileName = 'Charlie Brown'; profileEmail = 'charlie@example.com'; profileInitials='CB'; profileAvatar='https://placehold.co/60x60/33FF57/000000?text=CB'">
                Change User (With Avatar)
            </button>
        </div>
        <script type="module">
            import { initDatastarComponents } from '/path/to/datastar-components.js';
            document.addEventListener('DOMContentLoaded', () => {
                initDatastarComponents(window.Datastar);
            });
        </script>
    </body>
    ```
        
    
    This example demonstrates:
    
    *   **Nesting**: `my-avatar-component` is placed directly inside `my-user-profile-card.html`.
        
    *   **Prop Flow**: Props like `userName`, `email`, `userBio` are passed from `index.html` to `my-user-profile-card`, and then `userName`, `userInitials`, `userAvatarUrl` are _re-passed_ from `my-user-profile-card`'s `$props` to `my-avatar-component`.
        
    *   **Reactivity**: Changes to `profileName`, `profileEmail`, `profileAvatar` in `index.html` will reactively update both the `my-user-profile-card` and the nested `my-avatar-component`.
        
    *   **Event Bubbling**: The `edit-profile` event emitted by `my-user-profile-card` can be caught by `index.html` (`data-on:edit-profile`).
        
    *   **CSS Variable Inheritance**: `my-user-profile-card` sets CSS variables like `--avatar-bg`, `--avatar-size` which are then consumed by the nested `my-avatar-component`, allowing the parent component to influence the child's styling.

<br>

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>



**⚡ Performance & Optimizations** 
-----------------------------------------------------------------------------
The plugin is built with performance in mind, ensuring that your application remains responsive and efficient even as it scales with more components and complex interactions.
          
### Optimized Network Requests  [↑](#-performance--optimizations)

Prevents redundant fetch calls for component source files and avoids re-defining Custom Elements that are already in the process of being defined.
    
### Efficient DOM Scanning  [↑](#-performance--optimizations)

Utilizes a MutationObserver to watch for newly added elements that might be Datastar components, minimizing performance overhead compared to continuous DOM polling.
    
### Native Caching  [↑](#-performance--optimizations)

Leverages browser-native caching for ES Modules (JavaScript) and Constructable Stylesheets (CSS), ensuring assets are fetched and parsed only once.

### Enhanced Theming and CSS Variable Management [↑](#-performance--optimizations)

The `datastar-components` plugin now provides convenient utility methods on the component instance (`this`) for setting and getting CSS Custom Properties (CSS variables). This streamlines dynamic theming and styling directly from your component's JavaScript logic, enabling reactive style changes.

*   **`this.setCssVariable(name, value, [element])`**: Sets a CSS custom property on a specified element. If `element` is omitted, it defaults to the component's root (`this.root`).
    
    *   `name`: The name of the CSS variable (e.g., `'--primary-color'`).
        
    *   `value`: The value to set (e.g., `'#007bff'`, `'16px'`, `'var(--global-spacing)'`).
        
    *   `element` (optional): The target `HTMLElement` or `ShadowRoot`.
        
    
    **Example (Inside component script, e.g., `my-theme-switcher.js`):**
    
    ```javascript
    export function init(componentInstance) {
        // Assume a signal 'selectedThemeColor' exists in the component's Datastar scope
        const dsScope = Datastar.scope(componentInstance);
    
        // Reactively update a CSS variable on the component's host element
        Datastar.effect(() => {
            const color = dsScope.selectedThemeColor.peek();
            componentInstance.setCssVariable('--component-background', color);
            componentInstance.setCssVariable('--component-text-color', 'white');
            console.log(`Updated --component-background to ${color}`);
        });
    
        // Example: Set a variable on a child element
        const headerElement = componentInstance.root.querySelector('.component-header');
        if (headerElement) {
            componentInstance.setCssVariable('--header-font-size', '20px', headerElement);
        }
    }
    ```
    
*   **`this.getCssVariable(name, [element])`**: Retrieves the computed value of a CSS custom property from a specified element. If `element` is omitted, it defaults to the component's root (`this.root`). This is useful for reading values that might be inherited or set by parent styles.
    
    *   `name`: The name of the CSS variable (e.g., `'--global-spacing'`).
        
    *   `element` (optional): The target `HTMLElement` or `ShadowRoot`.
        
    
    **Example (Inside component script):**
    
    ```javascript
    export function init(componentInstance) {
        componentInstance.contentReadyCallback = () => {
            // Read a global CSS variable applied to the body or :root
            const bodyColor = componentInstance.getCssVariable('--body-background-color', document.body);
            console.log(`Global body background color: ${bodyColor}`);
    
            // Read a variable applied directly to the component's host
            const myBorderWidth = componentInstance.getCssVariable('--component-border-width');
            console.log(`Component border width: ${myBorderWidth}`);
        };
    }
    ```        
    
*   **Using CSS Variables in Component HTML/CSS**: You can then use these variables in your component's `<style>` tags:
    
    ```html
    <template shadowroot="open">
        <style>
            :host {
                display: block;
                background-color: var(--component-background, #f0f0f0); /* Fallback value */
                color: var(--component-text-color, #333);
                border: var(--component-border-width, 1px) solid currentColor;
                padding: 15px;
                border-radius: 8px;
            }
            .component-header {
                font-size: var(--header-font-size, 18px);
                margin-bottom: 10px;
            }
        </style>
        <div class="component-header">Themed Content</div>
        <p>This text adapts to the theme.</p>
    </template>
    ```
    
*   **Benefits**:
    
    *   **Dynamic Theming**: Easily change colors, fonts, spacing, etc., based on user preferences, light/dark mode, or application state.
        
    *   **Encapsulated Styles**: Work with CSS variables even within Shadow DOM, maintaining encapsulation while allowing external control.
        
    *   **Runtime Control**: Adjust styles programmatically without needing to manipulate classes or re-inject stylesheets.
      
### Advanced Error Handling (Fallback UI & Recovery) [↑](#-performance--optimizations)

The plugin provides a robust mechanism for handling errors during component loading, parsing, or script execution, allowing you to define a graceful fallback UI. This significantly improves the resilience and user experience of your application by preventing broken layouts when a component fails.

*   **How it Works**: When an error occurs during the fetching, parsing, or initial script execution of a component defined via `data-component-src`, the plugin will check for an optional `data-component-error-src` attribute on the custom element tag.
    
    *   If `data-component-error-src` is present, the plugin will attempt to fetch the HTML content from this URL.
        
    *   The fetched fallback HTML (or a generic error message if the fallback also fails or isn't provided) will then replace the content of the problematic component's root (either its Shadow DOM or its Light DOM children).
        
    *   A `component-fallback-rendered` custom event is dispatched, allowing your application to monitor and react to fallback scenarios centrally.
        
*   **Usage (`data-component-error-src` attribute)**: Simply add the `data-component-error-src` attribute to your custom element, pointing to an HTML file that contains the desired fallback UI. This fallback HTML should be a self-contained snippet, often wrapped in a `<template>` tag if it has styles or scripts you want managed.
    
*   **Example**:
    
    `my-failing-component.html` (Simulated failing component):
    
    ```html
    <template shadowroot="open">
        <style>
            :host { display: block; border: 2px dashed #ff0000; padding: 20px; background-color: #ffe6e6; }
            p { color: #cc0000; font-weight: bold; }
        </style>
        <p>This component will fail to load its script!</p>
        <script type="module">
            // This script intentionally causes an error to demonstrate fallback
            throw new Error("Simulated component script failure!");
        </script>
    </template>
    ```

    `my-error-fallback.html` (Fallback UI):

    ```html
    <template>
        <style>
            .fallback-card {
                background-color: #fff3cd;
                border: 1px solid #ffc107;
                border-radius: 8px;
                padding: 15px;
                text-align: center;
                color: #856404;
                font-family: sans-serif;
            }
            .fallback-card p { margin: 0; }
        </style>
        <div class="fallback-card">
            <p>⚠️ Oops! This feature could not be loaded.</p>
            <p>Please try refreshing the page or contact support.</p>
        </div>
    </template>
    ```
    
    `index.html` (Using the component with a fallback):
        
    ```html
    <body>
        <div class="app-container">
            <h2>Component with Fallback Example</h2>
            <my-failing-component
                data-component-src="/components/my-failing-component.html"
                data-component-error-src="/components/my-error-fallback.html"
            ></my-failing-component>
        </div>
    
        <script type="module">
            // ... (your existing initDatastarComponents call) ...
            window.addEventListener('component-fallback-rendered', (event) => {
                console.warn('Fallback UI was rendered for:', event.detail.tagName, 'Original Error:', event.detail.originalError);
                // You can add analytics logging here or display a global notification
            });
        </script>
    </body>
    ```      
    
    When `my-failing-component`'s script fails, its content will be replaced by the "Oops! This feature could not be loaded." message from `my-error-fallback.html`.

### Adopted Callback Integration [↑](#-performance--optimizations)

The `adoptedCallback` is a Web Component lifecycle hook that fires when the custom element is adopted into a new document. This typically happens when elements are moved between different `window` contexts, such as from the main document into an `<iframe>` or vice-versa.

The `datastar-components` plugin now leverages this callback to ensure that if a component is moved, its Datastar reactivity is correctly re-initialized within the new document's context. This is crucial for maintaining functionality and preventing unexpected behavior in highly dynamic applications that manipulate the DOM across document boundaries.

*   **How it's handled by the plugin**: When `adoptedCallback` is triggered, the plugin will:
    
    1.  Log a console message indicating the component has been adopted.
        
    2.  Re-run `Datastar.init(this.root)` on the component's root to re-scan for Datastar directives and re-establish reactivity in the new document context.
        
    3.  Re-setup props reactivity (`setupPropsReactivity`) to ensure any `data-prop-*` attributes are correctly observed and their corresponding signals updated in the new context.
        
*   **Usage considerations for developers**: While the plugin handles the core Datastar re-initialization, if your component's internal JavaScript performs actions that tie into the document directly (e.g., adding global event listeners to `document`, or interacting with global objects unique to a document), you may need to:
    
    *   **Clean up in `disconnectedCallback`**: Remove any document-specific listeners or references when the component leaves its _original_ document.
        
    *   **Re-establish in `adoptedCallback`**: Re-attach those document-specific listeners or re-initialize any document-bound resources when the component enters a _new_ document. Use the `registerCleanup` method for robust cleanup patterns.


### Content Ready Lifecycle Hook (contentReadyCallback) [↑](#-performance--optimizations)

The connectedCallback fires when a custom element is added to the DOM, but its internal HTML from data-component-src might not be fully loaded and attached yet. The contentReadyCallback provides a reliable point to execute JavaScript that depends on the component's full DOM structure and Datastar reactivity being available.

*   **Usage**: Define a method named contentReadyCallback() directly on your component instance (e.g., within an init function exported from a module script). The plugin will automatically call this method after the component's HTML is injected, styles are applied, scripts are run, and Datastar reactivity is initialized on its content.
    
*   Example: In my-chart-component.html:
    
    ```html
    <template shadowroot="open">  
        <style>/* ... styles ... */</style>  
        <canvas class="chart-canvas"></canvas>  
        <script type="module" src="./my-chart-component-logic.js"></script>  
    </template>
    ```        
    
    In my-chart-component-logic.js:
    
    ```javascript
    export function init(componentInstance) {  
        // Define the contentReadyCallback method  
        componentInstance.contentReadyCallback = () => {  
            console.log(`${componentInstance.tagName} - Content and Datastar ready! Initializing chart...`);
    
            // Example: Initialize a third-party charting library  
            if (window.ChartJS) { // Assuming ChartJS is globally available  
                const ctx = componentInstance.root.querySelector('.chart-canvas').getContext('2d');  
                new window.ChartJS(ctx, {  
                    type: 'bar',  
                    data: {  
                        labels: ['Red', 'Blue', 'Yellow'],  
                        datasets: [{  
                            label: '# of Votes',  
                            data: [12, 19, 3],  
                            backgroundColor: ['red', 'blue', 'yellow']  
                        }]  
                    }  
                });  
            }  
        };  
    }
    ```

    This ensures that your chart initialization code runs only after the element is part of the live DOM within your component.

### Opinionated Lifecycle Integration for Cleanup  [↑](#-performance--optimizations)

Proper cleanup of resources when a component is removed from the DOM is crucial for preventing memory leaks and ensuring your application remains performant over time. The plugin provides a simple, opinionated pattern to manage this by leveraging the disconnectedCallback lifecycle hook. When your component is initialized (e.g., in an init function exported from a module script, or directly within inline scripts), you can register cleanup functions using componentInstance.registerCleanup(yourCleanupFunction). These registered functions will automatically be executed by the plugin when the component's disconnectedCallback is triggered, ensuring resources are freed.
    
*   **Why is this important?**
    
    *   **Memory Leaks**: If event listeners, timers (setTimeout, setInterval), or other global resources are not explicitly removed or cleared when a component is no longer in use, they can prevent the browser's garbage cleaner from reclaiming memory associated with that component, leading to slow performance and potential crashes.
        
    *   **Resource Management**: Ensures that background processes, network connections, or subscriptions initiated by your component are properly terminated when the component is no longer needed.
        
*   **How to use registerCleanup**: You will have access to the registerCleanup method on the componentInstance (or directly via element if using an inline script within the template). Call this method and pass a function that contains the logic to clean up specific resources.
    
*   **Example: Component with Cleanup** my-cleanup-component.html:
    

    ```html
    <template shadowroot="open">  
        <style>  
            :host {  
                display: block;  
                border: 1.5px solid #77dd77;  
                padding: 15px;  
                border-radius: 8px;  
                background-color: #e6ffe6;  
                text-align: center;  
                margin-bottom: 20px;  
            }  
            .message {  
                font-size: 1.1em;  
                color: #336633;  
            }  
            .timer {  
                font-weight: bold;  
                color: #008000;  
            }  
            button {  
                background-color: #4CAF50;  
                margin-top: 10px;  
            }  
            button:hover {  
                background-color: #45a049;  
            }  
        </style>
    
        <div data-data="{ counter: 0 }">  
            <p class="message">This component has a timer and event listener.</p>  
            <p class="timer">Timer Count: <span data-text="counter"></span></p>  
            <button data-on:click="toggleVisibility = !toggleVisibility">Remove Component (from parent)</button>  
        </div>  
        <script type="module" src="./cleanup-logic.js"></script>  
    </template>
    ```

    components/cleanup-logic.js:

    ```javascript
    // components/cleanup-logic.js  
    export function init(componentInstance) {  
        let intervalId;  
        let buttonClickListener;
    
        console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) initialized.`);
    
        // Example 1: Set up a periodic timer  
        let localCounter = 0;  
        intervalId = setInterval(() => {  
            localCounter++;  
            console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Timer tick: ${localCounter}`);  
            // Update a Datastar signal if needed, assuming it's available in scope  
            const dsScope = Datastar.scope(componentInstance);  
            if (dsScope && dsScope.counter) {  
                dsScope.counter.set(localCounter);  
            }  
        }, 1000);
    
        // Register a cleanup function for the timer  
        componentInstance.registerCleanup(() => {  
            clearInterval(intervalId);  
            console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Timer cleared.`);  
        });
    
        // Example 2: Add an event listener to the document  
        // (This listener is just an example; usually you'd listen on elements within the component's root)  
        buttonClickListener = () => {  
            console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Button clicked in component's internal logic!`);  
        };  
        const internalButton = componentInstance.root.querySelector('button');  
        if (internalButton) {  
            internalButton.addEventListener('click', buttonClickListener);  
        }
    
        // Register a cleanup function for the event listener  
        componentInstance.registerCleanup(() => {  
            if (internalButton) {  
                internalButton.removeEventListener('click', buttonClickListener);  
                console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Button click listener removed.`);  
            }  
        });
    
        // Example 3: You can also register cleanup for any external libraries or other resources.  
        // For instance, if you initialized a chart or a map:  
        componentInstance.registerCleanup(() => {  
            // chartInstance.destroy(); // example cleanup for a charting library  
            // mapInstance.remove();   // example cleanup for a map library  
            console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Other resources cleaned up.`);  
        });  
    }
    ```
        
    
    index.html to demonstrate loading/unloading:

    ```html
    <body>  
        <div class="app-container" data-data="{ toggleVisibility: true }">  
            <h1>Welcome to Your Datastar Components App!</h1>
    
            <div data-if="toggleVisibility">  
                <h2>Component with Cleanup Example</h2>  
                <my-cleanup-component data-component-src="/components/my-cleanup-component.html"></my-cleanup-component>  
            </div>  
            <button data-on:click="toggleVisibility = !toggleVisibility">Toggle Component Visibility</button>
    
        </div>  
        <!-- Other components and scripts -->  
        <script type="module">  
            import { initDatastarComponents } from '/path/to/datastar-components.js'; // Adjust path  
            document.addEventListener('DOMContentLoaded', () => {  
                initDatastarComponents(window.Datastar);  
            });  
        </script>  
    </body>
    ```
    
When you click "Toggle Component Visibility," the my-cleanup-component will be removed from the DOM, and you will see console messages confirming that its timer was cleared and event listener removed.

<br>

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>


**💧 Server-Side Rendering (SSR) & Hydration Readiness**
----------------------------------------------------------

The `datastar-components` plugin is designed to work seamlessly with Server-Side Rendered (SSR) content, enabling a smooth hydration process:


### Automatic Hydration Detection [↑](#-server-side-rendering-ssr--hydration-readiness)

When a component element is added to the DOM (either initially or dynamically), the plugin intelligently checks if its content (especially its Shadow DOM, via [Declarative Shadow DOM](https://web.dev/declarative-shadow-dom/ "null")) has already been pre-rendered on the server.
    
### Preventing FOUC & Performance [↑](#-server-side-rendering-ssr--hydration-readiness)

If pre-rendered content is detected, the plugin "hydrates" it. This means it attaches interactivity, applies styles (including Constructable Stylesheets), and initializes Datastar reactivity on the _existing_ DOM elements, rather than fetching and re-injecting HTML. This significantly improves initial page load performance, prevents flashes of unstyled content (FOUC), and is beneficial for SEO.
    
### Seamless Transition [↑](#-server-side-rendering-ssr--hydration-readiness)

Developers can render components on the server, and the client-side plugin will take over without re-rendering, providing a robust user experience.
    
### Handling Hydration of Slot Content [↑](#-server-side-rendering-ssr--hydration-readiness)

A critical aspect of SSR hydration is how content projected into slots is handled. If your SSR solution renders content directly within the custom element's light DOM (which will be projected into a `<slot>` in the component's template) and this slot content itself contains Datastar directives, the plugin ensures these directives are also hydrated.
    
*   **How it Works for Slots**: When the plugin `Datastar.init(this.root)` is called during a component's connection/hydration, it scans the component's root (which could be the Shadow DOM or the Light DOM element itself). This scan implicitly includes any distributed nodes within `<slot>` elements. If the server has pre-rendered content into a component's slot that includes `data-*` attributes, Datastar will find these directives during its scan of the component's active DOM (which includes the projected slot content) and will hydrate their reactivity.
    
*   **Example (Conceptual SSR Output)**: Imagine your server renders this HTML:
    
    ```html
    <my-profile-widget data-component-src="/components/my-profile-widget.html">
        <!-- This content is pre-rendered into a slot -->
        <h4 slot="header" data-text="user.name">Loading Name...</h4>
        <p data-text="user.email">Loading Email...</p>
    </my-profile-widget>
    ```   
    
    And `my-profile-widget.html` has:
    
    ```html
    <template shadowroot="open">
        <header><slot name="header"></slot></header>
        <main><slot></slot></main>
    </template>
    ```    
    
    When `my-profile-widget` hydrates on the client, Datastar will:
    
    1.  Initialize reactivity on the component's shadow root.
        
    2.  Identify the `<slot name="header">` and the default `<slot>`.
        
    3.  Recognize that `<h4>` and `<p>` from the light DOM are projected into these slots.
        
    4.  Scan these projected nodes for `data-text="user.name"` and `data-text="user.email"`.
        
    5.  Hydrate these `data-text` directives, ensuring that when the `user.name` or `user.email` signals change (e.g., after client-side data fetch), the pre-rendered text updates reactively.
            
### Hydration Benefits [↑](#-server-side-rendering-ssr--hydration-readiness)

You get the SEO and initial performance benefits of SSR for both the component's internal DOM and its slotted content, with seamless client-side interactivity powered by Datastar's hydration process.

<br>

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>


**📚 Integration with Third-Party Libraries**
----------------------------------------------
Datastar Components provide reliable lifecycle hooks and contextual access to the component instance, making it straightforward to integrate and manage third-party JavaScript libraries. The key is to initialize the library when the component's content is ready and clean up any resources when the component is removed.

### Key Principles [↑](#-integration-with-third-party-libraries)
    
*   **Initialization**: Use `this.contentReadyCallback()` (or ensure your `init` function runs after content is attached) to guarantee the necessary DOM elements for the library are available.
    
*   **Cleanup**: Use `this.registerCleanup()` to register functions that will be executed in `disconnectedCallback`, ensuring timers, event listeners, and library instances are properly destroyed to prevent memory leaks.
    
*   **Context**: The `componentInstance` (often referred to as `element` in inline scripts or `this` in module `init` functions) provides access to the component's root (`element.root`), signals (`element.$signals`), props (`element.$props`), and utility methods (`element.registerCleanup`, `element.emit`, `element.setCssVariable`, `element.getCssVariable`).
        
### **Example 1: Charting Library (Recharts-like)** [↑](#-integration-with-third-party-libraries)

(Already covered in Section 7, `my-chart-component.html` and `my-chart-component-logic.js`. This demonstrates `contentReadyCallback` and the assumption of a global library).
    
### **Example 2: Simple Markdown Editor (Conceptual)** [↑](#-integration-with-third-party-libraries)

Let's imagine a simple markdown editor library that takes a textarea and initializes itself.
    
**`my-markdown-editor.html`**:

```html
<template shadowroot="open">
    <style>
        :host { display: block; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; }
        textarea { width: 100%; height: 150px; border: 1px solid #ccc; padding: 10px; font-family: monospace; }
        .preview { border: 1px dashed #eee; padding: 10px; margin-top: 10px; background-color: #f9f9f9; }
    </style>
    <textarea data-data="{ editorContent: $props.initialContent }" data-on:input="element.value = editorContent"></textarea>
    <div class="preview">
        <h4>Rendered Markdown:</h4>
        <div class="markdown-output"></div>
    </div>
    <script type="module" src="./markdown-editor-logic.js"></script>
</template>
```    
    
**`markdown-editor-logic.js`**:

```javascript
// Assume a global `SimpleMarkdownEditor` library is available (e.g., loaded via <script src="..."> in index.html)
// For demonstration, we'll mock its behavior.

class MockMarkdownEditor {
    constructor(textareaElement, previewElement) {
        this.textarea = textareaElement;
        this.preview = previewElement;
        this.textarea.addEventListener('input', this._renderPreview.bind(this));
        this._renderPreview();
        console.log('MockMarkdownEditor initialized.');
    }

    _renderPreview() {
        // In a real editor, this would convert markdown to HTML
        this.preview.innerHTML = `<em>Preview:</em><br>` + this.textarea.value.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    destroy() {
        this.textarea.removeEventListener('input', this._renderPreview.bind(this));
        this.textarea.value = '';
        this.preview.innerHTML = '';
        console.log('MockMarkdownEditor destroyed.');
    }
}

export function init(componentInstance) {
    let editorInstance; // To hold the library instance

    componentInstance.contentReadyCallback = () => {
        console.log(`${componentInstance.tagName} - Content and Datastar ready! Initializing Markdown Editor...`);
        const textarea = componentInstance.root.querySelector('textarea');
        const preview = componentInstance.root.querySelector('.markdown-output');

        if (textarea && preview) {
            // Initialize the third-party library
            editorInstance = new MockMarkdownEditor(textarea, preview);

            // Register cleanup for the editor instance
            componentInstance.registerCleanup(() => {
                if (editorInstance) {
                    editorInstance.destroy();
                    editorInstance = null;
                    console.log(`${componentInstance.tagName} - Markdown Editor cleaned up.`);
                }
            });

            // Update component's internal 'value' if editor changes it
            // For this mock, we bind Datastar on the textarea directly (data-on:input="element.value = editorContent")
            // In a real editor, you'd listen to its specific 'change' event and update componentInstance.value
        }
    };

    // Ensure initial content from props is set to the textarea signal
    const dsScope = Datastar.scope(componentInstance);
    if (dsScope && dsScope.editorContent && componentInstance.$props.initialContent) {
        dsScope.editorContent.set(componentInstance.$props.initialContent.peek());
    }
}
```
    
**`index.html`**:

```html
<body>
    <div class="app-container" data-data="{ myDocContent: 'Hello **World**!' }">
        <h1>Third-Party Library Integration</h1>

        <h2>Markdown Editor</h2>
        <my-markdown-editor
            data-component-src="/components/my-markdown-editor.html"
            data-attr:data-prop-initial-content="myDocContent"
        ></my-markdown-editor>

        <button data-on:click="myDocContent = 'New **content** from parent!'">Remove Editor</button>
    </div>
    <script type="module">
        import { initDatastarComponents } from '/path/to/datastar-components.js';
        document.addEventListener('DOMContentLoaded', () => {
            initDatastarComponents(window.Datastar);
        });
    </script>
</body>
```
    
This example shows how `contentReadyCallback` ensures `MockMarkdownEditor` is initialized only when `<textarea>` and `<div class="markdown-output">` are available, and `registerCleanup` ensures `editorInstance.destroy()` is called when `my-markdown-editor` is removed from the DOM.

<br>

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>

**📖 Integrating with Documentation Tools (e.g., Storybook)**
-------------------------------------------------------------

Storybook is an open-source tool for developing UI components in isolation, enabling you to build, document, and test your UI components independently from your main application. Integrating `datastar-components` with Storybook allows you to showcase your HTML-first Web Components in a dedicated development environment.

While `datastar-components.js` provides the fundamental primitives, setting up Storybook to correctly render components that dynamically load HTML templates and use Datastar reactivity requires specific configuration and patterns.

### **Key Steps for Storybook Integration** [↑](#-integrating-with-documentation-tools-eg-storybook)

### Step 1 - Storybook Setup [↑](#-integrating-with-documentation-tools-eg-storybook)
    
*   **Install Storybook:** Follow the official Storybook documentation to set up Storybook for Web Components (e.g., `@storybook/web-components-webpack5` or `@storybook/web-components-vite`).
    
*   **Serve Component Files:** Configure Storybook to serve your component `.html` files. In your `.storybook/main.js`, add your components directory to `staticDirs`:
    
    ```javascript
    // .storybook/main.js
    module.exports = {
        stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
        addons: ['@storybook/addon-essentials', '@storybook/addon-actions'], // Add actions addon for event logging
        staticDirs: ['../components'], // Point to where your .html component files are
        framework: {
        name: '@storybook/web-components-webpack5', // Or vite/other framework
        options: {},
        },
    };
    ```            
    
*   **Initialize Datastar Components Plugin:** Ensure `datastar.js` and `datastar-components.js` are loaded and initialized within the Storybook preview iframe. The most common way is via `.storybook/preview-head.html` or `.storybook/preview.js`.
    
    *   **Option A: `preview-head.html` (Recommended for global libraries)** Create a file named `.storybook/preview-head.html` in your Storybook configuration directory:
        
        ```html
        <!-- .storybook/preview-head.html -->
        <script src="https://cdn.jsdelivr.net/npm/datastar@1.0.0-beta.11/dist/datastar.js" type="module"></script>
        <script src="/path/to/your/datastar-components.js" type="module"></script>
        <script type="module">
            import { initDatastarComponents } from '/path/to/your/datastar-components.js'; // Use absolute path from staticDirs root
            document.addEventListener('DOMContentLoaded', () => {
            initDatastarComponents(window.Datastar);
            console.log("[Storybook] Datastar Components Plugin initialized in preview iframe.");
            });
        </script>
        ```
        
            
        
        (Adjust `/path/to/your/datastar-components.js` based on your `staticDirs` configuration).
        
    *   **Option B: `preview.js` (If using NPM imports)** If you're bundling `datastar` and `datastar-components` as part of your build process:
        
        ```javascript
        // .storybook/preview.js
        import { initDatastarComponents } from '../path/to/your/datastar-components.js';
        import { Datastar } from 'datastar'; // Assuming datastar is an npm dependency
        
        if (Datastar) { // Check if Datastar global is available or import it
            document.addEventListener('DOMContentLoaded', () => {
            initDatastarComponents(Datastar); // Pass the Datastar instance
            });
        } else {
            console.warn("Datastar global or import not found. Ensure it's loaded before the plugin.");
        }
        
        // Other Storybook global decorators or parameters can go here
        ```
                
### Step 2 - Creating Stories for Datastar Components [↑](#-integrating-with-documentation-tools-eg-storybook)

Instead of manually constructing the complex `data-component-src` and `data-prop-*` attributes in every story, you can use the `storybook-datastar-component-wrapper.js` (provided above) to simplify story creation.
    
*   **Import the Wrapper:** Ensure the `storybook-datastar-component-wrapper.js` is imported in your Storybook stories. You'll typically place this wrapper file in a `src/storybook-helpers` or similar directory.
    
    ```javascript
    // src/stories/my-greeting-card.stories.js
    import { html } from 'lit';
    import { action } from '@storybook/addon-actions';
    import '../storybook-helpers/storybook-datastar-component-wrapper.js'; // Adjust path
    ```
    
*   **Define Stories using the Wrapper:**
    
    ```javascript
    // src/stories/MyGreetingCard.stories.js (example)
    export default {
        title: 'Components/MyGreetingCard',
        // Define argTypes for Storybook controls
        argTypes: {
        salutation: { control: 'text', defaultValue: 'Hello' },
        recipient: { control: 'text', defaultValue: 'Storybook User' },
        sender: { control: 'text', defaultValue: 'Storybook' },
        // Action for events emitted by the component
        onProfileEdit: { action: 'profileEdit' },
        },
        parameters: {
        // Optional: configure layout for Storybook
        layout: 'centered',
        },
    };
    
    // Template using the wrapper
    const Template = (args) => html`
        <storybook-datastar-component-wrapper
        src="/components/my-greeting-card.html"
        .props="${{ // Pass props as an object
            salutation: args.salutation,
            recipient: args.recipient,
            sender: args.sender,
        }}"
        .args="${args}" // Pass all args to the wrapper for event handling
        .slotContent="${html`<p>This is slotted content!</p>`}" // Example of passing slot content
        ></storybook-datastar-component-wrapper>
    `;
    
    export const Default = Template.bind({});
    Default.args = {
        salutation: 'Hi',
        recipient: 'Developer',
        sender: 'The Wrapper',
    };
    
    export const Formal = Template.bind({});
    Formal.args = {
        salutation: 'Greetings',
        recipient: 'Esteemed Colleague',
        sender: 'Your AI',
    };
    
    // Example for a component with conditional loading (data-load-if)
    // src/stories/MyLazyComponent.stories.js
    export const LazyLoaded = (args) => html`
        <storybook-datastar-component-wrapper
        src="/components/my-complex-modal.html"
        .props="${{ /* any props */ }}"
        .loadIf="${args.isVisible}" // Controls data-load-if
        >
        <p>Content for the lazy loaded modal.</p>
        </storybook-datastar-component-wrapper>
    `;
    LazyLoaded.args = { isVisible: false };
    LazyLoaded.argTypes = { isVisible: { control: 'boolean' } };
    ```
        

### Benefits of Integration Pattern [↑](#-integrating-with-documentation-tools-eg-storybook)

*   **Simplified Story Creation:** Developers write less boilerplate HTML for each story.
    
*   **Dynamic Prop Management:** Leverage Storybook's `args` and `argTypes` to easily control `data-prop-*` values from the Storybook UI.
    
*   **Event Logging:** Use `@storybook/addon-actions` to see events emitted by your components.
    
*   **Isolating Dependencies:** You can combine this with tools like Mock Service Worker (MSW) to intercept `fetch` requests made by your components, providing consistent mock data for documentation and testing.
    
*   **Visual Regression Testing:** Storybook is ideal for setting up visual regression tests (e.g., with Chromatic), ensuring UI consistency across changes.
    

By adopting this approach, you can create a rich, interactive documentation site for your `datastar-components` components, making them easier to understand, test, and reuse throughout your projects.

---
<p align="right"><a href="#-table-of-contents">⬆️ Back to Top</a></p><br><br>




**🤝 Community Engagement**
------------------------------

At **Aerea**, we're dedicated to fostering **open-source communities** and strive to encourage participation in thier projects by providing tools and resources that empower developers.

This plugin is designed to make developing Web Components with `Datastar` easy, powerful, straightforward and robust.

### Our Contribution [↑](#-community-engagement)

🎁This plugin is a direct contribution to the community from:

[Vernon Young, Founder & CEO](https://aerea.co/vernon)

[**Aerea Co. | Chicago, IL** | https://aerea.co](https://aerea.co) 

<br>

### Feedback & Support [↑](#-community-engagement)
We believe in the power of community and collaboration. Your feedback is crucial for the evolution of the `datastar-components` plugin. Whether you're a developer, designer, or just curious about how to use this plugin, we want to hear from you! We welcome all contributions, whether you're improving documentation, fixing bugs, or adding new features. Your feedback is invaluable in making this plugin better for everyone.

**Here's how you can contribute or get support:**

* **Report Issues & Bugs:** If you find a bug or have a suggestion, please open an issue on our [GitHub Issues page](https://github.com/aereaco/datastar-components/issues).
* **Questions, Feedback & Discussions:** For general questions, feedback, or to discuss new ideas, head over to our [GitHub Discussions page](https://github.com/aereaco/datastar-components/discussions).

<br>

### Acknowledgments [↑](#-community-engagement)

💖Special thanks to the **Datastar** team for their contributions and support.

* [**Datastar** | The hypermedia framework | https://data-star.dev/](https://data-star.dev/) 

* [**Datastar GitHub** | https://github.com/starfederation/datastar](https://github.com/starfederation/datastar)

* [**Datastar Discord** | https://discord.gg/9Z2c5a6](https://discord.gg/9Z2c5a6)

* [**Datastar Documentation** | https://docs.data-star.dev/](https://docs.data-star.dev/)

<br><br>

Hoping to build a better future together, one component at a time!

<br><br>

---
<p align="center"><a href="#-table-of-contents">⬆️ Back to Top</a></p>

---

<p align="center">© 2025 Aerea Co. All rights reserved.</p>
