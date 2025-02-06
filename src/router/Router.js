import { render } from "lit";

export default class Router {
    constructor(routes = [], render_node) {
        this.routes = routes;
        this.render_node = render_node;
        this.path = "";
        this.is_navigating = false;
        this.navigate(location.pathname + location.hash);
    }

    match(route, request_path) {
        let param_names = [];

        // regex for the route
        let regex_path =
            route.path.replace(/([:*])(\w+)/g, (full, colon, name) => {
                param_names.push(name);
                return "([^\/]+)";
            }) + "(?:\/|$)";
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

    navigate(path) {
        if (path == this.path || this.is_navigating) {
            return;
        }
        this.path = path;
        // Look for a matching route, display 404 page otherwise
        const route = this.routes.filter((route) => this.match(route, path))[0];
        // Reset CSS classes on all routes in the view
        document
            .querySelectorAll("[route]")
            .forEach((route) => (route.className = "pointer route"));
        if (!route) {
            // This triggers the hashchange event, causing navigate() to be called again and matching the route with our 404 page
            window.location.href = "#/oops";
        } else {
            this.is_navigating = true;
            // Fade out the main view
            document.getElementById("app").style.opacity = 0;
            let route_element = document.querySelector(
                `[route=${CSS.escape(route.path)}]`,
            );
            // Update the CSS class on the active route
            if (route_element !== null) {
                route_element.className = "pointer route-active";
            }
            // Render new page and fade in the main view after 200ms
            setTimeout(
                function () {
                    // Hashbanging navigation
                    window.location.href =
                        path.search("/#") === -1 ? "#" + path : path;
                    // Lit template rendering of HTML for the view
                    render(route.renderView(), this.render_node);
                    // Sick fade bro
                    document.getElementById("app").style.opacity = 1;
                    this.is_navigating = false;
                }.bind(this),
                200,
            );
        }
    }

    addRoutes(routes) {
        this.routes = [...this.routes, ...routes];
    }
}
