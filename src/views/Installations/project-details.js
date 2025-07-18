// URL imports for all media - this is what worked before
// import sketchingFlockImg from 'url:../../assets/images/projects/sketching-flock/sketching-flock.jpg';
// import sketchingFlockVideo1 from 'url:../../assets/images/projects/sketching-flock/IMG_6871.mp4';
// import sketchingFlockVideo2 from 'url:../../assets/images/projects/sketching-flock/IMG_6875.mp4';
// import sketchingFlockVideo3 from 'url:../../assets/images/projects/sketching-flock/IMG_6880.mp4';

// Import video thumbnails for mobile performance (create these from video frames)
// import video1Thumb from 'url:../../assets/images/projects/sketching-flock/IMG_6871-thumb.jpg';
// import video2Thumb from 'url:../../assets/images/projects/sketching-flock/IMG_6875-thumb.jpg';
// import video3Thumb from 'url:../../assets/images/projects/sketching-flock/IMG_6880-thumb.jpg';

export const projects = [
    {
        name: "Sketching Flock",
        slug: "sketching-flock",
        type: "Interactive Installation, Projection",
        location: "Toronto, Canada",
        year: "2025",
        description: "Coming soon!",
        images: [
            //sketchingFlockVideo3,
            //sketchingFlockVideo2,
            //sketchingFlockVideo1,
            //sketchingFlockImg
        ],
        // Optional: Map video URLs to thumbnail URLs for mobile performance
        // Once you create thumbnails, uncomment and update these:
        thumbnails: {
            // [sketchingFlockVideo1]: video1Thumb,
            // [sketchingFlockVideo2]: video2Thumb,
            // [sketchingFlockVideo3]: video3Thumb
        }
    },
    {
        name: "Blind Spots",
        slug: "blind-spots",
        type: "Interactive Installation, Projection",
        location: "Toronto, Canada",
        year: "2025",
        description: "Coming soon!",
        images: []
    },
    {
        name: "Long Winter 13.1",
        slug: "long-winter-13-1",
        type: "VJ Performance, Audio Reactive, Projection",
        location: "Toronto, Canada",
        year: "2024",
        description: "Coming soon!",
        images: []
    },
    {
        name: "Game, Set, Match",
        slug: "game-set-match",
        type: "Interactive Installation, Projection",
        location: "Toronto, Canada",
        year: "2024",
        description: "Coming soon!",
        images: []
    },
    {
        name: "Bird Conductor",
        slug: "bird-conductor",
        type: "Interactive Installation, Projection",
        location: "Toronto, Canada",
        year: "2024",
        description: "Coming soon!",
        images: []
    },
    {
        name: "Live Coding",
        slug: "live-coding",
        type: "Visual Performance, Audio Reactive, Projection",
        location: "Toronto, Canada",
        year: "2024",
        description: "Coming soon!",
        images: []
    },
    {
        name: "Surveil Yourself",
        slug: "surveil-yourself",
        type: "Interactive Installation, Projection",
        location: "Toronto, Canada",
        year: "2023",
        description: "Coming soon!",
        images: []
    },
];

// Helper function to find project by slug
export const findProjectBySlug = (slug) => {
    return projects.find(project => project.slug === slug);
};

// Helper function to get project index by slug
export const getProjectIndexBySlug = (slug) => {
    return projects.findIndex(project => project.slug === slug);
};
