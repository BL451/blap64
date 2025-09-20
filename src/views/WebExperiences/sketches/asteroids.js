export const sketch = function (p, options = {}) {
    let pewpew;
    let projectiles, asteroids, explosions;
    let spawnTimer, dead, score;
    let lastS, t;
    let gScale;
    let running = false;

    // Add event listener for keyboard controls
    if (typeof window !== 'undefined') {
        window.addEventListener("keydown", function(e) {
            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);
    }

    p.setup = function() {
        p.frameRate(60);
        // Use container dimensions instead of window dimensions
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        p.angleMode(p.DEGREES);
        gScale = p.width/60;
        pewpew = new Ship(p.width / 2, p.height / 2, gScale);
        projectiles = [];
        asteroids = [];
        explosions = [];
        spawnTimer = 0;
        dead = false;
        score = 0;
        lastS = p.second();
        t = 0;
        spawnAsteroids(2, 1.5, 2);

        p.describe("Asteroids - Classic space shooter game.");
    }

    p.draw = function() {
        p.background(0);
        renderScore();
        renderTime();
        if (!running){
            if (p.mouseIsPressed){
                running = true;
            } else {
                renderInstructions();
                t = 0;
                return;
            }
        }

        if (dead) {
            p.textSize(p.width / 8);
            p.textFont('Times New Roman');
            p.fill(255, 0, 0);
            p.noStroke();
            p.textAlign(p.CENTER, p.CENTER);
            p.text("YOU DIED", p.width/2, p.height/2);
            p.textSize(p.width/50);
            p.textFont('Courier New');
            p.noStroke();
            p.fill(255);
            p.textAlign(p.CENTER, p.CENTER);
            p.text("Click to restart",p.width/2,p.height*0.35+p.height/2);
            if (p.mouseIsPressed){
                projectiles = [];
                asteroids = [];
                explosions = [];
                spawnTimer = 0;
                dead = false;
                t = 0;
                lastS = p.second();
                score = 0;
                p.frameCount = 0;
                pewpew = new Ship(p.width / 2, p.height / 2, gScale);
                spawnAsteroids(2, 1.5, 2);
            }
        } else {
            pewpew.getInput();
            pewpew.move();
            pewpew.render();
        }
        renderProjectiles();
        renderAsteroids();
        renderExplosions();
        clean();
        spawnTimer += 1 / p.frameRate();
        if (spawnTimer >= 10/p.pow(p.frameCount+1,0.25)) {
            spawnAsteroids(2, 1.5+(p.frameCount/1200), 2);
            spawnTimer = 0;
        }
        if (!dead) { checkAsteroidCollisions(); }
    }

    function renderProjectiles() {
        projectiles.forEach(function(projectile, index, array) {
            projectile.move();
            projectile.render();
        });
    }

    function renderAsteroids() {
        asteroids.forEach(function(asteroid, index, array) {
            asteroid.move();
            asteroid.render();
        });
    }

    function renderExplosions(){
        explosions.forEach(function(explosion, index, array){
            explosion.render();
            if (explosion.end){
                array.splice(index, 1);
            }
        });
    }

    function spawnAsteroids(num, speed, type) {
        for (let i = 0; i < num; i++) {
            let aVel = p.createVector(p.random(-5, 5), p.random(-5, 5));
            aVel.setMag(speed + p.random());
            let h = aVel.heading();
            let aPos = p.createVector(p.width / 2 - (p.random(1.2, 3) * p.cos(h) * p.width / 2), p.height / 2 - (p.random(1.2, 3) * p.sin(h) * p.height / 2));
            let newA = new Asteroid(aPos, aVel, 60, type);
            asteroids.push(newA);
        }
    }

    function clean() {
        projectiles.forEach(function(projectile, index, array) {
            if (projectile.isOutOfBounds()) {
                array.splice(index, 1);
            }
        });
        asteroids.forEach(function(asteroid, index, array) {
            if (asteroid.isOutOfBounds()) {
                array.splice(index, 1);
            }
        });
        let ship = pewpew.isOutOfBounds();
        if (ship.x){
            if (pewpew.pos.x < 0){
                pewpew.pos.x += p.width + 3*pewpew.scale;
            } else {
                pewpew.pos.x -= p.width + 3*pewpew.scale;
            }
        }
        if (ship.y){
            if (pewpew.pos.y < 0){
                pewpew.pos.y += p.height + 3*pewpew.scale;
            } else {
                pewpew.pos.y -= p.height + 3*pewpew.scale;
            }
        }
    }

    function renderScore(){
        p.textSize(p.width/50);
        p.textFont('Courier New');
        p.noStroke();
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("SCORE: " + score, p.width*0.40, p.height/20);
    }

    function renderTime(){
        p.textSize(p.width/50);
        p.textFont('Courier New');
        p.noStroke();
        p.fill(255);
        p.textAlign(p.CENTER,p.CENTER);
        if (lastS != p.second() && !dead){
            lastS = p.second();
            t += 1;
        }
        p.text("TIME: " + t, p.width*0.60, p.height/20);
    }

    function renderInstructions(){
        p.textSize(p.width/50);
        p.textFont('Courier New');
        p.noStroke();
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Arrow keys to move", p.width/2,p.height*0.25 + p.height/2);
        p.text("Space to shoot",p.width/2,p.height*0.3+p.height/2);
        p.text("Click here to begin",p.width/2,p.height*0.35+p.height/2);
    }

    function checkAsteroidCollisions() {
        asteroids.forEach(function(asteroid, a_index, a_array) {
            projectiles.forEach(function(projectile, p_index, p_array) {
                if (asteroid.pos.dist(projectile.pos) < asteroid.scale * 0.8) {
                    if (asteroid.type > 1){
                        let aPos1 = asteroid.pos.copy();
                        let aPos2 = asteroid.pos.copy();
                        let aVel1 = p5.Vector.random2D();
                        let aVel2 = p5.Vector.random2D();
                        aVel1.setMag(asteroid.v.mag()/1.5);
                        aVel2.setMag(asteroid.v.mag()/1.5);
                        let aSub1 = new Asteroid(aPos1.add(p5.Vector.random2D().mult(gScale)), aVel1, asteroid.scale/2, asteroid.type-1);
                        let aSub2 = new Asteroid(aPos2.add(p5.Vector.random2D().mult(gScale)), aVel2, asteroid.scale/2, asteroid.type-1);
                        asteroids.push(aSub1);
                        asteroids.push(aSub2);
                    }
                    score += asteroid.type * 50;
                    a_array.splice(a_index, 1);
                    p_array.splice(p_index, 1);
                    let exp = new Explosion(projectile.pos, gScale, 1);
                    explosions.push(exp);
                }
            });
            if (asteroid.pos.dist(pewpew.pos) < asteroid.scale * 0.8) {
                dead = true;
                let exp = new Explosion(pewpew.pos, pewpew.scale, 0);
                explosions.push(exp);
            }
        });
    }

    class Asteroid{
        constructor(pos,v,scale,type){
            this.pos = pos;
            this.v = v;
            this.scale = scale;
            this.o = 0;
            this.rotationRate = p.random(1,5);
            this.s = p.createGraphics(2*scale,2*scale);
            this.s.background(0,0);
            this.s.stroke(255);
            this.s.noFill();
            this.s.strokeWeight(3);
            this.s.beginShape();
            for (let i = 0; i < 360; i += 30){
                this.s.vertex((p.random(0.8,1.2)*this.scale/2)*p.cos(i)+scale, (p.random(0.8,1.2)*this.scale/2)*p.sin(i)+scale);
            }
            this.s.endShape(p.CLOSE);
            this.hasEntered = false;
            this.t = 0;
            this.type = type;
        }

        render(){
            p.push();
            p.translate(this.pos.x, this.pos.y);
            p.rotate(this.o);
            p.image(this.s, -this.scale, -this.scale);
            p.pop();
        }

        move(){
            this.o += this.rotationRate;
            this.pos.add(this.v);
            if (this.pos.x > 0 && this.pos.x < p.width && this.pos.y > 0 && this.pos.y < p.height){
                this.hasEntered = true;
            }
        }

        isOutOfBounds(){
            this.t += 1;
            if (this.hasEntered){
                if (this.pos.x < -this.scale || this.pos.x > p.width+this.scale || this.pos.y < -this.scale || this.pos.y > p.height+this.scale){
                    return true;
                }
            }
            if (!this.hasEntered && this.t > 600){
                return true;
            }
            return false;
        }
    }

    class Explosion{
        constructor(pos, scale, type){
            this.pos = pos;
            this.scale = scale;
            this.type = type;
            this.t = 0;
            this.end = false;
        }

        render(){
            if (this.type == 0){
                p.noStroke();
                p.fill(255,0,0,255*((120-this.t)/120));
                p.push();
                p.translate(this.pos.x, this.pos.y);
                p.beginShape();
                for (let i = 0; i < 360; i += 15) {
                    p.vertex((p.noise(i+this.t/50)) * this.scale*2.5 * p.cos(i), ((p.noise(i+this.t/50)) * this.scale*2.5 * p.sin(i)));
                }
                p.endShape();
                p.pop();
                this.t += 1;
                if (this.t > 120){
                    this.end = true;
                }
            } else if (this.type == 1){
                p.noStroke();
                p.fill(255,255*((30-this.t)/30));
                p.push();
                p.translate(this.pos.x, this.pos.y);
                p.beginShape();
                for (let i = 0; i < 360; i += 15) {
                    p.vertex((p.noise(i+this.t/20)) * this.scale/2 * p.cos(i), ((p.noise(i+this.t/20)) * this.scale/2 * p.sin(i)));
                }
                p.endShape();
                p.pop();
                this.t += 1;
                if (this.t > 30){
                    this.end = true;
                }
            }
        }
    }

    class Projectile{
        constructor(pos,v,len=10){
            this.pos = pos;
            this.v = v;
            this.len = len;
        }

        render(){
            p.stroke(255);
            p.fill(255);
            let deg = p.degrees(this.v.heading());
            p.line(this.pos.x, this.pos.y, this.pos.x + this.len*p.cos(deg), this.pos.y + this.len*p.sin(deg));
        }

        move(){
            this.pos.add(this.v);
        }

        isOutOfBounds(){
            if (this.pos.x < -this.len || this.pos.x > p.width+this.len || this.pos.y < -this.len || this.pos.y > p.height+this.len){
                return true;
            }
            return false;
        }
    }

    class Ship{
        constructor(x,y,scale=20){
            this.pos = p.createVector(x,y);
            this.v = p.createVector(0,0);
            this.o = 0;
            this.scale = scale;
            this.fire_timer = 0;
            this.isThrusting = false;
        }

        render(){
            if (this.isThrusting){
                this.renderThrust();
                this.isThrusting = false;
            }
            p.stroke(255);
            p.fill(255);
            p.strokeWeight(2);
            p.beginShape();
            p.vertex(this.pos.x+this.scale*p.cos(this.o),this.pos.y+this.scale*p.sin(this.o));
            p.vertex(this.pos.x+(this.scale/2)*p.cos(this.o+120),this.pos.y+(this.scale/2)*p.sin(this.o+120));
            p.vertex(this.pos.x+(this.scale/2)*p.cos(this.o+180),this.pos.y+(this.scale/2)*p.sin(this.o+180));
            p.vertex(this.pos.x+(this.scale/2)*p.cos(this.o-120),this.pos.y+(this.scale/2)*p.sin(this.o-120));
            p.endShape(p.CLOSE);
        }

        renderThrust(){
            p.stroke(255,0,0);
            p.fill(255,0,0);
            p.strokeWeight(2);
            p.beginShape();
            p.vertex(this.pos.x+(this.scale/2)*p.cos(this.o+125),this.pos.y+(this.scale/2)*p.sin(this.o+125));
            p.vertex(this.pos.x+(1.1*this.scale*p.random(1,1.3))*p.cos(this.o+170),this.pos.y+(1.1*this.scale*p.random(1,1.3))*p.sin(this.o+170));
            p.vertex(this.pos.x+(this.scale/2)*p.cos(this.o+175),this.pos.y+(this.scale/2)*p.sin(this.o+175));
            p.endShape();
            p.beginShape();
            p.vertex(this.pos.x+(this.scale/2)*p.cos(this.o-125),this.pos.y+(this.scale/2)*p.sin(this.o-125));
            p.vertex(this.pos.x+(1.1*this.scale*p.random(1,1.3))*p.cos(this.o-170),this.pos.y+(1.1*this.scale*p.random(1,1.3))*p.sin(this.o-170));
            p.vertex(this.pos.x+(this.scale/2)*p.cos(this.o-175),this.pos.y+(this.scale/2)*p.sin(this.o-175));
            p.endShape();
        }

        rotate(deg){
            this.o = (this.o + deg) % 360;
        }

        thrust(pow){
            this.v.add(pow*p.cos(this.o), pow*p.sin(this.o));
            this.v.limit(6);
            this.isThrusting = true;
        }

        move(){
            this.pos.add(this.v);
        }

        getInput(){
            if (this.fire_timer > 0){
                this.fire_timer -= 1/p.frameRate();
            }
            if (p.keyIsDown(p.LEFT_ARROW)){
                this.rotate(-2);
            }
            if (p.keyIsDown(p.RIGHT_ARROW)){
                this.rotate(2);
            }
            if (p.keyIsDown(p.UP_ARROW)){
                this.thrust(0.1);
            }
            if (p.keyIsDown(32) || p.keyIsDown(' ')){
                if (this.fire_timer <= 0){
                    this.fire_timer = 0.2;
                    let pPos = p.createVector(this.pos.x+this.scale*p.cos(this.o), this.pos.y+this.scale*p.sin(this.o));
                    let pVel = p5.Vector.fromAngle(p.radians(this.o));
                    pVel.setMag(12);
                    let newProj = new Projectile(pPos, pVel, this.scale/3);
                    projectiles.push(newProj);
                    let curV = pVel.copy();
                    this.v.add(curV.mult(-0.005));
                    this.v.limit(6);
                }
            }
        }

        isOutOfBounds(){
            let out = {"x":false, "y":false};
            if (this.pos.x < -this.scale || this.pos.x > p.width+this.scale){
                out.x = true;
            }
            if(this.pos.y < -this.scale || this.pos.y > p.height+this.scale){
                out.y = true;
            }
            return out;
        }
    }

    p.windowResized = function(){
        p.setup();
    }
}