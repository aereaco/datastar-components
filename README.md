**🚀🌐 Datastar Components Plugin 🌐🚀**
========================================
***HTML-First Web Components with DatastarJS Reactivity, Simplified.***

The datastar-components plugin empowers you to build reusable, reactive Web Components using the simplicity and power of HTML-first development. It seamlessly integrates with Datastar, automatically handling the complexities of Shadow DOM, CSS scoping, and comprehensive JavaScript execution, making component development a breeze.

**✨ Key Features**
------------------
***Unlocking powerful capabilities with simplicity.***

*   **HTML-First Component Definition:** Define your components using intuitive HTML templates, supporting both Light DOM and Shadow DOM for flexible encapsulation.
    
*   [**Seamless DatastarJS Integration**](#seamless-datastarjs-integration "null"): Full reactivity with DatastarJS signals and actions directly within your components.
    
*   [**Smart CSS Management**](#styles-css-management "null"): Efficiently handles component-specific styles using Constructable Stylesheets for Shadow DOM and intelligent rewriting for Light DOM.
    
*   [**Robust JavaScript Execution: Declarative vs. Imperative**](#javascript-execution-declarative-vs-imperative "null"): Execute all types of `<script>` tags (module, classic, external, inline) sequentially and reliably within your component's scope, encouraging declarative patterns but providing clear guidance for imperative control when needed, especially for third-party integrations.
    
*   [**Reactive Prop System**](#reactive-prop-system-data-component-prop- "null"): Pass dynamic data from parent to child components using `data-component-prop-*` attributes with automatic reactivity.
    
*   [**Standard Slot Support**](#slots-projecting-content "null"): Easily project content into designated areas of your components using native `<slot>` elements.
    
*   [**Advanced Error Handling & Fallback UI**](#advanced-error-handling-fallback-ui--recovery "null"): Provides detailed error reporting and allows for defining fallback HTML snippets to render if components fail to load or initialize.
    
*   [**Native Form Integration (Form-Associated Custom Elements)**](#form-association-form-associated-custom-elements "null"): Integrate your custom components directly into native HTML forms for submission and validation.
    
*   **Enhanced Lifecycle Management**: Offers reliable lifecycle hooks including disconnectedCallback for resource cleanup and adoptedCallback for document transitions.
    
*   [**Dynamic Theming with CSS Variables**](#enhanced-theming-and-css-variable-management "null"): Utilities for setting and and getting CSS Custom Properties to streamline component-specific and application-wide theming.
    
*   [**Backend Integration: Server-Sent Events (SSE)**](#backend-integration-server-sent-events-sse "null"): Seamlessly integrate real-time backend updates and logic into your components using Datastar's SSE capabilities.
    
*   **Optimized Performance**: Features like conditional loading, intelligent caching, and efficient DOM scanning ensure your application remains fast and responsive.
    
*   [**SSR & Hydration Readiness**](#-server-side-rendering-ssr--hydration-readiness-1 "null"): Automatically detects server-rendered content and hydrates it, providing fast initial loads and seamless interactivity.
    
*   [**Dynamic & Conditional Routing**](#-dynamic--conditional-routing-1 "null"): Leverage Datastar's primitives and component features to build flexible, high-performance routing solutions.
    

**📙 Table of Contents**
------------------------
***Your guide to navigating the Datastar Components journey.***

### [**🚀 Getting Started**](#-getting-started-1 "null")
_Begin your journey here to understand the core concepts._

*   [Overview](#overview "null")
    
*   [data-component-src](#data-component-src "null")
    
*   [data-component-prop-\*](#data-component-prop- "null")
    
*   [data-component-load-if](#data-component-load-if "null")
    
*   [data-component-form-associated](#data-component-form-associated "null")
    
*   [data-component-fallback](#data-component-fallback "null")
    
*   [data-component-connected](#data-component-connected "null")
    
*   [data-component-disconnected](#data-component-disconnected "null")
    

### [**📦 Installation & Setup**](#-installation--setup-1 "null")
_Setting up your development environment to start building._

*   [Step 1 - Include the Libraries](#step-1---include-the-libraries "null")
    
*   [Step 2 - Set Up Your Development Server](#step-2---set-up-your-development-server "null")
    

### [**👷 Creating Your First Component**](#-creating-your-first-component-1 "null")
_Hands-on building of foundational Datastar components._

*   [Seamless DatastarJS Integration](#seamless-datastarjs-integration "null")
    
*   [1st Component - Light DOM](#1st-component---light-dom-my-light-counterhtml "null")
    
*   [2nd Component - Shadow DOM (Open)](#2nd-component---shadow-dom-open-my-shadow-open-counterhtml "null")
    
*   [3rd Component - Shadow DOM (Closed)](#3rd-component---shadow-dom-closed-my-shadow-closed-counterhtml "null")
    
*   [Using Your Components in index.html](#using-your-components-in-indexhtml "null")
    

### [**📚 Functionality & Capabilities**](#-functionality--capabilities-1 "null")
_Diving deeper into how your components work and what they can do._

*   [Template Usage](#template-usage-defining-your-component-structure "null")
    
*   [Styles (CSS) Management](#styles-css-management "null")
    
*   [JavaScript Execution: Declarative vs. Imperative](#javascript-execution-declarative-vs-imperative "null")
    
*   [Reactive Prop System](#reactive-prop-system-data-component-prop- "null")
    
*   [Slots: Projecting Content](#slots-projecting-content "null")
    
*   [Scoped IDs for Accessibility and Internal Linking](#scoped-ids-for-accessibility-and-internal-linking "null")
    
*   [Conditional Component Loading (data-component-load-if)](#conditional-component-loading-data-component-load-if "null")
    
*   [Form Association (Form-Associated Custom Elements)](#form-association-form-associated-custom-elements "null")
    
*   [Composing Components](#composing-components "null")
    
*   [Backend Integration: Server-Sent Events (SSE)](#backend-integration-server-sent-events-sse "null")
    

### [**⚡ Performance & Optimizations**](#-performance--optimizations-1 "null")
_Ensuring your applications are fast, efficient, and resilient._

*   [Optimized Network Requests](#optimized-network-requests "null")
    
*   [Efficient DOM Scanning](#efficient-dom-scanning "null")
    
*   [Native Caching](#native-caching "null")
    
*   [Enhanced Theming and CSS Variable Management](#enhanced-theming-and-css-variable-management "null")
    
*   [Advanced Error Handling (Fallback UI & Recovery)](#advanced-error-handling-fallback-ui--recovery "null")
    
*   [Adopted Callback Integration](#adopted-callback-integration "null")
    
*   [Content Ready Lifecycle Hook (contentReadyCallback)](#content-ready-lifecycle-hook-contentreadycallback "null")
    
*   [Opinionated Lifecycle Integration for Cleanup](#opinionated-lifecycle-integration-for-cleanup "null")
    

### [**💧 Server-Side Rendering (SSR) & Hydration Readiness**](#-server-side-rendering-ssr--hydration-readiness-1 "null")
_Achieving fast initial loads and seamless interactivity._

*   [Automatic Hydration Detection](#automatic-hydration-detection "null")
    
*   [Preventing FOUC & Performance](#preventing-fouc--performance "null")
    
*   [Seamless Transition](#seamless-transition "null")
    
*   [Handling Hydration of Slot Content](#handling-hydration-of-slot-content "null")
    
*   [Hydration Benefits](#hydration-benefits "null")
    

### [**🧩 Integration with Third-Party Libraries**](#-integration-with-third-party-libraries-1 "null")
_Connecting Datastar components with external JavaScript ecosystems._

*   [Key Principles](#key-principles "null")
    
*   [Example 1: Charting Library (Recharts-like)](#example-1-charting-library-recharts-like "null")
    
*   [Example 2: Simple Markdown Editor (Conceptual)](#example-2-simple-markdown-editor-conceptual "null")
    

### [**🌐 Dynamic & Conditional Routing**](#-dynamic--conditional-routing-1 "null")
_Crafting fluid navigation and dynamic content experiences._

*   [Datastar's Core Routing Mechanism](#datastars-core-routing-mechanism "null")
    
*   [Component-Based Routing Paradigm](#component-based-routing-paradigm "null")
    
*   [Dynamic Routing](#dynamic-routing "null")
    
*   [Conditional Routing](#conditional-routing "null")
    

### [**📐 Design Diverse User Experiences**](#-design-diverse-user-experiences-1 "null")
_Applying Datastar components to various application architectures._

*   [Multi-Page Applications (MPA)](#multi-page-applications-mpa "null")
    
*   [Single-Page Applications (SPA)](#single-page-applications-spa "null")
    
*   [Server-Side Rendering (SSR) with Client-Side Rendering (CSR) Hydration](#server-side-rendering-ssr-with-client-side-rendering-csr-hydration "null")
    
*   [Immersive Canvas Experiences (Charts, 3D, Physics, Gaming)](#immersive-canvas-experiences-charts-3d-physics-gaming "null")
    
*   [Enhanced UX & Optimizations](#enhanced-ux--optimizations "null")
    

### [**📖 Integrating with Documentation Tools (e.g., Storybook)**](#-integrating-with-documentation-tools-eg-storybook-1 "null")
_Documenting and showcasing your HTML-first Web Components._

*   [Key Steps for Storybook Integration](#key-steps-for-storybook-integration "null")
    
*   [Step 1 - Storybook Setup](#step-1---storybook-setup "null")
    
*   [Step 2 - Creating Stories for Datastar Components](#step-2---creating-stories-for-datastar-components "null")
    
*   [Benefits of Integration Pattern](#benefits-of-integration-pattern "null")
    

### [**🤝 Community Engagement**](#-community-engagement-1 "null")
_Join our mission to empower developers with open-source tools._

*   [Our Contributions](#our-contribution "null")
    
*   [Feedback & Support](#feedback--support "null")
    
*   [Acknowledgments](#acknowledgments "null")

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>    



🚀 **Getting Started**
----------------------
***Begin your journey here to understand the core concepts.***

This section provides a quick overview of how to start using the `datastar-components` plugin and introduces its core attributes. We'll explore how to leverage Datastar's declarative power right from your HTML, making component development intuitive and efficient.

<p align="right"><a href="#-getting-started">⬆️</a></p>

### Overview
_A glimpse into HTML-first, reactive Web Components._

The `datastar-components` plugin seamlessly integrates with the core Datastar framework to enable the creation of HTML-first Web Components. It allows you to define reusable and reactive UI components using standard HTML files, handling the complexities of Shadow DOM, CSS scoping, and comprehensive JavaScript execution automatically. This approach simplifies component development by keeping markup, styles, and logic co-located within a single HTML file, which is then dynamically loaded and brought to life with Datastar's reactivity system.

The plugin introduces several custom `data-*` attributes, all following a `data-component-*` naming convention, to provide specific functionalities for component loading, data passing, and error handling. This clear naming convention helps differentiate them from standard Datastar attributes and ensures compatibility with other plugins.

<p align="right"><a href="#-getting-started">⬆️</a></p>

### `data-component-src`
_The foundational link to your component's HTML definition._

Specifies the URL to the HTML file that defines the component's structure, styles, and scripts. This is the primary attribute for dynamically loading your component's content. Think of it as the source of truth for your component's declarative markup and logic.

*   **Usage:** `<my-component data-component-src="/path/to/my-component.html"></my-component>`
    
<p align="right"><a href="#-getting-started">⬆️</a></p>

### `data-component-prop-*`
_Declaratively passing reactive data from parent to child components._

Used to pass reactive data (props) from a parent element to a component. The string after `data-component-prop-` defines the prop's name (e.g., `data-component-prop-message` creates a `message` prop). These attributes are observed, and their values are made available as reactive Datastar signals within the component's scope via the `$props` object and as individual signals. This provides a clean, declarative way to flow data downwards in your component tree.

*   **Usage:** `<my-component data-component-prop-message="Hello World!"></my-component>`
    
<p align="right"><a href="#-getting-started">⬆️</a></p>

### `data-component-load-if`
_Conditionally loading components for optimized performance._

Controls whether a component is fetched and mounted based on a Datastar expression. The component's HTML and scripts are only loaded and processed when the expression evaluates to `true`. This is immensely useful for lazy loading components to improve initial page performance, ensuring resources are only consumed when needed.

*   **Usage:** `<my-lazy-component data-component-src="/path/to/lazy.html" data-component-load-if="$isDataReady"></my-lazy-component>`

<p align="right"><a href="#-getting-started">⬆️</a></p>

### `data-component-form-associated`
_Integrating custom elements seamlessly into native HTML forms._

Added to a component's `<template>` tag (within its HTML source file) to enable the component to participate in native HTML form submissions and behaviors. This makes the custom element act like a standard form control, allowing its value to be included in `FormData` and react to form events like `reset()`. This declarative flag is key to building complex, yet native-feeling, form inputs.

*   **Usage (in component HTML file):**
    
    ```html
    <template shadowroot="open" data-component-form-associated>
        <!-- Component content and its internal input element -->
    </template>
    ```

<p align="right"><a href="#-getting-started">⬆️</a></p>

### `data-component-fallback`
_Ensuring graceful degradation with a declarative error UI._

Provides a fallback URL to an HTML file. If the primary component specified by `data-component-src` fails to load, parse, or execute its scripts, the content from this `data-component-fallback` URL will be loaded and displayed in its place. This offers a robust, declarative way to handle component failures and provide a better user experience.

*   **Usage:**
    
    ```html
    <my-component
        data-component-src="/path/to/main.html"
        data-component-fallback="/path/to/error-fallback.html"
    ></my-component>
    ```

<p align="right"><a href="#-getting-started">⬆️</a></p>

### `data-component-connected`
_Declaratively triggering actions when your component joins the DOM._

Executes a Datastar expression when the component's `connectedCallback` fires. This is useful for declaratively triggering actions, initializing external libraries, or performing setup logic immediately after the component is added to the DOM.

*   **Usage with JavaScript expressions:**
    
    ```html
    <my-component
        data-component-src="/components/my-init-component.html"
        data-component-connected="console.log('Component is now connected to the DOM!')"
    ></my-component>
    ```
        
    
*   **Usage with Datastar Actions:**
    
    ```html
    <my-user-list
        data-component-src="/components/user-list.html"
        data-signals="{ users: [] }"
        data-component-connected="@get('/api/users', { datastar: 'users' })"
    ></my-user-list>
    
    <my-welcome-message
        data-component-src="/components/welcome-message.html"
        data-signals="{ messageVisible: false }"
        data-component-connected="@setAll('messageVisible', true)"
    ></my-welcome-message>
    ```

<p align="right"><a href="#-getting-started">⬆️</a></p>

### `data-component-disconnected`
_Declaratively initiating cleanup when your component leaves the DOM._

Executes a Datastar expression when the component's `disconnectedCallback` fires. This is useful for declaratively triggering cleanup actions, sending analytics, or notifying parent components when the component is removed from the DOM.

*   **Applies to:** The custom element tag (e.g., `<my-component>`).
    
*   **Usage with JavaScript expressions:**
    
    ```html
    <my-component
        data-component-src="/components/my-cleanup-component.html"
        data-component-disconnected="console.log('Component has been removed from the DOM. Cleaning up!')"
    ></my-component>
    ```
        
    
*   **Usage with Datastar Actions:**
    
    ```html
    <my-analytics-tracker
        data-component-src="/components/analytics-tracker.html"
        data-signals="{ pageVisitData: {} }"
        data-component-disconnected="@post('/api/log-visit', { body: $pageVisitData })"
    ></my-analytics-tracker>
    
    <my-temporary-alert
        data-component-src="/components/temporary-alert.html"
        data-signals="{ alertVisible: true }"
        data-component-disconnected="@setAll('alertVisible', false)"
    ></my-temporary-alert>
    ```
        
<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>    



📦 **Installation & Setup**
---------------------------
***Setting up your development environment to start building.***

Before we dive into creating components, let's get your development environment ready. Follow these straightforward steps to prepare your project for Datastar Components.

<p align="right"><a href="#-installation--setup">⬆️</a></p>

### Step 1 - Include the Libraries
_Adding Datastar and its components plugin to your project._

Ensure `datastar.js` is loaded **before** `datastar-components.js`. It's recommended to load them as ES Modules for optimal performance and modern development practices.

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
        // These are global events that provide insight into component lifecycle.
        window.addEventListener('component-load-error', (event) => {
            console.error('Caught component load error:', event.detail);
            // Example: send to an analytics service or display a user-friendly message
            alert(`Component Load Error: ${event.detail.tagName} from ${event.detail.src} - ${event.detail.message}`);
        });

        window.addEventListener('component-script-error', (event) => {
            console.error('Caught component script error:', event.detail);
            // Example: log the error and component context for debugging.
            alert(`Component Script Error in ${event.detail.tagName}: ${event.detail.originalError.message}`);
        });

        window.addEventListener('component-fallback-rendered', (event) => {
            console.warn('Caught component fallback rendered:', event.detail);
            // You might log this to a monitoring system or visually indicate a degraded state.
        });
    </script>

    <style>
        /* Basic styling for a pleasant learning experience */
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

<p align="right"><a href="#-installation--setup">⬆️</a></p>

### Step 2 - Set Up Your Development Server
_Serving your HTML component files for browser access._

To load your component HTML files, you'll need a simple web server. Here’s a quick setup using Deno or Node.js with Express, ensuring your browser can access the component definitions.

#### Using Deno Runtime

1.  **create `server.ts` file**:
    
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
        
    
2.  **Run Deno Server**: Open your terminal in the directory where `server.ts` is saved and run:
    
    ```bash
    deno run --allow-net --allow-read server.ts
    ```

    Now, your `index.html` and component `.html` files can be accessed via `http://localhost:8000/`.

#### Using Node.js with Express
    
1.  **Initialize npm and install Express**:
    
    ```bash
    npm init -y
    npm install express
    ```
        
    
2.  **Create `server.js` file**:
    
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

    Your `index.html` and component `.html` files can be accessed via `http://localhost:3000/`.

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>    



👷 **Creating Your First Component**
---------------------------------------
***Hands-on building of foundational Datastar components.***

Now that your environment is set up, let's create your very first interactive components. This section will guide you through defining components using HTML-first principles and Datastar's declarative reactivity.

<p align="right"><a href="#-creating-your-first-component">⬆️</a></p>

### Seamless DatastarJS Integration
_The heart of Datastar components: HTML-first reactivity._

The `datastar-components` plugin fundamentally integrates with DatastarJS by treating the HTML content of your components as a Datastar-enabled template. This means you can use all of Datastar's powerful declarative attributes (e.g., `data-signals`, `data-text`, `data-on`, `data-show`, `data-for`) directly within your component's HTML. You **do not** need to manually initialize or bind Datastar within each component's JavaScript; the plugin handles this automatically.

When a component is loaded and connected to the DOM, the plugin automatically performs a Datastar scan on the component's root (either its Shadow DOM or the component element itself in Light DOM). This scan discovers all `data-*` directives and brings them to life, creating reactive signals, binding event listeners, and managing DOM updates as specified. This "HTML-first" approach allows you to build highly interactive and dynamic components primarily with markup, reducing the need for imperative JavaScript for common UI patterns.

Furthermore, any reactive `data-component-prop-*` attributes passed to your component from its parent are automatically converted into Datastar signals and made available within the component's scope via the `$props` object. Individual props are also exposed directly as signals on the component's scope (e.g., `$props.yourProp` or simply `$yourProp` if no naming conflict), ensuring seamless reactive data flow.

<p align="right"><a href="#-creating-your-first-component">⬆️</a></p>

### 1st Component - Light DOM (`my-light-counter.html`)
_A simple counter component demonstrating reactivity directly in the main document._

This component will render its content directly into the main DOM. While its styles might be affected by global styles, it perfectly illustrates how to achieve interactive functionality purely declaratively with Datastar. Notice how all reactivity is defined directly in the HTML.

```html
<template>
    <style>
        /* Styles here can potentially leak or be affected by global CSS */
        :host { /* This will be rewritten by the plugin to `my-light-counter` to help scope styles */
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

    <div data-signals="{ count: 0 }">
        <p>Light DOM Count: <span class="counter-display" data-text="$count"></span></p>
        <div class="controls">
            <!-- Data-on:click declaratively updates the $count signal -->
            <button data-on:click="$count--">➖ Decrement</button>
            <button data-on:click="$count++">➕ Increment</button>
        </div>
    </div>
</template>
```

<p align="right"><a href="#-creating-your-first-component">⬆️</a></p>  

### 2nd Component - Shadow DOM (Open) (`my-shadow-open-counter.html`)
_Encapsulating component logic and styles within an accessible Shadow DOM._

This component will create an "open" Shadow DOM, encapsulating its styles and DOM. Its internal DOM can be accessed from the outside via JavaScript (e.g., `componentElement.shadowRoot`). This provides strong styling isolation while maintaining debuggability. All reactivity remains purely declarative in the HTML.

```html
<template shadowroot="open">
    <style>
        /* Styles here are encapsulated within the Shadow DOM, preventing leakage */
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

    <div data-signals="{ count: 0 }">
        <p>Shadow (Open) Count: <span class="counter-display" data-text="$count"></span></p>
        <div class="controls">
            <!-- Data-on:click declaratively updates the $count signal -->
            <button data-on:click="$count--">➖ Decrement</button>
            <button data-on:click="$count++">➕ Increment</button>
        </div>
    </div>
</template>
```

<p align="right"><a href="#-creating-your-first-component">⬆️</a></p>  

### 3rd Component - Shadow DOM (Closed) (`my-shadow-closed-counter.html`)
_Achieving maximum encapsulation for your component's internals._

This component will create a "closed" Shadow DOM, offering stronger encapsulation as its internal DOM is not directly accessible from outside JavaScript (e.g., `componentElement.shadowRoot` would return `null`). This is useful when you need to strictly control internal access. Even with this encapsulation, Datastar's declarative attributes function seamlessly.

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

    <div data-signals="{ value: 'Secret Data' }">
        <p>Value: <span>[hidden]</span></p>
        <!-- Data-on:click demonstrates how signals are still accessible from within, even with closed Shadow DOM -->
        <button data-on:click="console.log($value)">Try to Log</button>
        <slot></slot>
    </div>
</template>
```

<p align="right"><a href="#-creating-your-first-component">⬆️</a></p> 

### Using Your Components in index.html
_Bringing your newly created components to life in your main application._

Now that you've defined your components, let's see how easy it is to use them in your main `index.html` file. You simply reference them using their custom HTML tags and the `data-component-src` attribute.

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
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>    



📚 **Functionality & Capabilities**
-----------------------------------
***Diving deeper into how your components work and what they can do.***

The `datastar-components` plugin intelligently parses your component's HTML template file and handles various aspects to create a fully functional Custom Element. This section explores the versatile features that empower you to build sophisticated and maintainable UI components, always emphasizing Datastar's declarative power.

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Template Usage: Defining Your Component Structure
_The foundation of your component: declarative HTML templates._

All component content **must** be wrapped within a `<template>` tag. The type of template you choose dictates how your component's DOM and styles are managed, influencing encapsulation and interaction with the main document.

**Basic (Light DOM):** Use a plain `<template>` tag when you want your component's content to be rendered directly into the main DOM tree. Styles defined within this template may be affected by or affect global CSS. The plugin will intelligently rewrite `:host` selectors to your custom element's actual tag name (e.g., `my-light-dom-component`) to help with basic scoping.
    
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
    <div data-signals="{ message: 'Hello from Light DOM!' }">
        <p data-text="$message"></p>
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

**`<template shadowroot="open">` (Shadow DOM - Open Mode):** This is the recommended approach for true encapsulation. Content within this template will be attached to an open Shadow DOM root, completely isolating its styles and DOM from the main document. "Open" means JavaScript outside the component can still access the Shadow DOM (e.g., `componentElement.shadowRoot`), which can be useful for debugging or specific integrations.
    
```html
<template shadowroot="open">
    <style>
        /* Styles here are scoped to the Shadow DOM, providing true encapsulation */
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
    <div data-signals="{ count: 0 }">
        <h3>Shadow DOM Counter (Open)</h3>
        <p>Count: <span data-text="$count"></span></p>
        <button data-on:click="$count++">Increment</button>
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

**`<template shadowroot="closed">` (Shadow DOM - Closed Mode):** Similar to `shadowroot="open"` in terms of encapsulation, but the Shadow DOM root is "closed." This means JavaScript from the outside cannot directly access the component's internal DOM (e.g., `componentElement.shadowRoot` would return `null`). This provides a stronger encapsulation boundary, ideal for components where internal implementation details must be strictly private.
    
```html
<template shadowroot="closed">
    <style>
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

    <div data-signals="{ value: 'Secret Data' }">
        <p>Value: <span>[hidden]</span></p>
        <button data-on:click="console.log($value)">Try to Log</button>
        <slot></slot>
    </div>
</template>
```
  
<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Styles (CSS) Management
_Effortlessly manage and encapsulate your component's visual presentation._
    
The plugin provides smart CSS handling to ensure your components look consistent and perform well, abstracting away much of the complexity of Web Component styling.
    
**`<style>` Tags**:
    
* **Shadow DOM**: Styles defined within `<style>` tags inside a `shadowroot` template are automatically converted into highly efficient [**Constructable Stylesheets**](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet%23constructable_stylesheet_example). This is a significant performance optimization, as styles are parsed once and then reused across all instances of the same component, boosting rendering speed and memory efficiency.
* **Light DOM**: Styles from `<style>` tags in a plain `<template>` are injected directly into the document. To assist with basic scoping and prevent accidental global clashes, the plugin intelligently rewrites `:host` selectors to your custom element's actual tag name (e.g., `my-component`).
    
* **`<link rel="stylesheet">` Tags**:
    
    External stylesheets referenced via `<link rel="stylesheet">` tags within your component templates are also handled and cached similarly to inline `<style>` tags. This ensures optimized loading and application of external CSS resources.
    
<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### JavaScript Execution: Declarative vs. Imperative
_Harnessing Datastar's declarative power, with imperative control when truly needed._
    
The `datastar-components` plugin champions **declarative development** using Datastar attributes, allowing you to define UI interactions and data binding directly in your HTML. This approach often leads to more readable, maintainable, and efficient code, as the framework handles the underlying DOM updates and reactivity. However, it also provides robust mechanisms for **imperative JavaScript** when direct DOM manipulation, complex logic, or third-party library integrations are necessary. This section outlines both approaches to help you choose the right tool for the job.
    
#### Favor Declarative JavaScript with Datastar Attributes
    
For most UI interactions and data binding, leveraging Datastar's powerful declarative attributes directly in your component's HTML is the **recommended approach**. This simplifies event wiring, state management, and DOM updates, letting you express "what" you want to happen, rather than "how" to make it happen.
    
* **Data Binding**: Use attributes like `data-text="$signalName"`, `data-attr:attributeName="$signalName"`, `data-class:className="$booleanSignal"`, `data-show="$booleanSignal"` to reactively update the DOM based on signal values.
* **Event Handling**: Use `data-on:event="expression"` or `data-on:event="@actionName()"` to execute expressions or call Datastar actions directly when an event occurs. This abstracts away manual event listener management.
* **Datastar Actions**: Any top-level `export function` in your component's module scripts are automatically registered as Datastar actions. These can then be invoked declaratively via `@actionName()` from your HTML attributes, bridging your custom JavaScript logic into the declarative flow.
    
**Example: Purely Declarative Counter** (`my-light-counter.html`)
    <small>An interactive counter, fully defined within HTML using Datastar's attributes.</small>
    
```html
<template>
    <style>/* ...styles... */</style>
    <div data-signals="{ count: 0 }">
        <p>Count: <span class="counter-display" data-text="$count"></span></p>
        <div class="controls">
            <!-- All logic is handled purely through declarative Datastar attributes -->
            <button data-on:click="$count--">➖ Decrement</button>
            <button data-on:click="$count++">➕ Increment</button>
        </div>
    </div>
</template>
```

_In this example, the entire counter logic, including state management (`data-signals`) and interaction (`data-on:click`), is defined declaratively within the HTML. No separate JavaScript file or imperative DOM manipulation is needed for this basic functionality._

#### When and How to Use Imperative JavaScript
_Bridging to direct control for complex scenarios and third-party libraries._

While declarative approaches are preferred, there are scenarios where imperative JavaScript is essential. The plugin provides a clear path for this by allowing you to write traditional JavaScript within `<script type="module">` blocks inside your component's HTML. The plugin ensures these scripts execute sequentially and provides you with the `componentInstance` (or `element` in inline contexts) to interact with the component's encapsulated environment.

*   **Typical Use Cases for Imperative JS:**
    
    *   **Complex Calculations or Logic:** When an operation is too intricate for a single Datastar expression.
        
    *   **Direct DOM Manipulation:** For scenarios not covered by Datastar's attributes (e.g., drawing on a `<canvas>`, integrating with non-reactive DOM libraries that expect direct DOM references).
        
    *   **Third-Party Library Integration:** Initializing and bridging data to external JavaScript libraries that are not Datastar-aware.
        
    *   **Advanced Event Handling:** Attaching event listeners to `window`, `document`, or managing events with complex delegation patterns not easily expressed declaratively.
        
*   **Key Aspects of Imperative JS Execution:**
    
    *   **All Script Types Supported**: The plugin reliably executes:
        
        *   **External ES Modules**: `<script type="module" src="./my-module.js"></script>`
            
        *   **Inline ES Modules**: `<script type="module">console.log('Inline module!');</script>`
            
        *   **External Classic Scripts**: `<script src="https://cdn.example.com/some-lib.js"></script>`
            
        *   **Inline Classic Scripts**: `<script>alert('Hello from classic script!');</script>`
            
    *   **Guaranteed Sequential Order**: The plugin ensures all scripts run in the exact order they appear in your component's HTML, preventing race conditions during setup.
        
    *   **Access to `componentInstance`**: Your imperative JavaScript has access to the `componentInstance` (which is the Custom Element itself), providing:
        
        *   `componentInstance.root`: The `ShadowRoot` (or the element itself for Light DOM), allowing you to query and manipulate elements within the component's private scope.
            
        *   `componentInstance.emit('eventName', detail)`: To dispatch custom events from within your component, allowing parent components to react to imperative actions declaratively.
            
        *   `componentInstance.registerCleanup(fn)`: **Crucial for imperative code.** Registers a function to be called automatically when the component is removed from the DOM, preventing memory leaks from imperative setups (see [Opinionated Lifecycle Integration for Cleanup](#opinionated-lifecycle-integration-for-cleanup "null")).
            
        *   `Datastar.scope(componentInstance)`: To access the component's Datastar scope (its signals and actions) from imperative JavaScript. This is the primary way to bridge between imperative JS logic and Datastar's reactive state.
            
        *   `componentInstance.setCssVariable()`, `componentInstance.getCssVariable()`: For programmatic control over CSS Custom Properties, enabling dynamic styling from imperative code.
            
        *   `componentInstance.contentReadyCallback()`: A reliable lifecycle hook for imperative initializations that depend on the component's internal DOM being fully loaded and ready (see [Content Ready Lifecycle Hook](#content-ready-lifecycle-hook-contentreadycallback "null")).
            

**Example: Component with Declarative Actions and Imperative Logic Bridge** (`my-interactive-card.html`) Blending Datastar's declarative power with targeted imperative control.

This example demonstrates how to define a Datastar action (`performAction`) in a module script, which can be called declaratively from HTML. It also shows an `init` function for more complex imperative setup that might involve internal event listeners or other non-Datastar specific logic, clearly illustrating the bridge between these paradigms.

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

    <!-- This module script will be loaded and its exports registered as Datastar actions -->
    <script type="module" src="./card-logic.js"></script>

    <div data-signals="{ message: 'Ready', clickCount: 0 }">
        <h3 data-text="$message"></h3>
        <p>Clicks: <span data-text="$clickCount"></span></p>
        <!-- Calls a Datastar action 'performAction' defined in card-logic.js declaratively -->
        <button data-on:click="performAction()">Click Me!</button>
        <button class="reset-button">Imperative Reset</button> <!-- Button to be handled imperatively -->
        <script>
            // Inline classic scripts run sequentially after module scripts.
            // Avoid complex logic here if it needs component instance access (use export init instead).
            console.log("Inline classic script inside my-interactive-card.html executed.");
        </script>
    </div>
</template>
```

**components/card-logic.js:**

Defining Datastar actions and imperative setup for `my-interactive-card.html`.
    
```javascript
// components/card-logic.js

// This function is exported and will automatically be registered as a Datastar action
// within the scope of the component it belongs to.
// It performs imperative logic but is invoked declaratively from the HTML via data-on:click.
export function performAction(ctx) { // `ctx` is the Datastar context for this component
    // Imperative logic operating on Datastar signals via the `ctx` object.
    // We use .peek() to read current values and .set() to update signals.
    ctx.message.set(ctx.message.peek() === 'Ready' ? 'Action Performed!' : 'Ready');
    ctx.clickCount.set(ctx.clickCount.peek() + 1);

    // Imperative action: emitting a custom event from the component instance.
    // This allows parent components to react declaratively to this event.
    if (ctx.element && typeof ctx.element.emit === 'function') {
            ctx.element.emit('action-performed', { newCount: ctx.clickCount.peek() });
    }
    console.log("Datastar action 'performAction' executed by card-logic.js!");
}

// The 'init' function is a special export recognized by the plugin.
// It receives the Custom Element instance (`componentInstance`) as an argument,
// making it the ideal place for imperative setup that requires direct DOM access
// or integration with non-Datastar-aware libraries.
export function init(componentInstance) {
    console.log(`Component ${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) initialized from card-logic.js module.`);

    // Imperative setup: Attaching a traditional event listener to an internal element.
    // This is useful for interactions that are too complex for data-on attributes
    // or when integrating with specific library APIs.
    const resetButton = componentInstance.root.querySelector('.reset-button');
    if (resetButton) {
        const resetHandler = () => {
            // Access Datastar signals imperatively via Datastar.scope() for this instance.
            // This demonstrates bridging imperative user interaction to declarative state.
            Datastar.scope(componentInstance).clickCount.set(0);
            Datastar.scope(componentInstance).message.set('Reset by imperative JS!');
            console.log('Imperative Reset button clicked!');
        };
        resetButton.addEventListener('click', resetHandler);

        // ALWAYS register cleanup for imperative event listeners to prevent memory leaks.
        // This function will be called automatically when the component is removed.
        componentInstance.registerCleanup(() => {
            resetButton.removeEventListener('click', resetHandler);
            console.log(`${componentInstance.tagName} - Imperative reset button listener removed.`);
        });
    }

    // Example of registering another general cleanup function for any other imperative resources.
    componentInstance.registerCleanup(() => {
        console.log(`General cleanup for ${componentInstance.tagName} from card-logic.js.`);
    });
}
```

_This example showcases a powerful blend: `performAction` is callable declaratively from HTML, but its internal logic is imperative. The `init` function demonstrates how to attach traditional event listeners and interact with signals imperatively, highlighting the crucial need for manual cleanup via `registerCleanup` for such imperative setups._

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Reactive Prop System (`data-component-prop-*`)
_Effortlessly pass and react to data changes from parent to child components._

The plugin makes passing data into your components straightforward and reactive using `data-component-prop-*` attributes. This system is fully integrated with Datastar's reactivity, ensuring your components automatically update when parent data changes.

*   **Defining a Prop**: Simply add an attribute to your component tag starting with `data-component-prop-`. The part after `data-component-prop-` becomes the prop name (camelCased automatically if using kebab-case in HTML).
    
    *   Example: `data-component-prop-title="Hello"` becomes a `title` prop.
        
*   **Accessing Props**: Inside your component's HTML and JavaScript, props are available via a reactive Datastar signal object named `$props`. Additionally, for convenience, individual props are also exposed directly as signals on the component's Datastar scope. This allows for direct, declarative use in your HTML.
    
    *   Access in HTML (preferred, declarative): `data-text="$props.title"` or `data-text="$title"`
        
    *   Access in JS (within component scope, imperative bridge): `ctx.$props.peek().title` or `ctx.title.peek()`
        
*   **Reactive Updates**: If a `data-component-prop-*` attribute on the parent element changes, the corresponding `$props` signal and individual prop signals inside your component will automatically update, triggering any associated Datastar reactivity.
    

**Example: Greeting Card with Props** (`my-greeting-card.html`) A reusable greeting card component demonstrating declarative prop usage.

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

    <div data-signals="{ internalMessage: 'How are you?' }">
        <!-- Access props declaratively via $props.propName or directly by $propName -->
        <p class="greeting" data-text="`${$salutation}, ${$recipient}!`"></p>
        <p class="from-text">From: <span data-text="$sender"></span></p>
        <p>Internal State: <span data-text="$internalMessage"></span></p>
    </div>
</template>
```

Usage in `index.html`: Passing static and dynamic props to the greeting card component.
    
```html
<body>
    <div class="app-container">
        <h2>Greeting Card with Props</h2>
        <my-greeting-card
            data-component-src="/components/my-greeting-card.html"
            data-component-prop-salutation="Hello"
            data-component-prop-recipient="Datastar User"
            data-component-prop-sender="The Plugin"
        ></my-greeting-card>

        <button data-signals="{ currentSender: 'The Plugin' }"
                data-on:click="$currentSender = ($currentSender === 'The Plugin' ? 'Your App' : 'The Plugin')">
            Change Sender (Not Reactive Example on currentSender)
            </button>
        <br><br>
        <div data-signals="{ dynamicSalutation: 'Hi' }">
            <button data-on:click="$dynamicSalutation = ($dynamicSalutation === 'Hi' ? 'Greetings' : 'Hi')">
                Toggle Salutation
            </button>
            <!-- This demonstrates binding a prop to a dynamic Datastar signal -->
            <my-greeting-card
                data-component-src="/components/my-greeting-card.html"
                data-attr:data-component-prop-salutation="$dynamicSalutation"
                data-component-prop-recipient="Dynamic User"
                data-component-prop-sender="Datastar Parent"
            ></my-greeting-card>
        </div>
    </div>
</body>
</html>
```

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Slots: Projecting Content
_Composing components by declaratively inserting content into designated areas._

Leverage standard Web Component `<slot>` elements to allow parent elements to declaratively inject content into specific designated areas of your component. This promotes flexibility and reusability, enabling richer component composition.

*   **Default Slot**: Content placed directly inside the custom element tag that doesn't have a `slot` attribute will be projected into the `<slot>` element without a `name` attribute.
    
*   **Named Slots**: Use `<slot name="your-slot-name">` in the component's template and provide content using `slot="your-slot-name"` in the parent element.
    
*   **Fallback Content**: Any content placed directly inside a `<slot>` tag within the component's template will be rendered if no content is provided for that slot by the parent.
    

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
    </template>
    ```
    

*   Usage in `index.html`: Demonstrating how to fill default and named slots from the parent context.
    
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
        
    

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Scoped IDs for Accessibility and Internal Linking
_Ensuring unique and accessible IDs within multiple component instances._

To prevent ID conflicts when using multiple instances of the same component, the plugin provides a `generateScopedId` method on the component instance. This is crucial for maintaining proper accessibility (e.g., `for` attributes on labels) and for uniquely targeting elements within a component's isolated scope. We'll leverage Datastar's `data-attr` for a declarative approach to applying these unique IDs.

*   **Declarative Approach using `data-attr` (Recommended)**: To make the application of unique IDs declarative and reactive, you can generate the unique ID once in your component's JavaScript (`init` function or `contentReadyCallback`) and store it in a Datastar signal. Then, use Datastar's `data-attr-id` and `data-attr-for` in your HTML template to bind to this signal. This keeps the ID generation logic isolated to JavaScript while its application remains declarative in HTML.
    
*   **Usage**: Call `componentInstance.generateScopedId('your-base-id')` within your component's JavaScript to create the unique ID. Store this ID in a Datastar signal within the component's scope (e.g., `dsScope.usernameInputId = Datastar.signal(inputId);`). Then, in your HTML, use `data-attr-id="$usernameInputId"` and `data-attr-for="$usernameInputId"`.
    
*   **Example: In your component's HTML template (`my-form-component.html`)**: A form component leveraging scoped IDs for proper label-input association.
    
    ```html
    <template shadowroot="open">
        <style>/* ... styles ... */</style>
        <!-- The 'for' and 'id' attributes are set reactively by Datastar based on the $usernameInputId signal -->
        <label data-attr-for="$usernameInputId">Username:</label>
        <input type="text" data-attr-id="$usernameInputId">
        <script type="module" src="./my-form-component-logic.js"></script>
    </template>
    ```
        
    
*   **In `my-form-component-logic.js`**: Generating and exposing a scoped ID as a Datastar signal.
    
    ```javascript
    export function init(componentInstance) {
        // Generate a unique ID for the input specific to this component instance.
        // This ensures no ID conflicts when multiple instances of this component exist.
        const inputId = componentInstance.generateScopedId('username-input');
    
        // Store the generated ID in a Datastar signal within the component's scope.
        // This signal will then be used declaratively in the HTML via data-attr for ID and 'for' attribute binding.
        const dsScope = Datastar.scope(componentInstance);
        dsScope.usernameInputId = Datastar.signal(inputId);
    
        // No need for imperative querySelector and setAttribute here, as data-attr handles it declaratively!
    }
    ```
        
    
*   Now, if you have multiple `my-form-component` instances, each input and its label will have a globally unique and correctly associated ID (e.g., `my-form-component-1-username-input`, `my-form-component-2-username-input`), all applied declaratively.
    

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Conditional Component Loading (`data-component-load-if`)
_Optimizing performance by loading components only when they are truly needed._

Control when a component is loaded and rendered based on the state of a Datastar signal. This powerful feature is invaluable for improving initial page load performance by deferring the fetching and processing of components that are not immediately visible or necessary. It also enables dynamic UI patterns where components appear or disappear based on user interaction or application state, all driven declaratively.

*   **Usage**: Add the `data-component-load-if` attribute to your component tag, specifying a Datastar expression that evaluates to `true` or `false`. The component will only be fetched and mounted when the condition is `true`.
    
*   **Expanded Use Cases & Examples**:
    
    *   **Lazy Loading a Complex Dialog/Modal**: Load a heavy modal component only when the user explicitly triggers it, improving initial page responsiveness. The modal's entire HTML, CSS, and JS are deferred until `$isModalOpen` becomes `true`.
        
        **`my-complex-modal.html`**: A modal component that can be lazy-loaded.
        
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
                <!-- Emit a custom event declaratively to notify the parent to close the modal -->
                <button data-on:click="element.emit('close-modal')">Close</button>
            </div>
        </template>
        ```
            
        
        **`index.html`**: Triggering a lazy-loaded modal based on a Datastar signal.
        
        ```html
        <div data-signals="{ isModalOpen: false }">
            <button data-on:click="$isModalOpen = true">Open Complex Modal</button>
        
            <!-- The modal component is only loaded and rendered when $isModalOpen is true -->
            <my-complex-modal
                data-component-src="/components/my-complex-modal.html"
                data-component-load-if="$isModalOpen"
                data-on:close-modal="$isModalOpen = false"
            ></my-complex-modal>
        </div>
        ```
            
        
    *   **User Permission-Based Loading**: Display a component only if the current user has a specific permission or role, ensuring sensitive features are not loaded for unauthorized users.
        
        **`user-dashboard-widget.html`**: An administrative widget component.
        
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
            
        
        **`index.html`**: Conditionally displaying the admin widget based on user role.
        
        ```html
        <div data-signals="{ userRole: 'guest' }"> <!-- Imagine this signal comes from an auth system -->
            <button data-on:click="$userRole = ($userRole === 'guest' ? 'admin' : 'guest')">Toggle User Role</button>
            <p>Current Role: <span data-text="$userRole"></span></p>
        
            <!-- Admin widget only loads if $userRole is 'admin' -->
            <user-dashboard-widget
                data-component-src="/components/my-user-dashboard-widget.html"
                data-component-load-if="$userRole === 'admin'"
            ></user-dashboard-widget>
        </div>
        ```
            
        
    *   **Tabbed Interface (Lazy Tab Content)**: Load the content of inactive tabs only when they become active, improving the initial load of multi-tab interfaces by deferring content that's not immediately in view.
        
        **`tab-content-dashboard.html`**: Content for the dashboard tab.
        
        ```html
        <template shadowroot="open">
            <style>/* ...dashboard specific styles... */</style>
            <h3>Your Dashboard</h3>
            <p>Welcome to your personalized dashboard! Here's an overview of your activity.</p>
            <!-- Potentially other nested components like charts or feeds -->
        </template>
        ```
            
        
        **`tab-content-settings.html`**: Content for the settings tab.
        
        ```html
        <template shadowroot="open">
            <style>/* ...settings specific styles... */</style>
            <h3>Account Settings</h3>
            <p>Manage your preferences.</p>
            <!-- Complex forms or user management components -->
        </template>
        ```
            
        
        **`index.html`**: Implementing a tabbed interface with lazy-loaded content.
        
        ```html
        <div data-signals="{ activeTab: 'dashboard' }">
            <nav class="tabs">
                <button data-on:click="$activeTab = 'dashboard'" data-class:active="$activeTab === 'dashboard'">Dashboard</button>
                <button data-on:click="$activeTab = 'settings'" data-class:active="$activeTab === 'settings'">Settings</button>
            </nav>
        
            <div class="tab-content">
                <!-- Tab content components loaded only when their tab is active -->
                <tab-content-dashboard
                    data-component-src="/components/tab-content-dashboard.html"
                    data-component-load-if="$activeTab === 'dashboard'"
                ></tab-content-dashboard>
        
                <tab-content-settings
                    data-component-src="/components/tab-content-settings.html"
                    data-component-load-if="$activeTab === 'settings'"
                ></tab-content-settings>
            </div>
        </div>
        ```

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Form Association (Form-Associated Custom Elements)
_Integrating your custom components into native HTML form behaviors._

Seamlessly integrate your custom components with native HTML forms. By adding a `data-component-form-associated` attribute to your component's root `<template>`, your custom element can participate in form submissions, `FormData` collection, and native form behaviors like `reset()`. This declarative flag ensures your custom elements behave just like standard form controls, enhancing usability and accessibility.

*   **How it Works**:
    
    *   **`static formAssociated = true;`**: The plugin dynamically sets this property on your component's Custom Element class if `data-component-form-associated` is present in its template. This signals to the browser that your component intends to act as a form control.
        
    *   **`this.attachInternals()`**: In your component's constructor (handled implicitly by the plugin for declarative setups), the browser's `ElementInternals` object is attached. This object provides the API for interacting with the form.
        
    *   **`get value()` and `set value(newValue)`**: You must implement a `value` getter and setter on your component class. The `set` method should call `this._internals.setFormValue(newValue)` to update the form's internal representation of your component's value. The `get` method should return the component's current value. This is typically done within your component's JavaScript.
        
    *   **Lifecycle Callbacks**: Your component can optionally implement `formAssociatedCallback`, `formResetCallback`, and `formStateRestoreCallback` to react to form events, providing hooks for imperative logic when needed.
        
*   **Requirements for Your Component Template (`.html` file):**
    
    1.  Add the `data-component-form-associated` attribute to your main `<template>` tag.
        
    2.  Include an element inside your template that can serve as the primary input for the value (e.g., `<input>`, `<textarea>`).
        
    3.  Ensure your component's JavaScript updates `element.value` (which in turn calls the setter) when the internal input changes. This is the bridge from the internal DOM to the form's value.
        
*   **Component HTML Example (`my-input-component.html`):** A custom input component ready for native form integration.
    
    ```html
    <template shadowroot="open" data-component-form-associated>
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
        <!--
            The data-on:input here declaratively updates an internal signal ($editorContent).
            Then, the imperative `element.value = $editorContent` bridges this signal's value
            to the Custom Element's value getter/setter, informing the native form.
        -->
        <input type="text" placeholder="Enter value..." data-signals="{ editorContent: element.value }" data-on:input="element.value = $editorContent">
    </template>
    ```

*   **Main HTML Usage Example:** Submitting and resetting a form containing a custom input component.
    
    ```html
    <form data-signals="{ formData: null }" data-on:submit="event.preventDefault(); $formData = new FormData($event.target);">
        <label for="myCustomInput">Custom Value:</label>
        <!-- Assign a `name` attribute to your component for it to be included in FormData -->
        <my-input-component id="myCustomInput" name="custom_field_name" value="Initial Value"
                            data-component-src="/components/my-input-component.html"></my-input-component>
    
        <button type="submit">Submit Form</button>
        <button type="reset">Reset Form</button>
    
        <h3 data-show="$formData" style="display: none;" class="mt-4 text-lg font-semibold">Submitted Data:</h3>
        <pre data-show="$formData" style="display: none;" data-text="JSON.stringify(Object.fromEntries($formData), null, 2)" class="bg-gray-100 p-2 rounded"></pre>
    </form>
    ```
        
    
    In this example, when the form is submitted, `$formData` will correctly contain `custom_field_name: "current value of my-input-component"`. The `reset` button will also correctly revert `my-input-component` to its initial `value="Initial Value"`.
    

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Composing Components
_Building complex user interfaces by nesting smaller, reusable components._

Datastar Components are designed for composition, allowing you to build complex user interfaces by nesting components within each other directly in your HTML. The reactivity and prop system seamlessly extend through these nested structures, making it easy to manage data flow and interactions across your component tree declaratively.

**How it Works**: Simply include one Datastar component tag within the HTML template of another. The plugin's `MutationObserver` will detect the nested component when the parent component is rendered, and will automatically fetch and define the nested component if it hasn't been already. Data can be passed down using `data-component-prop-*` attributes, and events can bubble up or be emitted between components, all within Datastar's reactive model.
    
**Example: A User Card with a Nested Avatar Component**
    
**`my-avatar-component.html`** (A simpler, reusable component for a user's avatar and name): A small, self-contained component for displaying a user's avatar and name.
    
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
        <!-- Declaratively bind image src and conditional visibility to props -->
        <img data-attr:src="$props.imageUrl" data-show="$props.imageUrl" style="display: none;" alt="User Avatar">
        <!-- Declaratively bind text content to initials, shown only if no image URL -->
        <span data-text="!$props.imageUrl ? $props.initials : ''"></span>
    </div>
    <!-- Declaratively bind user name -->
    <span class="name" data-text="$props.userName"></span>
</template>
```
  
**`my-user-profile-card.html`** (A parent component that composes `my-avatar-component`): A profile card that nests the avatar component and manages its own state.
    
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
    <div data-signals="{ userEmail: $props.email, bio: $props.userBio }">
        <h3>User Profile</h3>
        <!-- Nested my-avatar-component with props declaratively passed from parent's props -->
        <my-avatar-component
            data-component-src="/components/my-avatar-component.html"
            data-attr:data-component-prop-user-name="$props.userName"
            data-attr:data-component-prop-initials="$props.userInitials"
            data-attr:data-component-prop-image-url="$props.imageUrl"
        ></my-avatar-component>

        <div class="details">
            <p>Email: <span data-text="$userEmail"></span></p>
            <p>Bio: <span data-text="$bio"></span></p>
        </div>
        <!-- Emitting an event with signal values; use .peek() to get current value for imperative emit -->
        <button data-on:click="element.emit('edit-profile', { name: $props.userName.peek(), email: $userEmail.peek() })">Edit Profile</button>
    </div>
</template>
```
  
**`index.html`** (The main page using the `my-user-profile-card`): Demonstrating how the composed profile card reacts to parent data changes.
    
```html
<body>
    <div class="app-container" data-signals="{ profileName: 'Alice Johnson', profileEmail: 'alice@example.com', profileBio: 'Software Engineer', profileInitials: 'AJ', profileAvatar: 'https://placehold.co/60x60/FF5733/FFFFFF?text=AJ' }">
        <h1>Composed Components Example</h1>

        <my-user-profile-card
            data-component-src="/components/my-user-profile-card.html"
            data-attr:data-component-prop-user-name="$profileName"
            data-attr:data-component-prop-email="$profileEmail"
            data-attr:data-component-prop-user-bio="$profileBio"
            data-attr:data-component-prop-user-initials="$profileInitials"
            data-attr:data-component-prop-user-avatar-url="$profileAvatar"
            data-on:edit-profile="console.log('Edit profile event received from child:', $event.detail)"
        ></my-user-profile-card>

        <button data-on:click="$profileName = 'Bob Smith'; $profileEmail = 'bob@example.com'; $profileInitials='BS'; $profileAvatar=''">
            Change User (No Avatar)
        </button>
        <button data-on:click="$profileName = 'Charlie Brown'; $profileEmail = 'charlie@example.com'; $profileInitials='CB'; $profileAvatar='https://placehold.co/60x60/33FF57/000000?text=CB'">
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
</html>
```
   
This example demonstrates:

*   **Nesting**: `my-avatar-component` is placed directly inside `my-user-profile-card.html`, illustrating declarative component composition.
    
*   **Prop Flow (Declarative)**: Props like `$userName`, `$email`, `$userBio` are passed from `index.html` to `my-user-profile-card`. Crucially, `$userName`, `$userInitials`, and `$userAvatarUrl` are _re-passed_ from `my-user-profile-card`'s `$props` to `my-avatar-component` using `data-attr:data-component-prop-*`, showcasing seamless declarative data flow through multiple levels of components.
    
*   **Reactivity**: Changes to `$profileName`, `$profileEmail`, `$profileAvatar` in `index.html` will reactively update both the `my-user-profile-card` and the nested `my-avatar-component`, without any manual DOM manipulation.
    
*   **Event Bubbling**: The `edit-profile` event emitted imperatively by `my-user-profile-card` can be caught by `index.html` (`data-on:edit-profile`), providing a clean way for children to communicate with parents.
        

<p align="right"><a href="#-functionality--capabilities">⬆️</a></p>

### Backend Integration: Server-Sent Events (SSE)
_Connecting your components to real-time backend updates with declarative power._

Datastar's core strength lies in its ability to interact with backends primarily through Server-Sent Events (SSE). This enables highly efficient real-time updates and dynamic content delivery without full page reloads. The `datastar-components` plugin seamlessly integrates with this model, allowing you to build reactive components that are easily connected to your backend logic, primarily through declarative means.

Backend plugin actions (`@get`, `@post`, `@put`, `@patch`, `@delete`) send requests to your server. Crucially, the responses to these actions are expected to contain **zero or more** Datastar SSE events. These events are then automatically processed by the Datastar core, which will update signals, merge HTML fragments, or execute scripts as defined in the SSE stream. This makes integrating backend logic highly declarative, as you simply define what action to take, and Datastar handles the update based on the server's instructions.

#### Declarative SSE Interaction

For most common backend interactions where you want to update signals or swap HTML fragments, you can rely purely on Datastar's declarative actions and the standard SSE event types (`datastar-merge-signals`, `datastar-merge-fragments`). This is the preferred method, minimizing client-side JavaScript.

*   **How it works**:
    
    1.  Your component HTML uses a Datastar action (e.g., `data-on:click="@post('/api/update-data', { body: $myData })"`).
        
    2.  The backend processes the request and responds with one or more Datastar SSE events (e.g., `event: datastar-merge-signals\ndata: signals {"userCount": 10}\n\nevent: datastar-merge-fragments\ndata: selector #message\ndata: fragments <div id="message">Data updated!</div>`).
        
    3.  The Datastar core (running within your component's scope) automatically processes these events, updating relevant signals (`$userCount`) or merging HTML (`#message`) into the DOM. Your component's reactivity then handles the UI updates based on these signal changes, all without writing explicit `fetch` or DOM manipulation code on the client.
        
*   **Example: Live Data Display Component** (`my-live-data-component.html`) A component that fetches and displays live data reactively from the server via SSE.
    
    This component declaratively fetches live data and updates its display based on SSE responses from the backend.
    
    ```html
    <template shadowroot="open">
        <style>
            :host {
                display: block;
                border: 1px solid #cce5ff;
                padding: 20px;
                border-radius: 8px;
                background-color: #e0faff;
                margin-top: 20px;
                text-align: center;
            }
            .data-display {
                font-size: 2.5em;
                font-weight: bold;
                color: #007bff;
                margin-bottom: 15px;
            }
            .last-updated {
                font-size: 0.9em;
                color: #6c757d;
            }
            button {
                background-color: #007bff;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    
        <div data-signals="{ currentPrice: 'Fetching...', lastUpdate: 'N/A' }">
            <h3>Live Stock Price</h3>
            <p class="data-display" data-text="`$${$currentPrice}`"></p>
            <p class="last-updated" data-text="`Last updated: ${$lastUpdate}`"></p>
            <!-- Declaratively fetch new data when button is clicked. -->
            <!-- The backend is expected to respond with datastar-merge-signals events. -->
            <button data-on:click="@get('/api/live-price', { datastar: { currentPrice: 'value', lastUpdate: 'timestamp' } })">Refresh Price</button>
            <!--
                Expected Backend SSE Response for /api/live-price (conceptual):
                event: datastar-merge-signals
                data: signals {"currentPrice": 150.75, "lastUpdate": "2025-06-25 10:30:00"}
            -->
        </div>
    </template>
    ```
        
    
    `index.html`: Integrating the live data component into the main application.
    
    ```html
    <body>
        <div class="app-container">
            <h1>Backend Interaction with SSE</h1>
            <my-live-data-component data-component-src="/components/my-live-data-component.html"></my-live-data-component>
        </div>
        <script type="module">
            import { initDatastarComponents } from '/path/to/datastar-components.js';
            document.addEventListener('DOMContentLoaded', () => {
                initDatastarComponents(window.Datastar);
            });
        </script>
    </body>
    </html>
    ```

#### Imperative SSE Interaction (for Advanced Use Cases)

While Datastar's declarative actions handle most SSE needs, there might be scenarios where you need more fine-grained control over the SSE stream:

*   **Listening to Custom SSE Event Types**: Your backend might send SSE events with custom `event:` types that are not directly handled by Datastar's default merge logic (e.g., specific domain events like `user-joined`).
    
*   **Complex Client-Side Processing**: You might need to perform complex JavaScript logic on the raw SSE `data:` before updating Datastar signals or manipulating the DOM (e.g., running analytics, complex data transformations).
    
*   **Persistent Event Streams**: Maintaining a long-lived `EventSource` connection for continuous, unsolicited updates where a simple request/response pattern isn't sufficient.
    

In these cases, you can imperatively create an `EventSource` within your component's JavaScript, listen for specific events, and then **bridge the data back to your component's Datastar signals** or directly manipulate the DOM. This combines the flexibility of imperative control with the benefits of Datastar's reactivity.

*   **Example: Custom Notification Stream Component** (`my-notification-stream.html`) A component that connects to a custom SSE stream and updates its UI reactively.
    
    This component imperatively connects to an SSE stream and updates its internal state based on custom notification events.
    
    ```html
    <template shadowroot="open">
        <style>
            :host {
                display: block;
                border: 1px solid #d4edda;
                padding: 20px;
                border-radius: 8px;
                background-color: #f0fdf4;
                margin-top: 20px;
            }
            .notification-list {
                list-style: none;
                padding: 0;
                max-height: 200px;
                overflow-y: auto;
                border: 1px solid #d1e7dd;
                border-radius: 4px;
            }
            .notification-list li {
                padding: 10px;
                border-bottom: 1px solid #d1e7dd;
                font-size: 0.95em;
                color: #0f5132;
            }
            .notification-list li:last-child {
                border-bottom: none;
            }
        </style>
        <script type="module" src="./notification-logic.js"></script>
        <div data-signals="{ notifications: [] }">
            <h3>Real-time Notifications</h3>
            <ul class="notification-list">
                <!-- Declaratively render notifications from the $notifications signal -->
                <template data-for="notification in $notifications">
                    <li><span data-text="notification"></span></li>
                </template>
                <li data-show="!$notifications.length" style="display: none;">No new notifications.</li>
            </ul>
        </div>
    </template>
    ```
    
    `components/notification-logic.js`: Imperatively connecting to an SSE stream and updating Datastar signals.
    
    ```javascript
    // components/notification-logic.js
    export function init(componentInstance) {
        let eventSource; // Variable to hold the EventSource instance
    
        // The contentReadyCallback ensures the component's DOM and Datastar context are fully prepared.
        componentInstance.contentReadyCallback = () => {
            console.log(`${componentInstance.tagName} - Content and Datastar ready! Connecting to SSE stream...`);
            const dsScope = Datastar.scope(componentInstance); // Get Datastar scope for signal access
    
            // Imperative setup: Create an EventSource connection.
            // This is needed for persistent streams or custom event types not covered by declarative actions.
            eventSource = new EventSource('/api/notification-stream');
    
            // Listen for a generic 'message' event (default SSE event type)
            eventSource.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    const message = `[${new Date().toLocaleTimeString()}] New message: ${data.text}`;
                    // Imperatively update the Datastar signal `$notifications`.
                    // This bridges data from the imperative EventSource to the declarative UI.
                    dsScope.notifications.set([...dsScope.notifications.peek(), message]);
                    console.log(`Received generic message: ${message}`);
                } catch (e) {
                    console.error("Error parsing SSE message:", e, event.data);
                }
            };
    
            // Listen for a custom 'alert' event type, demonstrating handling specific server events.
            eventSource.addEventListener('alert', (event) => {
                try {
                    const alertData = JSON.parse(event.data);
                    const alertMessage = `🚨 ALERT: ${alertData.reason} at ${new Date().toLocaleTimeString()}`;
                    // Update the Datastar signal, keeping the UI declarative and reactive.
                    dsScope.notifications.set([...dsScope.notifications.peek(), alertMessage]);
                    console.warn(`Received custom alert: ${alertMessage}`);
    
                    // Example: If the backend sends 'datastar-execute-script' as part of another SSE event
                    // or if you need to manually trigger a Datastar action from an imperative handler:
                    // Datastar.actions.someGlobalAction(someValue);
                } catch (e) {
                    console.error("Error parsing SSE alert event:", e, event.data);
                }
            });
    
            eventSource.onerror = (error) => {
                console.error('EventSource failed:', error);
                // Optionally update a signal to show an error message in the UI declaratively.
                dsScope.notifications.set([...dsScope.notifications.peek(), `Error: Connection lost at ${new Date().toLocaleTimeString()}`]);
                eventSource.close(); // Close on error to prevent continuous retries if irrecoverable
            };
    
            // Crucial: Register cleanup for the EventSource when the component is removed from the DOM.
            // This prevents memory leaks and ensures proper resource management.
            componentInstance.registerCleanup(() => {
                if (eventSource) {
                    eventSource.close();
                    console.log(`${componentInstance.tagName} - EventSource closed.`);
                }
            });
        };
    }
    ```
    
    `index.html`: Displaying real-time notifications from a custom SSE stream.
    
    ```html
    <body>
        <div class="app-container">
            <h1>Backend Interaction with SSE</h1>
            <my-notification-stream data-component-src="/components/my-notification-stream.html"></my-notification-stream>
        </div>
        <script type="module">
            import { initDatastarComponents } from '/path/to/datastar-components.js';
            document.addEventListener('DOMContentLoaded', () => {
                initDatastarComponents(window.Datastar);
            });
        </script>
    </body>
    </html>
    ```
    
    _This example demonstrates how to imperatively set up an `EventSource`, listen for both default `message` and custom events, and then update Datastar signals to reflect the incoming data. The `registerCleanup` ensures the SSE connection is properly closed when the component is removed, preventing resource leaks, reinforcing robust imperative bridging._

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>  



⚡ **Performance & Optimizations**
---------------------------------
***Ensuring your applications are fast, efficient, and resilient.***

The `datastar-components` plugin is built with performance in mind, ensuring that your application remains responsive and efficient even as it scales with more components and complex interactions. These optimizations are largely automatic, allowing you to focus on declarative development.

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Optimized Network Requests
_Smart fetching to avoid redundant downloads._

The plugin intelligently prevents redundant network fetch calls for component source HTML files. It also avoids re-defining Custom Elements that are already in the process of being defined or are already registered, ensuring that component resources are loaded and processed only when necessary.

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Efficient DOM Scanning
_Minimizing overhead with intelligent DOM observation._

Instead of continuously polling the DOM for changes, the plugin utilizes a `MutationObserver` to efficiently watch for newly added elements that might be Datastar components. This minimizes performance overhead and ensures new components are identified and initialized promptly.

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Native Caching
_Leveraging browser power for faster asset delivery._

The plugin leverages browser-native caching mechanisms for ES Modules (JavaScript) and Constructable Stylesheets (CSS). This means that once a component's JavaScript or styles are fetched and parsed, they are efficiently cached by the browser and reused across all instances of that component, ensuring assets are fetched and parsed only once for optimal performance.

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Enhanced Theming and CSS Variable Management
_Dynamically styling components with declarative reactive changes._

The `datastar-components` plugin provides convenient utility methods on the component instance (`this`) for setting and getting CSS Custom Properties (CSS variables). This streamlines dynamic theming and styling directly from your component's JavaScript logic, enabling reactive style changes that can be driven by Datastar signals.

#### `this.setCssVariable(name, value, [element])`
    
**Description:** Sets a CSS custom property (CSS variable) on the specified element. If `element` is omitted, it defaults to the component's root (`this.root`). This is an imperative utility that enables declarative outcomes when combined with Datastar effects.
        
**Parameters:**
        
*   `name`: The name of the CSS variable (e.g., `'--my-color'`).
        
*   `value`: The value to set the CSS variable to.
        
*   `element` (optional): The target `HTMLElement` or `ShadowRoot`.
            
**Example (Inside component script, e.g., `my-theme-switcher.js`):** Reactively updating CSS variables based on Datastar signals for dynamic theming.
        
```javascript
export function init(componentInstance) {
    // Get the Datastar scope for this component instance to access its signals
    const dsScope = Datastar.scope(componentInstance);

    // Reactive approach: Use a Datastar effect to update CSS variables automatically
    // whenever the 'selectedThemeColor' signal changes. This makes styling dynamic and declarative-driven.
    Datastar.effect(() => {
        const color = dsScope.selectedThemeColor.peek(); // Read the current signal value
        componentInstance.setCssVariable('--component-background', color);
        componentInstance.setCssVariable('--component-text-color', 'white');
        console.log(`Updated --component-background to ${color}`);
    });

    // Imperative approach: You can also set variables directly, for example,
    // for one-time initialization or in response to a non-Datastar event.
    const headerElement = componentInstance.root.querySelector('.component-header');
    if (headerElement) {
        componentInstance.setCssVariable('--header-font-size', '20px', headerElement);
    }
}
```
        
#### `this.getCssVariable(name, [element])`
    
**Description:** Retrieves the computed value of a CSS custom property (CSS variable) from a specified element. If `element` is omitted, it defaults to the component's `root`. This allows reading CSS variables that might be inherited or set by parent styles, providing insights for adaptive behaviors.
    
**Parameters:**
    
*   `name`: The name of the CSS variable (e.g., `'--spacing-unit'`).
    
*   `element` (optional): The target `HTMLElement` or `ShadowRoot`.
        
*   **Returns:** The computed value of the CSS variable.
    
**Example** (Inside **component script):** Reading computed CSS variable values from your component's JavaScript.
    
```javascript
export function init(componentInstance) {
    componentInstance.contentReadyCallback = () => {
        // Imperative action: Read a global CSS variable applied to the body or :root.
        // This can inform client-side logic or dynamically adjust other properties.
        const bodyColor = componentInstance.getCssVariable('--body-background-color', document.body);
        console.log(`Global body background color: ${bodyColor}`);

        // Imperative action: Read a variable applied directly to the component's host.
        const myBorderWidth = componentInstance.getCssVariable('--component-border-width');
        console.log(`Component border width: ${myBorderWidth}`);
    };
}
```
        
#### Using CSS Variables in Component HTML/CSS:

You can then use these variables directly in your component's `<style>` tags, leveraging the cascading nature of CSS to apply dynamic styles.
    
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
    
**Benefits**:
    
*   **Dynamic Theming**: Easily change colors, fonts, spacing, etc., based on user preferences, light/dark mode, or application state, all driven by Datastar signals.
    
*   **Encapsulated Styles**: Work with CSS variables even within Shadow DOM, maintaining encapsulation while allowing external control.
    
*   **Runtime Control**: Adjust styles programmatically without needing to manipulate classes or re-inject stylesheets, providing a powerful bridge for specific imperative styling needs.
        

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Advanced Error Handling (Fallback UI & Recovery)
_Building robust applications with declarative fallbacks for component failures._

The plugin provides a robust mechanism for handling errors during component loading, parsing, or script execution, allowing you to define a graceful fallback UI. This significantly improves the resilience and user experience of your application by preventing broken layouts and providing informative messages when a component fails. This is achieved declaratively through the `data-component-fallback` attribute.

**How it Works**: When an error occurs during the fetching, parsing, or initial script execution of a component defined via `data-component-src`, the plugin will check for an optional `data-component-fallback` attribute on the custom element tag.
    
*   If `data-component-fallback` is present, the plugin will attempt to fetch the HTML content from this URL.
    
*   The fetched fallback HTML (or a generic error message if the fallback also fails or isn't provided) will then replace the content of the problematic component's root (either its Shadow DOM or its Light DOM children).
    
*   A `component-fallback-rendered` custom event is dispatched globally, allowing your application to monitor and react to fallback scenarios centrally (e.g., for analytics or global notifications).
        
*   **Usage (`data-component-fallback` attribute)**: Simply add the `data-component-fallback` attribute to your custom element, pointing to an HTML file that contains the desired fallback UI. This fallback HTML should be a self-contained snippet, often wrapped in a `<template>` tag if it has styles or scripts you want managed within the fallback context.
    
**Example**:
    
`my-failing-component.html` (Simulated failing component): A component designed to demonstrate automatic fallback behavior.
    
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
    
`my-error-fallback.html` (Fallback UI): The simple HTML snippet displayed when `my-failing-component` encounters an error.
    
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
    
`index.html` (Using the component with a fallback): Setting up a component with a graceful error fallback.
    
```html
<body>
    <div class="app-container">
        <h2>Component with Fallback Example</h2>
        <my-failing-component
            data-component-src="/components/my-failing-component.html"
            data-component-fallback="/components/my-error-fallback.html"
        ></my-failing-component>
    </div>

    <script type="module">
        // ... (your existing initDatastarComponents call) ...
        // Listen for the global event to log or react to fallbacks centrally
        window.addEventListener('component-fallback-rendered', (event) => {
            console.warn('Fallback UI was rendered for:', event.detail.tagName, 'Due to:', event.detail.originalError);
            // You can add analytics logging here or display a global notification
        });
    </script>
</body>
</html>
```
    
When `my-failing-component`'s script fails, its content will be replaced by the "Oops! This feature could not be loaded." message from `my-error-fallback.html`, demonstrating effective error handling.

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Adopted Callback Integration
_Ensuring component reactivity persists across document transitions._

The `adoptedCallback` is a standard Web Component lifecycle hook that fires when the custom element is adopted into a new document. This typically happens when elements are moved between different `window` contexts, such as from the main document into an `<iframe>` or vice-versa.

The `datastar-components` plugin now leverages this callback to ensure that if a component is moved, its Datastar reactivity is correctly re-initialized within the new document's context. This is crucial for maintaining functionality and preventing unexpected behavior in highly dynamic applications that manipulate the DOM across document boundaries.

*   **How it's handled by the plugin**: When `adoptedCallback` is triggered, the plugin will:
    
    1.  Log a console message indicating the component has been adopted, aiding in debugging.
        
    2.  Re-run `Datastar.init(this.root)` on the component's root to re-scan for Datastar directives and re-establish reactivity in the new document context.
        
    3.  Re-setup props reactivity (`setupPropsReactivity`) to ensure any `data-component-prop-*` attributes are correctly observed and their corresponding signals updated in the new context.
        
*   **Usage considerations for developers**: While the plugin handles the core Datastar re-initialization, if your component's internal JavaScript performs imperative actions that tie into the document directly (e.g., adding global event listeners to `document`, or interacting with global objects unique to a document), you may need to:
    
    *   **Clean up in `disconnectedCallback`**: Remove any document-specific listeners or references when the component leaves its _original_ document.
        
    *   **Re-establish in `adoptedCallback`**: Re-attach those document-specific listeners or re-initialize any document-bound resources when the component enters a _new_ document. Use the `registerCleanup` method for robust cleanup patterns that fire reliably upon disconnection.
        

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Content Ready Lifecycle Hook (contentReadyCallback)
_A reliable hook for imperative initializations that depend on a fully rendered component._

The `connectedCallback` fires when a custom element is added to the DOM, but its internal HTML from `data-component-src` might not be fully loaded, parsed, and attached yet. The `contentReadyCallback` provides a reliable point to execute JavaScript that depends on the component's full DOM structure and Datastar reactivity being available. This is particularly useful for **imperative initializations**, such as integrating third-party libraries that need access to rendered DOM elements.

**Usage**: Define a method named `contentReadyCallback()` directly on your component instance (e.g., within an `init` function exported from a module script). The plugin will automatically call this method after the component's HTML is injected, styles are applied, all internal scripts are run, and Datastar reactivity is fully initialized on its content.
    
**Example: Initializing a Third-Party Charting Library**
    
`my-chart-component.html`: A component containing a canvas for a charting library.
    
```html
<template shadowroot="open">
    <style>/* ... styles ... */</style>
    <canvas class="chart-canvas"></canvas>
    <script type="module" src="./my-chart-component-logic.js"></script>
</template>
```
    
`my-chart-component-logic.js`: Imperatively initializing a chart and reactively updating it via Datastar signals.
    
```javascript
export function init(componentInstance) {
    let chart; // Variable to hold the imperative chart instance

    // Define the contentReadyCallback method on the component instance.
    // This function will execute when the component's internal DOM is fully ready.
    componentInstance.contentReadyCallback = () => {
        console.log(`${componentInstance.tagName} - Content and Datastar ready! Initializing chart...`);

        // Imperative initialization: Initialize a third-party charting library.
        // This kind of operation often requires the target DOM element to be present.
        if (window.ChartJS) { // Assuming ChartJS is globally available
            const ctx = componentInstance.root.querySelector('.chart-canvas').getContext('2d');
            chart = new window.ChartJS(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3],
                        backgroundColor: ['rgba(75, 192, 192, 0.6)']
                    }]
                }
            });

            // Crucial for imperative resources: Register cleanup for the chart instance.
            // This ensures the chart is properly destroyed when the component is removed, preventing memory leaks.
            componentInstance.registerCleanup(() => {
                chart.destroy(); // Ensure the chart is properly destroyed
                console.log(`${componentInstance.tagName} - Chart destroyed.`);
            });
        }

        // Bridging Imperative to Declarative:
        // You can also imperatively react to Datastar signals and update the chart.
        // This 'effect' will re-run whenever `dsScope.chartData` changes, making chart updates declarative-driven.
        const dsScope = Datastar.scope(componentInstance);
        if (dsScope && dsScope.chartData) { // Assume a signal for dynamic chart data exists
            Datastar.effect(() => {
                const data = dsScope.chartData.peek(); // Read the current signal value
                // Imperatively update the chart with new data if it exists
                if (chart) {
                    chart.data.datasets[0].data = data;
                    chart.update();
                }
            });
        }
    };
}
```
    
_This example demonstrates a common pattern: declarative HTML defines the component structure, but imperative JavaScript (within `contentReadyCallback`) is used to initialize and manage a non-Datastar-aware third-party library, with Datastar effects bridging the library's state to Datastar signals for reactive updates. This showcases a controlled blend of paradigms._
    

<p align="right"><a href="#-performance--optimizations">⬆️</a></p>

### Opinionated Lifecycle Integration for Cleanup
_Automatically manage and prevent memory leaks from imperative resources._

Proper cleanup of resources when a component is removed from the DOM is crucial for preventing memory leaks and ensuring your application remains performant over time. The plugin provides a simple, opinionated pattern to manage this by leveraging the `disconnectedCallback` lifecycle hook. When your component is initialized (e.g., in an `init` function exported from a module script, or directly within inline scripts), you can register cleanup functions using `componentInstance.registerCleanup(yourCleanupFunction)`. These registered functions will automatically be executed by the plugin when the component's `disconnectedCallback` is triggered, ensuring imperative resources are freed.

**Why is this important?**
    
*   **Memory Leaks**: If imperative resources like `setInterval` timers, `setTimeout` timers, or event listeners attached to global objects (`window`, `document`) are not explicitly removed or cleared when a component is no longer in use, they can prevent the browser's garbage collector from reclaiming memory associated with that component, leading to slow performance and potential crashes.
    
*   **Resource Management**: Ensures that background processes, network connections, or subscriptions initiated by your imperative code are properly terminated when the component is no longer needed.
    
*   **Avoiding Duplication**: When a component is re-added to the DOM, new timers or listeners would be created without the old ones being cleared, leading to unintended side effects and resource contention.
        
*   **How to use `registerCleanup`**: You will have access to the `registerCleanup` method on the `componentInstance` (or directly via `element` if using an inline script within the template). Call this method and pass a function that contains the logic to clean up specific resources that were set up imperatively. This provides a declarative-like way to manage imperative cleanup.
    
**Example: Component with Imperative Timer and Event Listener Cleanup**
    
`my-cleanup-component.html`: A component demonstrating robust cleanup of imperative resources.
    
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

    <div data-signals="{ counter: 0 }">
        <p class="message">This component has an imperative timer and an internal event listener.</p>
        <p class="timer">Timer Count: <span data-text="$counter"></span></p>
        <button data-on:click="$toggleVisibility = !$toggleVisibility">Remove Component (from parent)</button>
    </div>
    <script type="module" src="./cleanup-logic.js"></script>
</template>
```
    
`components/cleanup-logic.js`: Managing imperative timers and event listeners with `registerCleanup`.
    
```javascript
// components/cleanup-logic.js
export function init(componentInstance) {
    let intervalId;
    let buttonClickListener;

    console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) initialized.`);

    // Imperative setup: Set up a periodic timer. This requires explicit cleanup.
    let localCounter = 0;
    intervalId = setInterval(() => {
        localCounter++;
        console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Timer tick: ${localCounter}`);
        // Update a Datastar signal from imperative code, accessing it via scope.
        const dsScope = Datastar.scope(componentInstance);
        if (dsScope && dsScope.counter) {
            dsScope.counter.set(localCounter);
        }
    }, 1000);

    // Register a cleanup function for the timer. This will be called on disconnectedCallback.
    componentInstance.registerCleanup(() => {
        clearInterval(intervalId);
        console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Timer cleared.`);
    });

    // Imperative setup: Add an event listener to an internal element.
    // While Datastar's data-on is declarative, for complex listeners or
    // when integrating with external libraries, imperative listeners are needed.
    const internalButton = componentInstance.root.querySelector('button');
    if (internalButton) {
        buttonClickListener = () => {
            console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Internal button clicked imperatively!`);
            // You could also update Datastar signals from here if needed
            // Datastar.scope(componentInstance).someSignal.set('updated');
        };
        internalButton.addEventListener('click', buttonClickListener);
    }

    // Register a cleanup function for the imperative event listener.
    componentInstance.registerCleanup(() => {
        if (internalButton && buttonClickListener) {
            internalButton.removeEventListener('click', buttonClickListener);
            console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Internal button click listener removed.`);
        }
        });

    // General purpose cleanup for any other imperative resources (e.g., third-party library instances)
    componentInstance.registerCleanup(() => {
        // chartInstance.destroy(); // example cleanup for a charting library
        // mapInstance.remove();   // example cleanup for a map library
        console.log(`${componentInstance.tagName} (ID: ${componentInstance._dsInstanceId}) - Other imperative resources cleaned up.`);
    });
}
```

`index.html` to demonstrate loading/unloading: Toggling component visibility to trigger connection and disconnection callbacks.

```html
<body>
    <div class="app-container" data-signals="{ toggleVisibility: true }">
        <h1>Welcome to Your Datastar Components App!</h1>

        <div data-show="$toggleVisibility" style="display: none;">
            <h2>Component with Cleanup Example</h2>
            <my-cleanup-component data-component-src="/components/my-cleanup-component.html"></my-cleanup-component>
        </div>
        <button data-on:click="$toggleVisibility = !$toggleVisibility">Toggle Component Visibility</button>

    </div>
    <!-- Other components and scripts -->
    <script type="module">
        import { initDatastarComponents } from '/path/to/datastar-components.js';
        document.addEventListener('DOMContentLoaded', () => {
            initDatastarComponents(window.Datastar);
        });
    </script>
</body>
</html>
```

When you click "Toggle Component Visibility," the `my-cleanup-component` will be removed from the DOM, and you will see console messages confirming that its timer was cleared and event listener removed, demonstrating effective lifecycle management for imperative code.

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>   



💧 **Server-Side Rendering (SSR) & Hydration Readiness**
--------------------------------------------------------
***Achieving fast initial loads and seamless interactivity.***

The `datastar-components` plugin is designed to work seamlessly with Server-Side Rendered (SSR) content, enabling a smooth hydration process. This means you can get the benefits of fast initial page loads and SEO, combined with the rich interactivity provided by Datastar on the client-side.

<p align="right"><a href="#-server-side-rendering-ssr--hydration-readiness">⬆️</a></p>

### Automatic Hydration Detection
_Effortlessly bringing server-rendered content to life._

When a component element is added to the DOM (either initially loaded from the server or dynamically inserted), the plugin intelligently checks if its content (especially its Shadow DOM, via [Declarative Shadow DOM](https://web.dev/declarative-shadow-dom/ "null")) has already been pre-rendered on the server. This detection is automatic, requiring no special client-side configuration.

<p align="right"><a href="#-server-side-rendering-ssr--hydration-readiness">⬆️</a></p>

### Preventing FOUC & Performance
_Smooth transitions and optimized initial rendering._

If pre-rendered content is detected, the plugin "hydrates" it. This means it attaches interactivity, applies styles (including efficient Constructable Stylesheets), and initializes Datastar reactivity on the _existing_ DOM elements, rather than fetching and re-injecting HTML. This significantly improves initial page load performance, prevents flashes of unstyled content (FOUC), and is highly beneficial for SEO.

<p align="right"><a href="#-server-side-rendering-ssr--hydration-readiness">⬆️</a></p>

### Seamless Transition
_A unified experience from server to client._

Developers can render components on the server, and the client-side plugin will seamlessly take over without re-rendering the entire component. This provides a robust and uninterrupted user experience, bridging the gap between server-generated markup and client-side interactivity.

<p align="right"><a href="#-server-side-rendering-ssr--hydration-readiness">⬆️</a></p>

### Handling Hydration of Slot Content
_Ensuring dynamic reactivity for content projected into slots._

A critical aspect of SSR hydration is how content projected into slots is handled. If your SSR solution renders content directly within the custom element's light DOM (which will be projected into a `<slot>` in the component's template) and this slot content itself contains Datastar directives, the plugin ensures these directives are also hydrated.

**How it Works for Slots**: When the plugin `Datastar.init(this.root)` is called during a component's connection/hydration, it scans the component's root (which could be the Shadow DOM or the Light DOM element itself). This scan implicitly includes any distributed nodes within `<slot>` elements. If the server has pre-rendered content into a component's slot that includes `data-*` attributes, Datastar will find these directives during its scan of the component's active DOM (which includes the projected slot content) and will hydrate their reactivity, making them fully interactive.
    
**Example (Conceptual SSR Output)**: Imagine your server renders this HTML:
    
```html
<my-profile-widget data-component-src="/components/my-profile-widget.html">
    <!-- This content is pre-rendered into a slot and contains Datastar directives -->
    <h4 slot="header" data-text="$user.name">Loading Name...</h4>
    <p data-text="$user.email">Loading Email...</p>
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
    
4.  Scan these projected nodes for `data-text="$user.name"` and `data-text="$user.email"`.
    
5.  Hydrate these `data-text` directives, ensuring that when the `$user.name` or `$user.email` signals change (e.g., after client-side data fetch), the pre-rendered text updates reactively.
        

<p align="right"><a href="#-server-side-rendering-ssr--hydration-readiness">⬆️</a></p>

### Hydration Benefits
_The combined advantages of SSR and client-side interactivity._

By combining SSR with client-side hydration, you gain the SEO and initial performance benefits of server-generated HTML for both the component's internal DOM and its slotted content, all with seamless client-side interactivity powered by Datastar's efficient hydration process. This provides a robust and high-performance foundation for your web applications.

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>



🧩 **Integration with Third-Party Libraries**
---------------------------------------------
***Connecting your Datastar components with external JavaScript ecosystems.***

Datastar Components provide reliable lifecycle hooks and contextual access to the component instance, making it straightforward to integrate and manage third-party JavaScript libraries. This section outlines key principles and provides examples for bridging the gap between declarative Datastar and imperative library APIs. The core idea is to initialize the library when the component's content is ready and clean up any resources when the component is removed, primarily using imperative JavaScript that then interacts with Datastar signals for reactive updates.

<p align="right"><a href="#-integration-with-third-party-libraries">⬆️</a></p>

### Key Principles
_Guidelines for successful third-party library integration._

**Initialization (Imperative)**: Use `this.contentReadyCallback()` (or ensure your `init` function runs after content is attached) to guarantee the necessary DOM elements for the library are available. This is crucial for libraries that manipulate or render to specific DOM nodes.
    
**Cleanup (Imperative)**: Use `this.registerCleanup()` to register functions that will be executed in `disconnectedCallback`. This is essential for preventing memory leaks and ensuring resources (like event listeners, timers, or library instances) are properly destroyed when the component is removed from the DOM.
    
**Context & Bridging (Imperative to Declarative)**: The `componentInstance` (often referred to as `element` in inline scripts or `this` in module `init` functions) provides access to:
    
*   `element.root`: The component's Shadow DOM root (or element itself for Light DOM), allowing you to query for elements the library needs.
    
*   `Datastar.scope(element)`: To access the component's reactive Datastar signals and actions from imperative JavaScript, enabling two-way data flow (imperative updates to declarative state).
    
*   `element.emit('eventName', detail)`: To dispatch custom events from imperative library callbacks, notifying parent components declaratively.
        

<p align="right"><a href="#-integration-with-third-party-libraries">⬆️</a></p>

### **Example 1: Charting Library (Recharts-like)**
_Integrating a third-party charting library with reactive data updates._

(This example is already covered in Section [Content Ready Lifecycle Hook (contentReadyCallback)](#content-ready-lifecycle-hook-contentreadycallback "null"). It effectively demonstrates imperative initialization of a global charting library (`ChartJS`) and reactive bridging using `Datastar.effect` for updates to Datastar signals, and `registerCleanup` for proper destruction.)

<p align="right"><a href="#-integration-with-third-party-libraries">⬆️</a></p>

### **Example 2: Simple Markdown Editor (Conceptual)**
_Bridging an imperative markdown editor to Datastar's reactive state._

Let's imagine a simple markdown editor library that takes a textarea and initializes itself to provide a richer editing experience. We'll demonstrate how to integrate it, manage its lifecycle, and synchronize its state with Datastar signals.

**`my-markdown-editor.html`**: The HTML structure for a custom markdown editor component.

```html
<template shadowroot="open">
    <style>
        :host { display: block; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; }
        textarea { width: 100%; height: 150px; border: 1px solid #ccc; padding: 10px; font-family: monospace; }
        .preview { border: 1px dashed #eee; padding: 10px; margin-top: 10px; background-color: #f9f9f9; }
    </style>
    <!--
        Declaratively initialize editorContent with a prop.
        The data-on:input here acts as a bridge: when the textarea's native input event fires,
        it imperatively updates `element.value` (the Custom Element's value) and also
        updates the internal Datastar signal ($editorContent).
    -->
    <textarea data-signals="{ editorContent: $props.initialContent }" data-on:input="element.value = $event.target.value; Datastar.scope(element).editorContent.set($event.target.value)"></textarea>
    <div class="preview">
        <h4>Rendered Markdown:</h4>
        <div class="markdown-output"></div>
    </div>
    <script type="module" src="./markdown-editor-logic.js"></script>
</template>
```

**`markdown-editor-logic.js`**: The imperative logic to initialize, update, and clean up the markdown editor library.

```javascript
// components/markdown-editor-logic.js
// Assume a global `SimpleMarkdownEditor` library is available (e.g., loaded via <script src="..."> in index.html)
// For demonstration, we'll mock its behavior to focus on the integration pattern.

class MockMarkdownEditor {
    constructor(textareaElement, previewElement, initialContent) {
        this.textarea = textareaElement;
        this.preview = previewElement;
        this.textarea.value = initialContent || '';
        this._boundRenderPreview = this._renderPreview.bind(this); // Bind for easy removal
        this.textarea.addEventListener('input', this._boundRenderPreview);
        this._renderPreview();
        console.log('MockMarkdownEditor initialized.');
    }

    _renderPreview() {
        // In a real editor, this would convert markdown to HTML and update the preview.
        this.preview.innerHTML = `<em>Preview:</em><br>` + this.textarea.value.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    // Method to imperatively update the editor's content from external changes (e.g., from a Datastar signal)
    updateContent(newContent) {
        this.textarea.value = newContent;
        this._renderPreview();
    }

    destroy() {
        this.textarea.removeEventListener('input', this._boundRenderPreview);
        this.textarea.value = '';
        this.preview.innerHTML = '';
        console.log('MockMarkdownEditor destroyed.');
    }
}

export function init(componentInstance) {
    let editorInstance; // Variable to hold the imperative library instance

    // Use contentReadyCallback to ensure DOM elements are available for the library.
    componentInstance.contentReadyCallback = () => {
        console.log(`${componentInstance.tagName} - Content and Datastar ready! Initializing Markdown Editor...`);
        const textarea = componentInstance.root.querySelector('textarea');
        const preview = componentInstance.root.querySelector('.markdown-output');
        const dsScope = Datastar.scope(componentInstance); // Get Datastar scope for signal access

        if (textarea && preview && dsScope) {
            // Imperative initialization of the third-party library.
            editorInstance = new MockMarkdownEditor(textarea, preview, dsScope.editorContent.peek());

            // Crucial: Register cleanup for the editor instance. This will be called when the component is removed.
            componentInstance.registerCleanup(() => {
                if (editorInstance) {
                    editorInstance.destroy();
                    editorInstance = null;
                    console.log(`${componentInstance.tagName} - Markdown Editor cleaned up.`);
                }
            });

            // Bridging Declarative (Datastar Signal) to Imperative (Library API):
            // Create a Datastar effect that runs whenever `editorContent` signal changes.
            // This ensures if `editorContent` is updated declaratively (e.g., by a parent prop),
            // the imperative editor instance also updates its content, keeping them in sync.
            Datastar.effect(() => {
                const newContent = dsScope.editorContent.peek();
                if (editorInstance && editorInstance.textarea.value !== newContent) {
                    editorInstance.updateContent(newContent);
                    console.log(`Markdown editor content updated imperatively from Datastar signal: ${newContent.substring(0,20)}...`);
                }
            });

            // Bridging Imperative (Library's Internal Event via native <textarea> input) to Declarative (Datastar Signal):
            // The `data-on:input` on the textarea in the HTML already handles updating `editorContent` signal
            // when the user types. This ensures changes from the imperative editor
            // are reflected in Datastar's reactive state.
        } else {
            console.error(`${componentInstance.tagName}: Missing textarea or preview element, or Datastar scope.`);
        }
    };
}
```

**`index.html`**: Demonstrating how to interact with the markdown editor component from the parent.

```html
<body>
    <div class="app-container" data-signals="{ myDocContent: 'Hello **World**!' }">
        <h1>Third-Party Library Integration</h1>

        <h2>Markdown Editor</h2>
        <my-markdown-editor
            data-component-src="/components/my-markdown-editor.html"
            data-attr:data-component-prop-initial-content="$myDocContent"
        ></my-markdown-editor>

        <button data-on:click="$myDocContent = 'New **content** from parent! Updated at ' + new Date().toLocaleTimeString()">Update Content From Parent</button>
        <button data-on:click="alert('Current Content from Datastar Signal: ' + Datastar.scope(document.querySelector('my-markdown-editor')).editorContent.peek())">Show Current Editor Content</button>
    </div>
    <script type="module">
        import { initDatastarComponents } from '/path/to/datastar-components.js';
        document.addEventListener('DOMContentLoaded', () => {
            initDatastarComponents(window.Datastar);
        });
    </script>
</body>
</html>
```

This markdown editor example now more clearly shows the imperative bridging code within the `init` and `contentReadyCallback` functions. It highlights how to initialize a third-party library, subscribe to its changes to update Datastar signals, and react to Datastar signal changes to update the library, along with crucial cleanup. This reinforces the pattern of using imperative code to manage external libraries while keeping your component's core logic declarative.

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>  



🌐 Dynamic & Conditional Routing
--------------------------------
***Crafting fluid navigation and dynamic content experiences.***

Datastar's approach to routing is deeply integrated with its core philosophy of dynamic HTML and Server-Sent Events (SSE), offering a powerful and flexible way to manage navigation and views. Unlike traditional client-side routers that dictate application structure, Datastar enables a **declarative-first, progressively enhanced routing model**.

The `datastar-components` plugin significantly enhances these routing capabilities by providing a structured way to define and manage individual "pages" or "views" as encapsulated, reactive Web Components, allowing for dynamic view swapping and conditional feature rendering.

<p align="right"><a href="#-dynamic--conditional-routing">⬆️</a></p>

### Datastar's Core Routing Mechanism
_Understanding Datastar's hypermedia-driven approach to navigation._

Datastar doesn't rely on a dedicated client-side router library. Instead, it leverages its `data-replace-url` attribute combined with backend actions and SSE to manage URL changes and corresponding UI updates. This aligns with a hypermedia-driven architectural style, where the server guides the client's state transitions.

*   **`data-replace-url`**: This Datastar attribute, when used with a Datastar action (like `@get`), updates the browser's URL using `history.replaceState()` or `history.pushState()` without triggering a full page reload. This is fundamental for achieving SPA-like navigation in a declarative manner.
    
*   **Backend Actions (`@get`, `@post`, etc.)**: When a `data-on` attribute triggers a backend action (e.g., `@get('/new-path')`), the request is sent to your server. The magic happens in the response: your backend sends Datastar SSE events that instruct the client on how to update the DOM and state.
    
*   **SSE (`datastar-merge-fragments`, `datastar-merge-signals`)**: The backend determines _what_ changes on the page. For routing, this typically involves sending `datastar-merge-fragments` events to replace entire sections of the page (e.g., a main content area) with new HTML, and `datastar-merge-signals` to update global or component-specific state.
    

This combination allows for highly efficient "partial page refreshes" or "view swaps" without the overhead of a full page load, mimicking SPA behavior with server-driven content and minimal client-side JavaScript.

**Example: Declarative Navigation with URL Update (SPA-like segment)** A concise example of declarative, SPA-like navigation using Datastar actions.

Imagine a main `index.html` with a content area and navigation links.

```html
<body>
    <div class="app-container">
        <nav>
            <!-- This button will declaratively fetch content for the 'dashboard' and update the URL -->
            <button data-on:click="@get('/dashboard-content', { target: '#main-content', replaceUrl: true, viewTransition: true })">Go to Dashboard</button>
            <button data-on:click="@get('/profile-content', { target: '#main-content', replaceUrl: true, viewTransition: true })">Go to Profile</button>
        </nav>

        <main id="main-content">
            <!-- Initial content, perhaps loaded via SSR -->
            <h2>Welcome Home!</h2>
            <p>Select a navigation item above.</p>
        </main>
    </div>
    <script type="module">
        import { initDatastarComponents } from '/path/to/datastar-components.js';
        document.addEventListener('DOMContentLoaded', () => {
            initDatastarComponents(window.Datastar);
        });
    </script>
</body>
</html>
```

**Conceptual Backend SSE Responses:**
    
*   **GET `/dashboard-content` endpoint response (conceptual SSE):**
    
    ```
    event: datastar-merge-fragments
    data: selector #main-content
    data: mergeMode outer
    data: fragments <main id="main-content"><h2>Dashboard Overview</h2><p>Here's your dashboard data.</p></main>
    ```
    
*   **GET `/profile-content` endpoint response (conceptual SSE):**
    
    ```
    event: datastar-merge-fragments
    data: selector #main-content
    data: mergeMode outer
    data: fragments <main id="main-content"><h2>User Profile</h2><p>Your profile details.</p></main>
    ```
        

When the "Go to Dashboard" button is clicked:

1.  A `GET` request is sent to `/dashboard-content` (triggered declaratively by `data-on:click`).
    
2.  The browser's URL is updated to `/dashboard` (due to `replaceUrl: true`).
    
3.  The SSE response, containing the new HTML fragment for `#main-content`, is automatically processed by Datastar.
    
4.  The `#main-content` element's content is replaced with the new HTML, and `data-view-transition: true` provides a smooth visual transition. This entire process is orchestrates by declarative attributes and server instructions.
    

<p align="right"><a href="#-dynamic--conditional-routing">⬆️</a></p>

### Component-Based Routing Paradigm
_Structuring your application's views as encapsulated Datastar components._

This paradigm describes how to leverage `data-component-src` for primary view routing and `data-component-load-if` for conditional sub-component rendering to build robust single-page applications. The core idea is to have a main "router outlet" whose `data-component-src` is dynamically updated based on the current application route, while internal features within those routes can be conditionally loaded for performance or access control.

For a comprehensive example of this paradigm in action, including `index.html` setup with a global `navigate` action and several route components (`home-view.html`, `about-view.html`, `contact-view.html`, `my-3d-game.html`), please refer to the [**Single-Page Applications (SPA)**](#single-page-applications-spa "null") subsection in the "Designing Diverse User Experiences" section.

<p align="right"><a href="#-dynamic--conditional-routing">⬆️</a></p>

### Dynamic Routing
_Declaratively swapping primary views based on application state or user actions._

Dynamic routing in `datastar-components` is primarily achieved by declaratively binding the `data-component-src` attribute of a "router outlet" element to a Datastar signal. This signal, updated by user actions or backend responses, triggers the plugin to dynamically fetch and render the new component view. This allows for client-side view swapping without full page reloads, mimicking traditional SPA behavior in an HTML-first way.

**Declarative Code Example:** Using a Datastar signal to dynamically load different view components.

Consider an `index.html` with a main content area (`id="router-outlet"`) and navigation buttons. The `activeView` signal will control which component is loaded.

*   **`index.html` snippet:**
    
    ```html
    <div data-signals="{ activeView: '/components/dashboard-view.html' }">
        <nav>
            <!--
                Clicking this button declaratively updates the 'activeView' signal.
                The 'history.pushState' is an imperative bridge to manage the browser URL,
                keeping it in sync with our declarative view changes.
            -->
            <button data-on:click="activeView.set('/components/dashboard-view.html'); history.pushState({}, '', '/dashboard')">
                Dashboard
            </button>
            <button data-on:click="activeView.set('/components/settings-view.html'); history.pushState({}, '', '/settings')">
                Settings
            </button>
        </nav>
    
        <!--
            The component serving as the router outlet. Its data-component-src is
            declaratively bound to the $activeView signal. Changes to $activeView
            will cause the datastar-components plugin to load and render the new component.
        -->
        <div id="router-outlet" data-component-src="$activeView">
            <!-- Initial content will be replaced -->
        </div>
    </div>
    ```
    
*   **`components/dashboard-view.html`:** A sample dashboard view component.
    
    ```html
    <template shadowroot="open">
        <style>/* ...styles... */</style>
        <h3>My Dashboard</h3>
        <p>Welcome to your personalized dashboard!</p>
    </template>
    ```
    
*   **`components/settings-view.html`:** A sample settings view component.
    
    ```html
    <template shadowroot="open">
        <style>/* ...styles... */</style>
        <h3>Settings</h3>
        <p>Manage your account settings here.</p>
    </template>
    ```
    
**Explanation:**
    
*   The `activeView` signal holds the path to the currently active view component's HTML file.
    
*   When a navigation button is clicked, its `data-on:click` attribute declaratively updates the `activeView` signal.
    
*   Because the `data-component-src` of the `router-outlet` is bound to `$activeView`, this change automatically triggers the `datastar-components` plugin to:
    
    1.  Fetch the new component's HTML (if not cached).
        
    2.  Define the Custom Element for the new component.
        
    3.  Replace the content of the `router-outlet` with the new component.
        
*   `history.pushState()` is used as an imperative helper to synchronize the browser's URL with the displayed component, enabling back/forward button functionality. The core view swap, however, is driven declaratively by the signal change.
        

This setup enables dynamic swapping of primary view components, driven by user interaction and declarative signal updates, maintaining a responsive SPA-like feel.

<p align="right"><a href="#-dynamic--conditional-routing">⬆️</a></p>

### Conditional Routing
_Declaratively rendering components only when specific conditions are met._

Conditional routing allows components to be loaded and rendered only when a specific Datastar expression evaluates to `true`. This is ideal for lazy loading features, managing access control, or displaying different UI based on application state, ensuring optimal performance and resource utilization through declarative control.

**Declarative Code Example:** Loading an admin panel component only when a user has administrator privileges.

Consider a dashboard where an "Admin Panel" component is only visible and loaded if the current user has administrator privileges, indicated by an `$isAdmin` signal.

*   **`index.html` snippet:**
    
    ```html
    <div data-signals="{ isAdmin: false }">
        <button data-on:click="$isAdmin = !$isAdmin">Toggle Admin Mode</button>
        <p>Admin Mode: <span data-text="$isAdmin ? 'Active' : 'Inactive'"></span></p>
    
        <!--
            The Admin Panel component is conditionally loaded.
            It will only be fetched, defined, and rendered when $isAdmin evaluates to true.
        -->
        <admin-panel data-component-src="/components/admin-panel.html"
                        data-component-load-if="$isAdmin">
        </admin-panel>
    
        <!-- This message is shown declaratively when the admin panel is not loaded -->
        <div data-show="!$isAdmin" class="p-4 bg-yellow-100 border border-yellow-400 rounded-md mt-4" style="display: none;">
            <p>Admin Panel is currently hidden. Toggle "Admin Mode" to load it.</p>
        </div>
    </div>
    ```
    
*   **`components/admin-panel.html`:** The admin panel component's content.
    
    ```html
    <template shadowroot="open">
        <style>
            :host { display: block; padding: 20px; background-color: #e6ffe6; border: 1px solid #4CAF50; border-radius: 8px; margin-top: 10px; }
            h3 { color: #2e7d32; }
        </style>
        <h3>Admin Panel</h3>
        <p>This content is only loaded when `isAdmin` is true.</p>
        <ul>
            <li>User Management</li>
            <li>System Logs</li>
        </ul>
    </template>
    ```
        
    
**Explanation:**
    
*   The `admin-panel` component is defined with `data-component-load-if="$isAdmin"`.
    
*   When the "Toggle Admin Mode" button is clicked, the `isAdmin` signal changes its value.
    
*   If `$isAdmin` becomes `true`, the `admin-panel` component's HTML file (`/components/admin-panel.html`) is automatically fetched, parsed, and its Custom Element is defined and appended to the DOM.
    
*   If `$isAdmin` becomes `false`, the `admin-panel` component (and all its fetched resources) is removed from the DOM, and its `disconnectedCallback` (and any registered cleanups) would fire. The fallback message (`data-show="!$isAdmin"`) then appears.
        

This declarative approach to conditional loading ensures that resources are efficiently managed, only being loaded and active when their display condition is met, leading to faster initial page loads and reduced resource consumption.

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>  



📐 Design Diverse User Experiences
-----------------------------------
***Applying Datastar components to various application architectures.***

The `datastar-components` plugin, combined with Datastar's core capabilities, empowers developers to craft a wide array of frontend user experiences. From traditional multi-page applications to dynamic single-page interfaces and immersive interactive experiences, this plugin provides the tools to build highly optimized, declarative-first, and progressively enhanced web applications.

<p align="right"><a href="#-design-diverse-user-experiences">⬆️</a></p>

### Multi-Page Applications (MPA)
_Enhancing traditional MPAs with client-side interactivity._

In a pure MPA, each navigation link triggers a full page reload. Datastar enhances this by allowing progressive enhancements _within_ each loaded page, where components can fetch and manage their own dynamic content declaratively after the initial server render.

**Scenario**: A traditional e-commerce site where each product page is a full server render, but reviews are loaded dynamically within a component after the initial page load.

*   **`index.html` (or `products/item-123.html` on server)**: A product page using a Datastar component to load reviews dynamically.
    
    ```html
    <body>
        <h1>Product Detail Page</h1>
        <!-- Other product details (could be server-rendered) -->
        <my-product-reviews data-component-src="/components/product-reviews.html"
                            data-component-prop-product-id="123"></my-product-reviews>
    </body>
    ```
    
*   **`components/product-reviews.html`**: A component that fetches and displays product reviews.
    
    ```html
    <template shadowroot="open">
        <style>/* ...styles... */</style>
        <div data-signals="{ reviews: [], loading: true }">
            <h3>Customer Reviews</h3>
            <p data-show="$loading" style="display: none;">Loading reviews...</p>
            <!-- Declaratively render reviews once loaded -->
            <ul data-show="!$loading" data-for="review in $reviews" style="display: none;">
                <li><span data-text="review.rating"></span> - <span data-text="review.comment"></span></li>
            </ul>
        </div>
        <script type="module">
            export function init(componentInstance) {
                // contentReadyCallback ensures the component's DOM is ready before fetching data.
                componentInstance.contentReadyCallback = async () => {
                    const dsScope = Datastar.scope(componentInstance);
                    const productId = dsScope.$props.peek().productId; // Access prop passed from parent
                    if (productId) {
                        try {
                            const response = await fetch(`/api/reviews/${productId}`);
                            const data = await response.json();
                            // Update the reviews signal, which declaratively updates the UI
                            dsScope.reviews.set(data.reviews);
                        } catch (error) {
                            console.error('Failed to load reviews:', error);
                            dsScope.reviews.set([]); // Clear or set error state
                        } finally {
                            dsScope.loading.set(false); // Update loading signal declaratively
                        }
                    }
                };
            }
        </script>
    </template>
    ```
    
**Benefit**: The initial page is fast and SEO-friendly due to server rendering. Interactive components like `my-product-reviews` then progressively enhance the experience by loading their dynamic content via client-side JavaScript, leveraging `data-component-prop-*` for contextual data and Datastar signals for reactive updates.

<p align="right"><a href="#-design-diverse-user-experiences">⬆️</a></p>

### Single-Page Applications (SPA)
_Building dynamic, responsive SPAs with Datastar's HTML-first approach._

Build true SPA experiences where different "pages" are dynamically swapped out without full page reloads. This is driven by declaratively binding the `data-component-src` of a primary "router outlet" to a Datastar signal, and enhanced with `data-component-load-if` for conditional features. This minimizes initial load times and ensures only necessary components are active.

**Scenario**: A client-side application with multiple distinct views (Home, About, Contact, 3D Game) that are dynamically loaded as primary routes. Within the "Home" view, a lazy-loaded "Admin Panel" feature is conditionally rendered based on a global user permission signal.

*   **`index.html` (main SPA container and global state)**: The main SPA shell, managing global state and primary route loading.
    
    ```html
    <body>
        <div class="app-container" data-signals="{ activeRouteComponent: '/components/home-view.html', isUserAdmin: false }">
            <nav>
                <!-- Navigation links that update the URL and trigger primary component loading -->
                <!-- These buttons use a global Datastar action to change the route -->
                <button data-on:click="Datastar.actions.navigate('/home', '/components/home-view.html')"
                        data-attr:data-view-transition="true">Home</button>
                <button data-on:click="Datastar.actions.navigate('/about', '/components/about-view.html')"
                        data-attr:data-view-transition="true">About</button>
                <button data-on:click="Datastar.actions.navigate('/contact', '/components/contact-view.html')"
                        data-attr:data-view-transition="true">Contact</button>
                <button data-on:click="Datastar.actions.navigate('/3d-game', '/components/my-3d-game.html')"
                        data-attr:data-view-transition="true">3D Game</button>
            </nav>
    
            <button class="mt-4 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
                    data-on:click="$isUserAdmin = !$isUserAdmin">
                Toggle Admin Status (<span data-text="$isUserAdmin ? 'ON' : 'OFF'"></span>)
            </button>
            <p>Admin Status is: <span data-text="$isUserAdmin ? 'Enabled' : 'Disabled'"></span></p>
    
            <main class="router-outlet mt-4 p-4 border rounded-lg shadow-md"
                    data-component-src="$activeRouteComponent"
                    data-attr:data-view-transition="true">
                <!--
                    This is the main router outlet. Its data-component-src is dynamically bound
                    to $activeRouteComponent. When this signal changes, the corresponding
                    primary view component is loaded and swapped in. This is the declarative heart of SPA routing.
                -->
            </main>
        </div>
    
        <script type="module">
            import { initDatastarComponents } from '/path/to/datastar-components.js';
    
            // Define a global Datastar Action to handle primary route navigation.
            // This action combines imperative URL management with declarative signal updates.
            window.Datastar.actions.navigate = (path, componentSource) => {
                // Imperative: Update browser history using History API to change the URL without a full page reload.
                history.pushState({ path: path, componentSource: componentSource }, '', path);
                // Declarative: Update the reactive signal that controls the main router outlet's data-component-src.
                // This will automatically cause the new component to be loaded and rendered.
                window.Datastar.scope(document.body).activeRouteComponent.set(componentSource);
                console.log(`Navigated to: ${path}, loading primary component: ${componentSource}`);
            };
    
            document.addEventListener('DOMContentLoaded', () => {
                initDatastarComponents(window.Datastar);
    
                // Imperative: Handle initial page load and browser back/forward navigation.
                // This ensures the correct component is loaded if the user navigates directly or uses browser history.
                const handlePopState = (event) => {
                    const state = event.state;
                    const bodyScope = window.Datastar.scope(document.body);
    
                    if (state && state.componentSource) {
                        bodyScope.activeRouteComponent.set(state.componentSource);
                        console.log(`PopState: Restored primary component to ${state.componentSource}`);
                    } else {
                        // Default route if state is null (e.g., initial load or direct URL access)
                        const currentPath = window.location.pathname;
                        let defaultComponentSource = '/components/home-view.html'; // Fallback for root path
                        if (currentPath === '/about') defaultComponentSource = '/components/about-view.html';
                        else if (currentPath === '/contact') defaultComponentSource = '/components/contact-view.html';
                        else if (currentPath === '/3d-game') defaultComponentSource = '/components/my-3d-game.html';
                        // Add more mappings as needed for your application
                        bodyScope.activeRouteComponent.set(defaultComponentSource);
                        console.log(`Initial/Default route: ${currentPath}, loading: ${defaultComponentSource}`);
                    }
                };
    
                window.addEventListener('popstate', handlePopState);
                handlePopState({}); // Call on initial load to set the correct view based on URL
            });
        </script>
    </body>
    </html>
    ```
    
*   **`components/home-view.html` (A primary route component, containing a conditionally loaded sub-component)**: The home view, demonstrating conditional loading of an admin panel.
    
    ```html
    <template shadowroot="open">
        <style>
            :host { display: block; padding: 20px; background-color: #f0f8ff; border-radius: 8px; }
            h3 { color: #2196f3; }
            .admin-section { margin-top: 20px; border-top: 1px dashed #aaddff; padding-top: 15px; }
        </style>
        <h3>Welcome Home!</h3>
        <p>This is the main content for your home page.</p>
        <img src="https://placehold.co/300x200/ADD8E6/000000?text=Home+View" alt="Home View Placeholder">
    
        <div class="admin-section">
            <h4>Conditional Feature: Admin Panel</h4>
            <!--
                This component is loaded ONLY if $root.isUserAdmin is true.
                $root provides access to signals from the document's global scope (index.html).
                This demonstrates data-component-load-if for lazy, conditional rendering WITHIN a route.
            -->
            <lazy-admin-panel
                data-component-src="/components/lazy-admin-panel.html"
                data-component-load-if="$root.isUserAdmin"
            ></lazy-admin-panel>
            <p data-show="!$root.isUserAdmin" style="display: none;">Admin panel is hidden. Toggle admin status from the main page to see it!</p>
        </div>
    </template>
    ```
    
*   **`components/lazy-admin-panel.html` (A sub-component, conditionally loaded)**: The admin panel component, demonstrating lazy loading for specific features.
    
    ```html
    <template shadowroot="open">
        <style>
            :host { display: block; padding: 15px; background-color: #f8e6ff; border: 1px solid #d6b3ff; border-radius: 6px; margin-top: 10px; }
            p { color: #8a2be2; font-weight: bold; }
        </style>
        <p>🎉 Welcome, Administrator! This panel was lazy-loaded because you have admin privileges.</p>
        <ul>
            <li>Manage Users</li>
            <li>View System Logs</li>
            <li>Configuration Settings</li>
        </ul>
    </template>
    ```
    
*   **`components/about-view.html`**: A sample about page view component.
    
    ```html
    <template shadowroot="open">
        <style> :host { display: block; padding: 20px; background-color: #fffacd; border-radius: 8px; } h3 { color: #ffeb3b; } </style>
        <h3>About Us</h3>
        <p>Learn more about our mission and values.</p>
        <img src="https://placehold.co/300x200/FFFACD/000000?text=About+View" alt="About View Placeholder">
    </template>
    ```
    
*   **`components/contact-view.html`**: A sample contact page view component.
    
    ```html
    <template shadowroot="open">
        <style> :host { display: block; padding: 20px; background-color: #e6ffe6; border-radius: 8px; } h3 { color: #4CAF50; } </style>
        <h3>Contact Us</h3>
        <p>Reach out to us via email or phone.</p>
        <img src="https://placehold.co/300x200/E6FFE6/000000?text=Contact+View" alt="Contact View Placeholder">
    </template>
    ```
    
*   **`components/my-3d-game.html`**: (This component demonstrates routing to an immersive canvas experience) An example of a 3D game component, dynamically loaded as a route.
    
    ```html
    <template shadowroot="open">
        <style>
            :host { display: block; width: 100%; height: 500px; }
            canvas { display: block; background-color: #000; }
        </style>
        <canvas class="three-canvas"></canvas>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min.js"></script>
        <script type="module">
            export function init(componentInstance) {
                let scene, camera, renderer, world;
                let animationFrameId;
    
                componentInstance.contentReadyCallback = () => {
                    console.log('Initializing 3D Game Simulation...');
                    const canvas = componentInstance.root.querySelector('.three-canvas');
                    if (!canvas) {
                        console.error('Canvas element not found for 3D sim!');
                        return;
                    }
    
                    // Adjust canvas size to parent container
                    const resizeCanvas = () => {
                        const parent = canvas.parentElement;
                        canvas.width = parent.clientWidth;
                        canvas.height = parent.clientHeight;
                        if (camera) {
                            camera.aspect = canvas.clientWidth / canvas.clientHeight;
                            camera.updateProjectionMatrix();
                        }
                        if (renderer) {
                            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
                        }
                    };
                    window.addEventListener('resize', resizeCanvas);
                    componentInstance.registerCleanup(() => window.removeEventListener('resize', resizeCanvas));
    
    
                    // Basic Three.js Setup
                    scene = new THREE.Scene();
                    camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
                    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
                    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
                    // Add some light
                    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
                    scene.add(ambientLight);
                    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
                    scene.add(directionalLight);
    
                    // Basic Physics Setup (Cannon.js)
                    world = new CANNON.World();
                    world.gravity.set(0, -9.82, 0); // m/s²
    
                    // Add a ground plane
                    const groundShape = new CANNON.Plane();
                    const groundBody = new CANNON.Body({ mass: 0 }); // mass = 0 makes it static
                    groundBody.addShape(groundShape);
                    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), -Math.PI/2); // Rotate to be horizontal
                    world.addBody(groundBody);
                    const groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial({ color: 0x888888, side: THREE.DoubleSide }));
                    groundMesh.rotation.x = -Math.PI / 2;
                    scene.add(groundMesh);
    
                    // Add a simple box
                    const boxSize = 0.5;
                    const boxShape = new CANNON.Box(new CANNON.Vec3(boxSize, boxSize, boxSize));
                    const boxBody = new CANNON.Body({ mass: 1, position: new CANNON.Vec3(0, 5, 0) });
                    boxBody.addShape(boxShape);
                    world.addBody(boxBody);
                    const boxMesh = new THREE.Mesh(new THREE.BoxGeometry(boxSize*2, boxSize*2, boxSize*2), new THREE.MeshLambertMaterial({ color: 0x00ff00 }));
                    scene.add(boxMesh);
    
                    camera.position.set(0, 2, 5);
                    camera.lookAt(0,0,0);
    
                    const animate = () => {
                        animationFrameId = requestAnimationFrame(animate);
                        world.step(1 / 60); // Update physics
                        boxMesh.position.copy(boxBody.position);
                        boxMesh.quaternion.copy(boxBody.quaternion);
                        renderer.render(scene, camera);
                    };
                    animate();
                    resizeCanvas(); // Initial canvas resize
    
                    // Cleanup Function for 3D resources
                    componentInstance.registerCleanup(() => {
                        console.log('Cleaning up 3D Game Simulation...');
                        cancelAnimationFrame(animationFrameId);
                        renderer.dispose();
                        scene.clear();
                        world = null; // Clear physics world
                        console.log('3D Game Simulation cleaned up.');
                    });
                };
            }
        </script>
    </template>
    ```
    
**Benefit**: This example demonstrates a fast, client-side driven SPA experience with clean URLs, minimal reloads, and highly encapsulated, component-level state management. The combined use of `data-component-src` for primary routing and `data-component-load-if` for conditional feature loading ensures that only necessary parts of the UI are loaded and active, optimizing performance and resource utilization.
    

<p align="right"><a href="#-design-diverse-user-experiences">⬆️</a></p>

### Server-Side Rendering (SSR) with Client-Side Rendering (CSR) Hydration
_Combining the speed of SSR with the interactivity of client-side components._

Combine the best of both worlds: fast initial page loads via SSR, with subsequent interactive enhancements or full SPA routing via Datastar. The `datastar-components` plugin seamlessly hydrates server-rendered components, ensuring that pre-rendered content becomes interactive without re-rendering.

**Scenario**: An SSR'd product catalog page that can later transition to an SPA-like product detail view. The initial catalog is served quickly, and individual product details are then fetched and displayed dynamically.

*   **Server-rendered `product-catalog.html` (conceptual)**: A conceptual server-rendered page that loads product details client-side.
    
    ```html
    <body>
        <div id="app">
            <h1>Our Products</h1>
            <ul id="product-list">
                <li>
                    <a href="/product/alpha"
                        data-on:click="event.preventDefault(); Datastar.actions.loadProduct('alpha'); history.pushState({}, '', '/product/alpha')">
                        Product Alpha
                    </a>
                </li>
                <!-- ... other products ... -->
            </ul>
            <div id="product-detail-area">
                <!-- This area might be empty initially or contain a default SSR'd product -->
            </div>
        </div>
        <script type="module">
            import { initDatastarComponents } from '/path/to/datastar-components.js';
    
            // A Datastar action to load product details, simulating a client-side fetch and component insertion.
            window.Datastar.actions.loadProduct = async (productId) => {
                const response = await fetch(`/api/products/${productId}`);
                const productData = await response.json();
                // In a real Datastar setup, the backend would send an SSE response with datastar-merge-fragments
                // and potentially datastar-merge-signals. For simplicity here, we'll manually insert the component.
                const detailArea = document.getElementById('product-detail-area');
                detailArea.innerHTML = `<my-product-detail
                                        data-component-src="/components/product-detail.html"
                                        data-component-prop-product-id="${productId}"
                                        data-component-prop-name="${productData.name}"
                                        data-component-prop-description="${productData.description}"
                                        ></my-product-detail>`;
                Datastar.init(detailArea); // Re-scan for newly inserted Datastar components
            };
    
            document.addEventListener('DOMContentLoaded', () => {
                initDatastarComponents(window.Datastar);
                // On initial load, if URL matches /product/:id, trigger client-side loading of that product.
                const pathParts = window.location.pathname.split('/');
                if (pathParts[1] === 'product' && pathParts[2]) {
                    window.Datastar.actions.loadProduct(pathParts[2]);
                }
            });
        </script>
    </body>
    </html>
    ```
    
*   **`components/product-detail.html`**: A component to display detailed product information, potentially fetching more data.
    
    ```html
    <template shadowroot="open">
        <style>/* ...styles... */</style>
        <div data-signals="{ isLoading: true, details: null }">
            <!-- Declaratively bind to props passed from the parent -->
            <h2 data-text="$props.name"></h2>
            <p data-text="$props.description"></p>
            <p data-show="$isLoading" style="display: none;">Loading full product details for <span data-text="$props.productId"></span>...</p>
            <div data-show="!$isLoading" style="display: none;">
                <!-- More details fetched and rendered declaratively from $details signal -->
            </div>
            <script type="module">
                export function init(componentInstance) {
                    componentInstance.contentReadyCallback = async () => {
                        const dsScope = Datastar.scope(componentInstance);
                        const productId = dsScope.$props.peek().productId;
                        if (productId) {
                            // Simulate fetching more detailed product info imperatively
                            await new Promise(resolve => setTimeout(resolve, 500));
                            // Update signals declaratively after fetch
                            dsScope.details.set({ price: '$19.99', stock: 50 });
                            dsScope.isLoading.set(false);
                        }
                    };
                }
            </script>
        </div>
    </template>
    ```
    
**Benefit**: Initial page load is fast due to SSR. Subsequent navigation or lazy loading of product details transitions smoothly to client-side rendered components, with data hydrated via props. This blend provides excellent perceived performance and SEO benefits.
    

<p align="right"><a href="#-design-diverse-user-experiences">⬆️</a></p>

### Immersive Canvas Experiences (Charts, 3D, Physics, Gaming)
_Integrating rich, interactive canvas applications as dynamic components._

Routing can seamlessly transition to complex, interactive components that leverage HTML `<canvas>` for rich experiences, such as data visualizations, 3D simulations, or interactive games. These components, while often relying on imperative JavaScript within their scope, are integrated into the Datastar routing model declaratively.

**Scenario**: A dashboard with a standard view and a route to an interactive 3D physics simulation or a dynamic chart, as demonstrated in the "Single-Page Applications (SPA)" section with `my-3d-game.html`.

**Benefit**: Complex, resource-intensive canvas applications or data visualizations are loaded and initialized only when their route is active. They are properly torn down when navigating away (via `registerCleanup`), preventing memory leaks, and can leverage Datastar's reactivity for dynamic data updates or control parameters within the canvas context. This approach keeps your main application lightweight while enabling powerful, immersive experiences on demand.
    

<p align="right"><a href="#-design-diverse-user-experiences">⬆️</a></p>

### Enhanced UX & Optimizations
_Maximizing user experience and performance through Datastar's features._

This section consolidates how Datastar's core features and the `datastar-components` plugin attributes work together to provide a superior user experience and optimize application performance, particularly in routing and dynamic rendering scenarios.

#### `data-view-transition`
_Creating smooth, animated transitions between different UI states._

This attribute (part of Datastar's core `data-attr` plugin) leverages the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API "null") to provide smooth, animated transitions between different DOM states. When `data-view-transition="true"` is present on an element that is targeted by a `datastar-merge-fragments` SSE event (or implicitly by a Datastar action that causes a significant DOM change), the browser will automatically create a snapshot of the old and new DOM states and animate the transition.

*   **In Routing Context**: This is invaluable for SPA-like routing where an entire view component is swapped. Instead of an abrupt change, `data-view-transition` makes the transition visually appealing and less jarring for the user. You can simply add `data-attr:data-view-transition="true"` to your router outlet or the elements that will be replaced.
    
    **Example (from `index.html` in Dynamic & Conditional Routing section)**:
    
    ```html
    <main class="router-outlet mt-4 p-4 border rounded-lg shadow-md"
            data-component-src="$activeRouteComponent"
            data-attr:data-view-transition="true">
        <!-- ... dynamic component will be loaded here ... -->
    </main>
    ```
    
    When `activeRouteComponent` changes, the browser will attempt a view transition for the `main.router-outlet` element as its content is replaced. You can customize the animation using CSS, all declaratively controlled.
    

#### `data-on-signal-change`
_Reacting to signal changes with custom client-side logic._

This Datastar attribute allows you to execute a Datastar expression whenever a specified signal's value changes. This is incredibly powerful for routing, enabling you to react to route changes (represented by your `$activeRouteComponent` signal) with custom client-side logic beyond just swapping components, all in a declarative fashion.

*   **In Routing Context**: You can use `data-on-signal-change="$activeRouteComponent"` to declaratively trigger analytics events, scroll the page to the top, update the document title, or perform any other side effect that should happen when the view changes.
    
    **Example (Add to `index.html` body or app container, as seen in SPA example)**:
    
    ```html
    <body data-signals="{ activeRouteComponent: '/components/home-view.html', isUserAdmin: false }"
            data-on-signal-change:active-route-component="
                console.log('Primary route component changed to:', $activeRouteComponent);
                const pathName = $activeRouteComponent.split('/').pop().replace('-view.html', '').replace('-game.html', '');
                document.title = 'Datastar App | ' + (pathName === 'home' ? 'Home' : pathName.charAt(0).toUpperCase() + pathName.slice(1));
                window.scrollTo(0, 0);
            ">
        <!-- ... your routing and components ... -->
    </body>
    ```
    
    In this setup, whenever `$activeRouteComponent` changes, the `console.log`, document title update, and scroll-to-top actions will automatically execute declaratively. This provides a clean way to manage "on-route-change" side effects directly from your HTML.
    

#### Optimized Component Loading and Lifecycle Management

The `datastar-components` plugin provides crucial features that optimize routing and overall application performance, seamlessly integrated with Datastar's core:

*   **`data-component-load-if`**: Essential for lazy loading. Components representing different routes, views, or features are only fetched and initialized when their `data-component-load-if` expression evaluates to `true`. This minimizes initial bundle size, reduces network requests for non-critical assets, and improves perceived performance by only loading what's immediately necessary.
    
*   **SSE for Efficient Updates**: By relying on Server-Sent Events to deliver only the necessary DOM fragments and signal updates, Datastar's routing minimizes network payloads compared to full page reloads or large JSON API responses. This contributes to a snappy, responsive feel, even on slower connections.
    
*   **`data-component-connected` / `contentReadyCallback`**: These declarative lifecycle hooks within your components are perfect for performing route-specific initializations (e.g., fetching data specific to a view, starting animations, setting up third-party libraries like charts or 3D scenes) _only when that specific component is active and mounted_. This prevents unnecessary resource consumption for inactive routes.
    
*   **`data-component-disconnected` / `registerCleanup`**: Crucial for cleaning up resources (event listeners, timers, library instances, 3D scenes) when a component's route is navigated away from or the component is otherwise removed from the DOM. This prevents memory leaks and ensures a stable, performant application over extended use, even for imperative setups.
    

By strategically leveraging these features, developers can craft diverse and highly optimized frontend experiences that are both visually appealing and performant, adapting to various architectural needs, from simple static pages to rich, interactive applications.

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>



📖 **Integrating with Documentation Tools (e.g., Storybook)**
-------------------------------------------------------------
***Documenting and showcasing your HTML-first Web Components.***

Storybook is an open-source tool for developing UI components in isolation, enabling you to build, document, and test your UI components independently from your main application. Integrating `datastar-components` with Storybook allows you to showcase your HTML-first Web Components in a dedicated development environment, leveraging Datastar's reactivity within isolated stories.

While `datastar-components.js` provides the fundamental primitives, setting up Storybook to correctly render components that dynamically load HTML templates and use Datastar reactivity requires specific configuration and patterns.

<p align="right"><a href="#-integrating-with-documentation-tools-eg-storybook">⬆️</a></p>

### **Key Steps for Storybook Integration**
_Understanding how Datastar components operate within Storybook's isolated environment._

To properly integrate `datastar-components` with Storybook, it's essential to understand how `datastar-components` works.

**`datastar-components`** is a powerful plugin that extends the core **Datastar** hypermedia framework, enabling you to build reusable **HTML-first Web Components**. Unlike traditional JavaScript frameworks where you define component templates in JS/JSX, `datastar-components` allows you to define your component's structure and reactivity directly within an HTML file.

Here's how it generally operates:

1.  **HTML as the Source of Truth:** Each `datastar-component` is fundamentally an HTML file (`.html`). This file contains the component's markup, its properties defined via `data-component-prop-*` attributes, and event handlers (`data-on-*`).
    
2.  **Dynamic Loading:** When a `<datastar-component>` custom element is used in your main application (or in Storybook), it doesn't immediately render content. Instead, it uses its `data-component-src` attribute to dynamically fetch the corresponding HTML component file.
    
3.  **Client-Side Hydration and Reactivity:** Once the HTML template is fetched, `datastar-components` integrates it into the shadow DOM of the custom element. It then leverages Datastar's reactivity system to bind data from the component's properties (`data-component-prop-*`) to the template and manage state changes, events, and dynamic updates without needing a complex JavaScript build step for component logic.
    
4.  **No Build Step for Components:** A key advantage is that your `.html` components don't require compilation or a complex build process for their core functionality, making them highly portable and easy to share.
    

This HTML-first approach means that integrating with tools like Storybook requires special attention to how these HTML files are served and how Datastar's reactivity is initialized within Storybook's isolated environment.

Now, let's look at the key steps to achieve this seamless integration:

<p align="right"><a href="#-integrating-with-documentation-tools-eg-storybook">⬆️</a></p>

### Step 1 - Storybook Setup
_Configuring Storybook to recognize and initialize Datastar components._

**Install Storybook:** Follow the official Storybook documentation to set up Storybook for Web Components (e.g., `@storybook/web-components-webpack5` or `@storybook/web-components-vite`).
    
**Serve Component Files:** Configure Storybook to serve your component `.html` files. In your `.storybook/main.js`, add your components directory to `staticDirs`:
    
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
    
**Initialize Datastar Components Plugin:** Ensure `datastar.js` and `datastar-components.js` are loaded and initialized within the Storybook preview iframe. The most common way is via `.storybook/preview-head.html` or `.storybook/preview.js`.
    
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
    
    // Other Storybook global parameters can go here
    ```    
        

<p align="right"><a href="#-integrating-with-documentation-tools-eg-storybook">⬆️</a></p>

### Step 2 - Creating Stories for Datastar Components
_Defining stories to showcase and interact with your components in isolation._

Instead of manually constructing the complex `data-component-src` and `data-component-prop-*` attributes in every story, you can use the `storybook-datastar-component-wrapper.js` (provided above) to simplify story creation and integrate seamlessly with Storybook's controls.

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
        // Define argTypes for Storybook controls to allow dynamic prop adjustment in the UI
        argTypes: {
        salutation: { control: 'text', defaultValue: 'Hello' },
        recipient: { control: 'text', defaultValue: 'Storybook User' },
        sender: { control: 'text', defaultValue: 'Storybook' },
        // Action for events emitted by the component (for Storybook's Actions tab)
        onProfileEdit: { action: 'profileEdit' },
        },
        parameters: {
        // Optional: configure layout for Storybook preview
        layout: 'centered',
        },
    };
    
    // Template using the wrapper component to simplify declarative component instantiation
    const Template = (args) => html`
        <storybook-datastar-component-wrapper
        src="/components/my-greeting-card.html"
        .props="${{ // Pass props as an object, which the wrapper converts to data-component-prop-*
            salutation: args.salutation,
            recipient: args.recipient,
            sender: args.sender,
        }}"
        .signals="${{ // Pass initial signals as an object for data-signals (internal component state)
            initialCount: 0 // Example signal for internal component use
        }}"
        .args="${args}" // Pass all args to the wrapper for event handling integration with Storybook Actions
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
    
    // Example for a component with conditional loading (data-component-load-if)
    // src/stories/MyLazyComponent.stories.js
    export const LazyLoaded = (args) => html`
        <storybook-datastar-component-wrapper
        src="/components/my-complex-modal.html"
        .props="${{ /* any props for the modal */ }}"
        .loadIf="${args.isVisible}" // Controls the data-component-load-if attribute
        .signals="${{ // Pass initial signals as an object for internal modal state
            modalOpen: false
        }}"
        >
        <p>Content for the lazy loaded modal.</p>
        </storybook-datastar-component-wrapper>
    `;
    LazyLoaded.args = { isVisible: false };
    LazyLoaded.argTypes = { isVisible: { control: 'boolean' } };
    ```
    

<p align="right"><a href="#-integrating-with-documentation-tools-eg-storybook">⬆️</a></p>

### Benefits of Integration Pattern
The advantages of documenting Datastar components with Storybook.

*   **Simplified Story Creation:** Developers write less boilerplate HTML for each story by leveraging the wrapper, making story definition more concise and readable.
    
*   **Dynamic Prop Management:** Leverage Storybook's `args` and `argTypes` to easily control `data-component-prop-*` values from the Storybook UI. This facilitates interactive component testing and comprehensive documentation of prop behavior.
    
*   **Event Logging:** Use `@storybook/addon-actions` to see events emitted by your components in Storybook's Actions tab, providing clear feedback on component interactions and enabling easy debugging.
    
*   **Isolating Dependencies:** You can combine this with tools like Mock Service Worker (MSW) to intercept `fetch` requests made by your components, providing consistent mock data for documentation and testing in isolation, regardless of backend availability.
    
*   **Visual Regression Testing:** Storybook is an ideal platform for setting up visual regression tests (e.g., with Chromatic), ensuring UI consistency across changes and preventing unintended visual regressions.
    

By adopting this approach, you can create a rich, interactive documentation site for your `datastar-components` components, making them easier to understand, test, and reuse throughout your projects.

<br>

---
<p align="right"><a href="#-table-of-contents">Back to Top ⬆️</a></p><br>



🤝 **Community Engagement**
---------------------------
***Join our open-source journey and contribute to the future of Datastar Components.***

At **Aerea**, we're dedicated to fostering **open-source communities** and strive to encourage participation in their projects by providing tools and resources that empower developers.

This plugin is designed to make developing Web Components with `Datastar` easy, powerful, straightforward and robust. We believe in the strength of collective intelligence and the impact of community contributions.

<p align="right"><a href="#-community-engagement">⬆️</a></p>

### Our Contribution
_Meet the driving force behind this open-source initiative._

🎁This plugin is a direct contribution to the community from:

[Vernon Young, Founder & CEO](https://aerea.co/vernon "null")

[**Aerea Co. | Chicago, IL** | https://aerea.co](https://aerea.co "null")

<p align="right"><a href="#-community-engagement">⬆️</a></p>

### Feedback & Support
_Your voice shapes the evolution of Datastar Components._

We believe in the power of community and collaboration. Your feedback is crucial for the evolution of the `datastar-components` plugin. Whether you're a developer, designer, or just curious about how to use this plugin, we want to hear from you! We welcome all contributions, whether you're improving documentation, fixing bugs, or adding new features. Your feedback is invaluable in making this plugin better for everyone.

**Here's how you can contribute or get support:**

*   **Report Issues & Bugs:** If you find a bug or have a suggestion, please open an issue on our [GitHub Issues page](https://github.com/aereaco/datastar-components/issues "null").
    
*   **Questions, Feedback & Discussions:** For general questions, feedback, or to discuss new ideas, head over to our [GitHub Discussions page](https://github.com/aereaco/datastar-components/discussions "null").

<p align="right"><a href="#-community-engagement">⬆️</a></p>

### Acknowledgments
_Our gratitude to the Datastar team and community._

💖Special thanks to the **Datastar** team for their contributions and support. Their vision for a hypermedia-driven web has been a significant inspiration.

*   [**Datastar** | The hypermedia framework | https://data-star.dev/](https://data-star.dev/ "null")
    
*   [**Datastar GitHub** | https://github.com/starfederation/datastar](https://github.com/starfederation/datastar "null")
    
*   [**Datastar Discord** | https://discord.gg/9Z2c5a6](https://discord.gg/9Z2c5a6 "null")
    
*   [**Datastar Documentation** | https://docs.data-star.dev/](https://docs.data-star.dev/ "null")
    

Hoping to build a better future together, one component at a time!

<br><br>

---
<p align="center"><a href="#-table-of-contents">⬆️ Back to Top</a></p>

---

<p align="center">© 2025 Aerea Co. All rights reserved.</p>
