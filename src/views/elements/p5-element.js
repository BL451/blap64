import { LitElement, html, css } from "lit";
import { homeSketch } from "../Home/sketch.js";
import { oopsSketch } from "../Oops/sketch.js";
import { codeartSketch } from "../CodeArt/sketch.js";
import { webexperiencesSketch } from "../WebExperiences/sketch.js";
import { installationsSketch } from "../Installations/sketch.js";
import { photoSketch } from "../Photo/sketch.js";

export class p5Element extends LitElement {
    static styles = css`
        canvas {
            display: block;
            margin: 0;
            padding: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
    `;

    static properties = {
        id: { type: String },
        sketch: { type: String },
        skipAnimations: { type: Boolean },
        options: { type: Object },
    };

    constructor() {
        super();
        this.id = "bg";
        this.sketch = "";
        this.skipAnimations = false;
        this.options = {};
        this.p5Instance = null;
        this.containerDiv = null;
        this.isInitialized = false;
    }

    connectedCallback() {
        super.connectedCallback();
        // Initialize the sketch when the element is added to the DOM
        this.updateComplete.then(() => {
            if (!this.isInitialized) {
                this.initializeSketch();
            }
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up the p5 instance when the element is removed from the DOM
        this.cleanupSketch();
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        // Only reinitialize if already initialized and properties actually changed
        if (this.isInitialized && (changedProperties.has('sketch') || changedProperties.has('skipAnimations') || changedProperties.has('options'))) {
            this.cleanupSketch();
            this.initializeSketch();
        } else if (!this.isInitialized) {
            // Initialize for the first time
            this.initializeSketch();
        }
    }

    cleanupSketch() {
        try {
            if (this.p5Instance) {
                console.log(`p5-element: Cleaning up p5 instance for ${this.sketch}`);
                
                // Call custom cleanup method if it exists
                if (typeof this.p5Instance.cleanupSketch === 'function') {
                    this.p5Instance.cleanupSketch();
                }
                
                // Remove the p5 instance properly
                this.p5Instance.remove();
                this.p5Instance = null;
            }
            if (this.containerDiv) {
                // Clear the container div
                this.containerDiv.innerHTML = '';
            }
            this.isInitialized = false;
        } catch (error) {
            console.error('p5-element: Error during cleanup:', error);
            // Force cleanup even if there's an error
            this.p5Instance = null;
            if (this.containerDiv) {
                this.containerDiv.innerHTML = '';
            }
            this.isInitialized = false;
        }
    }

    initializeSketch() {
        try {
            if (!this.containerDiv) {
                this.containerDiv = this.shadowRoot.querySelector('#sketch-container');
            }

            if (!this.containerDiv) {
                console.warn('p5-element: Container not ready yet, retrying...');
                setTimeout(() => this.initializeSketch(), 100);
                return;
            }

            // Clear any existing content
            this.containerDiv.innerHTML = '';

            console.log(`p5-element: Initializing sketch: ${this.sketch}, skipAnimations: ${this.skipAnimations}, options:`, this.options);

            // Create the appropriate sketch based on the sketch property
            if (this.sketch === "home") {
                this.p5Instance = homeSketch(this.containerDiv, { skipAnimations: this.skipAnimations });
            } else if (this.sketch === "codeart") {
                this.p5Instance = codeartSketch(this.containerDiv);
            } else if (this.sketch === "webexperiences") {
                this.p5Instance = webexperiencesSketch(this.containerDiv, this.options);
            } else if (this.sketch === "installations") {
                this.p5Instance = installationsSketch(this.containerDiv, this.options);
            } else if (this.sketch === "photo") {
                this.p5Instance = photoSketch(this.containerDiv, this.options);
            } else {
                this.p5Instance = oopsSketch(this.containerDiv);
            }

            if (this.p5Instance) {
                console.log(`p5-element: Successfully created p5 instance for ${this.sketch}`);
                this.isInitialized = true;
            }
        } catch (error) {
            console.error('p5-element: Error initializing sketch:', error);
            this.isInitialized = false;
        }
    }

    render() {
        return html`<div id="sketch-container"></div>`;
    }
}

customElements.define("p5-element", p5Element);
