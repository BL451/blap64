export const sketch = function (p, options = {}) {
    let x = 0;
    let y = 0;
    let idx = 0;
    let palette;
    let variants;
    let n_cols, n_rows;
    let x_step, y_step;
    let bg_c;

    p.setup = function() {
        p.frameRate(60);
        palette = [p.color('#F2E2C4'), p.color('#0477BF'), p.color('#F2B705'), p.color('#261D11'), p.color('#A6290D')];

        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        variants = [0,1,2,3,4,5,6,7];
        n_cols = 5;
        n_rows = p.floor(n_cols*p.height/p.width);
        x_step = p.floor(p.width/n_cols);
        y_step = p.floor(p.height/n_rows);
        x_step = p.max(x_step, y_step);
        y_step = x_step;
        p.noStroke();
        idx = p.floor(p.random(palette.length));
        bg_c = palette[idx];
        p.background(bg_c);
        p.noStroke();
        for (let j = 0; j < n_rows; j++){
            for (let i = 0; i < n_cols; i++){
                quadrant(i*x_step, j*y_step, x_step, y_step);
            }
        }

        p.describe("Infinite Bauhaus - Bauhaus-inspired geometric patterns that evolve infinitely.");
    }

    p.draw = function() {
        if (y++ == n_rows-1){
            y = 0;
            if (x++ == n_cols-1){
                x = 0;
                bg_c = palette[++idx % palette.length];
                n_cols++;
                n_rows++;
                x_step = p.floor(p.width/n_cols+1);
                y_step = p.floor(p.height/n_rows+1);
            }
        }
        p.fill(bg_c);
        p.rect(x*x_step, y*y_step, x_step, y_step);
        quadrant(x*x_step, y*y_step, x_step, y_step);
    }

    function quadrant(x, y, w, h){
        const c = p.random(palette);
        p.fill(c);

        switch (p.floor(p.random(9))){
            case 0:
                p.arc(x, y, w*2, h*2, 0, p.PI/2);
                break;
            case 1:
                p.arc(x+x_step, y, w*2, h*2, p.PI/2, p.PI);
                break;
            case 2:
                p.arc(x+x_step, y+y_step, w*2, h*2, p.PI, 3*p.PI/2);
                break;
            case 3:
                p.arc(x, y+y_step, w*2, h*2, 3*p.PI/2, 2*p.PI);
                break;
            case 4:
                p.arc(x+x_step/2, y, w, h, 0, p.PI);
                p.arc(x+x_step/2, y+y_step, w, h, p.PI, 2*p.PI);
                break;
            case 5:
                p.triangle(x, y, x+x_step, y, x, y+y_step);
                break;
            case 6:
                p.triangle(x, y, x, y+y_step, x+x_step, y+y_step);
                break;
            case 7:
                p.triangle(x, y, x+x_step, y, x+x_step, y+y_step);
                break;
            case 8:
                p.triangle(x+x_step, y, x+x_step, y+y_step, x, y+y_step);
                break;
        }
    }

    p.windowResized = function(){
        p.setup();
    }
}