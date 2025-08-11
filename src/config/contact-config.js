// Contact Configuration
// Edit this file to customize the contact popup content

export const contactConfig = [
    {
        title: "Contact",
        content: `
            <p>What can I do for you?</p>
            <p><strong>Email:</strong> <a href="mailto:hello@blap64.xyz">hello@blap64.xyz</a></p>
            <p><strong>Location:</strong> Toronto, Canada is home. Work is global. Will travel and collaborate across all timezones.</p>
            <p><strong>Response Time:</strong> Within 48 hours</p>
        `
    },
    {
        title: "Services",
        content: `
            <h3>Interactive Media & Installations</h3>
            <p>Custom interactive experiences for events, exhibitions, and permanent installations. Specializing in real-time visuals, sensor integration, and audience participation.</p>

            <h3>Creative Technology Consulting</h3>
            <p>Technical guidance for artists, galleries, and cultural institutions. From concept development to implementation strategy.</p>

            <h3>Web Development</h3>
            <p>Custom websites and web applications with a focus on creative expression and unique user experiences.</p>

            <h3>Education & Workshops</h3>
            <p>Teaching creative coding, AI, and interactive media development for individuals and organizations.</p>

            <h3>Photography</h3>
            <p>Creative portrait photography and live performance documentation. Specializing in capturing authentic moments and dynamic energy in controlled and natural environments.</p>
        `
    },
    {
        title: "Process",
        content: `
            <h3>1. Initial Consultation</h3>
            <p>Free 30-minute discovery call to discuss your project goals, timeline, and budget.</p>

            <h3>2. Proposal & Planning</h3>
            <p>Detailed project proposal with timeline, deliverables, and technical specifications.</p>

            <h3>3. Development & Iteration</h3>
            <p>Collaborative development process with regular check-ins and feedback sessions.</p>

            <h3>4. Launch & Support</h3>
            <p>Deployment assistance and ongoing technical support as needed.</p>
        `
    }
];

// Helper functions for programmatic content management
export const addContactItem = (title, content) => {
    contactConfig.push({ title, content });
};

export const updateContactItem = (index, title, content) => {
    if (index >= 0 && index < contactConfig.length) {
        contactConfig[index] = { title, content };
    }
};

export const removeContactItem = (index) => {
    if (index >= 0 && index < contactConfig.length) {
        contactConfig.splice(index, 1);
    }
};
