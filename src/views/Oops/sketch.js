export const sketch = function (p) {
    let fbo = undefined;
    let short = 128;

    p.setup = function setup() {
        p.noCanvas();
        p.pixelDensity(1);
        const s = getViewportSize();
        p.createCanvas(s.width, s.height, p.WEBGL);
        p.background(100);
        // Options for creating our framebuffer, width and height relative to the size of our canvas determine the pixelation appearance
        const options = {
            width: 128,
            height: 128,
            textureFiltering: p.NEAREST, // Required to prevent interpolation (blurring) when we upscale the image. Gives the pixelated effect that we're going for
        };
        // Disable p5's smoothing
        p.noSmooth();
        p.ellipseMode(p.CENTER);
        short = p.min(s.width, s.height);
        // Make the framebuffer
        fbo = p.createFramebuffer(options);
        // p5 in instance mode doesn't seem to work well with elements in a shadow root and doesn't remove the "p5_loading" div by itself
        let bg = document.getElementById("bg");
        let loading_div = bg.shadowRoot.getElementById("p5_loading");
        if (loading_div) loading_div.remove();
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
        p.circle(0, 0, 64);
        p.rotateY(p.PI / 2);
        p.circle(0, 0, 64);
        fbo.end(); // Finish drawing stuff in the framebuffer
        // Render an image of the framebuffer, centering and stretching it to the size of the canvas
        p.image(fbo, -short / 2, -short / 2, short, short);
    };

    p.windowResized = function windowResized() {
        const s = getViewportSize();
        p.resizeCanvas(s.width, s.height);
        short = p.min(s.width, s.height);
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
};

export const oopsSketch = (node) => {
    new p5(sketch, node);
};
