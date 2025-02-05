import { render } from "lit";

export default class Router {
    constructor(routes = [], render_node) {
        this.routes = routes;
        this.render_node = render_node;
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
        // Look for a matching route, display 404 page otherwise
        const route = this.routes.filter((route) => this.match(route, path))[0];
        // Maybe not the smartest way to do this, but reset all routes to default colour
        document
            .querySelectorAll("[route]")
            .forEach((route) => (route.style.color = "#424242"));
        if (!route) {
            const route_404 = this.routes.filter((route) =>
                this.match(route, "/oops"),
            )[0];
            window.location.href = "#" + route_404.path;
            render(route_404.renderView(), this.render_node);
        } else {
            // Hashbanging navigation
            window.location.href = path.search("/#") === -1 ? "#" + path : path;
            // Lit template rendering of HTML for the view
            render(route.renderView(), this.render_node);
            let route_element = document.querySelector(
                `[route=${CSS.escape(route.path)}]`,
            );
            if (route_element !== null) route_element.style.color = "#ffbb00";
        }
    }

    addRoutes(routes) {
        this.routes = [...this.routes, ...routes];
    }
}
