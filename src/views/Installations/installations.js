import { html } from "lit";

export default (props) => html`
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="installations"></p5-element>
`;
