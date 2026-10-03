import { html } from "lit";

export default (props) => {
    const options = {};
    if (props && props.group) {
        options.group = props.group;
    }

    return html`
        <p5-element id="bg" sketch="links" .options=${options}></p5-element>
    `;
};
