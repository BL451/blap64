// Web thumbnail imports
import asteroidsThumb from 'url:../../assets/interactive/web/thumbnails/asteroids.webp';
import dimensionDoorThumb from 'url:../../assets/interactive/web/thumbnails/dimension-door.webp';
import flowFieldsThumb from 'url:../../assets/interactive/web/thumbnails/flow-fields.webp';
import galaxyCollisionThumb from 'url:../../assets/interactive/web/thumbnails/galaxy-collision.webp';
import infiniteBauhausThumb from 'url:../../assets/interactive/web/thumbnails/infinite-bauhaus.webp';
import koiPondThumb from 'url:../../assets/interactive/web/thumbnails/koi-pond.webp';
import lavaLampThumb from 'url:../../assets/interactive/web/thumbnails/lava-lamp.webp';
import nissan300zxThumb from 'url:../../assets/interactive/web/thumbnails/nissan-300zx-z31.webp';
import strangeInkThumb from 'url:../../assets/interactive/web/thumbnails/strange-ink.webp';

// Web Experiences Project Data
// Each project represents an interactive web experience or creative coding project
//
// Project Structure:
// - type: "local" or "external"
//   - "local": hosted on same domain, allows framerate optimization
//   - "external": third-party platforms (OpenProcessing, CodePen, etc.)
// - url: path to HTML file (local) or embed URL (external)
// - image: imported thumbnail reference
//
// Local Project Directory Structure:
// src/assets/interactive/sketches/
//   ├── project-slug/
//   │   ├── index.html (main HTML file)
//   │   ├── sketch.js (p5.js sketch with framerate optimization)
//   │   └── style.css (optional styling)
//
// For optimal mobile performance, local sketches should include:
// frameRate(60); // in setup() function
// function optimizeForMobile() { frameRate(60); } // optional helper

export const projects = [
    {
        name: "Dimension Door",
        slug: "dimension-door",
        year: "2024",
        description: "A swirling psychedelic vortex of multicoloured squares twists aggressively back and forth, seemingly descending into the black background.",
        subtitle: "SKETCH",
        image: dimensionDoorThumb,
        type: "local", // "local" or "external"
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Strange Ink",
        slug: "strange-ink",
        year: "2025",
        description: "An extremely simple program that produces a fascinating, liquid-like output using no physics or simulation algorithms.",
        subtitle: "INTERACTIVE",
        image: strangeInkThumb,
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Koi Pond",
        slug: "koi-pond",
        year: "2024",
        description: "Fishy :)",
        subtitle: "SKETCH",
        image: koiPondThumb,
        type: "local", // Example of a local project
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Lava Lamp",
        slug: "lava-lamp",
        year: "2023",
        description: "Groovy.",
        subtitle: "SKETCH",
        image: lavaLampThumb,
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Infinite Bauhaus",
        slug: "infinite-bauhaus",
        year: "2023",
        description: "Bauhaus, infinitely.",
        subtitle: "SKETCH",
        image: infiniteBauhausThumb,
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Galaxy Collision",
        slug: "galaxy-collision",
        year: "2024",
        description: "Oop.",
        subtitle: "SKETCH",
        image: galaxyCollisionThumb,
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Flow Fields",
        slug: "flow-fields",
        year: "2023",
        description: "Configurable perlin noise field driving particle velocity.",
        subtitle: "INTERACTIVE",
        image: flowFieldsThumb,
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Asteroids",
        slug: "asteroids",
        year: "2024",
        description: "Asteroids!",
        subtitle: "GAME",
        image: asteroidsThumb,
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    },
    {
        name: "Nissan 300ZX",
        slug: "nissan-300zx",
        year: "2023",
        description: "A close digital clone of the speedometer and tachometer from the 1987 Nizzan 300ZX Z31",
        subtitle: "INTERACTIVE",
        image: nissan300zxThumb,
        type: "local",
        url: null // Local sketches use slug for lookup, no URL needed
    }
];

// Helper function to find project by slug (similar to installations)
export function findProjectBySlug(slug) {
    return projects.find(project => project.slug === slug);
}

// Helper function to get project index by slug
export function getProjectIndexBySlug(slug) {
    return projects.findIndex(project => project.slug === slug);
}
