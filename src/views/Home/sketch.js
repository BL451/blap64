import { smoothFollow, easeInCubic, getFontSizes, widthCheck, loadGoogleFontSet, injectFontLink } from "../../utils";

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
		await loadGoogleFontSet('../../assets/fonts/BPdotsSquareVF.ttf');
		p.textAlign(p.CENTER, p.CENTER);
		short = p.min(p.width, p.height);
		const s_font = Math.max(0.025*p.width, 32);
		ui.push(new UICornerBoxButton(0.25*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "INTERACTIVE\nMEDIA", s_font));
		ui.push(new UIArcButton(0.5*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "PHOTO", s_font));
		ui.push(new UITriangleButton(0.75*p.width, 0.35*p.height, 0.2*short, 0.2*short, 0.01*p.width, 0.01*p.width, -0.5*p.PI, "ABOUT", s_font));
		ui.push(new UIHexButton(0.75*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "DOWNLOAD", s_font));

		// Apply quadratic curve layout to UI elements
		layoutUI();
		smoothX = p.width/2;
		smoothY = p.height/2;
		p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        font_sizes = getFontSizes(p.width, p.height);
        let padding = [0.04, 0.15];
        if (mobile){
            padding = [0.025, 0.05];
        }

        intro_texts.push(new TextWriter(padding[0] * p.width, padding[0] * p.width, p.width, p.height / 2, "HELLO, FRIEND.", font_sizes.large));
        intro_texts.push(new TextWriter(padding[1] * p.width, 0.18 * p.height, p.width / 2, p.height / 2, "I play many roles:", font_sizes.small));
        intro_texts.push(new TextWriter(padding[1] * p.width, 0.22 * p.height, p.width, p.height / 2, "CREATIVE TECHNOLOGIST\nEDUCATOR\nARTIST", font_sizes.medium));

        animation_states = [
            {
                "start_time": 1000,
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
                "idx": 2,
                "fn": intro_texts[2].renderTransition.bind(intro_texts[2]),
                "args": ["CREATIVE TECHNOLOGIST\nEDUCATOR\nARTIST", "CREATIVE TECHNOLOGIST\nEDUCATOR\nARTIST\nand more..."],
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
        ];
        animation_manager = new AnimationManager(animation_states);

        // Skip animations if requested
        if (skipAnimations) {
            // Set final states immediately
            intro_texts[0].t = "BLAP64";
            intro_texts[1].t = "I play many roles:";
            intro_texts[2].t = "CREATIVE TECHNOLOGIST\nEDUCATOR\nARTIST\nand more...";
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
		smoothX = smoothFollow(p.mouseX, smoothX, 0.003*p.deltaTime);
		smoothY = smoothFollow(p.mouseY, smoothY, 0.003*p.deltaTime);
		p.clear();
		p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        ui.forEach((ui_element) => {
 			const l = ui_element.dist(smoothX, smoothY);
 			ui_element.cs.x = easeInCubic(p.map(l, 0, 0.5*p.width, 1, 0));
 			ui_element.cs.y = easeInCubic(p.map(l, 0, 0.5*p.width, 1, 0));
 			p.strokeWeight(1 + 0.015*short*easeInCubic(p.map(l, 0, 0.5*p.width, 1, 0, true)));
 			p.noFill();
 			if (ui_element.contains(p.mouseX, p.mouseY)){
                p.stroke(230, 20, 20, ui_opacity);
 			} else {
                p.stroke(230, ui_opacity);
 			}
 			ui_element.render();
  		});
        p.noStroke();
        ui.forEach((ui_element) => {
            let d = 0;
            if (!mobile){
                d = ui_element.textWriter.dist(smoothX, smoothY);
            }
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght ${p.map(d/p.width, 1, 0, 100, 900, true)}`
            });
            if (ui_element.contains(p.mouseX, p.mouseY)){
				p.fill(230, 20, 20, ui_opacity);
 			} else {
                p.fill(230, ui_opacity);
 			}
            ui_element.textWriter.renderSequentialRandom(p.map(d, 100, 0.5*p.width, 1, 0, true));
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
        animation_manager.execute();
	}

	p.mousePressed = function(){
	    if (ui_opacity == 0){
            return;
		}
        ui.forEach((ui_element, index) => {
			if (ui_element.contains(p.mouseX, p.mouseY)){
				// Navigate based on which UI element was clicked
				if (window.appRouter) {
					switch(index) {
						case 0: // First button - INTERACTIVE
							console.log('Interactive Media section coming soon!')
						    //window.appRouter.navigate('/codeart');
							break;
						case 1: // Second button - PHOTO
							// Add photo route when available
							console.log('Photo section coming soon!');
							break;
						case 2: // Third button - ABOUT
    						setTimeout(() => {
    							window.appRouter.navigate('/about');
    						}, 500);
							break;
					}
				}
                return;
			}
        });
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
        const s_font = 0.025*p.width;
        ui.push(new UICornerBoxButton(0.25*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "INTERACTIVE\nMEDIA", s_font));
		ui.push(new UIArcButton(0.5*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "PHOTO", s_font));
		ui.push(new UITriangleButton(0.75*p.width, 0.35*p.height, 0.2*short, 0.2*short, 0.01*p.width, 0.01*p.width, -0.5*p.PI, "ABOUT", s_font));
		ui.push(new UIHexButton(0.75*p.width, 0.7*p.height, 0.3*short, 0.3*short, 0.01*p.width, 0.01*p.width, "DOWNLOAD", s_font));

        // Apply quadratic curve layout to UI elements
        layoutUI();


        // Update intro text elements positions and sizes
        if (skipAnimations) {
            // Preserve final states when skipping animations
            intro_texts.length = 0;
            intro_texts.push(new TextWriter(padding[0] * p.width, padding[0] * p.width, 0.8*p.width, p.height / 2, "BLAP64", font_sizes.large));
            intro_texts.push(new TextWriter(padding[1] * p.width, 0.18 * p.height, p.width / 2, p.height / 2, "I play many roles:", font_sizes.small));
            intro_texts.push(new TextWriter(padding[1] * p.width, 0.22 * p.height, p.width, p.height / 2, "CREATIVE TECHNOLOGIST\nEDUCATOR\nARTIST\nand more...", font_sizes.medium));
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
        }

        // Update smooth follow targets to new center
        smoothX = p.width/2;
        smoothY = p.height/2;
     };

    function getViewportSize() {
        let vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0,
        );
        let vh = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0,
        );
        return { width: vw, height: vh };
    }

    function setUIOpacity(v) {
        ui_opacity = 255*v;
    }

    // Layout UI elements along a quadratic curve going up towards the right
    function layoutUI() {
        if (ui.length === 0) return;

        if (mobile) {
            // Mobile layout: arrange in 2x2 grid in lower third of screen
            const gridCenterX = 0.5 * p.width;
            const gridCenterY = 0.7 * p.height; // Lower third of screen
            const gridSpacing = 0.4 * p.width; // Spacing between grid positions

            // Grid positions: 2x2 layout
            const gridPositions = [
                { x: gridCenterX - gridSpacing/2, y: gridCenterY - gridSpacing/2 }, // Top-left
                { x: gridCenterX + gridSpacing/2, y: gridCenterY - gridSpacing/2 }, // Top-right
                { x: gridCenterX - gridSpacing/2, y: gridCenterY + gridSpacing/2 }, // Bottom-left
                { x: gridCenterX + gridSpacing/2, y: gridCenterY + gridSpacing/2 }  // Bottom-right
            ];

            // Position UI elements in grid
            for (let i = 0; i < ui.length; i++) {
                const pos = gridPositions[i % gridPositions.length]; // Handle more than 4 elements

                // Update UI element position
                ui[i].p.x = pos.x;
                ui[i].p.y = pos.y;

                // Update corresponding TextWriter position
                ui[i].textWriter.p.x = pos.x;
                ui[i].textWriter.p.y = pos.y;
            }
        } else {
            // Desktop layout: quadratic curve
            // Define curve parameters - curve goes from bottom-left to top-right
            const startX = 0.15 * p.width;  // Start X position (15% from left)
            const startY = 0.75 * p.height; // Start Y position (75% from top, near bottom)
            const endX = 0.85 * p.width;    // End X position (85% from left)
            const endY = 0.2 * p.height;    // End Y position (20% from top, near top)

            // Quadratic curve control point to create convex upward arc
            const controlX = 0.6 * p.width;  // Control point X
            const controlY = 0.65 * p.height; // Control point Y (creates convex curve)

            // Calculate positions for each UI element along the curve
            for (let i = 0; i < ui.length; i++) {
                // Parameter t goes from 0 to 1 along the curve
                const t = ui.length > 1 ? i / (ui.length - 1) : 0;

                // Quadratic Bezier curve formula: P(t) = (1-t)²P₀ + 2(1-t)tP₁ + t²P₂
                const oneMinusT = 1 - t;
                const x = oneMinusT * oneMinusT * startX +
                         2 * oneMinusT * t * controlX +
                         t * t * endX;
                const y = oneMinusT * oneMinusT * startY +
                         2 * oneMinusT * t * controlY +
                         t * t * endY;

                // Update UI element position
                ui[i].p.x = x;
                ui[i].p.y = y;

                // Update corresponding TextWriter position
                ui[i].textWriter.p.x = x;
                ui[i].textWriter.p.y = y;
            }
        }
    }

	class AnimationManager{
	    constructor(states){
            this.states = states;
            this.to_render = {};
            this.t = 0;
		}

		execute(){
            this.t += p.deltaTime;
            const t = this.t;
            this.to_render = {};
            this.states.every((state, i) => {
                if (t >= state.start_time && t < state.start_time + state.duration){
                    this.to_render[state.idx] = i;
                } else if (t >= state.start_time + state.duration && state.persist){
                    this.to_render[state.idx] = i;
                }
                return true;
            });
            Object.values(this.to_render).forEach((idx) => {
                const progress = Math.min((t - this.states[idx].start_time) / this.states[idx].duration, 1);
                this.states[idx].fn(progress, ...this.states[idx].args);
            });
		}
	}

	class UIObj{
		constructor(x, y, w, h){
			this.p = p.createVector(x, y);
			this.s = p.createVector(w, h);
		}

		dist(x, y){
			const v = p.createVector(x, y);
			return p5.Vector.dist(this.p, v);
		}
	}

	class UICornerBoxButton extends UIObj{
		constructor(x, y, w, h, sx, sy, text, textSize){
			super(x, y, w, h);
			this.cs = p.createVector(sx, sy);
			this.textWriter = new TextWriter(x, y, undefined, undefined, text, textSize);
		}

		contains(x, y){
			return this.insideBox(x, y, this.p.x, this.p.y, this.s.x, this.s.y);
		}

		insideBox(pointX, pointY, boxCenterX, boxCenterY, boxWidth, boxHeight) {
			// Calculate the box boundaries from center and dimensions
			const left = boxCenterX - boxWidth / 2;
			const right = boxCenterX + boxWidth / 2;
			const top = boxCenterY - boxHeight / 2;
			const bottom = boxCenterY + boxHeight / 2;

			// Check if point is within all boundaries
			return pointX >= left && pointX <= right && pointY >= top && pointY <= bottom;
		}

		render(){
			let sx = p.constrain(this.s.x*(this.cs.x-0.5), -0.1*this.s.x, this.s.x);
			let sy = p.constrain(this.s.y*(this.cs.y-0.5), -0.1*this.s.y, this.s.y);
			this.corners(this.p.x, this.p.y, this.s.x, this.s.y, sx, sy);
		}

		corners(x, y, w, h, sx, sy){
			const top_left = { x: x - 0.5 * w, y: y - 0.5 * h };
			const top_right = { x: x + 0.5 * w, y: y - 0.5 * h };
			const bottom_left = { x: x - 0.5 * w, y: y + 0.5 * h };
			const bottom_right = { x: x + 0.5 * w, y: y + 0.5 * h };
			this.corner(top_left.x, top_left.y, sx, sy);
			this.corner(top_right.x, top_right.y, -sx, sy);
			this.corner(bottom_left.x, bottom_left.y, sx, -sy);
			this.corner(bottom_right.x, bottom_right.y, -sx, -sy);
		}

		corner(x, y, sx, sy){
			p.line(x, y, x + sx, y);
			p.line(x, y, x, y + sy);
		}
	}

	class UIArcButton extends UIObj{
		constructor(x, y, w, h, sx, sy, text, textSize){
			super(x, y, w, h);
			this.cs = p.createVector(sx, sy);
			this.textWriter = new TextWriter(x, y, undefined, undefined, text, textSize);
		}

		contains(x, y){
			return this.dist(x, y) <= this.s.x/2;
		}

		insideBox(pointX, pointY, boxCenterX, boxCenterY, boxWidth, boxHeight) {
			// Calculate the box boundaries from center and dimensions
			const left = boxCenterX - boxWidth / 2;
			const right = boxCenterX + boxWidth / 2;
			const top = boxCenterY - boxHeight / 2;
			const bottom = boxCenterY + boxHeight / 2;

			// Check if point is within all boundaries
			return pointX >= left && pointX <= right && pointY >= top && pointY <= bottom;
		}

		render(){
			p.arc(this.p.x, this.p.y, this.s.x, this.s.y, p.TWO_PI*this.cs.x, p.TWO_PI*this.cs.x - p.min(1.5*p.PI*(1-this.cs.x), 1.5*p.PI));
		}
	}

	class UITriangleButton extends UIObj{
		constructor(x, y, w, h, sx, sy, z, text, textSize){
			super(x, y, w, h);
			this.cs = p.createVector(sx, sy, z);
			this.top = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z), this.p.y + this.s.y*p.sin(this.cs.z));
			this.left = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z+2*p.PI/3), this.p.y + this.s.y*p.sin(this.cs.z+2*p.PI/3));
			this.right = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z+4*p.PI/3), this.p.y + this.s.y*p.sin(this.cs.z+4*p.PI/3));
			this.textWriter = new TextWriter(x, y, undefined, undefined, text, textSize);
		}

		render(){
			this.top = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z), this.p.y + this.s.y*p.sin(this.cs.z));
			this.left = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z+2*p.PI/3), this.p.y + this.s.y*p.sin(this.cs.z+2*p.PI/3));
			this.right = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z+4*p.PI/3), this.p.y + this.s.y*p.sin(this.cs.z+4*p.PI/3));
			this.cs.x = p.map(this.cs.x, 0, 1, 0.25, 0.08, true);
			const inter_top = p5.Vector.lerp(this.top, this.right, this.cs.x);
			const inter_left = p5.Vector.lerp(this.left, this.top, this.cs.x);
			const inter_right = p5.Vector.lerp(this.right, this.left, this.cs.x);
			const inter_top1 = p5.Vector.lerp(this.top, this.right, 1-this.cs.x);
			const inter_left1 = p5.Vector.lerp(this.left, this.top, 1-this.cs.x);
			const inter_right1 = p5.Vector.lerp(this.right, this.left, 1-this.cs.x);
			p.line(inter_top1.x, inter_top1.y, inter_top.x, inter_top.y);
			p.line(inter_left1.x, inter_left1.y, inter_left.x, inter_left.y);
			p.line(inter_right1.x, inter_right1.y, inter_right.x, inter_right.y);
		}

		contains(x, y){
			return this.isPointInTriangleFast(x, y, this.top.x, this.top.y, this.left.x, this.left.y, this.right.x, this.right.y);
		}

		isPointInTriangleFast(px, py, ax, ay, bx, by, cx, cy) {
			const d1 = this.sign(px, py, ax, ay, bx, by);
			const d2 = this.sign(px, py, bx, by, cx, cy);
			const d3 = this.sign(px, py, cx, cy, ax, ay);

			const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
			const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);

			return !(hasNeg && hasPos);
		}

		sign(px, py, ax, ay, bx, by) {
			return (px - bx) * (ay - by) - (ax - bx) * (py - by);
		}
	}

	class UIHexButton extends UIObj{
		constructor(x, y, w, h, sx, sy, text, textSize){
			super(x, y, w, h);
			this.cs = p.createVector(sx, sy);
			this.vertices = this.calculateHexVertices();
			this.textWriter = new TextWriter(x, y, undefined, undefined, text, textSize);
		}

		calculateHexVertices(){
			const vertices = [];
			for(let i = 0; i < 6; i++){
				const angle = (i * p.PI) / 3;
				const x = this.p.x + this.radius * p.cos(angle);
				const y = this.p.y + this.radius * p.sin(angle);
				vertices.push({x, y});
			}
			return vertices;
		}

		contains(x, y){
			return this.isPointInHexagon(x, y);
		}

		isPointInHexagon(px, py){
			// Simple distance-based check for hexagon containment
			return p.dist(px, py, this.p.x, this.p.y) <= this.radius;
		}

		render(){
			// Update vertices based on current position and size
			this.radius = Math.min(this.s.x, this.s.y) / 2;
			this.vertices = this.calculateHexVertices();

			// Draw hexagon with animation based on cs.x
			for(let i = 0; i < 6; i++){
				const currentVertex = this.vertices[i];
				const nextVertex = this.vertices[(i + 1) % 6];
				const prevVertex = this.vertices[(i - 1 + 6) % 6];

				// Calculate the line segment to draw based on cs.x
				// cs.x = 0: draw from corner towards center (small segments)
				// cs.x = 1: draw complete lines between vertices
				const progress = p.map(this.cs.x, 0, 1, 0.2, 0.9, true);

				// Offset from vertices - lines don't start exactly at the vertex
				const offset = 0.1; // 10% offset from vertex

				// Draw line towards next vertex
				const startToNextX = p.lerp(currentVertex.x, nextVertex.x, offset);
				const startToNextY = p.lerp(currentVertex.y, nextVertex.y, offset);
				const endX = p.lerp(currentVertex.x, nextVertex.x, offset + progress * (1 - offset));
				const endY = p.lerp(currentVertex.y, nextVertex.y, offset + progress * (1 - offset));
				p.line(startToNextX, startToNextY, endX, endY);

				// Draw line towards previous vertex
				const startToPrevX = p.lerp(currentVertex.x, prevVertex.x, offset);
				const startToPrevY = p.lerp(currentVertex.y, prevVertex.y, offset);
				const startX = p.lerp(currentVertex.x, prevVertex.x, offset + progress * (1 - offset));
				const startY = p.lerp(currentVertex.y, prevVertex.y, offset + progress * (1 - offset));
				p.line(startToPrevX, startToPrevY, startX, startY);
			}
		}
	}

	class TextWriter extends UIObj{
        constructor(x, y, w, h, t, size = 32, weight = undefined){
            super(x, y, w, h);
			this.t = t;
            this.size = size;
            this.weight = weight;
			this.alphabet = "~!@#$%&*_+=/<>?";
            this.progress = 0;
		}

		renderRandom(progress=undefined){
		    if (progress == undefined){
                progress = this.progress;
    		}
			const n = this.t.length;
			let t_render = "";
			for (let i = 0; i < n; i++){
				if (p.random() > progress){
					t_render += this.alphabet[p.floor(p.random(0, this.alphabet.length))];
				} else {
					t_render += this.t[i];
				}
			}
            p.textSize(this.size);
			p.text(t_render, this.p.x, this.p.y);
		}

		renderSequential(progress=undefined){
		    if (progress == undefined){
                progress = this.progress;
    		}
			const n = this.t.length;
			const n_letters = p.round(progress*n);
			let t_render = this.t.slice(0, n_letters);
			p.textSize(this.size);
			p.text(t_render, this.p.x, this.p.y);
		}

		renderSequentialRandom(progress=undefined){
		    if (progress == undefined){
                progress = this.progress;
    		}
            progress = p.constrain(progress, 0, 1);
			const n = this.t.length;
			const n_letters = p.round(progress*n);
			let t_render = this.t.slice(0, n_letters);
			// Create consistent randomness per character position
            p.randomSeed(progress * 12345 * n + p.millis());
			if (n_letters != n){
				t_render += this.alphabet[p.floor(p.random(0, this.alphabet.length))];
			}
            p.randomSeed();
            p.textSize(this.size);
            if (this.s.x){
                p.text(t_render, this.p.x, this.p.y, this.s.x);
            } else {
                p.text(t_render, this.p.x, this.p.y);
            }
		}

		renderTransition(progress=undefined, start_string, end_string, glitch_width = 0.15) {
    		if (progress == undefined){
                progress = this.progress;
    		}
            p.textSize(this.size);
		    if (progress == 0){
				if (this.s.x){
                    p.text(start_string, this.p.x, this.p.y, this.s.x);
                } else {
                    p.text(start_string, this.p.x, this.p.y);
                }
                return;
            } else if (progress == 1){
                if (this.s.x){
                    p.text(end_string, this.p.x, this.p.y, this.s.x);
                } else {
                    p.text(end_string, this.p.x, this.p.y);
                }
            }
			progress = p.map(progress, 0, 1, 0, 1 + glitch_width, true);
            const max_length = Math.max(start_string.length, end_string.length);
            let t_render = "";

            for (let i = 0; i < max_length; i++) {
                const start_char = i < start_string.length ? start_string[i] : "";
                const end_char = i < end_string.length ? end_string[i] : "";

                // Create consistent randomness per character position
                p.randomSeed(i * 12345 + Math.floor(p.millis() / 30));
                const char_random = p.random();

                // Determine what to show based on progress and random chance
                if (char_random < progress - glitch_width || start_char == '\n') {
                    // Character has fully transitioned
                    t_render += end_char;
                } else if (char_random < progress + glitch_width) {
                    // Character is in glitch zone
                    if (start_char !== "" || end_char !== "") {
                        // Only show glitch if there's actually a character to transition
                        t_render += this.alphabet[p.floor(p.random(0, this.alphabet.length))];
                    }
                } else {
                    // Character hasn't started transitioning
                    t_render += start_char;
                }
            }

            // Reset random seed to not affect other random calls
            p.randomSeed();
            this.t = t_render;
            if (this.s.x){
                p.text(t_render, this.p.x, this.p.y, this.s.x);
            } else {
                p.text(t_render, this.p.x, this.p.y);
            }
        }

	}


};

export const homeSketch = (node, options = {}) => {
    return new p5((p) => sketch(p, options), node);
};
