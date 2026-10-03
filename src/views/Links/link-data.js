// Links data for the sci-fi styled links page
export const links = [
	{
        id: "zcal",
        title: "BOOK ME",
        url: "https://zcal.co/blap64",
        icon: "CALL", // Text icon for now
        description: "Tell me your project"
    },
    {
        id: "workshops",
        title: "WORKSHOPS",
        icon: "WKSP",
        description: "Upcoming sessions",
        links: [
            {
                id: "internet-presence",
                title: "INTERNET PRESENCE",
                url: "https://www.tickettailor.com/events/softlaunch/2452856",
                icon: "WEB",
                description: "(Vibe)coding your artist portfolio"
            },
            {
                id: "td-physical-world",
                title: "WIRING TOUCHDESIGNER TO THE PHYSICAL WORLD",
                url: "https://luma.com/5snjpwr7",
                icon: "OSC",
                description: "Online TouchDesigner workshop"
            },
        ]
    },
	{
        id: "tube",
        title: "YOUTUBE",
        url: "https://www.youtube.com/@blapcode",
        icon: "YTBE", // Text icon for now
        description: "TouchDesigner tutorials"
    },
    {
        id: "patreon",
        title: "PATREON",
        url: "https://www.patreon.com/blapcode",
        icon: "PTRN", // Text icon for now
        description: "TouchDesigner files"
    },
    {
        id: "instagram",
        title: "INSTAGRAM",
        url: "https://instagram.com/blapcode",
        icon: "INST", // Text icon for now
        description: "Upcoming projects"
    },
    {
        id: "ukai",
        title: "UKAI PROJECTS",
        url: "https://ukaiprojects.com",
        icon: "UKAI", // Text icon for now
        description: "Live events"
    },
    {
        id: "linkedin",
        title: "LINKEDIN",
        url: "https://www.linkedin.com/in/benjamin-lappalainen/",
        icon: "LKDN", // Text icon for now
        description: "CV"
    },
    {
        id: "home",
        title: "PORTFOLIO",
        url: "https://blap64.com",
        icon: "SITE",
        description: "Works / contact"
    },
];

export const findLinkGroupBySlug = (slug) => links.find(link => link.id === slug && link.links);
