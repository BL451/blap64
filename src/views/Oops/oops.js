import { html } from "lit-html";

export default (props) => html`
    <div class="horizontal-center vertical-center">
        <h1 class="text-center">oops<br />How did you get here?</h1>
    </div>
    <!-- p5-element is a custom element that allows us to easily put a p5 sketch as the background of this page -->
    <!-- The custom element itself handles choosing the sketch based on the page property provided below -->
    <p5-element id="bg" sketch="oops"></p5-element>
`;
