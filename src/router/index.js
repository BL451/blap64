import Router from "./Router.js";

export default (routes) => {
    // Attach the router to the app element
    const router = new Router(routes, document.getElementById("app"));

    document.addEventListener("DOMContentLoaded", (e) => {
        // Get all elements in the DOM with the route property
        document.querySelectorAll("[route]").forEach((route) =>
            // Add a click event listener to each of them to handle navigation
            route.addEventListener(
                "click",
                (e) => {
                    e.preventDefault();
                    router.navigate(e.target.getAttribute("route"));
                },
                false,
            ),
        );
    });

    window.addEventListener("hashchange", (e) =>
        router.navigate(e.target.location.hash.substr(1)),
    );
};
