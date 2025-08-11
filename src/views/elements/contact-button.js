import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { contactConfig } from "../../config/contact-config.js";

let isPopupOpen = false;

// Handle contact button click
function toggleContactPopup(event) {
    event.preventDefault();
    event.stopPropagation();

    const popup = document.getElementById('contact-popup');
    const overlay = document.getElementById('contact-overlay');

    if (!popup || !overlay) return;

    if (isPopupOpen) {
        // Close popup
        popup.classList.remove('contact-popup-open');
        overlay.classList.remove('contact-overlay-open');
        document.body.classList.remove('contact-active');
        // Clear global flag to re-enable p5.js interactions
        window.contactPopupOpen = false;
        isPopupOpen = false;

        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#171717'; // Back to original dark theme
        }
    } else {
        // Open popup
        popup.classList.add('contact-popup-open');
        overlay.classList.add('contact-overlay-open');
        document.body.classList.add('contact-active');
        // Set global flag to disable p5.js interactions
        window.contactPopupOpen = true;
        isPopupOpen = true;

        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#000000'; // Dark color to match overlay
        }
    }
}

// Handle overlay click to close popup
function handleOverlayClick(event) {
    if (event.target.id === 'contact-overlay') {
        toggleContactPopup(event);
    }
}

// Handle escape key to close popup
function handleKeyPress(event) {
    if (event.key === 'Escape' && isPopupOpen) {
        toggleContactPopup(event);
    }
}

export const createContactButton = () => {
    // Add global event listeners
    if (!window.contactButtonInitialized) {
        document.addEventListener('keydown', handleKeyPress);
        window.contactButtonInitialized = true;
    }

    return html`
        <div class="contact-button" @click=${toggleContactPopup}>
            <span class="contact-button-icon">!</span>
        </div>

        <!-- Popup overlay -->
        <div id="contact-overlay" class="contact-overlay" @click=${handleOverlayClick}>
            <div id="contact-popup" class="contact-popup">
                <div class="contact-popup-header">
                    <h2>CONTACT & SERVICES</h2>
                    <button class="contact-popup-close" @click=${toggleContactPopup}>×</button>
                </div>
                <div class="contact-popup-content">
                    ${contactConfig.map(section => html`
                        <div class="contact-section">
                            <div class="contact-section-title">${section.title}</div>
                            <div class="contact-section-content">${unsafeHTML(section.content)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `;
};

// Function to re-render contact button (useful after config changes)
export const refreshContactButton = () => {
    const contactContainer = document.getElementById("contact-container");
    if (contactContainer) {
        import("lit").then(({ render }) => {
            render(createContactButton(), contactContainer);
        });
    }
};
