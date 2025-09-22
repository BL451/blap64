export const sketch = function (p, options = {}) {
    let cellList = [];
    let attractorList = [];
    let nC = 1000;
    let nA = 10;
    let trails = 20;
    let aMassSlider,gSizeSlider,nCSlider,sACheckbox;
    let palette;
    let paletteIdx;
    let bg;
    let xSpacing, ySpacing;
    let dynamic_attractors = true;
    let cellColour, attractorColour;

    p.setup = function(){
        p.frameRate(60);

        bg = p.color(0,trails);
        palette = [p.color('#BF4E30'),p.color('#337AC5'),p.color('#dda77b'),p.color('#945d5e')];
        paletteIdx = 0;
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);

        cellColour = p.color(255,50,10);
        attractorColour = p.color(0);
        p.ellipseMode(p.CENTER);

        p.strokeWeight(5);
        p.background(10);
        collidingGalaxySetup();

    }

    p.draw = function() {
        p.background(bg);

        for (let attractor of attractorList){
            attractor.attract(cellList);
            if (dynamic_attractors){
                attractor.attract(attractorList);
                attractor.move();
            }
            attractor.render();
        }

        p.strokeWeight(3);
        for (let cell of cellList){
            cell.move();
            cell.render();
        }
    }

    function randomSetup(){
        let cellColour = p.color(255);
        for (let i = 0; i < nC; i++){
            let newCell = new Cell(p.width*p.random(), p.height*p.random(), cellColour,
                                   3*(p.random()-0.5), 3*(p.random()-0.5));
            cellList.push(newCell);
        }

        for (let i = 0; i < nA; i++){
            let attractorColour = p.color(0);
            let newAttractor = new Attractor(p.width/4 + p.random()*p.width/2,
                                             p.height/4 + p.random()*p.height/2, attractorColour, 200);
            attractorList.push(newAttractor);
        }
    }

    function galaxySetup(){
        cellList = [];
        attractorList = [];
        let attractorDist = p.width/10;
        for (let j = 0; j < nA; j++){
            let newAttractor;
            let colour = palette[(paletteIdx++) % palette.length];
            if (nA == 1){
                galaxy(p.width/2, p.height/2);
            }else{
                galaxy(p.random()*p.width, p.random()*p.height);
            }
        }
    }

    function collidingGalaxySetup(){
        galaxy(p.width/4, p.height/2);
        galaxy(3*p.width/4, p.height/2);
    }

    function galaxy(x,y){
        let newAttractor;
        let colour = palette[(paletteIdx++) % palette.length];
        let mass = 42;
        newAttractor = new Attractor(x, y, colour, mass);
        attractorList.push(newAttractor);
        let attractorDist = p.width/5;
        for (let i = 0; i < 2500; i++){
            let rad = attractorDist*p.random(0.1,1);
            let angle = p.TWO_PI*p.random();
            let newCell = new Cell(newAttractor.p.x+rad*p.cos(angle), newAttractor.p.y+rad*p.sin(angle), colour);
            newCell.v.x = p.cos(angle+p.HALF_PI);
            newCell.v.y = p.sin(angle+p.HALF_PI);
            newCell.v.setMag(p.sqrt(mass/p5.Vector.dist(newAttractor.p,newCell.p)));
            cellList.push(newCell);
        }
    }

    function clearCanvas(){
        p.background(0);
        cellList = [];
        attractorList = [];
    }

    function generateColorPalette(n_colours){
        const offset = p.random(360);
        let palette = [];
        p.colorMode(p.HSB);
        let h = 0;
        for (let i = 0; i < n_colours; i++){
            if (p.random() < 0.5){
                h += 137.5;
            } else {
                h += 68.75;
            }
            const hue = (offset + h) % 360;
            palette.push(p.color(hue, p.random(42,100), p.random(60,90), 0.33));
        }
        return palette;
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

    class Attractor extends Cell{
        constructor(x, y, c, mass){
            super(x,y,c);
            this.mass = mass;
            this.r = 5*p.pow((3/4)*this.mass/p.PI,1/3);
        }

        attract(cellList){
            let r,dv;
            for (let cell of cellList){
                r = p.max(p5.Vector.dist(this.p,cell.p),15);
                dv = p5.Vector.sub(this.p,cell.p);
                dv.normalize();
                dv.setMag(this.mass/p.sq(r));
                cell.accelerate(dv);
            }
        }

        render(){
            p.stroke(this.c);
            p.fill(this.c);
            p.circle(this.p.x, this.p.y, this.r);
        }

        setMass(mass){
            this.mass = mass;
        }
    }

    p.windowResized = function(){
        clearCanvas();
        p.setup();
    }
}