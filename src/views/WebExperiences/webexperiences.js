import { html } from "lit";
// Import local sketch functions
import { sketch as dimensionDoorSketch } from "./sketches/dimension-door.js";
import { sketch as strangeInkSketch } from "./sketches/strange-ink.js";
import { sketch as koiPondSketch } from "./sketches/koi-pond.js";
import { sketch as lavaLampSketch } from "./sketches/lava-lamp/lava-lamp.js";
import { sketch as infiniteBauhausSketch } from "./sketches/infinite-bauhaus.js";
import { sketch as galaxyCollisionSketch } from "./sketches/galaxy-collision.js";
import { sketch as flowFieldsSketch } from "./sketches/flow-fields.js";
import { sketch as asteroidsSketch } from "./sketches/asteroids.js";
import { sketch as nissan300zxSketch } from "./sketches/nissan-300zx.js";

// Export sketch map for easy access
export const localSketches = {
    'dimension-door': dimensionDoorSketch,
    'strange-ink': strangeInkSketch,
    'koi-pond': koiPondSketch,
    'lava-lamp': lavaLampSketch,
    'infinite-bauhaus': infiniteBauhausSketch,
    'galaxy-collision': galaxyCollisionSketch,
    'flow-fields': flowFieldsSketch,
    'asteroids': asteroidsSketch,
    'nissan-300zx': nissan300zxSketch
};

export default (props) => html`
    <p5-element id="bg" sketch="webexperiences"></p5-element>
`;
