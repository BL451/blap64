import { html } from "lit-html";
import { findProjectBySlug } from "../Installations/project-details.js";
import { findCollectionBySlug } from "../Photo/photo-collections.js";

// Map routes to human-readable directory names and their actual paths
const pathMap = {
    'home': '/',
    'about': '/about',
    'interactive': '/interactive',
    'live': '/interactive/live',
    '404': '/oops'
};

// Function to get breadcrumb segments with navigation paths
function getBreadcrumbSegments(currentPath) {
    // Remove hashbang if present (handles /#/, #/, ##/, etc.)
    const cleanPath = currentPath.replace(/^\/?#+\/?/, '') || '/';

    // Handle root path
    if (cleanPath === '/' || cleanPath === '') {
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' }
        ];
    }

    // Handle project-specific paths
    const projectMatch = cleanPath.match(/^\/interactive\/live\/(.+)$/);
    if (projectMatch) {
        const projectSlug = projectMatch[1];
        const project = findProjectBySlug(projectSlug);
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' },
            { name: 'interactive', path: '/interactive' },
            { name: 'live', path: '/interactive/live' },
            { name: project ? project.name : projectSlug, path: cleanPath }
        ];
    }

    // Handle photo collection-specific paths
    const collectionMatch = cleanPath.match(/^\/photo\/(.+)$/);
    if (collectionMatch) {
        const collectionSlug = collectionMatch[1];
        const collection = findCollectionBySlug(collectionSlug);
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' },
            { name: 'photo', path: '/photo' },
            { name: collection ? collection.name : collectionSlug, path: cleanPath }
        ];
    }

    // Handle nested paths
    if (cleanPath === '/interactive/live') {
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' },
            { name: 'interactive', path: '/interactive' },
            { name: 'live', path: '/interactive/live' }
        ];
    }

    // Handle single level paths
    if (cleanPath === '/about') {
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' },
            { name: 'about', path: '/about' }
        ];
    }

    if (cleanPath === '/interactive') {
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' },
            { name: 'interactive', path: '/interactive' }
        ];
    }

    if (cleanPath === '/photo') {
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' },
            { name: 'photo', path: '/photo' }
        ];
    }

    if (cleanPath === '/oops') {
        return [
            { name: '~', path: null },
            { name: 'home', path: '/' },
            { name: '404', path: '/oops' }
        ];
    }

    // Fallback for unmapped paths
    return [
        { name: '~', path: null },
        { name: 'home', path: '/' },
        { name: cleanPath.replace('/', ''), path: cleanPath }
    ];
}

// Handle navigation clicks
function handleBreadcrumbClick(event, path) {
    event.preventDefault();
    if (path && window.appRouter) {
        // Skip animations when navigating to home from breadcrumb
        const options = path === '/' ? { skipAnimations: true } : {};
        window.appRouter.navigate(path, options);
    }
}

export const createBreadcrumbNav = (currentPath) => {
    const segments = getBreadcrumbSegments(currentPath);

    return html`
        <div class="breadcrumb-nav">
            <span class="breadcrumb-text">
                <span class="breadcrumb-segment" @click=${(e) => handleBreadcrumbClick(e, '/')}>~/home</span>${segments.length > 2 ? segments.slice(2).map(segment => html`<span class="breadcrumb-separator">/</span><span class="breadcrumb-segment" @click=${(e) => handleBreadcrumbClick(e, segment.path)}>${segment.name}</span>`) : ''}
            </span>
        </div>
    `;
};

// Function to update breadcrumb when route changes
export const updateBreadcrumb = (currentPath) => {
    const breadcrumbContainer = document.getElementById("breadcrumb-container");
    if (breadcrumbContainer) {
        // Ensure we clean the path here too in case router passes it with hashbang
        const cleanPath = currentPath.replace(/^\/?#+\/?/, '') || '/';
        import("lit").then(({ render }) => {
            render(createBreadcrumbNav(cleanPath), breadcrumbContainer);
        });
    }
};
