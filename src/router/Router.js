import { render } from "lit";
import { updateBreadcrumb } from "../views/elements/breadcrumb-nav.js";

export default class Router {
    constructor(routes = [], render_node) {
        this.routes = routes;
        this.render_node = render_node;
        this.path = "";
        this.is_navigating = false;
        // Clean the initial path to avoid hashbang issues
        const rawInitialPath = location.hash.substr(1);
        const initialPath = rawInitialPath && rawInitialPath !== '' ? 
            (rawInitialPath.startsWith('/') ? rawInitialPath : '/' + rawInitialPath) : '/';
        this.navigate(initialPath);
    }

    match(route, request_path) {
        let param_names = [];

        // regex for the route
        let regex_path =
            "^" + route.path.replace(/([:*])(\w+)/g, (full, colon, name) => {
                param_names.push(name);
                return "([^\/]+)";
            }) + "$";
        let params = {};

        // match the route using the regex above
        let route_match = request_path.match(new RegExp(regex_path));
        if (route_match !== null) {
            // get query parameters if available
            params = route_match.slice(1).reduce((params, value, index) => {
                if (params === null) params = {};
                params[param_names[index]] = value;
                return params;
            }, null);
        }
        // set query parameters
        route.setProps(params);

        return route_match;
    }

    navigate(path, options = {}) {
        if (path == this.path || this.is_navigating) {
            return;
        }

        // Check for skipAnimations URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('skipAnimations') === 'true' && !options.hasOwnProperty('skipAnimations')) {
            options.skipAnimations = true;
        }

        this.path = path;
        // Look for a matching route, display 404 page otherwise
        const route = this.routes.filter((route) => this.match(route, path))[0];
        // Reset CSS classes on all routes in the view
    document
        .querySelectorAll("[route]")
        .forEach((route) => route.classList.remove("route-active"));
    //.forEach((route) => (route.className = "pointer route"));
    if (!route) {
        // Find the 404 route and render it directly
        const notFoundRoute = this.routes.find(r => r.path === "/oops");
        if (notFoundRoute) {
            this.is_navigating = true;
            document.getElementById("app").style.opacity = 0;
            setTimeout(() => {
                render(notFoundRoute.renderView(), this.render_node);
                document.getElementById("app").style.opacity = 1;
                this.is_navigating = false;
                updateBreadcrumb("/oops");
            }, 250);
        }
        return;
    } else {
        this.is_navigating = true;
        // Fade out the main view
        document.getElementById("app").style.opacity = 0;
        let route_element = document.querySelector(
            `[route=${CSS.escape(route.path)}]`,
        );
        // Update the CSS class on the active route
        if (route_element !== null) {
            route_element.classList.add("route-active");
        }
        // Render new page and fade in the main view after 200ms
        setTimeout(
            function () {
                // Update URL to match clean path
                const cleanPath = path.startsWith('/') ? path : '/' + path;
                if (window.location.hash !== '#' + cleanPath) {
                    window.location.hash = '#' + cleanPath;
                }
                // Add navigation options to route props
                const routeProps = route.props || {};
                if (options.skipAnimations) {
                    routeProps.skipAnimations = true;
                }
                route.setProps(routeProps);
                // Lit template rendering of HTML for the view
                render(route.renderView(), this.render_node);
                // Sick fade bro
                document.getElementById("app").style.opacity = 1;
                this.is_navigating = false;
                // Update breadcrumb navigation with clean path
                updateBreadcrumb(cleanPath);
            }.bind(this),
            250,
        );
    }
    }

    addRoutes(routes) {
        this.routes = [...this.routes, ...routes];
    }

    navigateBack(path) {
        this.navigate(path, { skipAnimations: true });
    }
}
