import { getViewportSize, UITriangleButton, UIPlanetButton, easeInCubic, smoothFollow, loadGoogleFontSet, widthCheck, updateCursor, getMediaPath, isVideoFile, calculateMediaDimensions, calculateCropDimensions } from "../../utils";
import { projects, findProjectBySlug, getProjectIndexBySlug } from "./project-details";

export const sketch = function (p, options = {}) {
    let ui = [];
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let smoothV = p.createVector(smoothX, smoothY);
    let mobile = false;
    let cx, cy, r;
    let planetButtons = [];
    let star_colours = ['#faa000', '#0842f5', '#e61414'];
    let activeInfoCard = null;
    let infoCardAlpha = 0;
    let infoCardAnimationStart = 0;
    let infoCardAnimating = false;
    let targetAlpha = 0;
    let galleryScrollX = 0;
    let targetGalleryScrollX = 0;
    let galleryDragging = false;
    let galleryDragStartX = 0;
    let galleryStartScrollX = 0;
    let loadedMedia = new Map();
    let expandedMediaIndex = null;
    let expandedMediaAlpha = 0;
    let expandedMediaAnimating = false;
    let expandedMediaAnimationStart = 0;
    let targetExpandedAlpha = 0;
    let nativeVideoElement = null;
    let pendingProjectSlug = null;
    let layoutInitialized = false;
    let frameCount = 0;
    let currentPath = null;
    let isInternalNavigation = false;

    let hashChangeHandler = null;
    
    // Add cleanup method to be called when sketch is destroyed
    p.cleanupSketch = function() {
        // Clean up native video element
        if (nativeVideoElement) {
            nativeVideoElement.remove();
            nativeVideoElement = null;
        }
        
        // Clean up any loaded video elements
        loadedMedia.forEach((mediaData, path) => {
            if (mediaData.type === 'video' && mediaData.element && mediaData.element.remove) {
                mediaData.element.remove();
            }
        });
        loadedMedia.clear();
        
        // Reset state
        activeInfoCard = null;
        expandedMediaIndex = null;
        infoCardAlpha = 0;
        expandedMediaAlpha = 0;
        
        // Re-enable browser swipe navigation
        document.body.style.overscrollBehavior = '';
        document.body.style.touchAction = '';
        
        // Remove hash change listener
        if (hashChangeHandler) {
            window.removeEventListener('hashchange', hashChangeHandler);
            hashChangeHandler = null;
        }
        
        // Don't clear session storage here - let setup function handle it for back navigation detection
    };

    // Helper functions for layout calculations
    function getCardDimensions() {
        const isMobile = widthCheck(p.width);
        const cardSize = isMobile ?
            p.min(p.width * 0.95, p.height * 0.9) :
            p.min(p.width * 0.9, p.height * 0.85, 900);
        const cardX = (p.width - cardSize) / 2;
        const cardY = (p.height - cardSize) / 2;
        return { size: cardSize, x: cardX, y: cardY, isMobile };
    }

    function getGalleryLayout(cardSize, cardX, cardY, isMobile) {
        const baseTextScale = isMobile ? cardSize / 400 : cardSize / 600;
        const padding = 25 * baseTextScale;
        const lineHeight = 25 * baseTextScale;
        const galleryY = cardY + padding + lineHeight * 5.3;
        const galleryHeight = cardSize * 0.4;
        return { galleryY, galleryHeight, baseTextScale, padding, lineHeight };
    }

    function getGalleryItemDimensions(galleryHeight, scale) {
        const galleryPadding = 10 * scale;
        const itemHeight = galleryHeight - (2 * galleryPadding);
        const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
        return { itemWidth, itemHeight, galleryPadding };
    }

    function renderCloseButton(x, y, size, alpha) {
        const padding = size * 0.25;

        // Close button background
        p.fill(50, 50, 50, 200 * (alpha / 255));
        p.stroke(200, alpha);
        p.strokeWeight(1);
        p.rect(x, y, size, size);

        // X symbol
        p.stroke(200, alpha);
        p.strokeWeight(2);
        p.line(x + padding, y + padding, x + size - padding, y + size - padding);
        p.line(x + size - padding, y + padding, x + padding, y + size - padding);
    }

    function renderPlayIcon(x, y, size, alpha) {
        // Semi-transparent play button background
        p.fill(0, 0, 0, 120 * (alpha / 255));
        p.noStroke();
        p.circle(x + size/2, y + size/2, size);

        // Play triangle
        p.fill(255, 255, 255, 180 * (alpha / 255));
        const triangleSize = size * 0.35;
        const triangleCenterX = x + size/2 + triangleSize * 0.1;
        const triangleCenterY = y + size/2;
        p.triangle(
            triangleCenterX - triangleSize/2, triangleCenterY - triangleSize/2,
            triangleCenterX - triangleSize/2, triangleCenterY + triangleSize/2,
            triangleCenterX + triangleSize/2, triangleCenterY
        );
    }

    function initializeLayout() {
        const s = getViewportSize();
        short = p.min(s.width, s.height);
        mobile = widthCheck(s.width);
        cx = 0.5 * p.width;
        cy = 0.5 * p.height;
        r = 0.07 * short;
        setupSolarSystem(r);
        layoutUI();
        layoutInitialized = true;
    }

    p.setup = async function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = getViewportSize();
        p.createCanvas(s.width, s.height);
        initializeLayout();
        p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        p.strokeCap(p.PROJECT);
        await loadGoogleFontSet('../../assets/fonts/BPdotsSquareVF.ttf');
        await loadGoogleFontSet('../../assets/fonts/ZxGamut.ttf');
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        // p5 in instance mode doesn't seem to work well with elements in a shadow root and doesn't remove the "p5_loading" div by itself
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
        
        // Handle direct project navigation via URL parameter
        if (options && options.project) {
            pendingProjectSlug = options.project;
            currentPath = `/interactive/live/${options.project}`;
            // Store that we have an active project
            sessionStorage.setItem('installationsActiveProject', options.project);
        } else {
            currentPath = '/interactive/live';
            // Check if we had an active project before and now we don't
            const wasActiveProject = sessionStorage.getItem('installationsActiveProject');
            if (wasActiveProject) {
                // We navigated back from a project to main page - clear the storage
                sessionStorage.removeItem('installationsActiveProject');
                // Ensure no project opens automatically on back navigation
                pendingProjectSlug = null;
                
                // Initialize with info card closed
                activeInfoCard = null;
                infoCardAlpha = 0;
                targetAlpha = 0;
                infoCardAnimating = false;
            }
        }
        
        // Add hash change listener to detect back navigation within the same route
        hashChangeHandler = function(event) {
            const newHash = window.location.hash.substr(1);
            const cleanPath = newHash && newHash !== '' ? 
                (newHash.startsWith('/') ? newHash : '/' + newHash) : '/';
            
            // If we're on the installations page and URL changed to just /interactive/live
            // and we have an active info card, close it
            if (cleanPath === '/interactive/live' && activeInfoCard !== null) {
                closeInfoCard();
            }
        };
        
        window.addEventListener('hashchange', hashChangeHandler);
    };

    p.draw = function draw() {
        p.background(23);
        frameCount++;
        smoothX = smoothFollow(p.mouseX, smoothX, 0.003 * p.deltaTime);
        smoothY = smoothFollow(p.mouseY, smoothY, 0.003 * p.deltaTime);
        smoothV.x = smoothX;
        smoothV.y = smoothY;
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        renderSolarSystem();
        
        // Handle pending project opening after layout is initialized and a few frames have passed
        if (pendingProjectSlug && layoutInitialized && planetButtons && planetButtons.length > 0 && frameCount > 5) {
            const projectIndex = getProjectIndexBySlug(pendingProjectSlug);
            if (projectIndex !== -1 && projectIndex < planetButtons.length) {
                openInfoCard(projectIndex);
                pendingProjectSlug = null; // Clear the pending slug
            } else {
                // If project not found, clear the pending slug to avoid infinite attempts
                pendingProjectSlug = null;
            }
        }
        p.noFill();
        p.stroke(230, 50);
        const s = short * 0.03;
        p.push();
        p.translate(smoothX, smoothY);
        p.rotate(p.TWO_PI * p.noise(smoothX / short, smoothY / short, 0.0001 * p.millis()));
        p.circle(0, 0, 0.33 * s);
        p.triangle(s, 0, s * p.cos(p.TWO_PI / 3), s * p.sin(p.TWO_PI / 3), s * p.cos(2 * p.TWO_PI / 3), s * p.sin(2 * p.TWO_PI / 3));
        p.pop();
        // Update info card animation
        if (infoCardAnimating) {
            const elapsed = p.millis() - infoCardAnimationStart;
            const progress = p.constrain(elapsed / 250, 0, 1);
            infoCardAlpha = p.lerp(infoCardAlpha, targetAlpha, progress);

            if (progress >= 1) {
                infoCardAnimating = false;
                infoCardAlpha = targetAlpha;
                if (targetAlpha === 0) {
                    activeInfoCard = null;
                }
            }
        }

        // Update gallery scrolling
        if (!galleryDragging) {
            galleryScrollX = p.lerp(galleryScrollX, targetGalleryScrollX, 0.1);
        }

        // Update expanded media animation
        if (expandedMediaAnimating) {
            const elapsed = p.millis() - expandedMediaAnimationStart;
            const progress = p.constrain(elapsed / 300, 0, 1);
            expandedMediaAlpha = p.lerp(expandedMediaAlpha, targetExpandedAlpha, progress);

            if (progress >= 1) {
                expandedMediaAnimating = false;
                expandedMediaAlpha = targetExpandedAlpha;
                if (targetExpandedAlpha === 0) {
                    expandedMediaIndex = null;
                }
            }
        }

        // Update cursor based on hover state
        // Don't include planet buttons when info card is active
        const hoverTargets = activeInfoCard !== null ?
            [ui, getCloseButtonHoverCheck(), getNavigationButtonHoverCheck()] :
            [ui, ...planetButtons, getCloseButtonHoverCheck()];
        updateCursor(p, p.mouseX, p.mouseY, ...hoverTargets);

        // Render active info card
        if (activeInfoCard !== null || infoCardAlpha > 0) {
            renderInfoCard(projects[activeInfoCard]);
        }

        // Render expanded media overlay
        if (expandedMediaIndex !== null || expandedMediaAlpha > 0) {
            renderExpandedMedia();
        }
    };

    p.windowResized = function windowResized() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        initializeLayout();
    };

    p.mousePressed = function (event) {
        if (event && event.button !== 0) {
            return;
        }
        const ANIMATION_DELAY = 500;

        // Check if clicking on expanded media overlay
        if (expandedMediaIndex !== null) {
            const project = projects[activeInfoCard];
            const mediaItem = project.images[expandedMediaIndex];
            let pathString;
            if (typeof mediaItem === 'string') {
                pathString = mediaItem;
            } else if (mediaItem && typeof mediaItem === 'object') {
                pathString = mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString();
            } else {
                pathString = String(mediaItem);
            }

            const isVideo = pathString.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);
            const isMobile = widthCheck(p.width);
            const maxWidth = isMobile ? p.width : p.width * 0.8;
            const maxHeight = isMobile ? p.height * 0.8 : p.height * 0.8;
            let mediaWidth, mediaHeight;

            if (isVideo) {
                // For native videos, use standard dimensions
                const aspectRatio = nativeVideoElement && nativeVideoElement.videoWidth && nativeVideoElement.videoHeight ?
                    nativeVideoElement.videoWidth / nativeVideoElement.videoHeight : 16 / 9;

                if (aspectRatio > maxWidth / maxHeight) {
                    mediaWidth = maxWidth;
                    mediaHeight = maxWidth / aspectRatio;
                } else {
                    mediaHeight = maxHeight;
                    mediaWidth = maxHeight * aspectRatio;
                }
            } else {
                // For images, get from loaded media
                const mediaData = loadedMedia.get(pathString);
                if (mediaData && mediaData.loaded) {
                    const img = mediaData.element;
                    const aspectRatio = img.width / img.height;
                    if (aspectRatio > maxWidth / maxHeight) {
                        mediaWidth = maxWidth;
                        mediaHeight = maxWidth / aspectRatio;
                    } else {
                        mediaHeight = maxHeight;
                        mediaWidth = maxHeight * aspectRatio;
                    }
                } else {
                    return; // Image not ready
                }
            }

            const mediaX = (p.width - mediaWidth) / 2;
            const mediaY = (p.height - mediaHeight) / 2;

            // Check close button
            const closeSize = 40;
            const closeX = mediaX + mediaWidth - closeSize - 10;
            const closeY = mediaY + 10;

            if (p.mouseX >= closeX && p.mouseX <= closeX + closeSize &&
                p.mouseY >= closeY && p.mouseY <= closeY + closeSize) {
                closeExpandedMedia();
                return;
            }

            // Native video players handle their own controls

            // Click outside media closes it
            if (p.mouseX < mediaX || p.mouseX > mediaX + mediaWidth ||
                p.mouseY < mediaY || p.mouseY > mediaY + mediaHeight) {
                closeExpandedMedia();
                return;
            }
            return;
        }

        // Check UI elements
        ui.forEach((ui_element, index) => {
            if (ui_element.contains(p.mouseX, p.mouseY)) {
                // Navigate based on which UI element was clicked
                if (window.appRouter) {
                    switch (index) {
                        case 0: // Projects and Installations
                            setTimeout(() => {
                                window.appRouter.navigate('/codeart');
                            }, ANIMATION_DELAY);
                            break;
                        case 1: // Web Art
                            // Add photo route when available
                            console.log('Photo section coming soon!');
                            break;
                        case 2: // Physical Artifacts
                            setTimeout(() => {
                                window.appRouter.navigate('/about');
                            }, ANIMATION_DELAY);
                            break;
                    }
                }
                return;
            }
        });

        // Check if clicking on info card or close button
        if (activeInfoCard !== null) {
            const { size: cardSize, x: cardX, y: cardY, isMobile } = getCardDimensions();
            const closeButtonSize = isMobile ? 44 : 30;
            const closeButtonX = cardX + cardSize - closeButtonSize - 10;
            const closeButtonY = cardY + 10;

            // Check if clicking close button
            if (p.mouseX >= closeButtonX && p.mouseX <= closeButtonX + closeButtonSize &&
                p.mouseY >= closeButtonY && p.mouseY <= closeButtonY + closeButtonSize) {
                closeInfoCard();
                return;
            }

            // Check if clicking navigation arrows
            if (projects.length > 1) {
                const arrowSize = isMobile ? 50 : 40;
                const arrowPadding = isMobile ? 20 : 15;
                const arrowY = cardY + cardSize + arrowPadding;
                
                const totalArrowWidth = arrowSize * 2 + arrowPadding * 3;
                const arrowStartX = cardX + (cardSize - totalArrowWidth) / 2;
                
                const leftArrowX = arrowStartX + arrowPadding;
                const rightArrowX = arrowStartX + arrowPadding * 2 + arrowSize;
                
                // Check left arrow (previous with wraparound)
                if (p.mouseX >= leftArrowX && p.mouseX <= leftArrowX + arrowSize &&
                    p.mouseY >= arrowY && p.mouseY <= arrowY + arrowSize) {
                    const prevIndex = activeInfoCard === 0 ? projects.length - 1 : activeInfoCard - 1;
                    navigateToProject(prevIndex);
                    return;
                }
                
                // Check right arrow (next with wraparound)
                if (p.mouseX >= rightArrowX && p.mouseX <= rightArrowX + arrowSize &&
                    p.mouseY >= arrowY && p.mouseY <= arrowY + arrowSize) {
                    const nextIndex = activeInfoCard === projects.length - 1 ? 0 : activeInfoCard + 1;
                    navigateToProject(nextIndex);
                    return;
                }
            }

            // Check if clicking in gallery area
            const project = projects[activeInfoCard];
            if (project.images && project.images.length > 0) {
                const baseTextScale = isMobile ? cardSize / 400 : cardSize / 600;
                const padding = 25 * baseTextScale;
                const lineHeight = 25 * baseTextScale;
                const galleryY = cardY + padding + lineHeight * 5.3; // Approximate gallery Y position
                const galleryHeight = cardSize * 0.4;

                if (p.mouseX >= cardX + padding && p.mouseX <= cardX + cardSize - padding &&
                    p.mouseY >= galleryY && p.mouseY <= galleryY + galleryHeight) {
                    // Start gallery dragging
                    galleryDragging = true;
                    galleryDragStartX = p.mouseX;
                    galleryStartScrollX = galleryScrollX;
                    return;
                }
            }

            // Check if clicking outside the card
            if (p.mouseX < cardX || p.mouseX > cardX + cardSize ||
                p.mouseY < cardY || p.mouseY > cardY + cardSize) {
                closeInfoCard();
                return;
            }

            // If clicking inside the card (but not close button), do nothing
            return;
        }

        // Check planet buttons
        planetButtons.forEach((planetButton, index) => {
            if (planetButton.contains(p.mouseX, p.mouseY)) {
                openInfoCard(index);
                // Update URL to include project slug
                const project = projects[index];
                if (project && project.slug && window.appRouter) {
                    const newPath = `/interactive/live/${project.slug}`;
                    // Only update if the current path is different
                    if (window.location.hash !== `#${newPath}`) {
                        window.history.pushState(null, '', `#${newPath}`);
                        currentPath = newPath;
                    }
                }
                return;
            }
        });
    }

    p.mouseDragged = function () {
        if (galleryDragging && activeInfoCard !== null) {
            const dragDistance = p.mouseX - galleryDragStartX;
            galleryScrollX = galleryStartScrollX + dragDistance;
            targetGalleryScrollX = galleryScrollX;
        }
    }

    p.mouseReleased = function () {
        if (galleryDragging) {
            const dragDistance = Math.abs(p.mouseX - galleryDragStartX);
            galleryDragging = false;

            // If minimal drag (< 5 pixels), treat as a click for media expansion
            if (dragDistance < 5 && activeInfoCard !== null) {
                const project = projects[activeInfoCard];
                if (project && project.images && project.images.length > 0) {
                    const { size: cardSize, x: cardX, y: cardY, isMobile } = getCardDimensions();
                    const { galleryY, galleryHeight, baseTextScale, padding } = getGalleryLayout(cardSize, cardX, cardY, isMobile);
                    const { itemWidth, itemHeight, galleryPadding } = getGalleryItemDimensions(galleryHeight, baseTextScale);
                    const startX = cardX + padding + galleryPadding; // Left padding
                    const startY = galleryY + galleryPadding; // Top padding

                    // Check if clicking on a specific media item
                    for (let i = 0; i < project.images.length; i++) {
                        const itemX = startX + i * (itemWidth + galleryPadding) + galleryScrollX;
                        if (p.mouseX >= itemX && p.mouseX <= itemX + itemWidth &&
                            p.mouseY >= startY && p.mouseY <= startY + itemHeight) {
                            openExpandedMedia(i);
                            return;
                        }
                    }
                }
            }

            // Apply momentum/easing to final scroll position
            const project = projects[activeInfoCard];
            if (project && project.images && project.images.length > 0) {
                const cardSize = widthCheck(p.width) ?
                    p.min(p.width * 0.95, p.height * 0.9) :
                    p.min(p.width * 0.9, p.height * 0.85, 900);
                const isMobile = widthCheck(p.width);
                const baseTextScale = isMobile ? cardSize / 400 : cardSize / 600;
                const padding = 25 * baseTextScale;
                const galleryWidth = cardSize - 2 * padding;
                const galleryHeight = cardSize * 0.4;
                const itemHeight = galleryHeight * 0.9;
                const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
                const itemSpacing = 20 * baseTextScale;
                const totalWidth = project.images.length * (itemWidth + itemSpacing) - itemSpacing;
                const maxScroll = p.max(0, totalWidth - galleryWidth + 20 * baseTextScale);
                targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);
            }
        }
    }

    p.mouseWheel = function (event) {
        if (activeInfoCard !== null) {
            const project = projects[activeInfoCard];
            if (project && project.images && project.images.length > 0) {
                // Check if mouse is over gallery area
                const { size: cardSize, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const { galleryY, galleryHeight, baseTextScale, padding } = getGalleryLayout(cardSize, cardX, cardY, isMobile);

                if (p.mouseX >= cardX + padding && p.mouseX <= cardX + cardSize - padding &&
                    p.mouseY >= galleryY && p.mouseY <= galleryY + galleryHeight) {

                    const scrollAmount = event.delta * 2;
                    targetGalleryScrollX -= scrollAmount;

                    // Constrain scroll bounds using correct 3:2 aspect ratio
                    const galleryWidth = cardSize - 2 * padding;
                    const itemHeight = galleryHeight * 0.9;
                    const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
                    const itemSpacing = 20 * baseTextScale;
                    const totalWidth = project.images.length * (itemWidth + itemSpacing) - itemSpacing;
                    const maxScroll = p.max(0, totalWidth - galleryWidth + 20 * baseTextScale);
                    targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);

                    return false; // Prevent page scroll
                }
            }
        }
    }

    function layoutUI() {
        ui.length = 0;
        const s_font = Math.max(0.022 * p.width, 32);
    }

    function openInfoCard(index) {
        activeInfoCard = index;
        targetAlpha = 255;
        infoCardAnimationStart = p.millis();
        infoCardAnimating = true;
        galleryScrollX = 0;
        targetGalleryScrollX = 0;
        galleryDragging = false;
        loadMediaForProject(projects[index]);
        
        // Disable browser swipe navigation while info card is open
        document.body.style.overscrollBehavior = 'none';
        document.body.style.touchAction = 'none';
        
        // Update breadcrumb to show current project
        const project = projects[index];
        if (project && project.slug) {
            import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
                updateBreadcrumb(`/interactive/live/${project.slug}`);
            });
        }
    }

    function closeInfoCard() {
        targetAlpha = 0;
        infoCardAnimationStart = p.millis();
        infoCardAnimating = true;
        galleryScrollX = 0;
        targetGalleryScrollX = 0;
        galleryDragging = false;

        // Clean up any expanded media
        if (expandedMediaIndex !== null) {
            closeExpandedMedia();
        }
        
        // Re-enable browser swipe navigation when info card is closed
        document.body.style.overscrollBehavior = '';
        document.body.style.touchAction = '';
        
        // Update URL back to main installations page
        if (window.location.hash.includes('/interactive/live/') && window.location.hash !== '#/interactive/live') {
            window.history.pushState(null, '', '#/interactive/live');
            currentPath = '/interactive/live';
        }
        
        // Update breadcrumb back to installations page
        import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
            updateBreadcrumb('/interactive/live');
        });
        
        // Clear session storage
        sessionStorage.removeItem('installationsActiveProject');
    }

    function getCloseButtonHoverCheck() {
        return (mouseX, mouseY) => {
            if (activeInfoCard !== null) {
                const { size: cardSize, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const closeButtonSize = isMobile ? 44 : 30;
                const closeButtonX = cardX + cardSize - closeButtonSize - 10;
                const closeButtonY = cardY + 10;

                return mouseX >= closeButtonX && mouseX <= closeButtonX + closeButtonSize &&
                    mouseY >= closeButtonY && mouseY <= closeButtonY + closeButtonSize;
            }
            return false;
        };
    }

    function setupSolarSystem(starRadius) {
        planetButtons = [];
        /*
        If this gets too busy, we could consider having a "system" for each year that can be selected from a side/bottom menu?
        OR we make a larger virtual canvas and "pan" around to visit other systems? >:^)
        */
        const planetCount = projects.length;

        for (let i = 0; i < planetCount; i++) {
            const orbitRadius = starRadius * (1.8 + i * 0.8);
            const angle = p.random(p.TWO_PI);
            const speed = 0.00005 / (1 + i * 0.3);
            const size = starRadius * (0.3 + p.random(0.2));
            const color = p.map(i, 0, planetCount, 230, 120);
            const textSize = mobile ? Math.max(16, size * 0.8) : Math.max(14, size * 0.7);
            const textOffsetY = size * 1.2; // Position text below planet

            planetButtons.push(new UIPlanetButton(p, 0, 0, size, orbitRadius, angle, speed, color, projects[i].name, textSize, 0, textOffsetY));
        }
    }

    function renderSolarSystem() {
        // Draw the central star
        renderStar(cx, cy, r);

        // Draw planets
        p.noFill();
        p.strokeWeight(1);

        planetButtons.forEach((planetButton, idx) => {
            // Update planet position
            planetButton.updatePosition(cx, cy, p.deltaTime);

            // Draw orbital path (faint)
            p.noFill();
            p.stroke(80, 80, 80, 100);
            p.strokeWeight(1);
            p.circle(cx, cy, planetButton.orbitRadius * 2);

            // Render planet
            planetButton.render(smoothV, short);
        });
    }

    function renderStar(x, y, radius) {
        // Draw the central star body
        p.fill(star_colours[0]);
        p.noStroke();
        p.circle(x, y, radius * 0.8);

        // Draw rotating triangle ring
        const triangleCount = 3;
        const ringRadius = radius * (0.69 + 0.03 * p.sin(0.001 * p.millis()));
        const triangleSize = radius * 0.15;
        const rotationSpeed = 0.00005;
        const currentTime = p.millis();
        const rotationAngle = currentTime * rotationSpeed;
        for (let i = 0; i < triangleCount; i++) {
            const angle = (p.TWO_PI / triangleCount) * i + rotationAngle;
            const trianglePos = radialToCartesian(ringRadius, angle);
            const triangleX = x + trianglePos.x;
            const triangleY = y + trianglePos.y;

            p.push();
            p.translate(triangleX, triangleY);
            p.rotate(-angle + p.HALF_PI); // Point triangles outward
            p.triangle(0, -triangleSize * 0.6, -triangleSize * 0.5, triangleSize * 0.5, triangleSize * 0.5, triangleSize * 0.5);
            p.pop();
        }
    }

    function renderInfoCard(project) {
        // Calculate card size based on screen size
        const { size: cardSize, x: cardX, y: cardY, isMobile } = getCardDimensions();

        // Card background with semi-transparent overlay
        p.fill(0, 0, 0, 120 * (infoCardAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        // Main card background
        p.fill(23, 23, 23, 240 * (infoCardAlpha / 255));
        p.stroke(230, infoCardAlpha);
        p.strokeWeight(2);
        p.rect(cardX, cardY, cardSize, cardSize);

        // Close button
        const closeButtonSize = isMobile ? 44 : 30;
        const closeButtonX = cardX + cardSize - closeButtonSize - 10;
        const closeButtonY = cardY + 10;
        renderCloseButton(closeButtonX, closeButtonY, closeButtonSize, infoCardAlpha);

        // Text styling
        p.fill(230, infoCardAlpha);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);

        // Scale text sizes based on card size - smaller fonts for desktop
        const baseTextScale = isMobile ? cardSize / 400 : cardSize / 600;
        const padding = 25 * baseTextScale;
        const lineHeight = 25 * baseTextScale;
        let textY = cardY + padding;

        // Project Name (larger)
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(24 * baseTextScale);
        p.text(project.name, cardX + padding, textY, cardSize - 2 * padding - closeButtonSize);
        textY += lineHeight * 1.8;

        // Type
        p.textSize(16 * baseTextScale);
        p.text(project.type, cardX + padding, textY, cardSize - 2 * padding);
        textY += lineHeight;

        // Location
        p.text(project.location, cardX + padding, textY, cardSize - 2 * padding);
        textY += lineHeight;

        // Year
        p.text(project.year, cardX + padding, textY, cardSize - 2 * padding);
        textY += lineHeight * 1.5;

        // Gallery section (if images exist)
        if (project.images && project.images.length > 0) {
            const galleryHeight = cardSize * 0.4;
            const galleryY = textY;
            renderGallery(project.images, cardX + padding, galleryY, cardSize - 2 * padding, galleryHeight, baseTextScale);
            textY += galleryHeight + lineHeight;
        }

        // Description (if available)
        if (project.description && project.description.length > 0) {
            p.textFont('ZxGamut', { fontVariationSettings: `wght 400` });
            p.textSize(14 * baseTextScale);
            p.fill(230, infoCardAlpha);
            p.noStroke();
            const descriptionHeight = cardSize - (textY - cardY) - padding;
            p.text(project.description, cardX + padding, textY, cardSize - 2 * padding, descriptionHeight);
            // Reset font back to default
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght 900`
            });
        }
        
        // Navigation arrows (only show if there are multiple projects)
        if (projects.length > 1) {
            renderNavigationArrows(cardX, cardY, cardSize, isMobile, baseTextScale);
        }
    }

    function renderNavigationArrows(cardX, cardY, cardSize, isMobile, baseTextScale) {
        // Arrow button dimensions - responsive to screen size
        const arrowSize = isMobile ? 50 : 40;
        const arrowPadding = isMobile ? 20 : 15;
        const arrowY = cardY + cardSize + arrowPadding;
        
        // Position arrows centered below the card
        const totalArrowWidth = arrowSize * 2 + arrowPadding * 3; // 2 arrows + spacing
        const arrowStartX = cardX + (cardSize - totalArrowWidth) / 2;
        
        const leftArrowX = arrowStartX + arrowPadding;
        const rightArrowX = arrowStartX + arrowPadding * 2 + arrowSize;
        
        // Arrows are always active with wraparound navigation
        const arrowAlpha = infoCardAlpha;
        
        // Left arrow (previous with wraparound)
        renderArrowButton(leftArrowX, arrowY, arrowSize, 'left', arrowAlpha, isMobile);
        
        // Right arrow (next with wraparound)  
        renderArrowButton(rightArrowX, arrowY, arrowSize, 'right', arrowAlpha, isMobile);
        
        // Project counter text (e.g., "2 / 7")
        const counterY = arrowY + arrowSize + (isMobile ? 25 : 20);
        p.fill(230, infoCardAlpha);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 600` });
        p.textSize((isMobile ? 16 : 14) * baseTextScale);
        p.text(`${activeInfoCard + 1} / ${projects.length}`, cardX + cardSize/2, counterY);
    }
    
    function renderArrowButton(x, y, size, direction, alpha, isMobile) {
        // Button background
        p.fill(40, 40, 40, alpha);
        p.stroke(100, alpha);
        p.strokeWeight(isMobile ? 2 : 1);
        p.rect(x, y, size, size);
        
        // Arrow symbol
        p.fill(230, alpha);
        p.noStroke();
        
        const arrowPadding = size * 0.25;
        const arrowCenterX = x + size/2;
        const arrowCenterY = y + size/2;
        const arrowWidth = size * 0.3;
        const arrowHeight = size * 0.4;
        
        if (direction === 'left') {
            // Left-pointing triangle
            p.triangle(
                arrowCenterX - arrowWidth/2, arrowCenterY,
                arrowCenterX + arrowWidth/2, arrowCenterY - arrowHeight/2,
                arrowCenterX + arrowWidth/2, arrowCenterY + arrowHeight/2
            );
        } else {
            // Right-pointing triangle  
            p.triangle(
                arrowCenterX + arrowWidth/2, arrowCenterY,
                arrowCenterX - arrowWidth/2, arrowCenterY - arrowHeight/2,
                arrowCenterX - arrowWidth/2, arrowCenterY + arrowHeight/2
            );
        }
    }
    
    function navigateToProject(newIndex, fromHashChange = false) {
        if (newIndex >= 0 && newIndex < projects.length && newIndex !== activeInfoCard) {
            // Update active info card
            activeInfoCard = newIndex;
            
            // Reset gallery scroll
            galleryScrollX = 0;
            targetGalleryScrollX = 0;
            
            // Close any expanded media
            if (expandedMediaIndex !== null) {
                closeExpandedMedia();
            }
            
            // Load media for new project
            loadMediaForProject(projects[newIndex]);
            
            // Update URL and breadcrumb
            const newProject = projects[newIndex];
            if (newProject && newProject.slug) {
                const newPath = `/interactive/live/${newProject.slug}`;
                
                // Only update URL if this wasn't triggered by a hash change
                if (!fromHashChange) {
                    isInternalNavigation = true;
                    window.history.replaceState(null, '', `#${newPath}`);
                }
                currentPath = newPath;
                
                // Update breadcrumb
                import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
                    updateBreadcrumb(newPath);
                });
                
                // Update session storage
                sessionStorage.setItem('installationsActiveProject', newProject.slug);
            }
        }
    }
    
    function getNavigationButtonHoverCheck() {
        return (mouseX, mouseY) => {
            if (activeInfoCard !== null && projects.length > 1) {
                const { size: cardSize, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const arrowSize = isMobile ? 50 : 40;
                const arrowPadding = isMobile ? 20 : 15;
                const arrowY = cardY + cardSize + arrowPadding;
                
                const totalArrowWidth = arrowSize * 2 + arrowPadding * 3;
                const arrowStartX = cardX + (cardSize - totalArrowWidth) / 2;
                
                const leftArrowX = arrowStartX + arrowPadding;
                const rightArrowX = arrowStartX + arrowPadding * 2 + arrowSize;
                
                // Check left arrow (always active with wraparound)
                if (mouseX >= leftArrowX && mouseX <= leftArrowX + arrowSize &&
                    mouseY >= arrowY && mouseY <= arrowY + arrowSize) {
                    return true;
                }
                
                // Check right arrow (always active with wraparound)
                if (mouseX >= rightArrowX && mouseX <= rightArrowX + arrowSize &&
                    mouseY >= arrowY && mouseY <= arrowY + arrowSize) {
                    return true;
                }
            }
            return false;
        };
    }

    function loadMediaForProject(project) {
        if (!project.images || project.images.length === 0) return;

        project.images.forEach((mediaItem, index) => {
            const pathString = getMediaPath(mediaItem);

            if (!loadedMedia.has(pathString)) {
                const isVideo = isVideoFile(pathString);

                // On mobile, check if we have a thumbnail for this video
                if (mobile && isVideo) {
                    if (project.thumbnails && project.thumbnails[mediaItem]) {
                        // Load thumbnail image instead of video for mobile
                        const thumbnailPath = project.thumbnails[mediaItem];
                        p.loadImage(thumbnailPath, (img) => {
                            loadedMedia.set(pathString, { element: img, type: 'video-thumbnail', videoSrc: pathString, loaded: true });
                        }, (err) => {
                            console.error('Failed to load video thumbnail:', thumbnailPath, err);
                            // Fallback to black placeholder if thumbnail fails
                            loadedMedia.set(pathString, { element: null, type: 'video-placeholder', videoSrc: pathString, loaded: true });
                        });
                    } else {
                        // No thumbnail available - use black placeholder
                        loadedMedia.set(pathString, { element: null, type: 'video-placeholder', videoSrc: pathString, loaded: true });
                    }
                    return;
                }
                if (isVideo) {
                    loadVideoElement(pathString);
                } else {
                    p.loadImage(pathString, (img) => {
                        loadedMedia.set(pathString, { element: img, type: 'image', loaded: true });
                    }, (err) => {
                        console.error('Failed to load image:', pathString, err);
                    });
                }
            }
        });
    }

    function loadVideoElement(pathString) {
        const video = p.createVideo(pathString, () => {
            loadedMedia.set(pathString, { element: video, type: 'video', loaded: true });
        });
        video.hide();
        video.volume(0);

        // Set attributes for iOS compatibility first
        video.elt.setAttribute('playsinline', true);
        video.elt.setAttribute('muted', true);
        video.elt.setAttribute('preload', 'metadata');

        // Different behavior for mobile vs desktop
        if (!mobile) {
            // Desktop: autoplay looping for moving preview
            video.loop();
        } else {
            // Mobile: load first frame only (fallback when no thumbnail available)
            video.noLoop();
            video.pause();

            video.elt.addEventListener('loadedmetadata', () => {
                video.elt.currentTime = 0.1;
            });

            video.elt.addEventListener('seeked', () => {
                video.pause();
            });
        }

        video.elt.addEventListener('loadeddata', () => {
            loadedMedia.set(pathString, { element: video, type: 'video', loaded: true });
        });

        video.elt.addEventListener('canplay', () => {
            loadedMedia.set(pathString, { element: video, type: 'video', loaded: true });
        });

        loadedMedia.set(pathString, { element: video, type: 'video', loaded: false });

        setTimeout(() => {
            const currentData = loadedMedia.get(pathString);
            if (currentData && !currentData.loaded) {
                loadedMedia.set(pathString, { element: video, type: 'video', loaded: true });
            }
        }, 3000);
    }

    function renderGallery(images, x, y, width, height, scale) {
        if (!images || images.length === 0) return;

        // Gallery container background
        p.fill(0, 0, 0, 100 * (infoCardAlpha / 255));
        p.stroke(230, infoCardAlpha * 0.3);
        p.strokeWeight(1);
        p.rect(x, y, width, height);

        // Set up clipping mask for gallery
        p.push();

        // Create clipping rectangle
        p.drawingContext.save();
        p.drawingContext.beginPath();
        p.drawingContext.rect(x, y, width, height);
        p.drawingContext.clip();

        // Use 3:2 aspect ratio for gallery items with equal padding
        const padding = 10 * scale; // Equal padding for all sides and between items
        const itemHeight = height - (2 * padding); // Account for top and bottom padding
        const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
        const totalWidth = images.length * (itemWidth + padding) - padding; // Last item doesn't need trailing padding
        const startX = x + padding; // Left padding
        const startY = y + padding; // Top padding

        // Constrain scroll bounds
        const maxScroll = p.max(0, totalWidth - width + (2 * padding));
        targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);

        // Render media items
        images.forEach((mediaItem, index) => {
            const pathString = getMediaPath(mediaItem);
            const itemX = startX + index * (itemWidth + padding) + galleryScrollX;

            // Only render if visible
            if (itemX + itemWidth >= x && itemX <= x + width) {
                const mediaData = loadedMedia.get(pathString);

                if (mediaData && mediaData.loaded) {
                    p.push();
                    p.tint(255, infoCardAlpha);

                    try {
                        if (mediaData.type === 'image') {
                            // Fill the entire box, cropping as needed
                            const img = mediaData.element;
                            const { sourceX, sourceY, sourceWidth, sourceHeight } = calculateCropDimensions(img.width, img.height, itemWidth, itemHeight);

                            p.image(img, itemX, startY, itemWidth, itemHeight, sourceX, sourceY, sourceWidth, sourceHeight);
                        } else if (mediaData.type === 'video-thumbnail') {
                            // Mobile: Show thumbnail image with play icon
                            const img = mediaData.element;
                            const { sourceX, sourceY, sourceWidth, sourceHeight } = calculateCropDimensions(img.width, img.height, itemWidth, itemHeight);

                            p.image(img, itemX, startY, itemWidth, itemHeight, sourceX, sourceY, sourceWidth, sourceHeight);

                            // Small play icon overlay
                            const playSize = itemWidth * 0.15;
                            const playX = itemX + (itemWidth - playSize) / 2;
                            const playY = startY + (itemHeight - playSize) / 2;
                            renderPlayIcon(playX, playY, playSize, infoCardAlpha);
                        } else if (mediaData.type === 'video') {
                            // Show first frame of video as preview
                            const video = mediaData.element;
                            if (video.elt && (video.elt.readyState >= 1 || video.elt.videoWidth > 0)) {
                                const videoWidth = video.elt.videoWidth || video.width || 1920;
                                const videoHeight = video.elt.videoHeight || video.height || 1080;
                                const { sourceX, sourceY, sourceWidth, sourceHeight } = calculateCropDimensions(videoWidth, videoHeight, itemWidth, itemHeight);

                                p.image(video, itemX, startY, itemWidth, itemHeight, sourceX, sourceY, sourceWidth, sourceHeight);
                            } else {
                                // Fallback to dark background if video not ready
                                p.fill(40, 40, 40, 200 * (infoCardAlpha / 255));
                                p.noStroke();
                                p.rect(itemX, startY, itemWidth, itemHeight);
                            }

                            // Smaller, more subtle play icon overlay
                            const playSize = itemWidth * 0.15; // Reduced from 0.3 to 0.15
                            const playX = itemX + (itemWidth - playSize) / 2;
                            const playY = startY + (itemHeight - playSize) / 2;

                            // Semi-transparent play button background
                            p.fill(0, 0, 0, 120 * (infoCardAlpha / 255)); // Darker, more subtle
                            p.noStroke();
                            p.circle(playX + playSize/2, playY + playSize/2, playSize);

                            // Play triangle - smaller and more subtle
                            p.fill(255, 255, 255, 180 * (infoCardAlpha / 255));
                            const triangleSize = playSize * 0.35;
                            const triangleCenterX = playX + playSize/2 + triangleSize * 0.1;
                            const triangleCenterY = playY + playSize/2;
                            p.triangle(
                                triangleCenterX - triangleSize/2, triangleCenterY - triangleSize/2,
                                triangleCenterX - triangleSize/2, triangleCenterY + triangleSize/2,
                                triangleCenterX + triangleSize/2, triangleCenterY
                            );
                        } else if (mediaData.type === 'video-placeholder') {
                            // Mobile: Show black placeholder with play icon
                            p.fill(23, 23, 23, 240 * (infoCardAlpha / 255));
                            p.noStroke();
                            p.rect(itemX, startY, itemWidth, itemHeight);

                            // Small play icon overlay
                            const playSize = itemWidth * 0.15;
                            const playX = itemX + (itemWidth - playSize) / 2;
                            const playY = startY + (itemHeight - playSize) / 2;
                            renderPlayIcon(playX, playY, playSize, infoCardAlpha);
                        }
                    }
                    catch (error) {
                        console.warn('Error rendering media:', error);
                        // Fall back to placeholder
                        p.fill(80, 80, 80, 150 * (infoCardAlpha / 255));
                        p.stroke(120, infoCardAlpha * 0.5);
                        p.strokeWeight(1);
                        p.rect(itemX, startY, itemWidth, itemHeight);

                        // Show error text
                        p.fill(200, infoCardAlpha * 0.7);
                        p.noStroke();
                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(10 * scale);
                        p.text(mediaData.type === 'video' ? 'Video Error' : 'Image Error', itemX + itemWidth / 2, startY + itemHeight / 2);
                    }

                    p.pop();
                } else {
                    // Placeholder for loading media
                    p.fill(50, 50, 50, 150 * (infoCardAlpha / 255));
                    p.stroke(100, infoCardAlpha * 0.5);
                    p.strokeWeight(1);
                    p.rect(itemX, startY, itemWidth, itemHeight);

                    // Loading text
                    p.fill(150, infoCardAlpha * 0.7);
                    p.noStroke();
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(12 * scale);
                    p.text('Loading...', itemX + itemWidth / 2, startY + itemHeight / 2);
                }

                // Media border
                p.noFill();
                p.stroke(230, infoCardAlpha * 0.6);
                p.strokeWeight(1);
                p.rect(itemX, startY, itemWidth, itemHeight);
            }
        });

        // Scroll indicators (if needed)
        if (totalWidth > width) {
            const indicatorAlpha = infoCardAlpha * 0.8;

            // Left scroll indicator
            if (galleryScrollX < 0) {
                p.fill(230, indicatorAlpha);
                p.noStroke();
                p.triangle(x + 5, y + height / 2, x + 15, y + height / 2 - 5, x + 15, y + height / 2 + 5);
            }

            // Right scroll indicator
            if (galleryScrollX > -maxScroll) {
                p.fill(230, indicatorAlpha);
                p.noStroke();
                p.triangle(x + width - 5, y + height / 2, x + width - 15, y + height / 2 - 5, x + width - 15, y + height / 2 + 5);
            }
        }

        // Restore clipping context
        p.drawingContext.restore();

        p.pop();
    }

    function radialToCartesian(r, a) {
        return { x: r * p.cos(a), y: -r * p.sin(a) };
    }

    function openExpandedMedia(index) {
        expandedMediaIndex = index;
        targetExpandedAlpha = 255;
        expandedMediaAnimationStart = p.millis();
        expandedMediaAnimating = true;
    }

    function closeExpandedMedia() {
        targetExpandedAlpha = 0;
        expandedMediaAnimationStart = p.millis();
        expandedMediaAnimating = true;

        // Clean up native video element
        if (nativeVideoElement) {
            nativeVideoElement.remove();
            nativeVideoElement = null;
        }
    }

    function renderExpandedNativeVideo(videoPath) {
        // Dark overlay
        p.fill(0, 0, 0, 200 * (expandedMediaAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        // Create or update native video element
        if (!nativeVideoElement) {
            nativeVideoElement = document.createElement('video');
            nativeVideoElement.src = videoPath;
            nativeVideoElement.controls = true;
            nativeVideoElement.preload = 'metadata';
            nativeVideoElement.setAttribute('playsinline', true);
            nativeVideoElement.muted = true;

            // Style the video element
            nativeVideoElement.style.position = 'fixed';
            nativeVideoElement.style.zIndex = '1000';
            nativeVideoElement.style.backgroundColor = '#000';
            nativeVideoElement.style.borderRadius = '8px';

            // Add to DOM
            document.body.appendChild(nativeVideoElement);
        }

        // Calculate video size and position (full width on mobile, 80% on desktop)
        const isMobile = widthCheck(p.width);
        const maxWidth = isMobile ? p.width : p.width * 0.8;
        const maxHeight = isMobile ? p.height * 0.8 : p.height * 0.8;

        // Use 16:9 aspect ratio as default, or actual video ratio if available
        let aspectRatio = 16 / 9;
        if (nativeVideoElement.videoWidth && nativeVideoElement.videoHeight) {
            aspectRatio = nativeVideoElement.videoWidth / nativeVideoElement.videoHeight;
        }

        let videoWidth, videoHeight;
        if (aspectRatio > maxWidth / maxHeight) {
            videoWidth = maxWidth;
            videoHeight = maxWidth / aspectRatio;
        } else {
            videoHeight = maxHeight;
            videoWidth = maxHeight * aspectRatio;
        }

        // Position the video element
        const videoX = (p.width - videoWidth) / 2;
        const videoY = (p.height - videoHeight) / 2;

        // Apply positioning and sizing
        nativeVideoElement.style.left = videoX + 'px';
        nativeVideoElement.style.top = videoY + 'px';
        nativeVideoElement.style.width = videoWidth + 'px';
        nativeVideoElement.style.height = videoHeight + 'px';
        nativeVideoElement.style.opacity = expandedMediaAlpha / 255;

        // Close button (drawn over the video)
        const closeSize = 40;
        const closeX = videoX + videoWidth - closeSize - 10;
        const closeY = videoY + 10;

        p.fill(0, 0, 0, 150 * (expandedMediaAlpha / 255));
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(2);
        p.rect(closeX, closeY, closeSize, closeSize);

        // X symbol
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(3);
        const padding = 12;
        p.line(closeX + padding, closeY + padding,
            closeX + closeSize - padding, closeY + closeSize - padding);
        p.line(closeX + closeSize - padding, closeY + padding,
            closeX + padding, closeY + closeSize - padding);
    }

    function renderExpandedMedia() {
        if (activeInfoCard === null || expandedMediaIndex === null) return;

        const project = projects[activeInfoCard];
        if (!project.images || expandedMediaIndex >= project.images.length) return;

        const mediaItem = project.images[expandedMediaIndex];
        let pathString;
        if (typeof mediaItem === 'string') {
            pathString = mediaItem;
        } else if (mediaItem && typeof mediaItem === 'object') {
            pathString = mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString();
        } else {
            pathString = String(mediaItem);
        }

        const mediaData = loadedMedia.get(pathString);
        const isVideo = pathString.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);

        // For videos or video placeholders, use native video player
        if (isVideo || (mediaData && (mediaData.type === 'video-placeholder' || mediaData.type === 'video-thumbnail'))) {
            // Use the original video source for native player
            const videoSrc = mediaData && mediaData.videoSrc ? mediaData.videoSrc : pathString;
            renderExpandedNativeVideo(videoSrc);
            return;
        }

        // For images, continue with p5.js rendering
        if (!mediaData || !mediaData.loaded) return;

        // Dark overlay
        p.fill(0, 0, 0, 200 * (expandedMediaAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        // Calculate media size (full width on mobile, 80% on desktop)
        const isMobile = widthCheck(p.width);
        const maxWidth = isMobile ? p.width : p.width * 0.8;
        const maxHeight = isMobile ? p.height * 0.8 : p.height * 0.8;
        let mediaWidth, mediaHeight;

        if (mediaData.type === 'image') {
            const img = mediaData.element;
            const aspectRatio = img.width / img.height;
            if (aspectRatio > maxWidth / maxHeight) {
                mediaWidth = maxWidth;
                mediaHeight = maxWidth / aspectRatio;
            } else {
                mediaHeight = maxHeight;
                mediaWidth = maxHeight * aspectRatio;
            }
        } else if (mediaData.type === 'video') {
            const video = mediaData.element;
            // Get video dimensions with fallbacks
            let videoWidth = video.elt.videoWidth || video.width || 1920;
            let videoHeight = video.elt.videoHeight || video.height || 1080;

            // Ensure we have valid dimensions
            if (videoWidth <= 0 || videoHeight <= 0) {
                videoWidth = 1920;
                videoHeight = 1080;
            }

            const aspectRatio = videoWidth / videoHeight;
            if (aspectRatio > maxWidth / maxHeight) {
                mediaWidth = maxWidth;
                mediaHeight = maxWidth / aspectRatio;
            } else {
                mediaHeight = maxHeight;
                mediaWidth = maxHeight * aspectRatio;
            }
        }

        const mediaX = (p.width - mediaWidth) / 2;
        const mediaY = (p.height - mediaHeight) / 2;

        // Render expanded media
        p.push();
        p.tint(255, expandedMediaAlpha);
        p.image(mediaData.element, mediaX, mediaY, mediaWidth, mediaHeight);
        p.pop();

        // Close button
        const closeSize = 40;
        const closeX = mediaX + mediaWidth - closeSize - 10;
        const closeY = mediaY + 10;

        p.fill(0, 0, 0, 150 * (expandedMediaAlpha / 255));
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(2);
        p.rect(closeX, closeY, closeSize, closeSize);

        // X symbol
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(3);
        const padding = 12;
        p.line(closeX + padding, closeY + padding,
            closeX + closeSize - padding, closeY + closeSize - padding);
        p.line(closeX + closeSize - padding, closeY + padding,
            closeX + padding, closeY + closeSize - padding);

        // No custom controls needed - native video handles everything

        function zcn(x = 0, y = 0, z = 0) {
            return 2 * (p.noise(x, y, z) - 0.5);
        }
    };
}

export const installationsSketch = (node, options = {}) => {
    return new p5((p) => sketch(p, options), node);
};
