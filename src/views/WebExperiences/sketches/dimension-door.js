export const sketch = function (p, options = {}) {
    let buff0, buff1;
    let palette;
    let start_y, end_y, start_x, end_x;
    let n_x, n_y;
    let x_increment, y_increment;

    p.setup = function() {
        p.frameRate(60);
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);
        buff0 = p.createFramebuffer(p.width, p.height);
        buff1 = p.createFramebuffer(p.width, p.height);
        p.imageMode(p.CENTER);
        p.colorMode(p.HSB);
        p.rectMode(p.CENTER);
        p.noStroke();
        start_y = p.height * 0.1;
        end_y = p.height * 0.9;
        start_x = p.width/4.0;
        end_x = 3.0*start_x;

        n_x = 36;
        n_y = n_x*p.height/p.width;

        x_increment = (end_x - start_x)/n_x;
        y_increment = (end_y - start_y)/n_y;

        palette = [p.color('#D81159'), p.color('#8F2D56'), p.color('#218380'), p.color('#FBB13C'), p.color('#73D2DE')];

        p.describe("Dimension Door - a swirling psychedelic vortex of multicoloured squares twists aggressively back and forth, seemingly descending into the black background.");
    }

    p.draw = function() {
        [buff0, buff1] = [buff1, buff0];

        let t = p.frameCount/14;

        buff1.begin();
        p.clear();

        p.push();
        p.rotate(0.25*wobbly(2.3*t, p.createVector(0, 0)));
        p.scale(0.85 + 0.1*wobbly(1.7*t, p.createVector(0, 0)));
        p.image(buff0, 0, 0);
        p.pop();

        for (let j = 0; j < n_y; j++){
            for (let i = 0; i < n_x; i++){
                let pt = p.createVector(i*x_increment, j*y_increment);
                let c = palette[j % palette.length];
                c.setAlpha(255*(j)/n_y);
                p.fill(c);
                p.square(1.45*start_x*wobbly(t, pt), start_y*4.2*wobbly(t+9999,pt), 2 + p.width/100*(1+i*j%3));
            }
        }

        buff1.end();
        p.background(5);
        p.image(buff1, 0, 0);
    }

    function wobbly(t, pt){
        return p.sin(t/11.0 + pt.x*2.3 - p.sin(t/4.2 - pt.y * 32.4) + p.sin(t/23.14 + 13.2*p.sin(t/51.2)));
    }

    p.windowResized = function(){
        p.setup();
    }
}
