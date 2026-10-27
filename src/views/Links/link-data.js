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
        id: "learn",
        title: "LEARN",
        icon: "LERN",
        description: "Workshops and resources",
        links: [
            {
                id: "workshops",
                title: "WORKSHOPS",
                icon: "WKSP",
                description: "Live sessions",
                links: []
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
        ]
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
        id: "discord",
        title: "DISCORD",
        url: "https://discord.gg/pYPvzCMwFY",
        icon: "DSCD", // Text icon for now
        description: "Join the community"
    },
    {
        id: "home",
        title: "PORTFOLIO",
        url: "https://blap64.com",
        icon: "SITE",
        description: "Works / contact"
    },
];

export const findLinkGroupPath = (slug, items = links) => {
    for (const link of items) {
        if (!link.links) continue;
        if (link.id === slug) return [link];
        const childPath = findLinkGroupPath(slug, link.links);
        if (childPath) return [link, ...childPath];
    }
    return null;
};
