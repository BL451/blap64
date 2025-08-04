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

    // Gallery state
    let galleryImages = [];
    let galleryGrid = [];
    let scrollY = 0;
    let targetScrollY = 0;
    let scrolling = false;

    // Gallery graphics caching
    let galleryGraphics = null;
    let galleryGraphicsReady = false;
    let galleryLoadingProgress = 0;
    let galleryNeedsRedraw = false;

    // Fade-in animations
    let galleryFadeAlpha = 0;
    let galleryFadeTarget = 0;
    let galleryFadeStart = 0;

    // Lightbox state
    let lightboxOpen = false;
    let lightboxImageIndex = 0;
    let lightboxAlpha = 0;
    let targetLightboxAlpha = 0;
    let lightboxAnimating = false;
    let lightboxAnimationStart = 0;

    // Loaded media tracking
    let loadedImages = new Map();
    let imageLoadQueue = [];

    // Touch/drag tracking for mobile
    let touchStartY = 0;
    let touchStartTime = 0;
    let isDragging = false;
    let dragThreshold = 10; // pixels
    let touchTimeThreshold = 200; // milliseconds

    // Hash change handler
    let hashChangeHandler = null;

    // Touch event prevention handlers
    let preventDefaultTouch = null;

    // HUD data
    let sols = 0;

    function updateFadeAnimations() {
        const fadeSpeed = 0.05;
        const fadeDuration = 400; // milliseconds

        // Update collection card hero fade animations
        if (mode === 'collections') {
            collectionCards.forEach(card => {
                if (card.heroFadeTarget > card.heroFadeAlpha) {
                    const elapsed = p.millis() - card.heroFadeStart;
                    const progress = p.constrain(elapsed / fadeDuration, 0, 1);
                    card.heroFadeAlpha = p.lerp(0, card.heroFadeTarget, progress);
                }
            });
        }

        // Update gallery fade animation
        if (mode === 'gallery' && galleryFadeTarget > galleryFadeAlpha) {
            const elapsed = p.millis() - galleryFadeStart;
            const progress = p.constrain(elapsed / fadeDuration, 0, 1);
            galleryFadeAlpha = p.lerp(0, galleryFadeTarget, progress);
        }
    }

    // Cleanup method
    p.cleanupSketch = function() {
        loadedImages.clear();
        imageLoadQueue = [];

        if (hashChangeHandler) {
            window.removeEventListener('hashchange', hashChangeHandler);
            hashChangeHandler = null;
        }

        // Clean up touch event listeners
        if (preventDefaultTouch) {
            document.removeEventListener('touchstart', preventDefaultTouch);
            document.removeEventListener('touchmove', preventDefaultTouch);
            document.removeEventListener('touchend', preventDefaultTouch);
            preventDefaultTouch = null;
        }

        // Clean up gallery graphics
        if (galleryGraphics) {
            galleryGraphics.remove();
            galleryGraphics = null;
        }
        galleryGraphicsReady = false;
    };

    function initializeLayout() {
        const s = getViewportSize();
        short = p.min(s.width, s.height);
        mobile = widthCheck(s.width);

        if (mode === 'collections') {
            setupCollectionCards();
        } else if (mode === 'gallery') {
            // Mark gallery for redraw since layout changed
            galleryNeedsRedraw = true;
            galleryGraphicsReady = false;
            setupGalleryGrid();
        }

        layoutInitialized = true;
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

        // Add CSS to prevent default touch behaviors on mobile
        const canvas = bg.shadowRoot.querySelector('canvas');
        if (canvas) {
            canvas.style.touchAction = 'none';
            canvas.style.userSelect = 'none';
            canvas.style.webkitUserSelect = 'none';
            canvas.style.webkitTouchCallout = 'none';
        }

        // Also apply to the container
        if (bg) {
            bg.style.touchAction = 'none';
            bg.style.overscrollBehavior = 'none';
        }

        // Add global touch event prevention for the canvas area
        preventDefaultTouch = (e) => {
            if (canvas && canvas.contains(e.target)) {
                e.preventDefault();
            }
        };

        document.addEventListener('touchstart', preventDefaultTouch, { passive: false });
        document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
        document.addEventListener('touchend', preventDefaultTouch, { passive: false });

        // Determine mode based on options
        if (options && options.collection) {
            mode = 'gallery';
            currentCollection = findCollectionBySlug(options.collection);
            if (!currentCollection) {
                mode = 'collections'; // Fallback if collection not found
            }
        } else {
            mode = 'collections';
        }

        initializeLayout();
        sols = daysSince('2011-07-22');

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
    };

    p.draw = function draw() {
        p.background(23);
        frameCount++;

        // Update smooth cursor
        smoothX = smoothFollow(p.mouseX, smoothX, 0.003 * p.deltaTime);
        smoothY = smoothFollow(p.mouseY, smoothY, 0.003 * p.deltaTime);

        // Render based on current mode
        if (mode === 'collections') {
            renderCollectionsPage();
        } else if (mode === 'gallery') {
            renderGalleryPage();
        }

        // Render HUD decorations
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

        // Render title
        const titleText = mode === 'collections' ? 'PHOTO' : (currentCollection ? currentCollection.name : 'GALLERY');
        renderTitle(titleText);

        // Update fade animations
        updateFadeAnimations();

        // Render lightbox if open (on top of everything including title)
        if (lightboxOpen || lightboxAlpha > 0) {
            renderLightbox();
        }

        // Update cursor
        updateCursor(p, p.mouseX, p.mouseY, ...getHoverTargets());
    };

    p.windowResized = function windowResized() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        initializeLayout();
    };

    p.mousePressed = function mousePressed(event) {
        if (event && event.button !== 0) return;

        // Track touch start for mobile drag detection
        touchStartY = p.mouseY;
        touchStartTime = p.millis();
        isDragging = false;
    };

    p.mouseDragged = function mouseDragged(event) {
        // Check if this is a drag gesture (mobile scroll)
        const dragDistance = Math.abs(p.mouseY - touchStartY);

        if (dragDistance > dragThreshold) {
            isDragging = true;

            // Handle scrolling in gallery mode
            if (mode === 'gallery' && !lightboxOpen) {
                const dragDelta = p.mouseY - p.pmouseY;
                targetScrollY += dragDelta * 2; // Amplify drag for smoother scrolling
                const maxScroll = getMaxScrollDistance();
                targetScrollY = p.constrain(targetScrollY, -maxScroll, 0);
            }
        }
    };

    p.mouseReleased = function mouseReleased(event) {
        const touchDuration = p.millis() - touchStartTime;
        const dragDistance = Math.abs(p.mouseY - touchStartY);

        // Only handle clicks if it was a quick tap without significant drag
        if (!isDragging && dragDistance < dragThreshold && touchDuration < touchTimeThreshold) {
            // Handle lightbox clicks
            if (lightboxOpen) {
                handleLightboxClick();
                return;
            }

            if (mode === 'collections') {
                handleCollectionsClick();
            } else if (mode === 'gallery') {
                handleGalleryClick();
            }
        }

        // Reset drag tracking
        isDragging = false;
    };

    p.mouseWheel = function mouseWheel(event) {
        if (mode === 'gallery' && !lightboxOpen) {
            targetScrollY -= event.delta * 2;
            const maxScroll = getMaxScrollDistance();
            targetScrollY = p.constrain(targetScrollY, -maxScroll, 0);
            return false;
        }
    };

    // Touch event handlers for better mobile support
    p.touchStarted = function touchStarted(event) {
        // Use the same logic as mousePressed
        touchStartY = p.mouseY;
        touchStartTime = p.millis();
        isDragging = false;

        // Prevent default touch behavior to avoid conflicts
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        return false;
    };

    p.touchMoved = function touchMoved(event) {
        // Use the same logic as mouseDragged
        const dragDistance = Math.abs(p.mouseY - touchStartY);

        if (dragDistance > dragThreshold) {
            isDragging = true;

            // Handle scrolling in gallery mode
            if (mode === 'gallery' && !lightboxOpen) {
                const dragDelta = p.mouseY - p.pmouseY;
                targetScrollY += dragDelta * 2;
                const maxScroll = getMaxScrollDistance();
                targetScrollY = p.constrain(targetScrollY, -maxScroll, 0);
            }
        }

        // Prevent default touch scrolling behavior
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        return false;
    };

    p.touchEnded = function touchEnded(event) {
        // Use the same logic as mouseReleased
        const touchDuration = p.millis() - touchStartTime;
        const dragDistance = Math.abs(p.mouseY - touchStartY);

        // Only handle clicks if it was a quick tap without significant drag
        if (!isDragging && dragDistance < dragThreshold && touchDuration < touchTimeThreshold) {
            // Handle lightbox clicks
            if (lightboxOpen) {
                handleLightboxClick();
                return false;
            }

            if (mode === 'collections') {
                handleCollectionsClick();
            } else if (mode === 'gallery') {
                handleGalleryClick();
            }
        }

        // Reset drag tracking
        isDragging = false;

        // Prevent default touch behavior
        if (event && event.preventDefault) {
            event.preventDefault();
        }
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

            // Check if hero image is already loaded
            const heroLoaded = loadedImages.has(collection.heroImage) && loadedImages.get(collection.heroImage).loaded;

            collectionCards.push({
                collection,
                x, y,
                width: cardSize,
                height: cardSize,
                hoverAlpha: mobile ? 1 : 0,
                targetHoverAlpha: mobile ? 1 : 0,
                heroFadeAlpha: heroLoaded ? 255 : 0,
                heroFadeTarget: heroLoaded ? 255 : 0,
                heroFadeStart: heroLoaded ? 0 : p.millis()
            });

            // Load hero image for this collection
            loadImage(collection.heroImage);
        });
    }

    function setupGalleryGrid() {
        if (!currentCollection) return;

        galleryImages = currentCollection.images.map((imagePath, index) => ({
            path: imagePath,
            index,
            loaded: false,
            hoverAlpha: 0,
            targetHoverAlpha: 0
        }));

        // Reset loading state
        galleryLoadingProgress = 0;
        galleryGraphicsReady = false;

        // Reset fade state
        galleryFadeAlpha = 0;
        galleryFadeTarget = 0;
        galleryFadeStart = 0;

        // Clean up previous graphics if exists
        if (galleryGraphics) {
            galleryGraphics.remove();
            galleryGraphics = null;
        }

        // Start loading images
        galleryImages.forEach(img => loadImage(img.path, true)); // Pass gallery flag

        // If images are already loaded, update progress immediately
        updateGalleryLoadingProgress();
    }

    function getGridColumns() {
        return mobile ? 2 : 4;
    }

    function getGridItemSize() {
        const cols = getGridColumns();
        const spacing = mobile ? 12 : 20; // Reduced spacing on mobile
        const totalSpacing = spacing * (cols + 1);
        return (p.width - totalSpacing) / cols;
    }

    function getMaxScrollDistance() {
        if (!currentCollection || galleryImages.length === 0) return 0;

        const cols = getGridColumns();
        const itemSize = getGridItemSize();
        const spacing = mobile ? 12 : 20; // Reduced spacing on mobile
        const startY = 120; // Leave space for title

        // Calculate total content height
        const rows = Math.ceil(galleryImages.length / cols);
        const contentHeight = startY + rows * (itemSize + spacing) + spacing;

        // Add extra buffer at bottom for comfortable viewing
        const bottomBuffer = 50;
        const totalContentHeight = contentHeight + bottomBuffer;

        // Calculate how much we need to scroll to see all content
        const viewportHeight = p.height;
        const maxScroll = Math.max(0, totalContentHeight - viewportHeight);

        return maxScroll;
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

            // Hero image background
            const loadedHeroImg = loadedImages.get(card.collection.heroImage);
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

    function renderGalleryPage() {
        if (!currentCollection) return;

        // Update scroll
        if (!scrolling) {
            scrollY = p.lerp(scrollY, targetScrollY, 0.1);
        }

        // Title
        renderGalleryTitle();

        // Show loading state if gallery isn't ready
        if (!galleryGraphicsReady) {
            renderGalleryLoading();
            return;
        }

        // Render cached gallery graphics
        if (galleryGraphics) {
            p.push();
            p.tint(255, galleryFadeAlpha);
            p.translate(0, scrollY);
            p.image(galleryGraphics, 0, 0);
            p.pop();

            // Render hover effects on top
            renderGalleryHoverEffects();
        }
    }

    function renderGalleryLoading() {
        const centerX = p.width / 2;
        const centerY = p.height / 2;

        // Loading background
        p.fill(23, 23, 23, 200);
        p.noStroke();
        p.rect(0, 120, p.width, p.height - 120);

        // Loading text
        p.fill(230, 180);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 900` });
        p.textSize(mobile ? 16 : 20);
        p.text('LOADING GALLERY...', centerX, centerY - 40);

        // Progress bar
        const barWidth = mobile ? 200 : 300;
        const barHeight = 4;
        const barX = centerX - barWidth / 2;
        const barY = centerY - 10;

        // Progress bar background
        p.fill(50, 50, 55);
        p.rect(barX, barY, barWidth, barHeight);

        // Progress bar fill
        const fillWidth = barWidth * galleryLoadingProgress;
        p.fill(74, 144, 230);
        p.rect(barX, barY, fillWidth, barHeight);

        // Progress percentage
        p.textSize(mobile ? 12 : 14);
        p.fill(150);
        const percentage = Math.round(galleryLoadingProgress * 100);
        p.text(`${percentage}%`, centerX, centerY + 20);

        // Loading dots animation
        const dotCount = 3;
        const dotSpacing = 8;
        const totalDotsWidth = (dotCount - 1) * dotSpacing;
        const dotsStartX = centerX - totalDotsWidth / 2;
        const animFrame = Math.floor(p.millis() / 300) % (dotCount + 1);

        p.fill(100);
        for (let i = 0; i < dotCount; i++) {
            const alpha = i === animFrame ? 255 : 100;
            p.fill(100, alpha);
            p.circle(dotsStartX + i * dotSpacing, centerY + 45, 3);
        }
    }

    function renderGalleryHoverEffects() {
        if (!galleryGraphics) return;

        const cols = getGridColumns();
        const itemSize = getGridItemSize();
        const spacing = mobile ? 12 : 20; // Reduced spacing on mobile
        const startX = spacing;
        const startY = 120;

        // Check for hover effects
        galleryImages.forEach((img, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;
            const x = startX + col * (itemSize + spacing);
            const y = startY + row * (itemSize + spacing);

            // Only update hover state on desktop (not mobile)
            if (!mobile) {
                const isHovered = isPointInRect(p.mouseX, p.mouseY - scrollY, x, y, itemSize, itemSize);
                img.targetHoverAlpha = isHovered ? 100 : 0;
                // Smooth fade animation - faster fade in, slower fade out
                img.hoverAlpha = p.lerp(img.hoverAlpha, img.targetHoverAlpha, isHovered ? 0.2 : 0.1);
            } else {
                // On mobile, keep hover state at 0
                img.targetHoverAlpha = 0;
                img.hoverAlpha = 0;
            }

            // Render hover overlay if there's any alpha
            if (img.hoverAlpha > 0) {
                p.push();
                p.translate(0, scrollY);
                p.fill(74, 144, 230, img.hoverAlpha);
                p.noStroke();
                p.rect(x, y, itemSize, itemSize);
                p.pop();
            }
        });
    }

    function renderGalleryTitle() {
        if (!currentCollection) return;

        // Title will be rendered on top at the end of draw loop
    }

    function renderLightbox() {
        if (!currentCollection || lightboxImageIndex >= currentCollection.images.length) return;

        // Dark overlay
        p.fill(0, 0, 0, 200 * (lightboxAlpha / 255));
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        const imagePath = currentCollection.images[lightboxImageIndex];
        const loadedImg = loadedImages.get(imagePath);

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

            // Navigation elements with static positioning (bottom of screen)
            const staticY = p.height - 70; // Fixed position from bottom (moved closer)

            // Image counter (centered)
            p.fill(230, lightboxAlpha);
            p.noStroke();
            p.textAlign(p.CENTER, p.CENTER);
            p.textFont('BPdotsSquareVF', { fontVariationSettings: `wght 600` });
            p.textSize(16);
            p.text(`${lightboxImageIndex + 1} / ${currentCollection.images.length}`, p.width/2, staticY);

            // Navigation arrows with static position and wrapping (always show if multiple images)
            if (currentCollection.images.length > 1) {
                const arrowSize = 35;
                const arrowSpacing = 80; // Distance from center

                // Left arrow (always shown with wrapping)
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

                // Right arrow (always shown with wrapping)
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

    function handleGalleryClick() {
        // Check gallery images
        const cols = getGridColumns();
        const itemSize = getGridItemSize();
        const spacing = mobile ? 12 : 20; // Reduced spacing on mobile
        const startX = spacing;
        const startY = 120;

        galleryImages.forEach((img, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;
            const x = startX + col * (itemSize + spacing);
            const y = startY + row * (itemSize + spacing);

            if (isPointInRect(p.mouseX, p.mouseY - scrollY, x, y, itemSize, itemSize)) {
                openLightbox(index);
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

                // Left arrow (with wrapping)
                const leftX = p.width/2 - arrowSpacing - arrowSize/2;
                if (isPointInRect(p.mouseX, p.mouseY, leftX, staticY - arrowSize/2, arrowSize, arrowSize)) {
                    // Wrap to last image if at first image, otherwise go to previous
                    lightboxImageIndex = lightboxImageIndex === 0 ? currentCollection.images.length - 1 : lightboxImageIndex - 1;
                    return;
                }

                // Right arrow (with wrapping)
                const rightX = p.width/2 + arrowSpacing - arrowSize/2;
                if (isPointInRect(p.mouseX, p.mouseY, rightX, staticY - arrowSize/2, arrowSize, arrowSize)) {
                    // Wrap to first image if at last image, otherwise go to next
                    lightboxImageIndex = lightboxImageIndex === currentCollection.images.length - 1 ? 0 : lightboxImageIndex + 1;
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
        targetLightboxAlpha = 255;
        lightboxAnimationStart = p.millis();
        lightboxAnimating = true;
    }

    function closeLightbox() {
        targetLightboxAlpha = 0;
        lightboxAnimationStart = p.millis();
        lightboxAnimating = true;
    }

    function loadImage(imagePath, isGalleryImage = false) {
        if (loadedImages.has(imagePath)) return;

        loadedImages.set(imagePath, { element: null, loaded: false });

        p.loadImage(imagePath, (img) => {
            loadedImages.set(imagePath, { element: img, loaded: true });

            // Trigger hero fade animation for collection cards
            if (!isGalleryImage && mode === 'collections') {
                collectionCards.forEach(card => {
                    if (card.collection.heroImage === imagePath) {
                        card.heroFadeTarget = 255;
                        card.heroFadeStart = p.millis();
                    }
                });
            }

            // Update gallery loading progress if this is a gallery image
            if (isGalleryImage && mode === 'gallery' && currentCollection) {
                updateGalleryLoadingProgress();
            }
        }, (err) => {
            console.warn('Failed to load image:', imagePath, err);

            // Still update progress even on error
            if (isGalleryImage && mode === 'gallery' && currentCollection) {
                updateGalleryLoadingProgress();
            }
        });
    }

    function updateGalleryLoadingProgress() {
        if (!currentCollection) return;

        const loadedCount = currentCollection.images.filter(imgPath => {
            const loadedImg = loadedImages.get(imgPath);
            return loadedImg && loadedImg.loaded;
        }).length;

        galleryLoadingProgress = loadedCount / currentCollection.images.length;

        // If all images are loaded and we need to redraw, create the graphics
        if (galleryLoadingProgress >= 1.0 && !galleryGraphicsReady) {
            createGalleryGraphics();
        }
    }

    function createGalleryGraphics() {
        if (!currentCollection || galleryGraphicsReady) return;

        const cols = getGridColumns();
        const itemSize = getGridItemSize();
        const spacing = mobile ? 12 : 20; // Reduced spacing on mobile
        const startX = spacing;
        const startY = 120; // Leave space for title

        // Calculate total height needed
        const rows = Math.ceil(galleryImages.length / cols);
        const totalHeight = startY + rows * (itemSize + spacing) + spacing;

        // Create graphics buffer
        if (galleryGraphics) {
            galleryGraphics.remove();
        }
        galleryGraphics = p.createGraphics(p.width, totalHeight);

        // Render all images to the graphics buffer
        galleryImages.forEach((img, index) => {
            const loadedImg = loadedImages.get(img.path);
            if (loadedImg && loadedImg.loaded) {
                const row = Math.floor(index / cols);
                const col = index % cols;
                const x = startX + col * (itemSize + spacing);
                const y = startY + row * (itemSize + spacing);

                // Draw placeholder/container
                galleryGraphics.fill(40, 40, 45);
                galleryGraphics.stroke(100, 100);
                galleryGraphics.strokeWeight(1);
                galleryGraphics.rect(x, y, itemSize, itemSize);

                // Draw image
                galleryGraphics.push();
                galleryGraphics.tint(255, 200);

                // Crop to square
                const imgSize = Math.min(loadedImg.element.width, loadedImg.element.height);
                const cropX = (loadedImg.element.width - imgSize) / 2;
                const cropY = (loadedImg.element.height - imgSize) / 2;

                galleryGraphics.image(loadedImg.element, x, y, itemSize, itemSize, cropX, cropY, imgSize, imgSize);
                galleryGraphics.pop();
            }
        });

        galleryGraphicsReady = true;
        galleryNeedsRedraw = false;

        // Trigger fade-in animation
        galleryFadeTarget = 255;
        galleryFadeStart = p.millis();

        console.log('Gallery graphics created successfully', {
            width: p.width,
            height: totalHeight,
            rows: rows,
            maxScroll: getMaxScrollDistance()
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
        } else if (mode === 'gallery' && !lightboxOpen) {
            // Add gallery item hover checks
            const cols = getGridColumns();
            const itemSize = getGridItemSize();
            const spacing = mobile ? 12 : 20;
            const startX = spacing;
            const startY = 120;

            galleryImages.forEach((img, index) => {
                const row = Math.floor(index / cols);
                const col = index % cols;
                const x = startX + col * (itemSize + spacing);
                const y = startY + row * (itemSize + spacing);

                targets.push(() => isPointInRect(p.mouseX, p.mouseY - scrollY, x, y, itemSize, itemSize));
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
