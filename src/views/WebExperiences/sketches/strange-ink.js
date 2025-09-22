export const sketch = function (p, options = {}) {
    let fboA, fboB;
    let fill_color;
    let short_side, long_side;
    let n_circles;
    let leftPressed, rightPressed;

    p.setup = function() {
        p.frameRate(60);
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);
        short_side = p.min(p.width, p.height);
        long_side = p.max(p.width, p.height);
        p.noStroke();
        fill_color = 0;
        p.fill(fill_color);
        n_circles = 42;
        fboA = p.createFramebuffer({format: p.FLOAT});
        fboB = p.createFramebuffer({format: p.FLOAT});
        fboA.begin();
        p.background(255);
        p.circle(p.width/4, 0, p.width/8);
        p.circle(-p.width/4, 0, p.width/8);
        fboA.end();
        leftPressed = false;
        rightPressed = false;

    }

    p.draw = function() {
        p.background(255);
        [fboA, fboB] = [fboB, fboA];
        fboA.begin();
        p.image(fboB, -p.width/2, -p.height/2, p.width, p.height);
        if (p.mouseIsPressed){
            p.circle(p.mouseX-p.width/2, p.mouseY-p.height/2, 0.03*long_side);
        }
        // This is the magic :)
        // Blur the image heavily to create gradients wherever the circles are
        p.filter(p.BLUR, 5 + p.map(p.width, 1024, 1920, -1, 2));
        // Threshold to create defined blobs from those gradient regions
        p.filter(p.THRESHOLD, 0.51);
        fboA.end();
        p.image(fboA, -p.width/2, -p.height/2, p.width, p.height);
        // Blur again a little bit to smooth things out
        p.filter(p.BLUR, 4);
    }

    p.doubleClicked = function(){
        if (fill_color == 0){
            fill_color = 255;
        } else {
            fill_color = 0;
        }
        p.fill(fill_color);
    }

    p.keyPressed = function(){
        if (p.key == "s"){
            p.save("Strange_Ink.png");
        }
    }

    p.windowResized = function(){
        p.setup();
    }
}