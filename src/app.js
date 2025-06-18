import createRouter from "./router/index.js";
import Route from "./router/Route.js";
import { mobileCheck } from "./utils.js";

import homeView from "./views/Home/home.js";
import codeartView from "./views/CodeArt/codeart.js";
import aboutView from "./views/About/about.js";
import oopsView from "./views/Oops/oops.js";

const routes = [
    new Route("home", "/", homeView),
    new Route("codeart", "/codeart", codeartView),
    new Route("about", "/about", aboutView),
    new Route("oops", "/oops", oopsView),
];

// Create router instance and make it globally available
const router = createRouter(routes);
window.appRouter = router;

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
