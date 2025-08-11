// FAQ Configuration
// Edit this file to customize the help popup content

export const faqConfig = [
    {
        question: "Navigation",
        answer: "Click on the desired 'path' in the bottom left corner to navigate back to a previous view.<br><br>Orange exclamation mark button (left of the one you just clicked) for contact info & services."
    },
    {
        question: "Lore",
        answer: "Benjamin Lappalainen -> B. Lappalainen -> BLAP. Years ago when I first made an Instagram account for my photography, I decided on @blapphoto as a username. 'blap' stuck ever since, and some of my friends have adopted it as a nickname for me.<br><br>As for '64':<br>We are in the era of 64-bit computers (generally, computers with size 2^64 integer and addressing registers).<br><br>64 is 8^2. 8 in Cantonese (and other Chinese-speaking cultures) is considered a lucky number because it bears homophonic similarity to the word for 'wealth' or 'prosperity'.<br><br>64 is 2^6. I was 26 when I made the decision to choose a different path through life, which has since led me to some extraordinary people, places, ideas, and opportunities."
    },
    {
        question: "Technology (for the nerds)",
        answer: "The dynamic pages on this site are constructed using a creative coding library called <a href=\"https://p5js.org\" target=\"_blank\">p5.js</a>. I'm a big advocate for this library and teach people how to make art with it, as well as teach programming using it as a starting point. Otherwise, the site was built in HTML, CSS, and vanilla JavaScript. <a href=\"https://parceljs.org/\">Parcel</a> is the bundler, and the site is deployed to <a href=\"https://pages.github.com/\">GitHub Pages</a> so that my only expense is the domain."
    },
    {
        question: "\"This is a bit much for me.\"",
        answer: "If you don't like it, it's not for you. <br><br> However, a 'brutalist' version of the site will be available soon with the same content in a utilitarian package."
    }
];

// Helper function to add new FAQ items programmatically
export const addFAQItem = (question, answer) => {
    faqConfig.push({ question, answer });
};

// Helper function to update an existing FAQ item
export const updateFAQItem = (index, question, answer) => {
    if (index >= 0 && index < faqConfig.length) {
        faqConfig[index] = { question, answer };
    }
};

// Helper function to remove an FAQ item
export const removeFAQItem = (index) => {
    if (index >= 0 && index < faqConfig.length) {
        faqConfig.splice(index, 1);
    }
};
