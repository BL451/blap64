import { smoothFollow, easeInCubic, getFontSizes, widthCheck, loadGoogleFontSet, injectFontLink, getViewportSize, AnimationManager, UICornerBoxButton, UIArcButton, UITriangleButton, UIHexButton, UILinesButton, TextWriter, updateCursor } from "../../utils";

// Home sketch with animation support
// options.skipAnimations: boolean - when true, skips intro animations and shows final state immediately
// This is automatically enabled when navigating back via browser back/forward buttons
// or can be manually enabled via URL parameter ?skipAnimations=true
export const sketch = function (p, options = {}) {
	let ui = [];
    let ui_opacity = 0;
	let smoothX, smoothY;
	let short;
    let intro_texts = [];
    let animation_states = [];
    let animation_manager;
    let font_sizes;
    let mobile = false;
    let skipAnimations = options.skipAnimations || false;

	p.setup = async function() {
        p.noCanvas();
	    const s = getViewportSize();
		p.createCanvas(s.width, s.height);
		mobile = widthCheck(p.width);
		p.background(23);
		p.noFill();
		p.stroke(230);
		p.strokeWeight(4);
		p.strokeCap(p.PROJECT);
		// Font already loaded via CSS
		p.textAlign(p.CENTER, p.CENTER);
		short = p.min(p.width, p.height);
		const s_font = mobile ? 14 : Math.min(Math.max(0.022*p.width, 32), 48);
		ui.push(new UICornerBoxButton(p, 0.25*p.width, 0.7*p.height, 0.26*short, 0.26*short, 0.01*p.width, 0.01*p.width, "INTERACTIVE\nMEDIA", s_font));
		ui.push(new UIArcButton(p, 0.5*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "PHOTO", s_font));
		ui.push(new UITriangleButton(p, 0.75*p.width, 0.35*p.height, 0.2*short, 0.2*short, 0.01*p.width, 0.01*p.width, -0.5*p.PI, "ABOUT", s_font));
		ui.push(new UIHexButton(p, 0.75*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "LINKS", s_font));
		ui.push(new UILinesButton(p, 0.82*p.width, 0.78*p.height, 0.22*short, 0.16*short, 0.01*p.width, 0.01*p.width, "BLOG", s_font));

		// Apply quadratic curve layout to UI elements
		layoutUI();
		smoothX = p.width/2;
		smoothY = p.height/2;
        p.mouseX = smoothX;
        p.mouseY = smoothY;
		p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        font_sizes = getFontSizes(p.width, p.height);
        let padding = [0.04, 0.15];
        if (mobile){
            padding = [0.025, 0.05];
        }

        intro_texts.push(new TextWriter(p, padding[0] * p.width, padding[0] * p.width, p.width, p.height / 2, "HELLO, FRIEND.", font_sizes.large));
        intro_texts.push(new TextWriter(p, padding[1] * p.width, 0.18 * p.height, p.width / 2, p.height / 2, "I play many roles:", font_sizes.small));
        intro_texts.push(new TextWriter(p, padding[1] * p.width, 0.22 * p.height, p.width, p.height / 2, "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR", font_sizes.medium));
        intro_texts.push(new TextWriter(p, padding[1] * p.width, 0.22 * p.height + (mobile ? 4.0 : 3.8) * font_sizes.medium, p.width, p.height / 2, "and more...", font_sizes.small));

        animation_states = !mobile ? [
            {
                "start_time": 500,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderSequentialRandom.bind(intro_texts[0]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 3000,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["HELLO, FRIEND.", "My name is Benjamin Lappalainen"],
                "persist": true,
            },
            {
                "start_time": 4000,
                "duration": 500,
                "idx": 1,
                "fn": intro_texts[1].renderSequentialRandom.bind(intro_texts[1]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 4750,
                "duration": 2000,
                "idx": 2,
                "fn": intro_texts[2].renderSequentialRandom.bind(intro_texts[2]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 7250,
                "duration": 1000,
                "idx": 4,
                "fn": intro_texts[3].renderSequentialRandom.bind(intro_texts[3]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 5000,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["My name is Benjamin Lappalainen", "Benjamin Lappalainen"],
                "persist": true,
            },
            {
                "start_time": 7000,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["Benjamin Lappalainen", "BLAP"],
                "persist": true,
            },
            {
                "start_time": 7500,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["BLAP", "BLAP64"],
                "persist": true,
            },
            {
                "start_time": 4000,
                "duration": 1000,
                "idx": 3,
                "fn": setUIOpacity,
                "args": [],
                "persist": false,
            }
        ] : [
            {
                "start_time": 500,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderSequentialRandom.bind(intro_texts[0]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 3000,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["HELLO, FRIEND.", "My name is Benjamin Lappalainen"],
                "persist": true,
            },
            {
                "start_time": 5500,
                "duration": 500,
                "idx": 1,
                "fn": intro_texts[1].renderSequentialRandom.bind(intro_texts[1]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 6250,
                "duration": 2000,
                "idx": 2,
                "fn": intro_texts[2].renderSequentialRandom.bind(intro_texts[2]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 8750,
                "duration": 1000,
                "idx": 4,
                "fn": intro_texts[3].renderSequentialRandom.bind(intro_texts[3]),
                "args": [],
                "persist": true,
            },
            {
                "start_time": 4500,
                "duration": 1000,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["My name is Benjamin Lappalainen", "Benjamin Lappalainen"],
                "persist": true,
            },
            {
                "start_time": 7000,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["Benjamin Lappalainen", "BLAP"],
                "persist": true,
            },
            {
                "start_time": 7500,
                "duration": 250,
                "idx": 0,
                "fn": intro_texts[0].renderTransition.bind(intro_texts[0]),
                "args": ["BLAP", "BLAP64"],
                "persist": true,
            },
            {
                "start_time": 4000,
                "duration": 1000,
                "idx": 3,
                "fn": setUIOpacity,
                "args": [],
                "persist": false,
            }
        ];
        animation_manager = new AnimationManager(animation_states);

        // Skip animations if requested
        if (skipAnimations) {
            // Set final states immediately
            intro_texts[0].t = "BLAP64";
            intro_texts[1].t = "I play many roles:";
            intro_texts[2].t = "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR";
            intro_texts[3].t = "and more...";
            ui_opacity = 255;
            animation_manager.t = 999999;
        }

        window.addEventListener("focus", (event) => {
            if (p.millis() > 5000){
                setUIOpacity(1);
            }
        });
	}

	p.draw = function() {
	    // deltaTime allows us to be framerate agnostic for animation speed
		if (!mobile){
            smoothX = p.constrain(smoothFollow(p.mouseX, smoothX, 0.003*p.deltaTime), 0, p.width);
            smoothY = p.constrain(smoothFollow(p.mouseY, smoothY, 0.003*p.deltaTime), 0, p.height);
		} else {
            smoothX = p.width * 0.5 + 0.31 * short * p.cos(0.0006 * p.millis());
            smoothY = p.height * 0.7 + 0.31 * short * p.sin(0.0006 * p.millis());
		}
		p.clear();
		p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        ui.forEach((ui_element) => {
            const d = ui_element.dist(smoothX, smoothY);
            ui_element.cs.x = easeInCubic(p.map(d, 0, 0.5*p.width, 1, 0));
            ui_element.cs.y = easeInCubic(p.map(d, 0, 0.5*p.width, 1, 0));
            p.strokeWeight(1 + 0.015*short*easeInCubic(p.map(d, 0, 0.5*p.width, 1, 0, true)));
            p.noFill();
            if (ui_element.contains(p.mouseX, p.mouseY)){
                p.stroke(230, 20, 20, ui_opacity);
            } else {
                p.stroke(230, ui_opacity);
            }
            ui_element.render();

            // Text rendering
            p.noStroke();
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght ${p.map(d/p.width, 1, 0, 100, 900, true)}`
            });
            if (ui_element.contains(p.mouseX, p.mouseY)){
                p.fill(230, 20, 20, ui_opacity);
            } else {
                p.fill(230, ui_opacity);
            }
            ui_element.textWriter.renderSequentialRandom(p.map(d, 100, mobile ? p.width : 0.5*p.width, 1, 0, true));
        });
        p.noFill();
        p.stroke(230);
        p.strokeWeight(2);
        p.noStroke();
        p.fill(230);
        p.textAlign(p.LEFT, p.TOP);
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        if (animation_manager.t > 10000){
            intro_texts[0].renderTransition(p.map(intro_texts[0].dist(smoothX, smoothY), 100, 250, 0, 1, true), "Benjamin Lappalainen", "BLAP64");
            intro_texts[1].render();
            intro_texts[2].render();
            intro_texts[3].render();
        } else {
            animation_manager.execute(p);
        }

        // Update cursor based on hover state
        updateCursor(p, p.mouseX, p.mouseY, ui);
	}

	p.mousePressed = function(event){
	    if (event && event.button !== 0) {
            return;
        }

        // Block all interactions if help popup is open
        if (window.helpPopupOpen || window.contactPopupOpen) {
            return;
        }

        // Skip intro animations if they're still running
        if (ui_opacity < 128 && !skipAnimations) {
            skipAnimations = true;
            // Set final states immediately
            intro_texts[0].t = "BLAP64";
            intro_texts[1].t = "I play many roles:";
            intro_texts[2].t = "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR";
            intro_texts[3].t = "and more...";
            ui_opacity = 255;
            animation_manager.t = 999999;
            return;
        }

	    if (ui_opacity < 128){
            return;
		}
        const ANIMATION_DELAY = 500;
        ui.forEach((ui_element, index) => {
			if (ui_element.contains(p.mouseX, p.mouseY)){
				// Navigate based on which UI element was clicked
				if (window.appRouter) {
					switch(index) {
						case 0: // First button - INTERACTIVE
						    setTimeout(() => {
    							window.appRouter.navigate('/interactive');
    						}, ANIMATION_DELAY);
							break;
						case 1: // Second button - PHOTO
							setTimeout(() => {
								window.appRouter.navigate('/photo');
							}, ANIMATION_DELAY);
							break;
						case 2: // Third button - ABOUT
    						setTimeout(() => {
    							window.appRouter.navigate('/about');
    						}, ANIMATION_DELAY);
							break;
                        case 3: // Fourth button - LINKS
                            setTimeout(() => {
                                window.appRouter.navigate('/links');
                            }, ANIMATION_DELAY);
                            break;
                        case 4: // Fifth button - BLOG
                            setTimeout(() => {
                                window.location.href = '/newsletter/';
                            }, ANIMATION_DELAY);
					}
				}
                return;
			}
        });
	}

    p.touchStarted = function(event) {
        // Block all interactions if help popup is open
        if (window.helpPopupOpen) {
            return false;
        }

        // Skip intro animations if they're still running (touch support)
        if (ui_opacity < 128 && !skipAnimations) {
            skipAnimations = true;
            // Set final states immediately
            intro_texts[0].t = "BLAP64";
            intro_texts[1].t = "I play many roles:";
            intro_texts[2].t = "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR";
            intro_texts[3].t = "and more...";
            ui_opacity = 255;
            animation_manager.t = 999999;
            return false;
        }
        return false;
    }

	// Enhanced windowResized function that automatically updates all UI elements
	// Maintains proportional positioning and sizing based on new canvas dimensions
	// Preserves animation states when not skipping animations
	p.windowResized = function windowResized() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        mobile = widthCheck(p.width);

        // Update font sizes based on new dimensions
        font_sizes = getFontSizes(p.width, p.height);

        // Update padding based on new width
        let padding = [0.05, 0.15];
        if (mobile){
            padding = [0.025, 0.05];
        }
        // Clear and recreate UI elements with new proportional positions
        // UI elements: corner box, arc, and triangle buttons at 25%, 50%, 75% width
        ui.length = 0;
        const s_font = mobile ? 14 : Math.min(Math.max(0.022*p.width, 32), 48);
        ui.push(new UICornerBoxButton(p, 0.25*p.width, 0.7*p.height, 0.26*short, 0.26*short, 0.01*p.width, 0.01*p.width, "INTERACTIVE\nMEDIA", s_font));
		ui.push(new UIArcButton(p, 0.5*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "PHOTO", s_font));
		ui.push(new UITriangleButton(p, 0.75*p.width, 0.35*p.height, 0.2*short, 0.2*short, 0.01*p.width, 0.01*p.width, -0.5*p.PI, "ABOUT", s_font));
		ui.push(new UIHexButton(p, 0.75*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "LINKS", s_font));
		ui.push(new UILinesButton(p, 0.82*p.width, 0.78*p.height, 0.22*short, 0.16*short, 0.01*p.width, 0.01*p.width, "BLOG", s_font));

        // Apply quadratic curve layout to UI elements
        layoutUI();


        // Update intro text elements positions and sizes
        if (skipAnimations) {
            // Preserve final states when skipping animations
            intro_texts.length = 0;
            intro_texts.push(new TextWriter(p, padding[0] * p.width, padding[0] * p.width, 0.8*p.width, p.height / 2, "BLAP64", font_sizes.large));
            intro_texts.push(new TextWriter(p, padding[1] * p.width, 0.18 * p.height, p.width / 2, p.height / 2, "I play many roles:", font_sizes.small));
            intro_texts.push(new TextWriter(p, padding[1] * p.width, 0.22 * p.height, p.width, p.height / 2, "CREATIVE TECHNOLOGIST\nARTIST\nEDUCATOR", font_sizes.medium));
            intro_texts.push(new TextWriter(p, padding[1] * p.width, 0.22 * p.height + (mobile ? 4.0 : 3.8) * font_sizes.medium, p.width, p.height / 2, "and more...", font_sizes.small));
        } else {
            // Update positions but preserve current animation states and text content
            intro_texts[0].p.x = padding[0] * p.width;
            intro_texts[0].p.y = padding[0] * p.width;
            intro_texts[0].s.x = 0.8*p.width;
            intro_texts[0].s.y = p.height / 2;
            intro_texts[0].size = font_sizes.large;

            intro_texts[1].p.x = padding[1] * p.width;
            intro_texts[1].p.y = 0.18 * p.height;
            intro_texts[1].s.x = p.width / 2;
            intro_texts[1].s.y = p.height / 2;
            intro_texts[1].size = font_sizes.small;

            intro_texts[2].p.x = padding[1] * p.width;
            intro_texts[2].p.y = 0.22 * p.height;
            intro_texts[2].s.x = p.width;
            intro_texts[2].s.y = p.height / 2;
            intro_texts[2].size = font_sizes.medium;
            intro_texts[3].p.x = padding[1] * p.width;
            intro_texts[3].p.y = 0.22 * p.height + (mobile ? 4.0 : 3.8) * font_sizes.medium;
            intro_texts[3].size = font_sizes.small;
        }
     };



    function setUIOpacity(v) {
        ui_opacity = 255*v;
    }

    // Layout UI elements along a quadratic curve going up towards the right
    function layoutUI() {
        if (ui.length === 0) return;

        const curveCount = ui.length - 1; // all but blog (last element)

        if (mobile) {
            // Mobile layout: V-shape — Blog at bottom centre, arms rising left and right
            const blogX = 0.5 * p.width;
            const blogY = 0.90 * p.height;
            const leftTopX = 0.21 * p.width;
            const rightTopX = 0.79 * p.width;
            const topY = 0.45 * p.height;
            const midY = p.lerp(blogY, topY, 0.5);

            // Blog - bottom centre (apex of V)
            ui[curveCount].p.x = blogX;
            ui[curveCount].p.y = blogY;
            ui[curveCount].textWriter.p.x = blogX;
            ui[curveCount].textWriter.p.y = blogY + 2;

            // Photo - top of left arm, offset down
            ui[1].p.x = leftTopX;
            ui[1].p.y = topY + 0.04 * p.height;
            ui[1].textWriter.p.x = leftTopX;
            ui[1].textWriter.p.y = topY + 0.04 * p.height;

            // About - left arm midpoint, offset down
            ui[2].p.x = 0.30 * p.width;
            ui[2].p.y = midY + 0.04 * p.height;
            ui[2].textWriter.p.x = ui[2].p.x;
            ui[2].textWriter.p.y = ui[2].p.y;

            // Interactive Media - top of right arm, shifted left
            ui[0].p.x = rightTopX - 0.07 * p.width;
            ui[0].p.y = topY;
            ui[0].textWriter.p.x = rightTopX - 0.07 * p.width;
            ui[0].textWriter.p.y = topY;

            // Links - right arm midpoint
            ui[3].p.x = 0.70 * p.width;
            ui[3].p.y = midY;
            ui[3].textWriter.p.x = ui[3].p.x;
            ui[3].textWriter.p.y = ui[3].p.y;
        } else {
            // Desktop layout: quadratic curve for first 4 buttons
            const startX = 0.15 * p.width;
            const startY = 0.75 * p.height;
            const endX = 0.85 * p.width;
            const endY = 0.2 * p.height;
            const controlX = 0.6 * p.width;
            const controlY = 0.65 * p.height;

            for (let i = 0; i < curveCount; i++) {
                const t = curveCount > 1 ? i / (curveCount - 1) : 0;
                const oneMinusT = 1 - t;
                const x = oneMinusT * oneMinusT * startX +
                         2 * oneMinusT * t * controlX +
                         t * t * endX;
                const y = oneMinusT * oneMinusT * startY +
                         2 * oneMinusT * t * controlY +
                         t * t * endY;
                ui[i].p.x = x;
                ui[i].p.y = y;
                ui[i].textWriter.p.x = x;
                ui[i].textWriter.p.y = y;
            }

            // Blog button fixed at bottom-right
            ui[curveCount].p.x = 0.82 * p.width;
            ui[curveCount].p.y = 0.78 * p.height;
            ui[curveCount].textWriter.p.x = 0.82 * p.width;
            ui[curveCount].textWriter.p.y = 0.78 * p.height + 2;
        }
    }
};

export const homeSketch = (node, options = {}) => {
    return new p5((p) => sketch(p, options), node);
};
