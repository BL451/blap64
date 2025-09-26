export const sketch = function (p, options = {}) {
    let cells = [];
    let shortest_side, n_cells;
    let noise_scale = 100;
    let x_stretch = 5;
    let y_stretch = 5;
    let blur = true;
    let TITLE = "Flow Fields";
    let STOP_FRAME = 180;

    p.setup = function() {
        p.frameRate(60);
        cells = [];

        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        shortest_side = p.min(p.width, p.height);
        n_cells = shortest_side*8;
        p.colorMode(p.HSB);
        p.noStroke();
        let x_space = p.width/(n_cells+1);

        for (let i = 0; i < n_cells; i++){
            let new_cell = new Cell(p.random(p.width), p.random(p.height), p.color(200), 0, 0);
            cells.push(new_cell);
        }

        p.background(0);

    }

    p.draw = function() {
        cells.forEach(cell => {
            let dv = p.createVector(x_stretch*(0.5-p.noise(cell.p.x/noise_scale, p.height+(cell.p.y/noise_scale))), y_stretch*(0.5-p.noise(p.width+(cell.p.x/noise_scale), cell.p.y/noise_scale)));
            cell.v = dv;
            cell.move();
            cell.render();
        });
        if (blur){
            p.filter(p.BLUR, 0.1);
        }
        if (p.frameCount == STOP_FRAME){
            p.noLoop();
        }
    }

    p.keyPressed = function(){
        if (p.key == 'r'){
            restart();
        }
    }

    function restart(){
        p.noiseSeed();
        p.frameCount = 1;
        p.setup();
        p.loop();
    }

    function makeFilename(){
        return TITLE + "_" + n_cells + "-" + noise_scale + "-" + x_stretch + "-" + y_stretch + ".png";
    }

    class Cell{
        constructor(x, y, c=p.color(255,0,0), vx=0, vy=0){
            this.p = p.createVector(x,y);
            this.v = p.createVector(vx,vy);
            this.c = c;
        }

        move(){
            this.p.add(this.v);
        }

        accelerate(dv){
            this.v.add(dv);
        }

        render(){
            p.stroke(this.c);
            p.fill(this.c);
            p.point(this.p);
        }
    }

    p.windowResized = function(){
        p.setup();
    }
}
