import createRouter from "./router/index.js";
import Route from "./router/Route.js";
import { mobileCheck } from "./utils.js";
import { render } from "lit";
import { createBreadcrumbNav } from "./views/elements/breadcrumb-nav.js";
import { createHelpButton } from "./views/elements/help-button.js";

import homeView from "./views/Home/home.js";
import codeartView from "./views/CodeArt/codeart.js";
import webexperiencesView from "./views/WebExperiences/webexperiences.js";
import linksView from "./views/Links/links.js";
import aboutView from "./views/About/about.js";
import installationsView from "./views/Installations/installations.js";
import photoView from "./views/Photo/photo.js";
import oopsView from "./views/Oops/oops.js";

const routes = [
    new Route("project", "/interactive/live/:project", installationsView),
    new Route("installations", "/interactive/live", installationsView),
    new Route("codeart", "/interactive", codeartView),
    new Route("webexperiences", "/interactive/web", webexperiencesView),
    new Route("links", "/links", linksView),
    new Route("photo-collection", "/photo/:collection", photoView),
    new Route("photo", "/photo", photoView),
    new Route("about", "/about", aboutView),
    new Route("oops", "/oops", oopsView),
    new Route("home", "/", homeView),
];

// Create router instance and make it globally available
const router = createRouter(routes);
window.appRouter = router;

// Initialize breadcrumb navigation
const breadcrumbContainer = document.getElementById("breadcrumb-container");
if (breadcrumbContainer) {
    // Clean the initial path to remove hashbang
    const rawPath = window.location.hash.substr(1);
    const initialPath = rawPath && rawPath !== '' ?
        (rawPath.startsWith('/') ? rawPath : '/' + rawPath) : '/';
    render(createBreadcrumbNav(initialPath), breadcrumbContainer);
}

// Initialize help button
const helpContainer = document.getElementById("help-container");
if (helpContainer) {
    render(createHelpButton(), helpContainer);
}

// Listen for custom navigation events from p5 sketches
document.addEventListener('navigate-to', (event) => {
    if (router && event.detail && event.detail.path) {
        router.navigate(event.detail.path);
    }
});

if (mobileCheck()) {
    document.getElementById("mainNav").className = "nav-mobile";
    document
        .querySelectorAll("[route]")
        .forEach((route) => route.classList.add("route-mobile"));
}
