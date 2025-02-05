import router from "./router/index.js";
import Route from "./router/Route.js";

import homeView from "./views/Home/home.js";
import aboutView from "./views/About/about.js";
import oopsView from "./views/Oops/oops.js";

import "./css/style.css";

const routes = [
    new Route("home", "/", homeView),
    new Route("about", "/about", aboutView),
    new Route("oops", "/oops", oopsView),
];

router(routes);
