import { LitElement, html, css } from "lit";
import { homeSketch } from "../Home/sketch.js";
import { oopsSketch } from "../Oops/sketch.js";

export class p5Element extends LitElement {
    static styles = css`
        canvas {
            display: block;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: rgb(0, 0, 0);
            width: 100%;
            height: 100%;
        }
    `;

    static properties = {
        id: { type: String },
        sketch: { type: String },
    };

    constructor() {
        super();
        this.id = "bg";
        this.sketch = "";
    }

    script() {
        let div = document.createElement("div");
        if (this.sketch === "home") {
            homeSketch(div);
        } else {
            oopsSketch(div);
        }

        /* // This works for embedding a sketch from OpenProcessing
        let script = document.createElement("iframe");
        script.src =
            "https://openprocessing.org/sketch/2242565/embed/?plusEmbedHash=321f7b6f&userID=424615&plusEmbedFullscreen=true&show=sketch";
        script.width = "400";
        script.height = "400";
        */
        return div;
    }

    render() {
        return html` ${this.script()} `;
    }
}

customElements.define("p5-element", p5Element);
