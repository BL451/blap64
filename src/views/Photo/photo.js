import { html } from "lit-html";

export default (props) => {
    const options = {};
    if (props && props.collection) {
        options.collection = props.collection;
    }
    if (props && props.skipAnimations) {
        options.skipAnimations = props.skipAnimations;
    }
    
    return html`
        <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
        <p5-element id="bg" sketch="photo" .options=${options} .skipAnimations=${props?.skipAnimations}></p5-element>
    `;
};