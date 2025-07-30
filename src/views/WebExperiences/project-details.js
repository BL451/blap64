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
        type: "external", // "local" or "external"
        url: "https://openprocessing.org/sketch/2225444/embed/?plusEmbedHash=c87d5f9d&userID=424615&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Strange Ink",
        slug: "strange-ink",
        year: "2025",
        description: "An extremely simple program that produces a fascinating, liquid-like output using no physics or simulation algorithms.",
        subtitle: "INTERACTIVE",
        image: strangeInkThumb,
        type: "external",
        url: "https://openprocessing.org/sketch/2633988/embed/?plusEmbedHash=f02d6b2f&userID=424615&plusEmbedTitle=true&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Koi Pond",
        slug: "koi-pond",
        year: "2024",
        description: "Fishy :)",
        subtitle: "SKETCH",
        image: koiPondThumb,
        type: "external", // Example of a local project
        url: "https://openprocessing.org/sketch/2321803/embed/?plusEmbedHash=3c231366&userID=424615&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Lava Lamp",
        slug: "lava-lamp",
        year: "2023",
        description: "Groovy.",
        subtitle: "SKETCH",
        image: lavaLampThumb,
        type: "external",
        url: "https://openprocessing.org/sketch/2242573/embed/?plusEmbedHash=f69d7b44&userID=424615&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Infinite Bauhaus",
        slug: "infinite-bauhaus",
        year: "2023",
        description: "Bauhaus, infinitely.",
        subtitle: "SKETCH",
        image: infiniteBauhausThumb,
        type: "external",
        url: "https://openprocessing.org/sketch/2150578/embed/?plusEmbedHash=bc6f5151&userID=424615&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Galaxy Collision",
        slug: "galaxy-collision",
        year: "2024",
        description: "Oop.",
        subtitle: "SKETCH",
        image: galaxyCollisionThumb,
        type: "external",
        url: "https://openprocessing.org/sketch/2242584/embed/?plusEmbedHash=ee3b371c&userID=424615&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Flow Fields",
        slug: "flow-fields",
        year: "2023",
        description: "Configurable perlin noise field driving particle velocity.",
        subtitle: "INTERACTIVE",
        image: flowFieldsThumb,
        type: "external",
        url: "https://openprocessing.org/sketch/2238759/embed/?plusEmbedHash=2b202fab&userID=424615&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Asteroids",
        slug: "asteroids",
        year: "2024",
        description: "Asteroids!",
        subtitle: "GAME",
        image: asteroidsThumb,
        type: "external",
        url: "https://openprocessing.org/sketch/2242558/embed/?plusEmbedHash=bd817a6f&userID=424615&plusEmbedFullscreen=true&show=sketch"
    },
    {
        name: "Nissan 300ZX",
        slug: "nissan-300zx",
        year: "2023",
        description: "A close digital clone of the speedometer and tachometer from the 1987 Nizzan 300ZX Z31",
        subtitle: "INTERACTIVE",
        image: nissan300zxThumb,
        type: "external",
        url: "https://openprocessing.org/sketch/2472358/embed/?plusEmbedHash=34b59852&userID=424615&plusEmbedTitle=true&plusEmbedFullscreen=true&show=sketch"
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
