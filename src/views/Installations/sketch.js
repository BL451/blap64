import { getViewportSize, UITriangleButton, UIPlanetButton, easeInCubic, smoothFollow, loadGoogleFontSet } from "../../utils";
import { projects } from "./project-details";

export const sketch = function (p) {
    let ui = [];
    let short = 128;
    let smoothX = 0;
    let smoothY = 0;
    let smoothV = p.createVector(smoothX, smoothY);
    let mobile = false;
    let cx, cy, r;
    let planetButtons = [];
    let star_colours = ['#faa000', '#0842f5', '#e61414'];

    p.setup = async function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = getViewportSize();
        p.createCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        cx = 0.5 * p.width;
        cy = 0.5 * p.height;
        r = 0.08 * short;
        setupSolarSystem(r);
        layoutUI();
        p.background(23);
        p.textAlign(p.CENTER, p.CENTER);
        p.strokeCap(p.PROJECT);
        await loadGoogleFontSet('../../assets/fonts/BPdotsSquareVF.ttf');
        p.textFont('BPdotsSquareVF', {
            fontVariationSettings: `wght 900`
        });
        // p5 in instance mode doesn't seem to work well with elements in a shadow root and doesn't remove the "p5_loading" div by itself
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
    };

    p.draw = function draw() {
        p.background(23);
        smoothX = smoothFollow(p.mouseX, smoothX, 0.003*p.deltaTime);
		smoothY = smoothFollow(p.mouseY, smoothY, 0.003*p.deltaTime);
        smoothV.x = smoothX;
        smoothV.y = smoothY;
        p.noFill();
        p.stroke(230);
        p.strokeWeight(1);
        renderSolarSystem();
        p.noFill();
        p.stroke(230, 50);
        const s = short * 0.03;
        p.push();
        p.translate(smoothX, smoothY);
        p.rotate(p.TWO_PI*p.noise(smoothX / short, smoothY / short, 0.0001*p.millis()));
        p.circle(0, 0, 0.33*s);
        p.triangle(s, 0, s*p.cos(p.TWO_PI/3), s*p.sin(p.TWO_PI/3), s*p.cos(2*p.TWO_PI/3), s*p.sin(2*p.TWO_PI/3));
        p.pop();
    };

    p.windowResized = function windowResized() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
        cx = 0.5 * p.width;
        cy = 0.5 * p.height;
        r = 0.08 * short;
        setupSolarSystem(r);
        layoutUI();
    };

    p.mousePressed = function(){
        const ANIMATION_DELAY = 500;

        // Check UI elements
        ui.forEach((ui_element, index) => {
		if (ui_element.contains(p.mouseX, p.mouseY)){
			// Navigate based on which UI element was clicked
			if (window.appRouter) {
				switch(index) {
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

        // Check planet buttons
        planetButtons.forEach((planetButton, index) => {
            if (planetButton.contains(p.mouseX, p.mouseY)){
                // Add planet-specific actions here
                return;
            }
        });
	}

    function layoutUI(){
        ui.length = 0;
        const s_font = Math.max(0.022*p.width, 32);
    }

    function setupSolarSystem(starRadius){
        planetButtons = [];
        /*
        If this gets too busy, we could consider having a "system" for each year that can be selected from a side/bottom menu?
        OR we make a larger virtual canvas and "pan" around to visit other systems? >:^)
        */
        const planetCount = projects.length;

        for (let i = 0; i < planetCount; i++){
            const orbitRadius = starRadius * (1.8 + i * 0.8);
            const angle = p.random(p.TWO_PI);
            const speed = 0.00005 / (1 + i * 0.3);
            const size = starRadius * (0.3 + p.random(0.2));
            const color = p.map(i, 0, planetCount, 230, 120);
            const textSize = Math.max(10, size * 0.5);
            const textOffsetY = size * 1.2; // Position text below planet

            planetButtons.push(new UIPlanetButton(p, 0, 0, size, orbitRadius, angle, speed, color, projects[i].name, textSize, 0, textOffsetY));
        }
    }

    function renderSolarSystem(){
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

    function renderStar(x, y, radius){
        // Draw the central star body
        p.fill(star_colours[0]);
        p.noStroke();
        p.circle(x, y, radius * 0.8);

        // Draw rotating triangle ring
        const triangleCount = 3;
        const ringRadius = radius * (0.69 + 0.03*p.sin(0.001*p.millis()));
        const triangleSize = radius * 0.15;
        const rotationSpeed = 0.00005;
        const currentTime = p.millis();
        const rotationAngle = currentTime * rotationSpeed;
        for (let i = 0; i < triangleCount; i++){
            const angle = (p.TWO_PI / triangleCount) * i + rotationAngle;
            const trianglePos = radialToCartesian(ringRadius, angle);
            const triangleX = x + trianglePos.x;
            const triangleY = y + trianglePos.y;

            p.push();
            p.translate(triangleX, triangleY);
            p.rotate(-angle + p.HALF_PI); // Point triangles outward
            p.triangle(0, -triangleSize*0.6, -triangleSize * 0.5, triangleSize * 0.5, triangleSize * 0.5, triangleSize * 0.5);
            p.pop();
        }
    }



    function radialToCartesian(r, a){
        return { x: r * p.cos(a), y: -r * p.sin(a) };
    }

    function zcn(x=0, y=0, z=0){
        return 2*(p.noise(x, y, z)-0.5);
    }
};

export const installationsSketch = (node) => {
    return new p5(sketch, node);
};
