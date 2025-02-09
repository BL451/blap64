import router from "./router/index.js";
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

router(routes);

if (mobileCheck()) {
    document.getElementById("mainNav").className = "nav-mobile";
    document
        .querySelectorAll("[route]")
        .forEach((route) => route.classList.add("route-mobile"));
}
