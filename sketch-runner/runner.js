import { localSketches } from "../src/views/WebExperiences/webexperiences.js";

const params = new URLSearchParams(window.location.search);
const sketchSlug = params.get("sketch");

const container = document.getElementById("sketch-container");
const errorEl = document.getElementById("error");
const sketchList = document.getElementById("sketch-list");

if (!sketchSlug || !localSketches[sketchSlug]) {
    container.style.display = "none";
    document.getElementById("watermark").style.display = "none";
    errorEl.classList.remove("hidden");

    for (const slug of Object.keys(localSketches)) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `?sketch=${slug}`;
        a.textContent = slug;
        li.appendChild(a);
        sketchList.appendChild(li);
    }
} else {
    const sketchFn = localSketches[sketchSlug];
    document.title = `${sketchSlug} - BLAP64`;
    new p5(sketchFn, container);
}
