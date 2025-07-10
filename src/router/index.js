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

    window.addEventListener("hashchange", (e) => {
        // Detect if this is a back/forward navigation by checking if user initiated it
        const isBackForward = !router.is_navigating;
        const rawPath = e.target.location.hash.substr(1);
        const cleanPath = rawPath && rawPath !== '' ? 
            (rawPath.startsWith('/') ? rawPath : '/' + rawPath) : '/';
        
        if (isBackForward) {
            router.navigate(cleanPath, { skipAnimations: true });
        }
    });

    // Return the router instance for programmatic access
    return router;
};
