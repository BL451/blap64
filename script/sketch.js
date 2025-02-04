let fbo = undefined;
let short = 128;
let font;

function setup() {
    pixelDensity(1);
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(100);
    // Options for creating our framebuffer, width and height relative to the size of our canvas determine the pixelation appearance
    const options = {
        width: 128,
        height: 128,
        textureFiltering: NEAREST, // Required to prevent interpolation (blurring) when we upscale the image. Gives the pixelated effect that we're going for
    };
    // Disable p5's smoothing
    noSmooth();
    short = min(width, height);
    // Make the framebuffer
    fbo = createFramebuffer(options);
}

function draw() {
    background(0);
    fbo.begin(); // Begin drawing stuff in the framebuffer
    noFill();
    stroke(200, 20, 20);
    strokeWeight(abs(sin(frameCount / 42)));
    clear();
    background(0);
    rotateX(frameCount / 50);
    rotateY(frameCount / 200);
    const s = 12;
    translate(-3 * s, -3 * s, 0);
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            push();
            translate(i * s, j * s, 0);
            rotateZ(((1 + i + j) * frameCount) / 100);
            box(s * 0.8);
            pop();
        }
    }
    fbo.end(); // Finish drawing stuff in the framebuffer
    // Render an image of the framebuffer, centering and stretching it to the size of the canvas
    image(fbo, -short / 2, -short / 2, short, short);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    short = min(width, height);
}
