import { getViewportSize, UIPlanetButton, smoothFollow, loadGoogleFontSet, widthCheck, updateCursor, getMediaPath, isVideoFile, calculateCropDimensions, daysSince, radialToCartesian, isDesktopOnly } from "../../utils";
import { projects, findProjectBySlug, getProjectIndexBySlug } from "./project-details";

export const sketch = function (p, options = {}) {
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let smoothV = p.createVector(smoothX, smoothY);
    let mobile = false;
    let planetButtons = [];
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

    // Interface data
    let sols = 0;

    // Mobile sequential preview variables
    let currentPreviewIndex = 0;
    let previewStartTime = 0;
    let previewDuration = 2000; // 2 seconds per preview

    // Text calculation cache for performance
    let textCache = new Map();

    // Media loading tracking to prevent duplicates
    let mediaBeingLoaded = new Set();

    // Resize throttling
    let resizeTimeout = null;

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

        // Restore original theme color in case cleanup happens while infoCard is open
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#171717';
        }

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
        const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.82;
        const cardHeight = isMobile ? p.height * 0.88 : p.height * 0.82; // Increased mobile height to 0.88 (was 0.75)
        const cardX = (p.width - cardWidth) / 2;
        // Move mobile card much higher up since breadcrumb is now hidden, keep desktop unchanged
        const cardY = isMobile ? (p.height - cardHeight) / 2 - 40 : (p.height - cardHeight) / 2 - 20;
        return { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile };
    }

    function getGalleryLayout(cardWidth, cardHeight, cardX, cardY, isMobile) {
        const padding = isMobile ? 20 : 24;
        const lineHeight = isMobile ? 28 : 32;
        const galleryY = cardY + padding + lineHeight * 5.3;
        const galleryHeight = cardHeight * 0.35; // Slightly smaller to leave more room for text
        return { galleryY, galleryHeight, padding, lineHeight };
    }

    function getGalleryItemDimensions(galleryHeight, isMobile) {
        const galleryPadding = isMobile ? 8 : 10;
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
        setupRadialLayout();
        layoutInitialized = true;

        // Reset mobile preview timing when layout changes
        if (mobile) {
            previewStartTime = 0;
            currentPreviewIndex = 0;
        }
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

        // Calculate days since project start
        sols = daysSince('2024-08-14');
        window.addEventListener('hashchange', hashChangeHandler);
        smoothX = p.width / 2;
        smoothY = p.height * 0.94;
        p.mouseX = smoothX;
        p.mouseY = smoothY;
    };

    p.draw = function draw() {
        p.background(23);


        // Handle smooth cursor movement - mobile vs desktop
        if (mobile && planetButtons && planetButtons.length > 0) {
            // Mobile: Sequential preview of each planet button
            // Initialize preview start time on first frame
            if (previewStartTime === 0) {
                previewStartTime = p.millis();
            }

            // Calculate which planet should be previewed based on elapsed time
            const elapsedTime = p.millis() - previewStartTime;
            const cyclePosition = (elapsedTime / previewDuration) % planetButtons.length;
            const targetIndex = Math.floor(cyclePosition);

            if (targetIndex !== currentPreviewIndex && targetIndex < planetButtons.length) {
                currentPreviewIndex = targetIndex;
            }

            // Smoothly move to the current preview planet position
            const targetPlanet = planetButtons[currentPreviewIndex];
            if (targetPlanet) {
                smoothX = p.constrain(smoothFollow(targetPlanet.p.x, smoothX, 0.005 * p.deltaTime), 0, p.width);
                smoothY = p.constrain(smoothFollow(targetPlanet.p.y, smoothY, 0.005 * p.deltaTime), 0, p.height);
            }
        } else {
            // Desktop: Follow mouse cursor
            smoothX = smoothFollow(p.mouseX, smoothX, 0.003 * p.deltaTime);
            smoothY = smoothFollow(p.mouseY, smoothY, 0.003 * p.deltaTime);
        }

        smoothV.x = smoothX;
        smoothV.y = smoothY;
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        renderRadialLayout();
        renderHUDDecorations();

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
            const progress = p.constrain(elapsed / 300, 0, 1);
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
            [getCloseButtonHoverCheck(), getNavigationButtonHoverCheck()] :
            [...planetButtons, getTextAreasHoverCheck(), getCloseButtonHoverCheck()];
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
        // Throttle resize events to prevent performance issues during orientation changes
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }

        resizeTimeout = setTimeout(() => {
            const s = getViewportSize();
            p.resizeCanvas(s.width, s.height);
            initializeLayout();
            resizeTimeout = null;
        }, 150); // Wait 150ms after resize stops
    };

    p.mousePressed = function (event) {
        if (event && event.button !== 0) {
            return;
        }

        // Block all interactions if help popup is open
        if (window.helpPopupOpen) {
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

            // Check close button (now centered below media)
            const closeSize = isMobile ? 50 : 40;
            const closePadding = isMobile ? 20 : 15;
            const closeX = (p.width - closeSize) / 2; // Center horizontally
            const closeY = mediaY + mediaHeight + closePadding;

            if (p.mouseX >= closeX && p.mouseX <= closeX + closeSize &&
                p.mouseY >= closeY && p.mouseY <= closeY + closeSize) {
                closeExpandedMedia();
                return;
            }

            // Native video players handle their own controls

            // Click outside media and close button area closes it
            const totalHeight = mediaHeight + closePadding + closeSize;
            if (p.mouseX < mediaX || p.mouseX > mediaX + mediaWidth ||
                p.mouseY < mediaY || p.mouseY > mediaY + totalHeight) {
                closeExpandedMedia();
                return;
            }
            return;
        }


        // Check if clicking on info card or close button
        if (activeInfoCard !== null) {
            const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
            const closeButtonSize = isMobile ? 44 : 30;
            const closeButtonX = cardX + cardWidth - closeButtonSize - 10;
            const closeButtonY = cardY + 10;

            // Check if clicking close button
            if (p.mouseX >= closeButtonX && p.mouseX <= closeButtonX + closeButtonSize &&
                p.mouseY >= closeButtonY && p.mouseY <= closeButtonY + closeButtonSize) {
                closeInfoCard();
                return;
            }

            // Check if clicking navigation arrows
            if (projects.length > 1) {
                const arrowSize = 35; // Match updated arrow size
                const arrowSpacing = 80; // Match updated arrow spacing
                const arrowY = cardY + cardHeight + (isMobile ? 20 : 15);

                // Use new arrow positioning logic (same as in renderNavigationArrows)
                const centerX = cardX + cardWidth / 2;
                const leftArrowX = centerX - arrowSpacing - arrowSize / 2;
                const rightArrowX = centerX + arrowSpacing - arrowSize / 2;

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
                const padding = isMobile ? 20 : 24;
                const lineHeight = isMobile ? 28 : 32;
                const galleryY = cardY + padding + lineHeight * 5.3; // Approximate gallery Y position
                const galleryHeight = cardHeight * 0.35;

                if (p.mouseX >= cardX + padding && p.mouseX <= cardX + cardWidth - padding &&
                    p.mouseY >= galleryY && p.mouseY <= galleryY + galleryHeight) {
                    // Start gallery dragging
                    galleryDragging = true;
                    galleryDragStartX = p.mouseX;
                    galleryStartScrollX = galleryScrollX;
                    return;
                }
            }

            // Check if clicking outside the card
            if (p.mouseX < cardX || p.mouseX > cardX + cardWidth ||
                p.mouseY < cardY || p.mouseY > cardY + cardHeight) {
                closeInfoCard();
                return;
            }

            // If clicking inside the card (but not close button), do nothing
            return;
        }

        // Check planet buttons and their text areas
        planetButtons.forEach((planetButton, index) => {
            const project = projects[index];
            const planetClicked = planetButton.contains(p.mouseX, p.mouseY);
            const textClicked = isHoveringText(planetButton, p.mouseX, p.mouseY, project.name);

            if (planetClicked || textClicked) {
                openInfoCard(index);
                // Update URL to include project slug
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
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) {
            return;
        }
        if (galleryDragging) {
            const dragDistance = Math.abs(p.mouseX - galleryDragStartX);
            galleryDragging = false;

            // If minimal drag (< 5 pixels), treat as a click for media expansion
            if (dragDistance < 5 && activeInfoCard !== null) {
                const project = projects[activeInfoCard];
                if (project && project.images && project.images.length > 0) {
                    const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
                    const { galleryY, padding, lineHeight } = getGalleryLayout(cardWidth, cardHeight, cardX, cardY, isMobile);

                    // Use EXACT same galleryHeight calculation as main rendering
                    const galleryHeight = isMobile ? cardHeight * 0.3 : cardHeight * 0.4;

                    // Use EXACT same calculations as renderGallery for consistent click detection
                    const galleryAreaPadding = isMobile ? 8 : 10; // This is the 'padding' variable in rendering
                    const itemHeight = galleryHeight - (2 * galleryAreaPadding);
                    const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio

                    // Gallery area coordinates (same as rendering: x=cardX+padding, y=galleryY)
                    const galleryX = cardX + padding; // Card padding
                    const galleryY_coords = galleryY;

                    // Start coordinates within gallery area (same as rendering: startX = x + padding)
                    const startX = galleryX + galleryAreaPadding; // Gallery area left padding
                    const startY = galleryY_coords + galleryAreaPadding; // Gallery area top padding

                    // Check if clicking on a specific media item
                    for (let i = 0; i < project.images.length; i++) {
                        const itemX = startX + i * (itemWidth + galleryAreaPadding) + galleryScrollX;
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
                const { width: cardWidth, height: cardHeight } = getCardDimensions();
                const isMobile = widthCheck(p.width);
                const padding = isMobile ? 20 : 24;
                const galleryWidth = cardWidth - 2 * padding;

                // Use EXACT same galleryHeight as main rendering
                const galleryHeight = isMobile ? cardHeight * 0.3 : cardHeight * 0.4;

                // Use same calculations as rendering and click detection
                const galleryAreaPadding = isMobile ? 8 : 10;
                const itemHeight = galleryHeight - (2 * galleryAreaPadding);
                const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
                const totalWidth = project.images.length * (itemWidth + galleryAreaPadding) - galleryAreaPadding;
                const maxScroll = p.max(0, totalWidth);
                targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);
            }
        }
    }

    p.mouseWheel = function (event) {
        if (activeInfoCard !== null) {
            const project = projects[activeInfoCard];
            if (project && project.images && project.images.length > 0) {
                // Check if mouse is over gallery area
                const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const { galleryY, padding, lineHeight } = getGalleryLayout(cardWidth, cardHeight, cardX, cardY, isMobile);

                // Use EXACT same galleryHeight as main rendering
                const galleryHeight = isMobile ? cardHeight * 0.3 : cardHeight * 0.4;

                if (p.mouseX >= cardX + padding && p.mouseX <= cardX + cardWidth - padding &&
                    p.mouseY >= galleryY && p.mouseY <= galleryY + galleryHeight) {

                    const scrollAmount = event.delta * 2;
                    targetGalleryScrollX -= scrollAmount;

                    // Constrain scroll bounds using same calculations as rendering
                    const galleryAreaPadding = isMobile ? 8 : 10;
                    const itemHeight = galleryHeight - (2 * galleryAreaPadding);
                    const itemWidth = itemHeight * 1.5; // 3:2 aspect ratio
                    const totalWidth = project.images.length * (itemWidth + galleryAreaPadding) - galleryAreaPadding;
                    const maxScroll = p.max(0, totalWidth);
                    targetGalleryScrollX = p.constrain(targetGalleryScrollX, -maxScroll, 0);

                    return false; // Prevent page scroll
                }
            }
        }
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

        // Lock orientation on mobile to prevent performance issues
        if (screen.orientation && screen.orientation.lock) {
            try {
                screen.orientation.lock('portrait-primary').catch(() => {
                    // Silently fail if orientation lock isn't supported
                });
            } catch (e) {
                // Silently fail if orientation lock isn't supported
            }
        }

        // Hide breadcrumb navigation on mobile when infoCard opens
        if (widthCheck(p.width)) {
            const breadcrumbContainer = document.getElementById("breadcrumb-container");
            if (breadcrumbContainer) {
                breadcrumbContainer.style.display = 'none';
            }
        }

        // Hide help button on both mobile and desktop when infoCard opens
        const helpContainer = document.getElementById("help-container");
        if (helpContainer) {
            helpContainer.style.display = 'none';
        }

        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#000000'; // Dark color to match overlay
        }

        // Update breadcrumb to show current project
        const project = projects[index];
        if (project && project.slug) {
            import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
                updateBreadcrumb(`/interactive/live/${project.slug}`);
            });
        }
    }

    function navigateToProject(newIndex) {
        activeInfoCard = newIndex;
        galleryScrollX = 0;
        targetGalleryScrollX = 0;
        galleryDragging = false;
        loadMediaForProject(projects[newIndex]);

        // Update URL and breadcrumb
        const project = projects[newIndex];
        if (project && project.slug) {
            const newPath = `/interactive/live/${project.slug}`;
            if (window.location.hash !== `#${newPath}`) {
                window.history.pushState(null, '', `#${newPath}`);
                currentPath = newPath;

                // Update breadcrumb
                import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
                    updateBreadcrumb(newPath);
                });
            }
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

        // Unlock orientation when closing info card
        if (screen.orientation && screen.orientation.unlock) {
            try {
                screen.orientation.unlock();
            } catch (e) {
                // Silently fail if orientation unlock isn't supported
            }
        }

        // Show breadcrumb navigation on mobile when infoCard closes
        if (widthCheck(p.width)) {
            const breadcrumbContainer = document.getElementById("breadcrumb-container");
            if (breadcrumbContainer) {
                breadcrumbContainer.style.display = 'block';
            }
        }

        // Show help button on both mobile and desktop when infoCard closes
        const helpContainer = document.getElementById("help-container");
        if (helpContainer) {
            helpContainer.style.display = 'block';
        }

        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#171717'; // Back to original dark theme
        }


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
            // Check expanded media close button first (higher priority)
            if (expandedMediaIndex !== null) {
                const isMobileCheck = widthCheck(p.width);
                const closeSize = isMobileCheck ? 50 : 40;
                const closePadding = isMobileCheck ? 20 : 15;
                const closeX = (p.width - closeSize) / 2;

                // Calculate media position to get close button Y position
                const project = projects[activeInfoCard];
                if (project && project.images && expandedMediaIndex < project.images.length) {
                    const mediaItem = project.images[expandedMediaIndex];
                    let pathString = typeof mediaItem === 'string' ? mediaItem :
                        (mediaItem && typeof mediaItem === 'object' ?
                            mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString() :
                            String(mediaItem));

                    const isVideo = pathString.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);
                    const maxWidth = isMobileCheck ? p.width : p.width * 0.8;
                    const maxHeight = isMobileCheck ? p.height * 0.8 : p.height * 0.8;
                    let mediaHeight;

                    if (isVideo) {
                        const aspectRatio = nativeVideoElement && nativeVideoElement.videoWidth && nativeVideoElement.videoHeight ?
                            nativeVideoElement.videoWidth / nativeVideoElement.videoHeight : 16 / 9;
                        if (aspectRatio > maxWidth / maxHeight) {
                            mediaHeight = maxWidth / aspectRatio;
                        } else {
                            mediaHeight = maxHeight;
                        }
                    } else {
                        const mediaData = loadedMedia.get(pathString);
                        if (mediaData && mediaData.loaded && mediaData.element) {
                            const aspectRatio = mediaData.element.width / mediaData.element.height;
                            if (aspectRatio > maxWidth / maxHeight) {
                                mediaHeight = maxWidth / aspectRatio;
                            } else {
                                mediaHeight = maxHeight;
                            }
                        } else {
                            mediaHeight = maxHeight; // fallback
                        }
                    }

                    const mediaY = (p.height - mediaHeight) / 2;
                    const closeY = mediaY + mediaHeight + closePadding;

                    return mouseX >= closeX && mouseX <= closeX + closeSize &&
                        mouseY >= closeY && mouseY <= closeY + closeSize;
                }
            }

            // Check info card close button
            if (activeInfoCard !== null) {
                const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const closeButtonSize = isMobile ? 44 : 30;
                const closeButtonX = cardX + cardWidth - closeButtonSize - 10;
                const closeButtonY = cardY + 10;

                return mouseX >= closeButtonX && mouseX <= closeButtonX + closeButtonSize &&
                    mouseY >= closeButtonY && mouseY <= closeButtonY + closeButtonSize;
            }
            return false;
        };
    }



    function preCalculateTextData() {
        textCache.clear();

        const textOffsetX = mobile ? 25 : 40;
        const textSize = mobile ? 14 : 18;

        // Set text size for accurate width calculations
        p.textSize(textSize);

        projects.forEach((project, index) => {
            // Calculate text wrapping
            const maxChars = 16;
            const words = project.name.split(' ');
            let lines = [];
            let currentLine = '';

            for (const word of words) {
                if ((currentLine + word).length > maxChars && currentLine.length > 0) {
                    lines.push(currentLine.trim());
                    currentLine = word + ' ';
                } else {
                    currentLine += word + ' ';
                }
            }
            if (currentLine.length > 0) {
                lines.push(currentLine.trim());
            }

            // Calculate dimensions
            const lineHeight = textSize * 1.2;
            const totalHeight = lines.length * lineHeight;

            // Get maximum line width
            let maxWidth = 0;
            lines.forEach(line => {
                const lineWidth = p.textWidth(line);
                if (lineWidth > maxWidth) maxWidth = lineWidth;
            });

            // Store in cache
            textCache.set(project.name, {
                lines,
                totalHeight,
                maxWidth,
                textOffsetX,
                textSize,
                lineHeight
            });
        });

        // Expose cache globally for UIPlanetButton access
        window.textCache = textCache;
    }

    function isHoveringText(planetButton, mouseX, mouseY, projectName) {
        // Get cached text data
        const cached = textCache.get(projectName);
        if (!cached) {
            // Fallback - should not happen if cache is properly initialized
            return false;
        }

        const textX = planetButton.p.x + cached.textOffsetX;
        const textY = planetButton.p.y;

        // Define text bounding rectangle using cached values
        const textBounds = {
            x: textX,
            y: textY - cached.totalHeight / 2,
            width: cached.maxWidth,
            height: cached.totalHeight
        };

        // Check if mouse is within text bounds
        return mouseX >= textBounds.x && mouseX <= textBounds.x + textBounds.width &&
               mouseY >= textBounds.y && mouseY <= textBounds.y + textBounds.height;
    }

    function setupRadialLayout() {
        planetButtons = [];

        // Pre-calculate all text data for performance
        preCalculateTextData();

        const nodeCount = projects.length;
        const baseRadius = mobile ? 20 : 25;
        const textSize = mobile ? 14 : 18;

        // Based on proto.js design - create concentric circles with radial positioning
        const step = p.height / 5;
        const centerX = p.width / 2;

        for (let i = 0; i < nodeCount; i++) {
            // Calculate position based on proto.js pattern
            const y = p.height - 0.25 * (i + 1) * step - 0.05*step;
            const r = 0.25 * (i + 1) * step;
            // Calculate radial position
            const angle = -0.75*p.PI + i*0.09;
            const radialPos = radialToCartesian(r, angle, p);
            const pos = p.createVector(radialPos.x + centerX, -radialPos.y + y);
            // Position node along the radial line (upward from center)
            const nodeX = pos.x;//centerX;
            const nodeY = pos.y;//y - r; // Position at the top of the circle

            // Position text to the right of the node with offset
            const textOffsetX = mobile ? 25 : 40;
            const textOffsetY = 0;
            const planetButton = new UIPlanetButton(p, nodeX, nodeY, baseRadius, 0, p.random(p.TWO_PI), 0, [222, 200], projects[i].name, textSize, textOffsetX, textOffsetY);
            // Add hover state tracking
            planetButton.hoverAlpha = 0;
            planetButton.targetHoverAlpha = 0;
            planetButtons.push(planetButton);
        }
    }

    function renderRadialLayout() {
        // Based on proto.js - render concentric circles first
        const step = p.height / 5;
        const centerX = p.width / 2;

        p.push();
        p.stroke(222, 64);
        p.strokeWeight(1);
        p.noFill();

        // Draw concentric circles (background)
        for (let i = 1; i <= planetButtons.length; i++) {
            const y = p.height - 0.25 * i * step - 0.05*step;
            const r = 0.25 * i * step;
            p.circle(centerX, y, 2 * r);
        }

        p.pop();

        // Render planet buttons with integrated text rendering
        planetButtons.forEach((planetButton, index) => {
            const project = projects[index];
            if (!project) return;
            planetButton.angle -= 0.01*p.noise(index);

            // Handle media preview on hover (to the left of the node)
            // On mobile, use virtual cursor position; on desktop, use actual mouse
            const hoverX = mobile ? smoothX : p.mouseX;
            const hoverY = mobile ? smoothY : p.mouseY;

            // Check if hovering over planet button OR text area
            const planetHovered = planetButton.contains(hoverX, hoverY);
            const textHovered = isHoveringText(planetButton, hoverX, hoverY, project.name);
            const isHovered = planetHovered || textHovered;

            // Update hover state smoothly
            planetButton.targetHoverAlpha = isHovered ? 1 : 0;
            planetButton.hoverAlpha = p.lerp(planetButton.hoverAlpha, planetButton.targetHoverAlpha, isHovered ? 0.1 : 0.01);

            // Create a virtual smooth vector that reflects the hover state
            // This gives consistent distance-based effects regardless of actual cursor position
            const hoverDistance = p.lerp(200, 0, planetButton.hoverAlpha); // 200 = far (no effect), 20 = close (full effect)
            const virtualSmoothV = p.createVector(
                planetButton.p.x + hoverDistance,
                planetButton.p.y
            );

            // Render planet button with hover state-based feedback
            planetButton.render(virtualSmoothV, short);

            if (isHovered && project.images && project.images.length > 0) {
                // Load preview media if not already loaded
                if (!planetButton.previewMedia) {
                    loadPreviewMedia(planetButton, project);
                }

                // Render media preview to the left of the node
                if (planetButton.previewMedia && planetButton.previewAlpha > 0.01) {
                    const previewSize = mobile ? 70 : 160;
                    const previewX = planetButton.p.x - previewSize - 30; // Position to the left
                    const previewY = planetButton.p.y - previewSize / 2;

                    p.push();

                    // Render media image with tint
                    p.tint(255, planetButton.previewAlpha * 255 * 0.7); // Low opacity as requested

                    // Crop from center of media to fit square
                    const mediaWidth = planetButton.previewMedia.width;
                    const mediaHeight = planetButton.previewMedia.height;
                    const cropSize = Math.min(mediaWidth, mediaHeight);
                    const cropX = (mediaWidth - cropSize) / 2;
                    const cropY = (mediaHeight - cropSize) / 2;

                    p.image(planetButton.previewMedia,
                        previewX, previewY,
                        previewSize, previewSize,
                        cropX, cropY, cropSize, cropSize);

                    // Remove tint for corner brackets
                    p.noTint();

                    // Render HUD-style corner brackets
                    const cornerSize = mobile ? 8 : 12;
                    const alpha = planetButton.previewAlpha * 150; // Match preview opacity

                    p.stroke(255, alpha);
                    p.strokeWeight(1);
                    p.noFill();

                    // Corner brackets (like targeting system)
                    const corners = [
                        [previewX, previewY], // top-left
                        [previewX + previewSize, previewY], // top-right
                        [previewX + previewSize, previewY + previewSize], // bottom-right
                        [previewX, previewY + previewSize] // bottom-left
                    ];

                    corners.forEach(([x, y], index) => {
                        const xDir = index === 0 || index === 3 ? 1 : -1;
                        const yDir = index === 0 || index === 1 ? 1 : -1;

                        // Horizontal line
                        p.line(x, y, x + xDir * cornerSize, y);
                        // Vertical line
                        p.line(x, y, x, y + yDir * cornerSize);
                    });

                    p.pop();
                }
            }

            // Update preview alpha
            if (isHovered) {
                planetButton.previewAlpha = p.lerp(planetButton.previewAlpha || 0, 1, 0.1);
            } else {
                planetButton.previewAlpha = p.lerp(planetButton.previewAlpha || 0, 0, 0.15);
            }
        });
    }

    function renderHUDDecorations() {
        p.push();

        // Title
        renderTitle();

        // Perimeter decorations
        renderPerimeterHUD();


        p.pop();
    }

    function renderTitle() {
        const titleY = mobile ? 5 : 20;
        const titleSize = mobile ? 18 : 28;

        p.fill(255, 200);
        p.noStroke();
        p.textAlign(p.CENTER, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        p.textSize(titleSize);
        p.text("LIVE EXPERIENCES", p.width / 2, titleY);

        // Underline decoration
        const textWidth = p.textWidth("LIVE EXPERIENCES");
        p.stroke(255, 120);
        p.strokeWeight(1);
        p.line(p.width/2 - textWidth/2 - 20, titleY + titleSize + 8,
               p.width/2 + textWidth/2 + 20, titleY + titleSize + 8);
    }

    function renderPerimeterHUD() {
        const margin = mobile ? 10 : 40;
        const cornerSize = mobile ? 20 : 30;
        const alpha = 100;

        p.stroke(255, alpha);
        p.strokeWeight(1);
        p.strokeCap(p.SQUARE);
        p.noFill();

        // Corner brackets (like targeting system)
        const corners = [
            [margin, margin], // top-left
            [p.width - margin, margin], // top-right
            [p.width - margin, p.height - margin], // bottom-right
            [margin, p.height - margin] // bottom-left
        ];

        corners.forEach(([x, y], index) => {
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;

            // Horizontal line
            p.line(x, y, x + xDir * cornerSize, y);
            // Vertical line
            p.line(x, y, x, y + yDir * cornerSize);
        });

        // Side markers (like coordinate system)
        const markerCount = mobile ? 3 : 5;
        const markerSize = 6;

        // Top and bottom markers
        for (let i = 1; i < markerCount; i++) {
            const x = p.lerp(margin + cornerSize, p.width - margin - cornerSize, i / markerCount);

            // Top markers
            p.line(x, margin, x, margin + markerSize);
            // Bottom markers
            p.line(x, p.height - margin, x, p.height - margin - markerSize);
        }

        // Left and right markers
        for (let i = 1; i < markerCount; i++) {
            const y = p.lerp(margin + cornerSize, p.height - margin - cornerSize, i / markerCount);

            // Left markers
            p.line(margin, y, margin + markerSize, y);
            // Right markers
            p.line(p.width - margin, y, p.width - margin - markerSize, y);
        }

        // Status indicators in corners
        p.fill(255, alpha * 0.6);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(mobile ? 8 : 11);
        const step = mobile ? 10 : 13;
        // System status text
        p.text("SYS: CAUTION", margin + 0.5*cornerSize, margin + 1*step);
        p.text("SOL: " + sols.toString(), margin + 0.5*cornerSize, margin + 2*step);
        p.text("SIG: -27dBm", margin + 0.5*cornerSize, margin + 3*step);
        p.text("RCS: ON", margin + 0.5*cornerSize, margin + 4*step);
        /*
        p.textAlign(p.RIGHT, p.TOP);
        p.text("SOL:" + sols.toString(), p.width - margin - cornerSize, margin + 5);
        p.textAlign(p.LEFT, p.BOTTOM);
        p.text("SIG:-32dBm", margin + cornerSize, p.height - margin - 5);
        p.textAlign(p.RIGHT, p.BOTTOM);
        p.text("BATT:64%", p.width - margin - cornerSize, p.height - margin - 5);
        */
    }


    function loadPreviewMedia(planetButton, project) {
        if (project && project.previewThumbnail) {
            // Use optimized 256x256 preview thumbnail for fast loading
            p.loadImage(project.previewThumbnail, (img) => {
                planetButton.previewMedia = img;
            }, (err) => {
                console.warn('Failed to load preview thumbnail:', err);
                // Fallback to original logic if preview thumbnail fails
                loadPreviewMediaFallback(planetButton, project);
            });
        } else {
            // Fallback for projects without preview thumbnails
            loadPreviewMediaFallback(planetButton, project);
        }
    }

    function loadPreviewMediaFallback(planetButton, project) {
        if (project && project.images && project.images.length > 0) {
            const firstMedia = project.images[0];
            const pathString = getMediaPath(firstMedia);
            const isVideo = isVideoFile(pathString);

            if (isVideo) {
                // For videos, try to load thumbnail first, fall back to placeholder
                if (project.thumbnails && project.thumbnails[firstMedia]) {
                    p.loadImage(project.thumbnails[firstMedia], (img) => {
                        planetButton.previewMedia = img;
                    }, (err) => {
                        console.warn('Failed to load thumbnail for preview:', err);
                    });
                }
            } else {
                // For images, load directly
                p.loadImage(pathString, (img) => {
                    planetButton.previewMedia = img;
                }, (err) => {
                    console.warn('Failed to load image for preview:', err);
                });
            }
        }
    }


    function renderInfoCard(project) {
        // Calculate card size based on screen size
        const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();

        // Card background with semi-transparent overlay
        p.fill(0, 0, 0, 120 * (infoCardAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        // Main card background
        p.fill(23, 23, 23, 240 * (infoCardAlpha / 255));
        p.stroke(230, infoCardAlpha);
        p.strokeWeight(2);
        p.rect(cardX, cardY, cardWidth, cardHeight);

        // Close button
        const closeButtonSize = isMobile ? 44 : 30;
        const closeButtonX = cardX + cardWidth - closeButtonSize - 10;
        const closeButtonY = cardY + 10;
        renderCloseButton(closeButtonX, closeButtonY, closeButtonSize, infoCardAlpha);

        // Text styling
        p.fill(230, infoCardAlpha);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);

        // Fixed text sizes for desktop and mobile with tighter mobile spacing
        const padding = isMobile ? 20 : 24;
        const baseLineHeight = isMobile ? 20 : 32; // Much tighter line height for mobile
        let textY = cardY + padding;

        // Project Name (larger) - with multiline support
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        const nameSize = isMobile ? 22 : 32;
        p.textSize(nameSize);

        // Calculate approximate number of lines for project name
        const nameWidth = cardWidth - 2 * padding - closeButtonSize;
        const nameTextWidth = p.textWidth(project.name);
        const estimatedLines = Math.ceil(nameTextWidth / nameWidth);

        p.text(project.name, cardX + padding, textY, nameWidth);
        textY += (estimatedLines * nameSize * 1.2) + (isMobile ? 8 : 16); // Use actual text size for height

        // Type, then Year - Location on same line
        p.textSize(isMobile ? 12 : 18);

        // Type
        p.text(project.type, cardX + padding, textY, cardWidth - 2 * padding);
        textY += isMobile ? 14 : baseLineHeight; // Reduced spacing on mobile

        // Year - Location (combined on one line)
        const yearLocationText = `${project.year} - ${project.location}`;
        p.text(yearLocationText, cardX + padding, textY, cardWidth - 2 * padding);
        textY += isMobile ? 18 : baseLineHeight * 1.5; // Slightly more space before gallery

        // Gallery section (if images exist)
        if (project.images && project.images.length > 0) {
            const galleryHeight = isMobile ? cardHeight * 0.3 : cardHeight * 0.4;
            const galleryY = textY;
            renderGallery(project.images, cardX + padding, galleryY, cardWidth - 2 * padding, galleryHeight, isMobile);
            textY += galleryHeight + (isMobile ? 12 : baseLineHeight); // Much tighter spacing on mobile
        }

        // Description (if available)
        if (project.description && project.description.length > 0) {
            p.textFont('ZxGamut', { fontVariationSettings: `wght 400` });
            p.textSize(isMobile ? 10 : 16);
            p.fill(230, infoCardAlpha);
            p.noStroke();
            const descriptionHeight = cardHeight - (textY - cardY) - (isMobile ? 10 : padding);
            p.text(project.description, cardX + padding, textY, cardWidth - 2 * padding, descriptionHeight);
            // Reset font back to default
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght 900`
            });
        }

        // Navigation arrows (only show if there are multiple projects)
        if (projects.length > 1) {
            renderNavigationArrows(cardX, cardY, cardWidth, cardHeight, isMobile);
        }
    }

    function renderNavigationArrows(cardX, cardY, cardWidth, cardHeight, isMobile) {
        // Arrow button dimensions - match lightbox styling
        const arrowSize = 35; // Match lightbox size
        const arrowSpacing = 80; // Match lightbox spacing
        const arrowY = cardY + cardHeight + (isMobile ? 20 : 15);

        // Position arrows with counter centered between them (match lightbox layout)
        const centerX = cardX + cardWidth / 2;
        const leftArrowX = centerX - arrowSpacing - arrowSize / 2;
        const rightArrowX = centerX + arrowSpacing - arrowSize / 2;
        const counterX = centerX;

        // Arrows are always active with wraparound navigation
        const arrowAlpha = infoCardAlpha;

        // Left arrow (previous with wraparound)
        renderArrowButton(leftArrowX, arrowY, arrowSize, 'left', arrowAlpha, isMobile);

        // Right arrow (next with wraparound)
        renderArrowButton(rightArrowX, arrowY, arrowSize, 'right', arrowAlpha, isMobile);

        // Project counter text centered between arrows (match lightbox styling)
        p.fill(230, infoCardAlpha);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 600` });
        p.textSize(16); // Match lightbox text size
        p.text(`${activeInfoCard + 1} / ${projects.length}`, counterX, arrowY + arrowSize / 2);
    }

    function renderArrowButton(x, y, size, direction, alpha, isMobile) {
        // Button background (match lightbox styling)
        p.fill(23, 23, 23, 200 * (alpha / 255)); // Match lightbox background
        p.stroke(230, alpha); // Match lightbox stroke
        p.strokeWeight(2); // Match lightbox stroke weight
        p.rect(x, y, size, size);

        // Arrow symbol
        p.fill(230, alpha);
        p.noStroke();

        const arrowCenterX = x + size/2;
        const arrowCenterY = y + size/2;
        const arrowWidth = size * 0.3; // Match lightbox proportions
        const arrowHeight = size * 0.4;

        if (direction === 'left') {
            // Left-pointing triangle (match lightbox arrow shape)
            p.triangle(
                arrowCenterX - arrowWidth/2, arrowCenterY,
                arrowCenterX + arrowWidth/2, arrowCenterY - arrowHeight/2,
                arrowCenterX + arrowWidth/2, arrowCenterY + arrowHeight/2
            );
        } else {
            // Right-pointing triangle (match lightbox arrow shape)
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
                const { width: cardWidth, height: cardHeight, x: cardX, y: cardY, isMobile } = getCardDimensions();
                const arrowSize = isMobile ? 50 : 40;
                const arrowPadding = isMobile ? 20 : 15;
                const arrowY = cardY + cardHeight + arrowPadding;

                // Use new arrow positioning logic (same as in renderNavigationArrows)
                const counterWidth = 80;
                const totalWidth = arrowSize * 2 + counterWidth + arrowPadding * 2;
                const startX = cardX + (cardWidth - totalWidth) / 2;

                const leftArrowX = startX;
                const rightArrowX = startX + arrowSize + counterWidth + arrowPadding * 2;

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

    function getTextAreasHoverCheck() {
        return (mouseX, mouseY) => {
            // Check if hovering over any text area
            for (let i = 0; i < planetButtons.length; i++) {
                const planetButton = planetButtons[i];
                const project = projects[i];
                if (project && isHoveringText(planetButton, mouseX, mouseY, project.name)) {
                    return true;
                }
            }
            return false;
        };
    }

    // Track loaded media for cleanup
    const loadedMediaForProject = new Map();

    function loadMediaForProject(project) {
        if (!project.images || project.images.length === 0) return;

        // Clean up previous project media first
        cleanupUnusedMedia(project);

        project.images.forEach((mediaItem, index) => {
            const pathString = getMediaPath(mediaItem);

            if (!loadedMedia.has(pathString)) {
                const isVideo = isVideoFile(pathString);

                // Desktop-only video handling - NEVER load video elements on mobile or tablets
                const isDesktop = isDesktopOnly();
                if (!isDesktop && isVideo) {
                    if (project.thumbnails && project.thumbnails[mediaItem]) {
                        // Lazy load thumbnail only when needed
                        loadedMedia.set(pathString, { element: null, type: 'video-thumbnail-lazy', videoSrc: pathString, thumbnailPath: project.thumbnails[mediaItem], loaded: false });
                    } else {
                        // No thumbnail available - use black placeholder
                        loadedMedia.set(pathString, { element: null, type: 'video-placeholder', videoSrc: pathString, loaded: true });
                    }
                    return;
                }

                // Desktop video loading
                if (isVideo) {
                    loadVideoElement(pathString);
                } else {
                    // Lazy load images as well
                    loadedMedia.set(pathString, { element: null, type: 'image-lazy', imagePath: pathString, loaded: false });
                }
            }

            // Track media for this project
            if (!loadedMediaForProject.has(project.slug)) {
                loadedMediaForProject.set(project.slug, new Set());
            }
            loadedMediaForProject.get(project.slug).add(pathString);
        });
    }

    function loadVideoElement(pathString) {
        // Only create video elements on desktop (not tablets or mobile)
        const isDesktop = isDesktopOnly();
        if (!isDesktop) {
            console.warn('Attempted to load video on mobile/tablet - this should not happen');
            return;
        }

        // Check if video is already loaded or being loaded
        if (loadedMedia.has(pathString) || mediaBeingLoaded.has(pathString)) {
            return;
        }

        // Mark as being loaded and set initial unloaded state
        mediaBeingLoaded.add(pathString);
        loadedMedia.set(pathString, { element: null, type: 'video', loaded: false });

        const video = p.createVideo(pathString, () => {
            // Only set loaded once when video is ready
            const currentData = loadedMedia.get(pathString);
            if (currentData && !currentData.loaded) {
                loadedMedia.set(pathString, { element: video, type: 'video', loaded: true });
                mediaBeingLoaded.delete(pathString);
            }
        });
        video.hide();
        video.volume(0);

        // Set attributes for iOS compatibility
        video.elt.setAttribute('playsinline', true);
        video.elt.setAttribute('muted', true);
        video.elt.setAttribute('preload', 'metadata');

        // Desktop: autoplay looping for moving preview
        video.loop();

        // Single consolidated event listener to avoid multiple updates
        video.elt.addEventListener('canplay', () => {
            const currentData = loadedMedia.get(pathString);
            if (currentData && !currentData.loaded) {
                loadedMedia.set(pathString, { element: video, type: 'video', loaded: true });
                mediaBeingLoaded.delete(pathString);
            }
        });

        // Fallback timeout in case events don't fire
        setTimeout(() => {
            const currentData = loadedMedia.get(pathString);
            if (currentData && !currentData.loaded) {
                loadedMedia.set(pathString, { element: video, type: 'video', loaded: true });
                mediaBeingLoaded.delete(pathString);
            }
        }, 3000);
    }

    function cleanupUnusedMedia(currentProject) {
        // Clean up media from other projects to free memory
        loadedMediaForProject.forEach((mediaSet, projectSlug) => {
            if (projectSlug !== currentProject.slug) {
                mediaSet.forEach(pathString => {
                    const mediaData = loadedMedia.get(pathString);
                    if (mediaData && mediaData.element) {
                        // Remove video elements from DOM
                        if (mediaData.type === 'video' && mediaData.element.elt) {
                            mediaData.element.remove();
                        }
                    }
                    loadedMedia.delete(pathString);
                });
                loadedMediaForProject.delete(projectSlug);
            }
        });
    }

    function lazyLoadMedia(pathString) {
        const mediaData = loadedMedia.get(pathString);
        if (!mediaData || mediaData.loaded || mediaBeingLoaded.has(pathString)) return;

        // Mark as being loaded to prevent duplicates
        mediaBeingLoaded.add(pathString);

        if (mediaData.type === 'video-thumbnail-lazy') {
            // Load thumbnail image
            p.loadImage(mediaData.thumbnailPath, (img) => {
                loadedMedia.set(pathString, {
                    element: img,
                    type: 'video-thumbnail',
                    videoSrc: pathString,
                    loaded: true
                });
                mediaBeingLoaded.delete(pathString);
            }, (err) => {
                console.error('Failed to load video thumbnail:', mediaData.thumbnailPath, err);
                loadedMedia.set(pathString, {
                    element: null,
                    type: 'video-placeholder',
                    videoSrc: pathString,
                    loaded: true
                });
                mediaBeingLoaded.delete(pathString);
            });
        } else if (mediaData.type === 'image-lazy') {
            // Load image
            p.loadImage(mediaData.imagePath, (img) => {
                loadedMedia.set(pathString, {
                    element: img,
                    type: 'image',
                    loaded: true
                });
                mediaBeingLoaded.delete(pathString);
            }, (err) => {
                console.error('Failed to load image:', mediaData.imagePath, err);
                mediaBeingLoaded.delete(pathString);
            });
        }
    }


    function renderGallery(images, x, y, width, height, isMobile) {
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
        const padding = isMobile ? 8 : 10; // Equal padding for all sides and between items
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

                // Lazy load media when it becomes visible
                if (mediaData && !mediaData.loaded) {
                    lazyLoadMedia(pathString);
                }

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
                            // Mobile: Show thumbnail image (no play icon to avoid blocking taps)
                            const img = mediaData.element;
                            const { sourceX, sourceY, sourceWidth, sourceHeight } = calculateCropDimensions(img.width, img.height, itemWidth, itemHeight);

                            p.image(img, itemX, startY, itemWidth, itemHeight, sourceX, sourceY, sourceWidth, sourceHeight);
                        } else if (mediaData.type === 'video') {
                            // Show first frame of video as preview (no play icon)
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
                        p.textSize(isMobile ? 6 : 12);
                        p.text(mediaData.type === 'video' ? 'Video Error' : 'Image Error', itemX + itemWidth / 2, startY + itemHeight / 2);
                    }

                    p.pop();
                } else if (mediaData) {
                    // Show appropriate placeholder based on type
                    if (mediaData.type === 'video-thumbnail-lazy' || mediaData.type === 'image-lazy') {
                        // Light placeholder for lazy loading items
                        p.fill(60, 60, 60, 120 * (infoCardAlpha / 255));
                        p.stroke(110, infoCardAlpha * 0.4);
                        p.strokeWeight(1);
                        p.rect(itemX, startY, itemWidth, itemHeight);

                        // Subtle loading indicator
                        p.fill(180, infoCardAlpha * 0.6);
                        p.noStroke();
                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(isMobile ? 6 : 12);
                        p.text('•••', itemX + itemWidth / 2, startY + itemHeight / 2);
                    } else {
                        // Standard loading placeholder
                        p.fill(50, 50, 50, 150 * (infoCardAlpha / 255));
                        p.stroke(100, infoCardAlpha * 0.5);
                        p.strokeWeight(1);
                        p.rect(itemX, startY, itemWidth, itemHeight);

                        // Loading text
                        p.fill(150, infoCardAlpha * 0.7);
                        p.noStroke();
                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(isMobile ? 8 : 14);
                        p.text('Loading...', itemX + itemWidth / 2, startY + itemHeight / 2);
                    }
                } else {
                    // No media data available
                    p.fill(40, 40, 40, 100 * (infoCardAlpha / 255));
                    p.stroke(80, infoCardAlpha * 0.3);
                    p.strokeWeight(1);
                    p.rect(itemX, startY, itemWidth, itemHeight);
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
        if (!nativeVideoElement || nativeVideoElement.src !== videoPath) {
            // Clean up existing video if it exists
            if (nativeVideoElement) {
                nativeVideoElement.remove();
            }

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

        // Close button (centered below the video, similar to arrow buttons)
        const closeSize = isMobile ? 50 : 40;
        const closePadding = isMobile ? 20 : 15;
        const closeY = videoY + videoHeight + closePadding;
        const closeX = (p.width - closeSize) / 2; // Center horizontally

        p.fill(0, 0, 0, 150 * (expandedMediaAlpha / 255));
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(2);
        p.rect(closeX, closeY, closeSize, closeSize);

        // X symbol
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(3);
        const padding = closeSize * 0.3; // Proportional padding
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

        // Close button (centered below the image, similar to arrow buttons)
        const closeSize = isMobile ? 50 : 40;
        const closePadding = isMobile ? 20 : 15;
        const closeY = mediaY + mediaHeight + closePadding;
        const closeX = (p.width - closeSize) / 2; // Center horizontally

        p.fill(0, 0, 0, 150 * (expandedMediaAlpha / 255));
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(2);
        p.rect(closeX, closeY, closeSize, closeSize);

        // X symbol
        p.stroke(255, expandedMediaAlpha);
        p.strokeWeight(3);
        const padding = closeSize * 0.3; // Proportional padding
        p.line(closeX + padding, closeY + padding,
            closeX + closeSize - padding, closeY + closeSize - padding);
        p.line(closeX + closeSize - padding, closeY + padding,
            closeX + padding, closeY + closeSize - padding);

        // No custom controls needed - native video handles everything

    };
}

export const installationsSketch = (node, options = {}) => {
    return new p5((p) => sketch(p, options), node);
};
