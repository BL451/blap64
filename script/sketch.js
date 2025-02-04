const home_bg = new p5((p) => {
    let fbo = undefined;
    let short = 128;

    p.setup = function setup() {
        p.pixelDensity(1);
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.background(100);
        // Options for creating our framebuffer, width and height relative to the size of our canvas determine the pixelation appearance
        const options = {
            width: 128,
            height: 128,
            textureFiltering: p.NEAREST, // Required to prevent interpolation (blurring) when we upscale the image. Gives the pixelated effect that we're going for
        };
        // Disable p5's smoothing
        p.noSmooth();
        short = p.min(p.width, p.height);
        // Make the framebuffer
        fbo = p.createFramebuffer(options);
    };

    p.draw = function draw() {
        p.background(0);
        fbo.begin(); // Begin drawing stuff in the framebuffer
        p.noFill();
        p.stroke(200, 20, 20);
        p.strokeWeight(p.abs(p.sin(p.frameCount / 42)));
        p.clear();
        p.background(0);
        p.rotateX(p.frameCount / 50);
        p.rotateY(p.frameCount / 200);
        const s = 12;
        p.translate(-3 * s, -3 * s, 0);
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                p.push();
                p.translate(i * s, j * s, 0);
                p.rotateZ(((1 + i + j) * p.frameCount) / 100);
                p.box(s * 0.8);
                p.pop();
            }
        }
        fbo.end(); // Finish drawing stuff in the framebuffer
        // Render an image of the framebuffer, centering and stretching it to the size of the canvas
        p.image(fbo, -short / 2, -short / 2, short, short);
    };

    p.windowResized = function windowResized() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        short = p.min(width, height);
    };
}, "home_bg");
