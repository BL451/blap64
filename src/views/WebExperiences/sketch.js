import { getViewportSize, loadGoogleFontSet, widthCheck, daysSince, UIWebButton, updateCursor, getMediaPath } from "../../utils";
import { projects } from "./project-details.js";

export const sketch = function (p, options = {}) {
	let webButtons = [];
	const numNeighbors = 3;
	let mobile = false;
	let sols = 0;
	let activeInfoCard = null;
	let infoCardAlpha = 0;
	let infoCardAnimationStart = 0;
	let infoCardAnimating = false;
	let targetAlpha = 0;

	p.setup = async function() {
		const s = getViewportSize();
		p.createCanvas(s.width, s.height);
		mobile = widthCheck(s.width);
		p.ellipseMode(p.CENTER);
		p.rectMode(p.CENTER);
		p.background(23);
		p.strokeCap(p.PROJECT);

		// Set initial framerate for optimal performance
		p.frameRate(60);

		// Disable default scroll behavior on this page
		document.body.style.overscrollBehavior = 'none';
		document.body.style.overflow = 'hidden';
		document.body.style.touchAction = 'none';

		// Store reference to cleanup later
		p.preventAllTouch = null;

		// Add a one-time interaction handler to ensure maximum performance on mobile
		const enableHighPerformance = () => {
			// Force p5.js to use maximum framerate
			p.frameRate(60);
			// Try to resume audio context if it exists (common cause of throttling)
			if (window.AudioContext || window.webkitAudioContext) {
				const AudioContext = window.AudioContext || window.webkitAudioContext;
				if (p.getAudioContext && p.getAudioContext().state === 'suspended') {
					p.getAudioContext().resume();
				}
			}
		};

		// Listen for both touch and mouse events
		document.addEventListener('touchstart', enableHighPerformance, { once: true, passive: true });
		document.addEventListener('click', enableHighPerformance, { once: true });
		document.addEventListener('keydown', enableHighPerformance, { once: true });

		await loadGoogleFontSet('../../assets/fonts/BPdotsSquareVF.ttf');
		p.textFont('BPdotsSquareVF', {
			fontVariationSettings: `wght 900`
		});

		let minRadius = p.min(p.width, p.height) * 0.2;
		let maxRadius = p.min(p.width, p.height) * 0.3;
		let minScale = p.min(p.width, p.height) * 0.1;
		let maxScale = p.min(p.width, p.height) * 0.15;

		// Create web buttons from project data
		for (let i = 0; i < projects.length; i++) {
			const project = projects[i];
			const button = new UIWebButton(
				p,
				p.random(p.width * 0.2, p.width * 0.8),
				p.random(p.height * 0.2, p.height * 0.8),
				p.random(minRadius, maxRadius), // Physics radius
				p.random(minScale, maxScale),   // Visual scale
				project
			);

			// Add physics properties for movement
			button.vel = p.createVector();
			button.acc = p.createVector();
			button.neighbors = [];

			webButtons.push(button);
		}

		// Calculate days since project start (different from installations)
		sols = daysSince('2019-09-05');
	};

	p.draw = function() {
		p.background(22);

		// Calculate nearest neighbors for each button
		for (let i = 0; i < webButtons.length; i++) {
			findNearestNeighbors(webButtons[i], webButtons, numNeighbors);
		}

		// Draw connections first (so they appear behind the buttons)
		for (let i = 0; i < webButtons.length; i++) {
			drawConnections(webButtons[i]);
		}

		// Update and display buttons
		for (let i = 0; i < webButtons.length; i++) {
			let b1 = webButtons[i];

			// Center attraction
			let toCenter = p.createVector(p.width/2, p.height/2).sub(b1.p);
			toCenter.setMag(0.01);
			applyForce(b1, toCenter);

			// Inter-button forces
			for (let j = 0; j < webButtons.length; j++) {
				if (i === j) continue;
				let b2 = webButtons[j];
				let dir = p5.Vector.sub(b2.p, b1.p);
				let distance = dir.mag();
				let minDist = b1.radius + b2.radius;

				if (distance < 0.1) continue;

				if (distance < minDist) {
					let overlap = minDist - distance;
					let force = dir.copy().normalize().mult(-0.01 * overlap);
					applyForce(b1, force);
				} else {
					let attract = dir.copy().normalize().mult(0.01);
					applyForce(b1, attract);
				}
			}

			updateButton(b1);

			// Check hover state
			const isHovered = b1.contains(p.mouseX, p.mouseY);
			b1.targetHoverAlpha = isHovered ? 1 : 0;

			b1.render();
		}

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
					// Ensure iframe is fully hidden and unloaded
					if (currentIframe) {
						currentIframe.src = 'about:blank'; // Unload content
						currentIframe.style.display = 'none';
					}
				}
			}
		}

		// Update cursor
		updateCursor(p, p.mouseX, p.mouseY, ...webButtons, getCloseButtonHoverCheck());

		// Render HUD decorations and title (before info card so they get dimmed)
		renderHUDDecorations();

		// Render active info card (on top of everything)
		if (activeInfoCard !== null || infoCardAlpha > 0) {
			renderInfoCard(projects[activeInfoCard]);
		}
	};

	// Resize throttling
	let resizeTimeout = null;

	p.windowResized = function() {
		// Throttle resize events to prevent performance issues during orientation changes
		if (resizeTimeout) {
			clearTimeout(resizeTimeout);
		}

		resizeTimeout = setTimeout(() => {
			const s = getViewportSize();
			p.resizeCanvas(s.width, s.height);
			mobile = widthCheck(s.width);

			// Reposition buttons that might be off-screen
			for (let button of webButtons) {
				button.p.x = p.constrain(button.p.x, button.radius, p.width - button.radius);
				button.p.y = p.constrain(button.p.y, button.radius, p.height - button.radius);
			}
			resizeTimeout = null;
		}, 150); // Wait 150ms after resize stops
	};

	p.mousePressed = function(event) {
		if (event && event.button !== 0) return;
		
		// Block all interactions if help popup is open
		if (window.helpPopupOpen) {
			return;
		}

		// Check if clicking on close button when info card is open
		if (activeInfoCard !== null) {
			const isMobile = widthCheck(p.width);
			const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.9;
			const cardHeight = isMobile ? p.height * 0.82 : p.height * 0.85; // Match new mobile height
			const cardX = (p.width - cardWidth) / 2;
			const cardY = (p.height - cardHeight) / 2;

			const closeButtonSize = isMobile ? 44 : 30;
			const closeButtonX = isMobile ? (p.width - closeButtonSize) / 2 : cardX + cardWidth - closeButtonSize + 5; // Center on mobile
			const closeButtonY = isMobile ? cardY + cardHeight + 15 : cardY - closeButtonSize - 5; // Below iframe on mobile

			if (p.mouseX >= closeButtonX && p.mouseX <= closeButtonX + closeButtonSize &&
				p.mouseY >= closeButtonY && p.mouseY <= closeButtonY + closeButtonSize) {
				closeInfoCard();
				return;
			}

			// Check if clicking outside the card (account for mobile close button position)
			const clickOutside = isMobile ?
				(p.mouseX < cardX || p.mouseX > cardX + cardWidth || p.mouseY < cardY || p.mouseY > cardY + cardHeight + 60) :
				(p.mouseX < cardX || p.mouseX > cardX + cardWidth || p.mouseY < cardY || p.mouseY > cardY + cardHeight);
			
			if (clickOutside) {
				closeInfoCard();
				return;
			}
			return;
		}

		// Only check web button clicks if no info card is active or animating
		if (activeInfoCard === null && !infoCardAnimating) {
			webButtons.forEach((button, index) => {
				if (button.contains(p.mouseX, p.mouseY)) {
					openInfoCard(index);
					return;
				}
			});
		}
	};

	p.keyPressed = function() {
		if (p.key === 's') {
			p.save("digitalbridges.png");
		}
	};

	// Helper functions for web button physics and interactions
	function applyForce(button, force) {
		button.acc.add(force);
	}

	function updateButton(button) {
		button.vel.add(button.acc);
		button.vel.mult(0.94);
		button.p.add(button.vel);
		button.acc.mult(0);

		// Constrain to canvas
		button.p.x = p.constrain(button.p.x, button.radius, p.width - button.radius);
		button.p.y = p.constrain(button.p.y, button.radius, p.height - button.radius);
	}

	function findNearestNeighbors(button, allButtons, numNeighbors) {
		let distances = [];
		for (let i = 0; i < allButtons.length; i++) {
			if (allButtons[i] === button) continue;
			let dist = p5.Vector.dist(button.p, allButtons[i].p);
			distances.push({button: allButtons[i], distance: dist});
		}

		distances.sort((a, b) => a.distance - b.distance);
		button.neighbors = distances.slice(0, numNeighbors).map(item => item.button);
	}

	function drawConnections(button) {
		for (let neighbor of button.neighbors) {
			const distance = p5.Vector.dist(button.p, neighbor.p);
			const midX = (button.p.x + neighbor.p.x) / 2;
			const midY = (button.p.y + neighbor.p.y) / 2;

			// Main connection line with distance-based opacity
			const connectionAlpha = p.map(distance, 0, p.width * 0.5, 150, 30);
			p.stroke(74, 144, 230, connectionAlpha);
			p.strokeWeight(1);
			p.line(button.p.x, button.p.y, neighbor.p.x, neighbor.p.y);

			// Data flow pulse effect
			const pulseTime = p.millis() * 0.00075; // 25% of original speed (0.003 * 0.25)
			const pulsePosition = (pulseTime + button.p.x * 0.01) % 1;
			const pulseX = p.lerp(button.p.x, neighbor.p.x, pulsePosition);
			const pulseY = p.lerp(button.p.y, neighbor.p.y, pulsePosition);

			// Animated pulse dot
			p.fill(74, 144, 230, 200);
			p.noStroke();
			p.circle(pulseX, pulseY, 4);

			// Connection node at midpoint (sci-fi junction style)
			if (distance > 100) { // Only show for longer connections
				p.stroke(74, 144, 230, connectionAlpha * 0.8);
				p.strokeWeight(1);
				p.noFill();
				const nodeSize = 6;

				// Diamond-shaped junction node
				p.push();
				p.translate(midX, midY);
				p.rotate(p.PI / 4);
				p.square(0, 0, nodeSize);
				p.pop();

				// Small cross inside the diamond
				p.line(midX - 2, midY, midX + 2, midY);
				p.line(midX, midY - 2, midX, midY + 2);
			}
		}
	}

	function openInfoCard(index) {
		activeInfoCard = index;
		targetAlpha = 255;
		infoCardAnimationStart = p.millis();
		infoCardAnimating = true;

		// Update theme color for iOS status bar to match dimmed overlay
		const themeColorMeta = document.querySelector('meta[name="theme-color"]');
		if (themeColorMeta) {
			themeColorMeta.content = '#000000'; // Dark color to match overlay
		}

		// Nuclear option: completely lock the viewport
		const html = document.documentElement;
		const body = document.body;

		// Store current scroll position to restore later
		p.savedScrollTop = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
		p.savedScrollLeft = window.pageXOffset || html.scrollLeft || body.scrollLeft || 0;

		// Lock everything
		html.style.overflow = 'hidden';
		html.style.position = 'fixed';
		html.style.width = '100%';
		html.style.height = '100%';
		html.style.touchAction = 'none';
		html.style.overscrollBehavior = 'none';

		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.width = '100%';
		body.style.height = '100%';
		body.style.touchAction = 'none';
		body.style.overscrollBehavior = 'none';
		body.style.top = `-${p.savedScrollTop}px`;
		body.style.left = `-${p.savedScrollLeft}px`;

		// Prevent ALL touch events except on iframe
		const preventEverything = (e) => {
			// Only allow if target is iframe or inside iframe
			if (e.target.tagName === 'IFRAME') {
				return true;
			}

			// Completely block everything else
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		};

		// Add to window and document with highest priority
		window.addEventListener('touchmove', preventEverything, { passive: false, capture: true });
		window.addEventListener('touchstart', preventEverything, { passive: false, capture: true });
		window.addEventListener('scroll', preventEverything, { passive: false, capture: true });
		document.addEventListener('touchmove', preventEverything, { passive: false, capture: true });
		document.addEventListener('touchstart', preventEverything, { passive: false, capture: true });
		document.addEventListener('scroll', preventEverything, { passive: false, capture: true });

		// Store reference for cleanup
		p.preventEverything = preventEverything;

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

		// Update breadcrumb to show current project
		const project = projects[index];
		if (project && project.slug) {
			import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
				updateBreadcrumb(`/interactive/web/${project.slug}`);
			});
		}
	}

	function closeInfoCard() {
		targetAlpha = 0;
		infoCardAnimationStart = p.millis();
		infoCardAnimating = true;

		// Restore original theme color for iOS status bar
		const themeColorMeta = document.querySelector('meta[name="theme-color"]');
		if (themeColorMeta) {
			themeColorMeta.content = '#171717'; // Back to original dark theme
		}

		// Unload and hide iframe when closing
		if (currentIframe) {
			currentIframe.src = 'about:blank'; // Unload the iframe content
			currentIframe.style.display = 'none';
		}

		// Remove all event prevention
		if (p.preventEverything) {
			window.removeEventListener('touchmove', p.preventEverything, { capture: true });
			window.removeEventListener('touchstart', p.preventEverything, { capture: true });
			window.removeEventListener('scroll', p.preventEverything, { capture: true });
			document.removeEventListener('touchmove', p.preventEverything, { capture: true });
			document.removeEventListener('touchstart', p.preventEverything, { capture: true });
			document.removeEventListener('scroll', p.preventEverything, { capture: true });
			p.preventEverything = null;
		}

		// Unlock everything and restore scroll position
		const html = document.documentElement;
		const body = document.body;

		html.style.overflow = '';
		html.style.position = '';
		html.style.width = '';
		html.style.height = '';
		html.style.touchAction = '';
		html.style.overscrollBehavior = '';

		body.style.overflow = '';
		body.style.position = '';
		body.style.width = '';
		body.style.height = '';
		body.style.touchAction = '';
		body.style.overscrollBehavior = '';
		body.style.top = '';
		body.style.left = '';

		// Restore scroll position
		if (typeof p.savedScrollTop !== 'undefined') {
			window.scrollTo(p.savedScrollLeft || 0, p.savedScrollTop || 0);
		}

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

		// Update URL back to main web experiences page
		if (window.location.hash.includes('/interactive/web/') && window.location.hash !== '#/interactive/web') {
			window.history.pushState(null, '', '#/interactive/web');
		}

		// Update breadcrumb back to web experiences page
		import("../elements/breadcrumb-nav.js").then(({ updateBreadcrumb }) => {
			updateBreadcrumb('/interactive/web');
		});
	}

	function getCloseButtonHoverCheck() {
		return (mouseX, mouseY) => {
			if (activeInfoCard !== null) {
				const isMobile = widthCheck(p.width);
				const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.9;
				const cardHeight = isMobile ? p.height * 0.82 : p.height * 0.85; // Match new mobile height
				const cardX = (p.width - cardWidth) / 2;
				const cardY = (p.height - cardHeight) / 2;

				const closeButtonSize = isMobile ? 44 : 30;
				const closeButtonX = isMobile ? (p.width - closeButtonSize) / 2 : cardX + cardWidth - closeButtonSize + 5; // Center on mobile
				const closeButtonY = isMobile ? cardY + cardHeight + 15 : cardY - closeButtonSize - 5; // Below iframe on mobile

				return mouseX >= closeButtonX && mouseX <= closeButtonX + closeButtonSize &&
					   mouseY >= closeButtonY && mouseY <= closeButtonY + closeButtonSize;
			}
			return false;
		};
	}

	function renderInfoCard(project) {
		if (!project) return;

		// Switch to CORNER mode for UI elements
		p.push();
		p.rectMode(p.CORNER);

		const isMobile = widthCheck(p.width);
		const cardWidth = isMobile ? p.width * 0.95 : p.width * 0.9;
		const cardHeight = isMobile ? p.height * 0.82 : p.height * 0.85; // Reduced mobile height
		const cardX = (p.width - cardWidth) / 2;
		const cardY = (p.height - cardHeight) / 2;

		// Semi-transparent background overlay
		p.fill(0, 0, 0, 200 * (infoCardAlpha / 255));
		p.noStroke();
		p.rect(0, 0, p.width, p.height);

		// Close button positioning
		const closeButtonSize = isMobile ? 44 : 30;
		const closeButtonX = isMobile ? (p.width - closeButtonSize) / 2 : cardX + cardWidth - closeButtonSize + 5; // Center on mobile
		const closeButtonY = isMobile ? cardY + cardHeight + 15 : cardY - closeButtonSize - 5; // Below iframe on mobile
		renderCloseButton(closeButtonX, closeButtonY, closeButtonSize, infoCardAlpha);

		// Create iframe - adjust height on mobile to leave space for close button
		const padding = 0;
		const iframeHeight = isMobile ? cardHeight - 10 : cardHeight - 2 * padding; // Slightly less height on mobile
		createOrUpdateIframe(project, cardX + padding, cardY + padding, cardWidth - 2 * padding, iframeHeight);

		p.pop(); // Restore previous rectMode
	}


	let currentIframe = null;

	function createOrUpdateIframe(project, x, y, width, height) {
		const url = project.url;

		// Remove existing iframe if URL has changed
		if (currentIframe && currentIframe.src !== url) {
			currentIframe.remove();
			currentIframe = null;
		}

		// Create new iframe if needed
		if (!currentIframe) {
			currentIframe = document.createElement('iframe');
			currentIframe.src = url;
			currentIframe.style.border = '2px solid #4A90E6';
			currentIframe.style.borderRadius = '0px'; // Remove rounded corners
			currentIframe.style.backgroundColor = '#000';
			currentIframe.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
			// Add permissions for p5.js sketches that use microphone, camera, etc.
			currentIframe.allow = 'microphone; camera; autoplay; encrypted-media; fullscreen; geolocation; gyroscope; accelerometer; magnetometer; midi';
			document.body.appendChild(currentIframe);

			// For local projects, add performance optimization after load
			if (project.type === 'local') {
				currentIframe.addEventListener('load', () => {
					setTimeout(() => {
						try {
							// Access the iframe's window and add framerate optimization
							const iframeWindow = currentIframe.contentWindow;
							if (iframeWindow && iframeWindow.frameRate) {
								iframeWindow.frameRate(60);
							}

							// Also try to call setup functions that might exist
							if (iframeWindow && iframeWindow.optimizeForMobile) {
								iframeWindow.optimizeForMobile();
							}
						} catch (e) {
							// Silently handle any cross-origin or access issues
							console.log('Could not optimize local iframe performance');
						}
					}, 500);
				});
			}
		}

		// Get the canvas element's position on the page
		const canvas = p.canvas;
		const canvasRect = canvas.getBoundingClientRect();

		// Update iframe position and size - convert p5 coordinates to screen coordinates
		currentIframe.style.position = 'fixed';
		currentIframe.style.left = (canvasRect.left + x) + 'px';
		currentIframe.style.top = (canvasRect.top + y) + 'px';
		currentIframe.style.width = width + 'px';
		currentIframe.style.height = height + 'px';
		currentIframe.style.zIndex = '1000';
		currentIframe.style.opacity = infoCardAlpha / 255;
		currentIframe.style.display = infoCardAlpha > 0 ? 'block' : 'none';
	}

	function renderCloseButton(x, y, size, alpha) {
		const padding = size * 0.25;

		// Ensure we're in CORNER mode for close button
		p.push();
		p.rectMode(p.CORNER);

		// Close button background
		p.fill(50, 50, 50, 200 * (alpha / 255));
		p.stroke(74, 144, 230, alpha);
		p.strokeWeight(1);
		p.rect(x, y, size, size);

		// X symbol
		p.stroke(74, 144, 230, alpha);
		p.strokeWeight(2);
		p.line(x + padding, y + padding, x + size - padding, y + size - padding);
		p.line(x + size - padding, y + padding, x + padding, y + size - padding);

		p.pop();
	}

	// Cleanup function to remove iframe when sketch is destroyed
	p.cleanupSketch = function() {
		if (currentIframe) {
			currentIframe.src = 'about:blank'; // Unload content before removal
			currentIframe.remove();
			currentIframe = null;
		}

		// Restore original theme color in case cleanup happens while infoCard is open
		const themeColorMeta = document.querySelector('meta[name="theme-color"]');
		if (themeColorMeta) {
			themeColorMeta.content = '#171717';
		}

		// Re-enable browser scroll behavior and swipe navigation
		document.body.style.overscrollBehavior = '';
		document.body.style.overflow = '';
		document.body.style.touchAction = '';

		// Remove all event prevention if active
		if (p.preventEverything) {
			window.removeEventListener('touchmove', p.preventEverything, { capture: true });
			window.removeEventListener('touchstart', p.preventEverything, { capture: true });
			window.removeEventListener('scroll', p.preventEverything, { capture: true });
			document.removeEventListener('touchmove', p.preventEverything, { capture: true });
			document.removeEventListener('touchstart', p.preventEverything, { capture: true });
			document.removeEventListener('scroll', p.preventEverything, { capture: true });
			p.preventEverything = null;
		}

		// Reset all positioning
		const html = document.documentElement;
		const body = document.body;

		html.style.overflow = '';
		html.style.position = '';
		html.style.width = '';
		html.style.height = '';
		html.style.touchAction = '';
		html.style.overscrollBehavior = '';

		body.style.overflow = '';
		body.style.position = '';
		body.style.width = '';
		body.style.height = '';
		body.style.touchAction = '';
		body.style.overscrollBehavior = '';
		body.style.top = '';
		body.style.left = '';

		// Reset state
		activeInfoCard = null;
		infoCardAlpha = 0;

		// Show breadcrumb navigation if it was hidden on mobile
		if (widthCheck(p.width)) {
			const breadcrumbContainer = document.getElementById("breadcrumb-container");
			if (breadcrumbContainer) {
				breadcrumbContainer.style.display = 'block';
			}
		}
	};

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
		p.text("WEB EXPERIENCES", p.width / 2, titleY);

		// Underline decoration
		const textWidth = p.textWidth("WEB EXPERIENCES");
		p.stroke(74, 144, 230, 120); // Blue accent color for differentiation
		p.strokeWeight(1);
		p.line(p.width/2 - textWidth/2 - 20, titleY + titleSize + 8,
			   p.width/2 + textWidth/2 + 20, titleY + titleSize + 8);
	}

	function renderPerimeterHUD() {
		const margin = mobile ? 10 : 40;
		const cornerSize = mobile ? 20 : 30;
		const alpha = 80; // Slightly more subtle than installations

		p.stroke(74, 144, 230, alpha); // Blue theme for web experiences
		p.strokeWeight(1);
		p.strokeCap(p.SQUARE);
		p.noFill();

		// Corner brackets - diamond pattern instead of L-brackets for variation
		const corners = [
			[margin, margin], // top-left
			[p.width - margin, margin], // top-right
			[p.width - margin, p.height - margin], // bottom-right
			[margin, p.height - margin] // bottom-left
		];

		corners.forEach(([x, y], index) => {
			const xDir = index === 0 || index === 3 ? 1 : -1;
			const yDir = index === 0 || index === 1 ? 1 : -1;

			// L-shaped brackets but with slightly different styling
			p.line(x, y, x + xDir * cornerSize, y);
			p.line(x, y, x, y + yDir * cornerSize);

			// Add small diagonal accent lines for variation
			const accentSize = cornerSize * 0.3;
			p.line(x + xDir * accentSize, y + yDir * accentSize,
				   x + xDir * (accentSize + 5), y + yDir * (accentSize + 5));
		});

		// Grid pattern markers (different from installations' simple lines)
		const markerCount = mobile ? 4 : 6;
		const markerSize = mobile ? 4 : 6;

		// Top and bottom grid markers
		for (let i = 1; i < markerCount; i++) {
			const x = p.lerp(margin + cornerSize, p.width - margin - cornerSize, i / markerCount);

			// Cross pattern markers
			p.line(x - markerSize/2, margin, x + markerSize/2, margin);
			p.line(x, margin - markerSize/2, x, margin + markerSize/2);

			p.line(x - markerSize/2, p.height - margin, x + markerSize/2, p.height - margin);
			p.line(x, p.height - margin - markerSize/2, x, p.height - margin + markerSize/2);
		}

		// Left and right grid markers
		for (let i = 1; i < markerCount; i++) {
			const y = p.lerp(margin + cornerSize, p.height - margin - cornerSize, i / markerCount);

			// Cross pattern markers
			p.line(margin - markerSize/2, y, margin + markerSize/2, y);
			p.line(margin, y - markerSize/2, margin, y + markerSize/2);

			p.line(p.width - margin - markerSize/2, y, p.width - margin + markerSize/2, y);
			p.line(p.width - margin, y - markerSize/2, p.width - margin, y + markerSize/2);
		}

		// Status indicators with web-specific information
		p.fill(74, 144, 230, alpha * 0.8); // Blue theme
		p.noStroke();
		p.textAlign(p.LEFT, p.TOP);
		p.textSize(mobile ? 8 : 11);
		const step = mobile ? 10 : 13;

		// Web-specific status indicators
		p.text("NET: ONLINE", margin + 0.5*cornerSize, margin + 1*step);
		p.text("SOL: " + sols.toString(), margin + 0.5*cornerSize, margin + 2*step);
		p.text("PKT: " + projects.length, margin + 0.5*cornerSize, margin + 3*step);
		p.text("SYN: ACTIVE", margin + 0.5*cornerSize, margin + 4*step);
	}
};

export const webexperiencesSketch = (node, options = {}) => {
	return new p5(sketch, node);
};
