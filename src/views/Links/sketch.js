import { getViewportSize, loadGoogleFontSet, widthCheck, updateCursor } from "../../utils";
import { links } from "./link-data.js";

export const sketch = function (p, options = {}) {
    let mobile = false;
    let linkButtons = [];
    let scrollOffset = 0;
    let targetScrollOffset = 0;

    // Drag detection
    let mouseDownPos = { x: 0, y: 0 };
    let isDragging = false;
    let dragThreshold = 5; // pixels

    // Layout constants
    const MARGIN = 40;
    let ROW_HEIGHT = 80; // Will be adjusted for mobile
    const ICON_SIZE = 50;
    const CORNER_SIZE = 20;

    // Mobile layout adjustments - will be calculated dynamically
    let TITLE_BUFFER, BREADCRUMB_BUFFER, SPACING_BETWEEN_ROWS;

    p.setup = async function() {
        const s = getViewportSize();
        p.createCanvas(s.width, s.height);
        mobile = widthCheck(s.width);
        p.background(23);
        p.strokeCap(p.PROJECT);

        // Font already loaded via CSS
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 600`
        });

        setupLinkButtons();
    };

    p.draw = function() {
        p.background(23);

        // Update scroll animation
        scrollOffset = p.lerp(scrollOffset, targetScrollOffset, 0.1);

        // Render HUD decorations
        renderHUDDecorations();

        // Render link buttons
        renderLinkButtons();

        // Update cursor
        updateCursor(p, p.mouseX, p.mouseY, ...linkButtons.map(btn => ({
            contains: (x, y) => btn.contains(x, y)
        })));
    };

    p.windowResized = function() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        mobile = widthCheck(s.width);
        setupLinkButtons();
    };

    p.mousePressed = function(event) {
        if (event && event.button !== 0) return;

        // Record mouse down position for drag detection
        mouseDownPos.x = p.mouseX;
        mouseDownPos.y = p.mouseY;
        isDragging = false;
    };

    p.mouseDragged = function() {
        // Check if mouse has moved beyond drag threshold
        const distance = p.dist(p.mouseX, p.mouseY, mouseDownPos.x, mouseDownPos.y);
        if (distance > dragThreshold) {
            isDragging = true;
        }
    };

    p.mouseReleased = function(event) {
        if (event && event.button !== 0) return;

        // Only handle link click if not dragging
        if (!isDragging) {
            handleLinkClick(p.mouseX, p.mouseY);
        }

        // Reset drag state
        isDragging = false;
    };

    function handleLinkClick(x, y) {
        // Don't handle clicks if popups are open
        if (window.helpPopupOpen || window.contactPopupOpen) return;

        console.log('Click detected at:', x, y, 'scrollOffset:', scrollOffset);

        linkButtons.forEach((button, index) => {
            // Account for scroll offset when checking button position
            const adjustedY = y - scrollOffset;
            const contains = button.contains(x, adjustedY);

            console.log(`Button ${index} (${button.link.title}):`, {
                buttonBounds: { x: button.x, y: button.y, width: button.width, height: button.height },
                clickPoint: { x, y: adjustedY },
                contains: contains
            });

            if (contains) {
                console.log('Opening link:', button.link.url);

                if (button.link.url === 'contact-popup') {
                    // Open contact popup instead of navigating
                    const contactButton = document.querySelector('.contact-button');
                    if (contactButton) {
                        contactButton.click();
                    }
                } else {
                    // Simple direct navigation - works reliably on mobile
                    window.location.href = button.link.url;
                }
            }
        });
    }

    p.mouseWheel = function(event) {
        // Allow normal scrolling when popups are open
        if (window.helpPopupOpen || window.contactPopupOpen) {
            return true; // Allow default browser scrolling
        }

        // Handle scrolling for long lists (mainly for desktop)
        const totalContentHeight = TITLE_BUFFER + (links.length * ROW_HEIGHT) + ((links.length - 1) * SPACING_BETWEEN_ROWS) + BREADCRUMB_BUFFER;
        const maxScroll = Math.max(0, totalContentHeight - p.height);

        // Only allow scrolling if content doesn't fit
        if (maxScroll > 0) {
            targetScrollOffset = p.constrain(targetScrollOffset + event.delta * 0.5, -maxScroll, 0);
        }
        return false; // Prevent default browser scrolling
    };

    function setupLinkButtons() {
        linkButtons = [];

        // Calculate layout values based on current mobile state
        TITLE_BUFFER = mobile ? 90 : 120;
        BREADCRUMB_BUFFER = mobile ? 80 : 60;
        SPACING_BETWEEN_ROWS = mobile ? 8 : 20;

        const buttonWidth = mobile ? p.width - (MARGIN * 2) : Math.min(400, p.width - (MARGIN * 2));
        const startX = (p.width - buttonWidth) / 2;

        // Calculate available space and adjust row height for mobile
        const availableHeight = p.height - TITLE_BUFFER - BREADCRUMB_BUFFER;
        const totalSpacingNeeded = (links.length - 1) * SPACING_BETWEEN_ROWS;
        const availableForRows = availableHeight - totalSpacingNeeded;

        // On mobile, adjust row height to fit all links
        if (mobile) {
            const calculatedRowHeight = Math.floor(availableForRows / links.length);
            ROW_HEIGHT = Math.max(60, Math.min(calculatedRowHeight, 80)); // Min 60px, max 80px
        } else {
            ROW_HEIGHT = 80; // Desktop keeps standard height
        }

        // Sci-fi color palette
        const colors = [

            [255, 100, 130],  // Pink/Red
            [255, 180, 50],   // Orange/Yellow
            [255, 255, 100],   // Yellow
            [100, 255, 150],  // Green
            [50, 255, 255],   // Cyan
            [74, 144, 230],   // Blue (original)
            [180, 100, 255],  // Purple


        ];

        links.forEach((link, index) => {
            const y = TITLE_BUFFER + (index * (ROW_HEIGHT + SPACING_BETWEEN_ROWS));
            const color = colors[index % colors.length];
            linkButtons.push(new LinkButton(p, startX, y, buttonWidth, ROW_HEIGHT, link, color));
        });
    }

    function renderLinkButtons() {
        p.push();
        p.translate(0, scrollOffset);

        linkButtons.forEach(button => {
            // Only render if button is visible on screen
            if (button.y + scrollOffset > -ROW_HEIGHT && button.y + scrollOffset < p.height + ROW_HEIGHT) {
                button.render();
            }
        });

        p.pop();
    }

    function renderHUDDecorations() {
        p.push();

        // Title
        renderTitle();

        // Perimeter HUD
        renderPerimeterHUD();

        p.pop();
    }

    function renderTitle() {
        const titleY = mobile ? 20 : 40;
        const titleSize = mobile ? 24 : 36;

        p.fill(255, 200);
        p.noStroke();
        p.textAlign(p.CENTER, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(titleSize);
        p.text("MY LINKS", p.width / 2, titleY);

        // Underline decoration
        const textWidth = p.textWidth("MY LINKS");
        p.stroke(74, 144, 230, 120);
        p.strokeWeight(1);
        p.line(p.width/2 - textWidth/2 - 20, titleY + titleSize + 8,
               p.width/2 + textWidth/2 + 20, titleY + titleSize + 8);
    }

    function renderPerimeterHUD() {
        const margin = mobile ? 15 : 30;
        const cornerSize = mobile ? 15 : 25;
        const alpha = 60;

        p.stroke(74, 144, 230, alpha);
        p.strokeWeight(1);
        p.strokeCap(p.SQUARE);
        p.noFill();

        // Corner brackets
        const corners = [
            [margin, margin], // top-left
            [p.width - margin, margin], // top-right
            [p.width - margin, p.height - margin], // bottom-right
            [margin, p.height - margin] // bottom-left
        ];

        corners.forEach(([x, y], index) => {
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;

            // L-shaped brackets
            p.line(x, y, x + xDir * cornerSize, y);
            p.line(x, y, x, y + yDir * cornerSize);
        });

        // Status indicators
        p.fill(74, 144, 230, alpha * 0.8);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(mobile ? 8 : 10);
        const step = mobile ? 12 : 15;

        p.text("SYS: ONLINE", margin + cornerSize * 0.5, margin + step);
        p.text("CONN: " + links.length, margin + cornerSize * 0.5, margin + step * 2);
        p.text("PROTO: HTTPS", margin + cornerSize * 0.5, margin + step * 3);
    }
};

class LinkButton {
    constructor(p, x, y, width, height, link, color = [74, 144, 230]) {
        this.p5 = p;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.link = link;
        this.color = color;
        this.hoverAlpha = 0;
        this.targetHoverAlpha = 0;
    }

    contains(mouseX, mouseY) {
        return mouseX >= this.x && mouseX <= this.x + this.width &&
               mouseY >= this.y && mouseY <= this.y + this.height;
    }

    render() {
        const isHovered = this.contains(this.p5.mouseX, this.p5.mouseY);
        this.targetHoverAlpha = isHovered ? 1 : 0;
        this.hoverAlpha = this.p5.lerp(this.hoverAlpha, this.targetHoverAlpha, 0.1);

        const alpha = 80 + (this.hoverAlpha * 100);
        const glowAlpha = this.hoverAlpha * 40;

        this.p5.push();

        // Main container
        this.p5.stroke(this.color[0], this.color[1], this.color[2], alpha);
        this.p5.strokeWeight(1);
        this.p5.fill(23, 23, 23, 50 + glowAlpha);
        this.p5.rect(this.x, this.y, this.width, this.height);

        // Icon container (left side) - adjust size based on row height
        const iconSize = Math.min(50, this.height - 20); // Responsive icon size
        const iconX = this.x + 15;
        const iconY = this.y + (this.height - iconSize) / 2;

        // Icon border
        this.p5.stroke(this.color[0], this.color[1], this.color[2], alpha);
        this.p5.fill(23, 23, 23, 30 + glowAlpha);
        this.p5.rect(iconX, iconY, iconSize, iconSize);

        // Corner brackets on icon
        const bracketSize = 8;
        this.p5.stroke(this.color[0], this.color[1], this.color[2], alpha * 1.2);
        this.p5.strokeWeight(2);
        this.p5.noFill();

        // Top-left bracket
        this.p5.line(iconX, iconY, iconX + bracketSize, iconY);
        this.p5.line(iconX, iconY, iconX, iconY + bracketSize);

        // Top-right bracket
        this.p5.line(iconX + iconSize, iconY, iconX + iconSize - bracketSize, iconY);
        this.p5.line(iconX + iconSize, iconY, iconX + iconSize, iconY + bracketSize);

        // Bottom-left bracket
        this.p5.line(iconX, iconY + iconSize, iconX + bracketSize, iconY + iconSize);
        this.p5.line(iconX, iconY + iconSize, iconX, iconY + iconSize - bracketSize);

        // Bottom-right bracket
        this.p5.line(iconX + iconSize, iconY + iconSize, iconX + iconSize - bracketSize, iconY + iconSize);
        this.p5.line(iconX + iconSize, iconY + iconSize, iconX + iconSize, iconY + iconSize - bracketSize);

        // Icon text (placeholder) - adjust size for smaller icons
        this.p5.fill(this.color[0], this.color[1], this.color[2], alpha * 1.5);
        this.p5.noStroke();
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        this.p5.textSize(Math.min(12, iconSize * 0.25));
        this.p5.text(this.link.icon, iconX + iconSize/2 + 1, iconY + iconSize/2);

        // Title text - adjust for smaller row heights
        const textX = iconX + iconSize + 15;
        const isMobileCompact = this.height < 50;

        if (isMobileCompact) {
            // Single line layout for very compact rows
            const titleY = this.y + this.height/2;
            this.p5.fill(255, alpha * 2);
            this.p5.textAlign(this.p5.LEFT, this.p5.CENTER);
            this.p5.textFont('BPdotsSquareVF', { fontVariationSettings: 'wght 900' });
            this.p5.textSize(16);
            this.p5.text(this.link.title, textX, titleY);
        } else {
            // Two line layout for normal rows
            const titleY = this.y + this.height/2 - 8;
            this.p5.fill(255, alpha * 2);
            this.p5.textAlign(this.p5.LEFT, this.p5.CENTER);
            this.p5.textFont('BPdotsSquareVF', { fontVariationSettings: 'wght 900' });
            this.p5.textSize(18);
            this.p5.text(this.link.title, textX, titleY);

            // Description text
            this.p5.fill(150, alpha * 1.5);
            this.p5.textFont('BPdotsSquareVF', { fontVariationSettings: 'wght 900' });
            this.p5.textSize(13);
            this.p5.text(this.link.description, textX, titleY + 18);
        }

        // Hover scan line effect
        if (this.hoverAlpha > 0.1) {
            this.p5.stroke(74, 144, 230, this.hoverAlpha * 60);
            this.p5.strokeWeight(1);
            const scanY = this.y + (this.p5.millis() * 0.1) % this.height;
            this.p5.line(this.x, scanY, this.x + this.width, scanY);
        }

        // Status dots when hovered
        if (this.hoverAlpha > 0.2) {
            this.p5.fill(74, 144, 230, this.hoverAlpha * 150);
            this.p5.noStroke();
            const dotSize = 3;
            const dotX = this.x + this.width - 30;
            const dotY = this.y + 15;

            for (let i = 0; i < 3; i++) {
                this.p5.circle(dotX + (i * 8), dotY, dotSize);
            }
        }

        this.p5.pop();
    }
}

export const linksSketch = (node, options = {}) => {
    return new p5(sketch, node);
};
