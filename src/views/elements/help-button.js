import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { faqConfig } from "../../config/faq-config.js";

let isPopupOpen = false;

// Handle help button click
function toggleHelpPopup(event) {
    event.preventDefault();
    event.stopPropagation();

    const popup = document.getElementById('help-popup');
    const overlay = document.getElementById('help-overlay');

    if (!popup || !overlay) return;

    if (isPopupOpen) {
        // Close popup
        popup.classList.remove('help-popup-open');
        overlay.classList.remove('help-overlay-open');
        document.body.classList.remove('help-active');
        // Clear global flag to re-enable p5.js interactions
        window.helpPopupOpen = false;
        isPopupOpen = false;

        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#171717'; // Back to original dark theme
        }
    } else {
        // Open popup
        popup.classList.add('help-popup-open');
        overlay.classList.add('help-overlay-open');
        document.body.classList.add('help-active');
        // Set global flag to disable p5.js interactions
        window.helpPopupOpen = true;
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
    if (event.target.id === 'help-overlay') {
        toggleHelpPopup(event);
    }
}

// Handle escape key to close popup
function handleKeyPress(event) {
    if (event.key === 'Escape' && isPopupOpen) {
        toggleHelpPopup(event);
    }
}

export const createHelpButton = () => {
    // Add global event listeners
    if (!window.helpButtonInitialized) {
        document.addEventListener('keydown', handleKeyPress);
        window.helpButtonInitialized = true;
    }

    return html`
        <div class="help-button" @click=${toggleHelpPopup}>
            <span class="help-button-icon">?</span>
        </div>

        <!-- Popup overlay -->
        <div id="help-overlay" class="help-overlay" @click=${handleOverlayClick}>
            <div id="help-popup" class="help-popup">
                <div class="help-popup-header">
                    <h2>SITE GUIDE</h2>
                    <button class="help-popup-close" @click=${toggleHelpPopup}>×</button>
                </div>
                <div class="help-popup-content">
                    ${faqConfig.map(faq => html`
                        <div class="faq-item">
                            <div class="faq-question">${faq.question}</div>
                            <div class="faq-answer">${unsafeHTML(faq.answer)}</div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `;
};

// Function to re-render help button (useful after config changes)
export const refreshHelpButton = () => {
    const helpContainer = document.getElementById("help-container");
    if (helpContainer) {
        import("lit").then(({ render }) => {
            render(createHelpButton(), helpContainer);
        });
    }
};
