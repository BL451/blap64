import { getViewportSize, UITriangleButton, easeInCubic, smoothFollow, updateCursor } from "../../utils";

export const sketch = function (p) {
    let ui = [];
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let mobile = false;
    let cx, cy, r;

    p.setup = function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = getViewportSize();
        p.createCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        cx = 0.5 * p.width;
        cy = 0.6 * p.height;
        r = 0.2 * short;
        layoutUI();
        p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        p.strokeCap(p.PROJECT);
        // p5 in instance mode doesn't seem to work well with elements in a shadow root and doesn't remove the "p5_loading" div by itself
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
    };

    p.draw = function draw() {
        p.background(23);
        smoothX = smoothFollow(p.mouseX, smoothX, 0.003*p.deltaTime);
		smoothY = smoothFollow(p.mouseY, smoothY, 0.003*p.deltaTime);
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        ui.forEach((ui_element) => {
            const l = ui_element.dist(smoothX, smoothY);
            ui_element.cs.x = easeInCubic(p.map(l, 0, 0.5*p.width, 1, 0));
            ui_element.cs.y = easeInCubic(p.map(l, 0, 0.5*p.width, 1, 0));
            //p.strokeWeight(1 + 0.015*short*easeInCubic(p.map(l, 0, 0.5*p.width, 1, 0, true)));
            p.noFill();
            if (ui_element.contains(p.mouseX, p.mouseY)){
                p.stroke(230, 20, 20);
            } else {
                p.stroke(230);
            }
            ui_element.renderTriangle();

            // Text rendering
            p.noStroke();
            let d = 0;
            if (!mobile){
                d = l; //ui_element.textWriter.dist(smoothX, smoothY);
            }
            p.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght ${p.map(d/p.width, 1, 0, 100, 900, true)}`
            });
            if (ui_element.contains(p.mouseX, p.mouseY)){
                p.fill(230, 20, 20);
            } else {
                p.fill(230);
            }
            ui_element.textWriter.renderSequentialRandom(p.map(d, 100, 0.5*p.width, 1, 0, true));
        });
        renderDecor();

        // Update cursor based on hover state
        updateCursor(p, p.mouseX, p.mouseY, ui);
    };

    p.windowResized = function windowResized() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        cx = 0.5*p.width;
        cy = 0.6 * p.height;
        r = 0.2 * short;
        layoutUI();
    };

    p.mousePressed = function(event){
        if (event && event.button !== 0) {
            return;
        }
        const ANIMATION_DELAY = 500;
        ui.forEach((ui_element, index) => {
		if (ui_element.contains(p.mouseX, p.mouseY)){
			// Navigate based on which UI element was clicked
			if (window.appRouter) {
				switch(index) {
					case 0: // Projects and Installations
					    setTimeout(() => {
 							window.appRouter.navigate('/interactive/live');
  						}, ANIMATION_DELAY);
						break;
					case 1: // Physical Artifacts
						// Add photo route when available
						console.log('PHYSICAL ARTIFACTS COMING SOON');
						break;
					case 2: // Web art
      						setTimeout(() => {
     							window.appRouter.navigate('/about');
      						}, ANIMATION_DELAY);
						break;
				}
			}
                return;
		}
        });
	}

    function layoutUI(){
        ui.length = 0;
        const s_font = Math.max(0.022*p.width, 32);
        ui.push(new UITriangleButton(p, cx, cy - r, 0.1*short, 0.1*short, 0.01*p.width, 0.01*p.width, -0.5*p.PI, "LIVE\nEXPERIENCES", s_font));
        ui[0].setTextOffset(0, -0.9*r);
        ui.push(new UITriangleButton(p, cx - r*p.cos(p.PI/6), cy + r*p.sin(p.PI/6), 0.1*short, 0.1*short, 0.01*p.width, 0.01*p.width, -0.5*p.PI, "PHYSICAL\nARTIFACTS", s_font));
        ui[1].setTextOffset(-0.95*r*p.cos(p.PI/6), 0.95*r*p.sin(p.PI/6));
        ui.push(new UITriangleButton(p, cx + r*p.cos(p.PI/6), cy + r*p.sin(p.PI/6), 0.1*short, 0.1*short, 0.01*p.width, 0.01*p.width, -0.5*p.PI, "WEB\nEXPERIENCES", s_font));
        ui[2].setTextOffset(0.95*r*p.cos(p.PI/6), 0.95*r*p.sin(p.PI/6));
    }

    function renderDecor(){
        const t = 0.0003 * p.millis();
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        let m = p.createVector(smoothX, smoothY);
        let c = p.createVector(cx, cy);
        let new_v = p5.Vector.sub(m, c);
        const h = new_v.heading();
        let new_cx = cx + 0.1 * p.min(new_v.mag(), 3*r) * p.cos(h);
        let new_cy = cy + 0.1 * p.min(new_v.mag(), 3*r) * p.sin(h);
        p.circle(new_cx, new_cy, 0.5 * r);
        let a_mod = -h;
        let a0 = a_mod + zcn(t);
        let a1 = 2*p.PI / 3 + a_mod + zcn(t);
        let a2 = 4 * p.PI / 3 + a_mod + zcn(t);
        let c00 = radialToCartesian(0.2 * r, a0);
        let c01 = radialToCartesian(0.3 * r, a0);
        let c10 = radialToCartesian(0.2 * r, a1);
        let c11 = radialToCartesian(0.3 * r, a1);
        let c20 = radialToCartesian(0.2 * r, a2);
        let c21 = radialToCartesian(0.3 * r, a2);
        p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
        p.line(new_cx + c10.x, new_cy + c10.y, new_cx + c11.x, new_cy + c11.y);
        p.line(new_cx + c20.x, new_cy + c20.y, new_cx + c21.x, new_cy + c21.y);
        a_mod = p.abs(a_mod);
        for (let i = 0; i < 3; i++){
            let ad = p.PI * zcn(0.1 * a_mod + 0.0003 * p.millis());
            a0 = i * p.TWO_PI / 3 + 0.6 * p.PI / 6 + a_mod + ad;
            a1 = i * p.TWO_PI / 3 + 1.4 * p.PI / 6 + a_mod + ad;
            c00 = radialToCartesian(0.5*r, a0);
            c01 = radialToCartesian(0.5*r, a1);
            p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
            let lm = (0.02 * a_mod/p.PI) + 0.02;
            let rmi = (0.5 - lm) * r;
            let rmo = (0.5 + lm) * r;
            c00 = radialToCartesian(rmi, a0);
            c01 = radialToCartesian(rmo, a0);
            p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
            c00 = radialToCartesian(rmi, a1);
            c01 = radialToCartesian(rmo, a1);
            p.line(new_cx + c00.x, new_cy + c00.y, new_cx + c01.x, new_cy + c01.y);
        }

    }

    function radialToCartesian(r, a){
        return { x: r * p.cos(a), y: -r * p.sin(a) };
    }

    function zcn(x=0, y=0, z=0){
        return 2*(p.noise(x, y, z)-0.5);
    }
};

export const codeartSketch = (node) => {
    return new p5(sketch, node);
};
