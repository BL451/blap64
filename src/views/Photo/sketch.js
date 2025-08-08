import { getViewportSize, smoothFollow, loadGoogleFontSet, widthCheck, updateCursor, daysSince } from "../../utils";
import { photoCollections, findCollectionBySlug, getCollectionIndexBySlug, getNextCollection, getPreviousCollection } from "./photo-collections";

export const sketch = function (p, options = {}) {
    let mode = 'collections'; // 'collections' or 'gallery'
    let currentCollection = null;
    let currentImageIndex = 0;
    let mobile = false;
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let layoutInitialized = false;
    let frameCount = 0;

    // Collection cards for landing page
    let collectionCards = [];

    // Loop optimization
    let needsRedraw = true;
    let animating = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // Lightbox state
    let lightboxOpen = false;
    let lightboxImageIndex = 0;
    let lightboxAlpha = 0;
    let targetLightboxAlpha = 0;
    let lightboxAnimating = false;
    let lightboxAnimationStart = 0;
    let lightboxImageLoadStart = 0;

    // Loaded media tracking
    let loadedImages = new Map();

    // Hash change handler
    let hashChangeHandler = null;

    // Gallery event handlers
    let touchStartHandler = null;
    let touchMoveHandler = null;
    let handleGalleryInteraction = null;

    // HUD data
    let sols = 0;

    function updateFadeAnimations() {
        const fadeDuration = 400; // milliseconds
        let hasActiveAnimation = false;

        // Update collection card hero fade animations
        if (mode === 'collections') {
            collectionCards.forEach(card => {
                if (card.heroFadeTarget > card.heroFadeAlpha) {
                    const elapsed = p.millis() - card.heroFadeStart;
                    const progress = p.constrain(elapsed / fadeDuration, 0, 1);
                    card.heroFadeAlpha = p.lerp(0, card.heroFadeTarget, progress);
                    hasActiveAnimation = true;
                    needsRedraw = true;
                }
            });
        }

        return hasActiveAnimation;
    }

    // Cleanup method
    p.cleanupSketch = function() {
        loadedImages.clear();

        if (hashChangeHandler) {
            window.removeEventListener('hashchange', hashChangeHandler);
            hashChangeHandler = null;
        }

        // Clean up gallery event listeners
        if (handleGalleryInteraction) {
            document.removeEventListener('click', handleGalleryInteraction);
            document.removeEventListener('touchend', handleGalleryInteraction);
            document.removeEventListener('touchstart', touchStartHandler);
            document.removeEventListener('touchmove', touchMoveHandler);
        }

        // Clean up global reference
        if (window.photoSketchInstance === p) {
            window.photoSketchInstance = null;
        }
    };

    function initializeLayout() {
        const s = getViewportSize();
        short = p.min(s.width, s.height);
        mobile = widthCheck(s.width);

        if (mode === 'collections') {
            setupCollectionCards();
        }

        layoutInitialized = true;
        needsRedraw = true;
    }

    p.setup = async function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = getViewportSize();
        p.createCanvas(s.width, s.height);

        // Initialize fonts
        await loadGoogleFontSet('../../assets/fonts/BPdotsSquareVF.ttf');
        await loadGoogleFontSet('../../assets/fonts/ZxGamut.ttf');
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });

        // Remove p5 loading div
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();


        // Determine mode based on options
        if (options && options.collection) {
            mode = 'gallery';
            currentCollection = findCollectionBySlug(options.collection);
            if (!currentCollection) {
                mode = 'collections';
            }
        } else {
            mode = 'collections';
        }

        initializeLayout();
        sols = daysSince('2011-07-22');

        // Set up global reference for HTML gallery integration
        window.photoSketchInstance = p;

        // Add methods for HTML gallery integration
        p.openLightbox = openLightbox;

        // Track touch movement to distinguish taps from scrolls
        let touchStartY = null;
        let touchStartTime = null;
        let wasTouchMoved = false;

        touchStartHandler = (event) => {
            if (event.target.classList.contains('photo-gallery-image')) {
                touchStartY = event.touches[0].clientY;
                touchStartTime = Date.now();
                wasTouchMoved = false;
            }
        };

        touchMoveHandler = (event) => {
            if (event.target.classList.contains('photo-gallery-image') && touchStartY !== null) {
                const currentY = event.touches[0].clientY;
                const deltaY = Math.abs(currentY - touchStartY);
                
                // If touch moved more than 10px, consider it a scroll
                if (deltaY > 10) {
                    wasTouchMoved = true;
                }
            }
        };

        document.addEventListener('touchstart', touchStartHandler);
        document.addEventListener('touchmove', touchMoveHandler);

        // Add event delegation for gallery image clicks and touches
        handleGalleryInteraction = (event) => {
            if (event.target.classList.contains('photo-gallery-image')) {
                // Prevent gallery interactions when lightbox is open
                if (lightboxOpen) {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    return;
                }

                // For touch events, ignore if it was a scroll gesture
                if (event.type === 'touchend') {
                    const touchDuration = Date.now() - touchStartTime;
                    
                    // Ignore if touch moved too much (scroll) or took too long
                    if (wasTouchMoved || touchDuration > 500) {
                        touchStartY = null;
                        touchStartTime = null;
                        wasTouchMoved = false;
                        return;
                    }
                }
                
                const index = parseInt(event.target.getAttribute('data-lightbox-index'));
                if (!isNaN(index) && mode === 'gallery') {
                    console.log('Opening lightbox for image', index);
                    openLightbox(index);
                }

                // Reset touch tracking
                touchStartY = null;
                touchStartTime = null;
                wasTouchMoved = false;
            }
        };

        document.addEventListener('click', handleGalleryInteraction);
        document.addEventListener('touchend', handleGalleryInteraction);

        // Add hash change listener
        hashChangeHandler = function(event) {
            const newHash = window.location.hash.substr(1);
            const cleanPath = newHash && newHash !== '' ?
                (newHash.startsWith('/') ? newHash : '/' + newHash) : '/';

            // Handle navigation back to collections from gallery
            if (cleanPath === '/photo' && mode === 'gallery') {
                mode = 'collections';
                currentCollection = null;
                initializeLayout();
            }
            // Handle navigation to a specific collection
            else if (cleanPath.startsWith('/photo/') && mode === 'collections') {
                const collectionSlug = cleanPath.replace('/photo/', '');
                const collection = photoCollections.find(c => c.slug === collectionSlug);
                if (collection) {
                    mode = 'gallery';
                    currentCollection = collection;
                    initializeLayout();
                }
            }
        };
        window.addEventListener('hashchange', hashChangeHandler);

        // Force initial draw
        needsRedraw = true;
        p.loop();
    };

    p.draw = function draw() {
        // Always draw background and decorations - we need to see them!
        p.background(23);
        frameCount++;

        // Update smooth cursor
        smoothX = smoothFollow(p.mouseX, smoothX, 0.003 * p.deltaTime);
        smoothY = smoothFollow(p.mouseY, smoothY, 0.003 * p.deltaTime);

        // Render based on current mode
        if (mode === 'collections') {
            renderCollectionsPage();
        }

        // Always render HUD decorations
        renderHUDDecorations();

        // Update lightbox animation
        if (lightboxAnimating) {
            const elapsed = p.millis() - lightboxAnimationStart;
            const progress = p.constrain(elapsed / 300, 0, 1);
            lightboxAlpha = p.lerp(lightboxAlpha, targetLightboxAlpha, progress);

            if (progress >= 1) {
                lightboxAnimating = false;
                lightboxAlpha = targetLightboxAlpha;
                if (targetLightboxAlpha === 0) {
                    lightboxOpen = false;
                }
            }
        }

        // Always render title
        const titleText = mode === 'collections' ? 'PHOTO' : (currentCollection ? currentCollection.name : 'GALLERY');
        renderTitle(titleText);

        // Render lightbox if open (on top of everything including title)
        if (lightboxOpen || lightboxAlpha > 0) {
            renderLightbox();
        }

        // Update cursor
        updateCursor(p, p.mouseX, p.mouseY, ...getHoverTargets());

        // Check if we need to keep looping
        const mouseMoving = p.mouseX !== lastMouseX || p.mouseY !== lastMouseY;
        const hasActiveAnimations = updateFadeAnimations();

        // Check if we're waiting for a lightbox image to load
        const waitingForLightboxImage = lightboxOpen && currentCollection &&
            lightboxImageIndex < currentCollection.images.length &&
            (!loadedImages.get(currentCollection.images[lightboxImageIndex]) ||
             !loadedImages.get(currentCollection.images[lightboxImageIndex]).loaded);

        animating = lightboxAnimating || hasActiveAnimations || waitingForLightboxImage;

        // Update tracking variables
        lastMouseX = p.mouseX;
        lastMouseY = p.mouseY;
        needsRedraw = false;

        // Only pause loop after a few frames and if nothing is happening
        // Don't pause on mobile if we're in collections mode (for background images)
        // Don't pause if we're waiting for a lightbox image to load
        if (!animating && !mouseMoving && frameCount > 10 && !(mobile && mode === 'collections')) {
            p.noLoop();
        }
    };

    p.windowResized = function windowResized() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        initializeLayout();
        p.loop(); // Ensure we redraw after resize
    };

    p.mousePressed = function mousePressed(event) {
        if (event && event.button !== 0) return;
        
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) {
            return;
        }
        
        needsRedraw = true;
        p.loop();
    };

    p.mouseDragged = function mouseDragged(event) {
        needsRedraw = true;
        p.loop();
    };

    p.mouseReleased = function mouseReleased(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) {
            return;
        }

        // Handle lightbox clicks
        if (lightboxOpen) {
            handleLightboxClick();
            return;
        }

        if (mode === 'collections') {
            handleCollectionsClick();
        }

        needsRedraw = true;
        p.loop();
    };

    p.mouseMoved = function mouseMoved(event) {
        if (p._loop === false) p.loop();
    };

    p.touchStarted = function touchStarted(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) {
            return false;
        }
        
        needsRedraw = true;
        p.loop();
        return false;
    };

    p.touchEnded = function touchEnded(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) {
            return false;
        }

        // Handle lightbox clicks
        if (lightboxOpen) {
            handleLightboxClick();
            return false;
        }

        if (mode === 'collections') {
            handleCollectionsClick();
        }

        needsRedraw = true;
        p.loop();
        return false;
    };

    function setupCollectionCards() {
        collectionCards = [];
        const cardSize = mobile ? p.min(p.width * 0.45, p.height * 0.35) : p.min(p.width * 0.4, p.height * 0.35);
        const spacing = mobile ? 15 : 40;
        const totalWidth = cardSize * 2 + spacing;
        const totalHeight = cardSize * 2 + spacing;
        const startX = (p.width - totalWidth) / 2;
        const startY = (p.height - totalHeight) / 2;

        photoCollections.forEach((collection, index) => {
            const row = Math.floor(index / 2);
            const col = index % 2;

            const x = startX + col * (cardSize + spacing);
            const y = startY + row * (cardSize + spacing);

            // Check if hero image is already loaded (use optimized thumbnail for cards)
            const heroImageSrc = collection.heroImageThumb || collection.heroImage;
            const heroLoaded = loadedImages.has(heroImageSrc) && loadedImages.get(heroImageSrc).loaded;

            collectionCards.push({
                collection,
                x, y,
                width: cardSize,
                height: cardSize,
                hoverAlpha: mobile ? 1 : 0,
                targetHoverAlpha: mobile ? 1 : 0,
                heroFadeAlpha: heroLoaded ? 255 : 0,
                heroFadeTarget: heroLoaded ? 255 : 0,
                heroFadeStart: heroLoaded ? 0 : p.millis(),
                heroImageSrc: heroImageSrc
            });

            // Load optimized hero thumbnail for this collection
            loadImage(heroImageSrc);
        });
    }



    function renderCollectionsPage() {
        // Collection cards
        collectionCards.forEach(card => {
            // Only update hover state on desktop (not mobile)
            if (!mobile) {
                const isHovered = isPointInRect(p.mouseX, p.mouseY, card.x, card.y, card.width, card.height);
                card.targetHoverAlpha = isHovered ? 1 : 0;
                // Smoother fade animation - faster fade in, slower fade out
                card.hoverAlpha = p.lerp(card.hoverAlpha, card.targetHoverAlpha, isHovered ? 0.15 : 0.08);
            } else {
                // On mobile, keep hover state at 1 for better text readability
                card.targetHoverAlpha = 1;
                card.hoverAlpha = 1;
            }

            // Hero image background (use optimized thumbnail for cards)
            const loadedHeroImg = loadedImages.get(card.heroImageSrc);
            if (loadedHeroImg && loadedHeroImg.loaded) {
                p.push();
                p.tint(255, (180 + card.hoverAlpha * 75) * (card.heroFadeAlpha / 255)); // Fade + transparency

                // Crop to square and fit card
                const imgSize = Math.min(loadedHeroImg.element.width, loadedHeroImg.element.height);
                const cropX = (loadedHeroImg.element.width - imgSize) / 2;
                const cropY = (loadedHeroImg.element.height - imgSize) / 2;

                p.image(loadedHeroImg.element, card.x, card.y, card.width, card.height, cropX, cropY, imgSize, imgSize);
                p.pop();
            }

            // Card overlay
            p.fill(30, 30, 35, (150 + card.hoverAlpha * 55));

            // Use lower stroke opacity on mobile, normal hover behavior on desktop
            const strokeAlpha = mobile ? 100 : (100 + card.hoverAlpha * 155);
            p.stroke(230, strokeAlpha);
            p.strokeWeight(2);
            p.rect(card.x, card.y, card.width, card.height);

            // HUD-style corner brackets
            const cornerSize = 20;
            const alpha = strokeAlpha; // Use same stroke alpha for consistency
            renderCornerBrackets(card.x, card.y, card.width, card.height, cornerSize, alpha);

            // Collection title
            p.fill(230, 200 + card.hoverAlpha * 55);
            p.noStroke();
            p.textAlign(p.CENTER, p.CENTER);
            p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 900` });
            p.textSize(mobile ? 16 : 24);
            p.text(card.collection.name, card.x + card.width/2, card.y + card.height/2 - 15);

            // Description
            p.textFont('ZxGamut', { fontVariationSettings: `wght 400` });
            p.textSize(mobile ? 11 : 14);
            p.fill(180, 120 + card.hoverAlpha * 135);

            // Split description into lines and center each line manually
            const descWords = card.collection.description.split(' ');
            const maxCharsPerLine = mobile ? 25 : 35;
            let lines = [];
            let currentLine = '';

            for (const word of descWords) {
                if ((currentLine + word).length > maxCharsPerLine && currentLine.length > 0) {
                    lines.push(currentLine.trim());
                    currentLine = word + ' ';
                } else {
                    currentLine += word + ' ';
                }
            }
            if (currentLine.length > 0) {
                lines.push(currentLine.trim());
            }

            // Render each line centered
            p.textAlign(p.CENTER, p.CENTER);
            const lineHeight = mobile ? 12 : 18;
            const startY = card.y + card.height/2 + 20 - (lines.length - 1) * lineHeight / 2;

            lines.forEach((line, index) => {
                p.text(line, card.x + card.width/2, startY + index * lineHeight);
            });
        });
    }





    function renderLightbox() {
        if (!currentCollection || lightboxImageIndex >= currentCollection.images.length) return;

        // Dark overlay
        p.fill(0, 0, 0, 200 * (lightboxAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        const imagePath = currentCollection.images[lightboxImageIndex];
        const loadedImg = loadedImages.get(imagePath);

        // Render image if loaded
        if (loadedImg && loadedImg.loaded) {
            // Calculate image size to fit screen
            const maxWidth = p.width * 0.9;
            const maxHeight = p.height * 0.8;
            const aspectRatio = loadedImg.element.width / loadedImg.element.height;

            let imgWidth, imgHeight;
            if (aspectRatio > maxWidth / maxHeight) {
                imgWidth = maxWidth;
                imgHeight = maxWidth / aspectRatio;
            } else {
                imgHeight = maxHeight;
                imgWidth = maxHeight * aspectRatio;
            }

            const imgX = (p.width - imgWidth) / 2;
            const imgY = (p.height - imgHeight) / 2;

            // Render image
            p.push();
            p.tint(255, lightboxAlpha);
            p.image(loadedImg.element, imgX, imgY, imgWidth, imgHeight);
            p.pop();
        } else {
            // Load image if not already loaded
            loadImage(imagePath);

            // Start timing if not already started for this image
            if (lightboxImageLoadStart === 0) {
                lightboxImageLoadStart = p.millis();
            }

            // Only show loading indicator after 1 second
            const loadingTime = p.millis() - lightboxImageLoadStart;
            if (loadingTime > 1000) {
                // Show elegant loading indicator
                const centerX = p.width / 2;
                const centerY = p.height / 2;

                // Animated loading dots
                const dotCount = 3;
                const dotSpacing = 20;
                const dotRadius = 4;
                const animSpeed = 0.003;
                const totalWidth = (dotCount - 1) * dotSpacing;
                const startX = centerX - totalWidth / 2;

                p.noStroke();
                for (let i = 0; i < dotCount; i++) {
                    const phase = (p.millis() * animSpeed + i * 0.5) % (Math.PI * 2);
                    const alpha = (Math.sin(phase) + 1) * 0.5; // Oscillate between 0 and 1
                    const dotAlpha = (100 + alpha * 155) * (lightboxAlpha / 255);

                    p.fill(230, dotAlpha);
                    p.circle(startX + i * dotSpacing, centerY, dotRadius * 2);
                }

                // Loading text
                p.fill(230, 120 * (lightboxAlpha / 255));
                p.textAlign(p.CENTER, p.CENTER);
                p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 600` });
                p.textSize(14);
                p.text('LOADING', centerX, centerY + 30);
            }
        }

        // Always render UI elements (counter and arrows) - this prevents flickering
        const staticY = p.height - 70;

        // Image counter (centered)
        p.fill(230, lightboxAlpha);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 600` });
        p.textSize(16);
        p.text(`${lightboxImageIndex + 1} / ${currentCollection.images.length}`, p.width/2, staticY);

        // Navigation arrows with static position and wrapping
        if (currentCollection.images.length > 1) {
            const arrowSize = 35;
            const arrowSpacing = 80;

            // Left arrow
            const leftX = p.width/2 - arrowSpacing - arrowSize/2;
            p.fill(23, 23, 23, 200 * (lightboxAlpha / 255));
            p.stroke(230, lightboxAlpha);
            p.strokeWeight(2);
            p.rect(leftX, staticY - arrowSize/2, arrowSize, arrowSize);

            p.fill(230, lightboxAlpha);
            p.noStroke();
            p.triangle(
                leftX + arrowSize * 0.3, staticY,
                leftX + arrowSize * 0.7, staticY - arrowSize * 0.2,
                leftX + arrowSize * 0.7, staticY + arrowSize * 0.2
            );

            // Right arrow
            const rightX = p.width/2 + arrowSpacing - arrowSize/2;
            p.fill(23, 23, 23, 200 * (lightboxAlpha / 255));
            p.stroke(230, lightboxAlpha);
            p.strokeWeight(2);
            p.rect(rightX, staticY - arrowSize/2, arrowSize, arrowSize);

            p.fill(230, lightboxAlpha);
            p.noStroke();
            p.triangle(
                rightX + arrowSize * 0.7, staticY,
                rightX + arrowSize * 0.3, staticY - arrowSize * 0.2,
                rightX + arrowSize * 0.3, staticY + arrowSize * 0.2
            );
        }
    }

    function renderTitle(title) {
        const titleY = mobile ? 20 : 30;
        const titleSize = mobile ? 20 : 32;

        p.fill(255, 200);
        p.noStroke();
        p.textAlign(p.CENTER, p.TOP);
        p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 900` });
        p.textSize(titleSize);
        p.text(title, p.width / 2, titleY);

        // Underline decoration
        const textWidth = p.textWidth(title);
        p.stroke(255, 120);
        p.strokeWeight(1);
        p.line(p.width/2 - textWidth/2 - 8, titleY + titleSize + 8,
               p.width/2 + textWidth/2 + 8, titleY + titleSize + 8);
    }

    function renderCornerBrackets(x, y, w, h, cornerSize, alpha) {
        p.stroke(255, alpha);
        p.strokeWeight(2);
        p.noFill();

        const corners = [
            [x, y], // top-left
            [x + w, y], // top-right
            [x + w, y + h], // bottom-right
            [x, y + h] // bottom-left
        ];

        corners.forEach(([cx, cy], index) => {
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;

            // Horizontal line
            p.line(cx, cy, cx + xDir * cornerSize, cy);
            // Vertical line
            p.line(cx, cy, cx, cy + yDir * cornerSize);
        });
    }

    function renderHUDDecorations() {
        const margin = mobile ? 10 : 40;
        const cornerSize = mobile ? 20 : 30;
        const alpha = 100;

        p.stroke(255, alpha);
        p.strokeWeight(1);
        p.strokeCap(p.SQUARE);
        p.noFill();

        // Screen corners
        const corners = [
            [margin, margin], // top-left
            [p.width - margin, margin], // top-right
            [p.width - margin, p.height - margin], // bottom-right
            [margin, p.height - margin] // bottom-left
        ];

        corners.forEach(([x, y], index) => {
            const xDir = index === 0 || index === 3 ? 1 : -1;
            const yDir = index === 0 || index === 1 ? 1 : -1;

            p.line(x, y, x + xDir * cornerSize, y);
            p.line(x, y, x, y + yDir * cornerSize);
        });

        // Status text
        p.fill(255, alpha * 0.6);
        p.noStroke();
        p.textAlign(p.LEFT, p.TOP);
        p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 900` });
        p.textSize(mobile ? 8 : 11);
        const step = mobile ? 10 : 13;
        p.text("SYS: ACTIVE", margin + 0.5*cornerSize, margin + 1*step);
        p.text("SOL: " + sols.toString(), margin + 0.5*cornerSize, margin + 2*step);
        p.text("MODE: PHOTO", margin + 0.5*cornerSize, margin + 3*step);
    }

    function handleCollectionsClick() {
        collectionCards.forEach(card => {
            if (isPointInRect(p.mouseX, p.mouseY, card.x, card.y, card.width, card.height)) {
                // Navigate to collection gallery
                const newPath = `/photo/${card.collection.slug}`;
                if (window.appRouter) {
                    window.appRouter.navigate(newPath);
                } else {
                    window.history.pushState(null, '', `#${newPath}`);
                    mode = 'gallery';
                    currentCollection = card.collection;
                    initializeLayout();

                    // Update breadcrumb
                    import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
                        updateBreadcrumb(newPath);
                    });
                }
            }
        });
    }


    function handleLightboxClick() {
        if (!currentCollection) return;

        const imagePath = currentCollection.images[lightboxImageIndex];
        const loadedImg = loadedImages.get(imagePath);

        if (loadedImg && loadedImg.loaded) {
            const maxWidth = p.width * 0.9;
            const maxHeight = p.height * 0.8;
            const aspectRatio = loadedImg.element.width / loadedImg.element.height;

            let imgWidth, imgHeight;
            if (aspectRatio > maxWidth / maxHeight) {
                imgWidth = maxWidth;
                imgHeight = maxWidth / aspectRatio;
            } else {
                imgHeight = maxHeight;
                imgWidth = maxHeight * aspectRatio;
            }

            const imgX = (p.width - imgWidth) / 2;
            const imgY = (p.height - imgHeight) / 2;

            // Navigation arrows with static position and wrapping
            if (currentCollection.images.length > 1) {
                const arrowSize = 35;
                const staticY = p.height - 70;
                const arrowSpacing = 80;

                // Left arrow
                const leftX = p.width/2 - arrowSpacing - arrowSize/2;
                if (isPointInRect(p.mouseX, p.mouseY, leftX, staticY - arrowSize/2, arrowSize, arrowSize)) {
                    lightboxImageIndex = lightboxImageIndex === 0 ? currentCollection.images.length - 1 : lightboxImageIndex - 1;
                    lightboxImageLoadStart = 0; // Reset loading timer for new image
                    needsRedraw = true;
                    lightboxAnimating = true; // Force animation state
                    lightboxAnimationStart = p.millis(); // Reset animation timer
                    p.loop(); // Force redraw immediately
                    return;
                }

                // Right arrow
                const rightX = p.width/2 + arrowSpacing - arrowSize/2;
                if (isPointInRect(p.mouseX, p.mouseY, rightX, staticY - arrowSize/2, arrowSize, arrowSize)) {
                    lightboxImageIndex = lightboxImageIndex === currentCollection.images.length - 1 ? 0 : lightboxImageIndex + 1;
                    lightboxImageLoadStart = 0; // Reset loading timer for new image
                    needsRedraw = true;
                    lightboxAnimating = true; // Force animation state
                    lightboxAnimationStart = p.millis(); // Reset animation timer
                    p.loop(); // Force redraw immediately
                    return;
                }
            }

            // Click outside image closes lightbox
            if (!isPointInRect(p.mouseX, p.mouseY, imgX, imgY, imgWidth, imgHeight)) {
                closeLightbox();
            }
        }
    }

    function openLightbox(imageIndex) {
        lightboxOpen = true;
        lightboxImageIndex = imageIndex;
        lightboxImageLoadStart = 0; // Reset loading timer for initial image
        targetLightboxAlpha = 255;
        lightboxAnimationStart = p.millis();
        lightboxAnimating = true;
        needsRedraw = true;
        p.loop();

        // Hide HTML gallery when lightbox opens
        const galleryContainer = document.querySelector('.photo-gallery-container');
        if (galleryContainer) {
            galleryContainer.classList.add('lightbox-hidden');
        }

        // Add class to body for CSS targeting
        document.body.classList.add('lightbox-active');

        // Hide help button when lightbox opens
        const helpContainer = document.getElementById("help-container");
        if (helpContainer) {
            helpContainer.style.display = 'none';
        }

        // Update theme color for iOS status bar to match dimmed overlay
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#000000'; // Dark color to match overlay
        }
    }

    function closeLightbox() {
        targetLightboxAlpha = 0;
        lightboxAnimationStart = p.millis();
        lightboxAnimating = true;
        needsRedraw = true;
        p.loop();

        // Show HTML gallery with smooth transition (no delay needed with opacity)
        const galleryContainer = document.querySelector('.photo-gallery-container');
        if (galleryContainer) {
            galleryContainer.classList.remove('lightbox-hidden');
        }

        // Remove class from body
        document.body.classList.remove('lightbox-active');

        // Show help button when lightbox closes
        const helpContainer = document.getElementById("help-container");
        if (helpContainer) {
            helpContainer.style.display = 'block';
        }

        // Restore original theme color for iOS status bar
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = '#171717'; // Back to original dark theme
        }
    }

    function loadImage(imagePath) {
        if (loadedImages.has(imagePath)) return;

        loadedImages.set(imagePath, { element: null, loaded: false });

        p.loadImage(imagePath, (img) => {
            loadedImages.set(imagePath, { element: img, loaded: true });

            // Trigger hero fade animation for collection cards
            if (mode === 'collections') {
                collectionCards.forEach(card => {
                    if (card.heroImageSrc === imagePath) {
                        card.heroFadeTarget = 255;
                        card.heroFadeStart = p.millis();
                    }
                });
            }

            // Force redraw when image loads (important for lightbox images)
            needsRedraw = true;
            if (p._loop === false) {
                p.loop();
            }
        }, (err) => {
            console.warn('Failed to load image:', imagePath, err);

            // Even on error, force a redraw to update the loading state
            needsRedraw = true;
            if (p._loop === false) {
                p.loop();
            }
        });
    }



    function getHoverTargets() {
        // Return hover check functions for cursor management
        const targets = [];

        if (mode === 'collections') {
            // Add collection card hover checks
            collectionCards.forEach(card => {
                targets.push(() => isPointInRect(p.mouseX, p.mouseY, card.x, card.y, card.width, card.height));
            });
        } else if (lightboxOpen && currentCollection && currentCollection.images.length > 1) {
            // Add lightbox navigation arrow hover checks
            const arrowSize = 35;
            const staticY = p.height - 70;
            const arrowSpacing = 80;

            // Left arrow
            const leftX = p.width/2 - arrowSpacing - arrowSize/2;
            targets.push(() => isPointInRect(p.mouseX, p.mouseY, leftX, staticY - arrowSize/2, arrowSize, arrowSize));

            // Right arrow
            const rightX = p.width/2 + arrowSpacing - arrowSize/2;
            targets.push(() => isPointInRect(p.mouseX, p.mouseY, rightX, staticY - arrowSize/2, arrowSize, arrowSize));
        }

        return targets;
    }

    function isPointInRect(px, py, x, y, w, h) {
        return px >= x && px <= x + w && py >= y && py <= y + h;
    }
};

export const photoSketch = (node, options = {}) => {
    return new p5((p) => sketch(p, options), node);
};
