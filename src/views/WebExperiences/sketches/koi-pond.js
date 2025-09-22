export const sketch = function (p, options = {}) {
    let chain;
    let n_fish = 88;
    let fish = [];
    let scale_factor;
    let weight = 5;
    let bg_colours = ['#3673AC'];

    let n_lilypads = 44;
    let lilypads = [];
    const default_lilypad_size = 100;

    let n_blobs = 3;

    p.setup = function() {
        p.frameRate(60);
        fish = [];
        lilypads = [];
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight);
        p.colorMode(p.HSB);
        p.strokeJoin(p.ROUND);
        scale_factor = p.min(p.width, p.height)/1440;
        weight *= scale_factor;
        p.strokeWeight(weight);
        let sizes = [16, 50, 50, 36, 18, 5];
        let spaces = [50, 42, 50, 50, 50, 50];
        for (let i = 0; i < n_fish; i++){
            let new_sizes = sizes.map(function(x) { return x * p.max(scale_factor - 0.5*p.noise(i), 0.3) ; });
            let new_spaces = spaces.map(function(x) { return x * p.max(scale_factor - 0.5*p.noise(0,i), 0.3) });
            let colors = getFishStrokeAndFillColor();
            let new_fish = new Chain(new_sizes, new_spaces, p.createVector(p.random(p.width), p.random(p.height)), colors[0], colors[1]);
            fish.push(new_fish);
        }

        for (let i = 0; i < n_lilypads; i++){
            let colors = getLilyPadStrokeAndFillColor();
            let pt = p.createVector(p.random(p.width), p.random(p.height));
            pt = ensureLilypadSpacing(pt);
            let new_lilypad = new LilyPad(pt, default_lilypad_size*scale_factor*(0.5*p.noise(i) + 0.8), p.random(p.TWO_PI), colors[0], colors[1]);
            lilypads.push(new_lilypad);
        }

    }

    p.draw = function() {
        p.background(bg_colours[0]);
        const t0 = performance.now();
        for (let i = 0; i < n_fish; i++){
            fish[i].randomTrack(i);
            fish[i].render();
        }
        p.fill('#45A6FF30');
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        p.strokeWeight(1.5*weight);
        for (let i = 0; i < n_lilypads; i++){
            lilypads[i].animate(i);
            lilypads[i].render();
        }

        // Corners
        noiseCurve(0.2*p.width, p.createVector(0, 0), 0);
        noiseCurve(0.2*p.width, p.createVector(0, p.height), 1);
        noiseCurve(0.2*p.width, p.createVector(p.width, 0), 2);
        noiseCurve(0.2*p.width, p.createVector(p.width, p.height), 3);
        // Sides
        noiseCurve(0.2*p.width, p.createVector(p.width/3, 0), 4);
        noiseCurve(0.2*p.width, p.createVector(p.width/3, p.height), 5);
        noiseCurve(0.2*p.width, p.createVector(2*p.width/3, 0), 6);
        noiseCurve(0.2*p.width, p.createVector(2*p.width/3, p.height), 7);
        noiseCurve(0.2*p.height, p.createVector(0, p.height/2), 8);
        noiseCurve(0.2*p.height, p.createVector(p.width, p.height/2), 9);
    }

    function noiseCurve(r, center, z){
        p.noStroke();
        p.fill(230, 60, 50*(1+zcn(z, p.frameCount/420)), 0.3*(0.5 + p.noise(p.frameCount/300)));
        p.beginShape();
        const n = 6;
        const step = p.TWO_PI/n;
        const noise_mag = 0.3*r;
        for (let i = 0; i < n; i++){
            const x = center.x + (r*p.cos(step*i) + scale_factor*noise_mag*zcn(p.frameCount/420, i, z));
            const y = center.y + (r*p.sin(step*i) + scale_factor*noise_mag*zcn(i, p.frameCount/420, z));
            p.splineVertex(x, y);
        }
        for (let i = 0; i < 3; i++){
            const x = center.x + (r*p.cos(step*i) + scale_factor*noise_mag*zcn(p.frameCount/420, i, z));
            const y = center.y + (r*p.sin(step*i) + scale_factor*noise_mag*zcn(i, p.frameCount/420, z));
            p.splineVertex(x, y);
        }
        p.endShape();
    }

    function zcn(x=0, y=0, z=0){
        return 2*(p.noise(x, y, z)-0.5);
    }

    function getFishStrokeAndFillColor(){
        let stroke_color, fill_color;
        if (p.random() < 0.92){
            fill_color = p.color(p.random(25), p.random(80,95), p.random(80,90));
        } else {
            fill_color = p.color(p.random(30), p.random(20), p.random(92,96));
        }
        stroke_color = p.color(p.hue(fill_color), p.saturation(fill_color)*0.95, p.brightness(fill_color)*1.2);
        return [stroke_color, fill_color];
    }

    function getLilyPadStrokeAndFillColor(){
        const fill_color = p.color(p.random(80,120), p.random(50,70), p.random(40,66));
        const stroke_color = p.color(p.hue(fill_color), p.saturation(fill_color)*0.95, p.brightness(fill_color)*1.2);
        return [stroke_color, fill_color];
    }

    function ensureLilypadSpacing(pt){
        if (lilypads.length == 0){
            return pt;
        }
        let min_dist = 99999;
        lilypads.forEach((pad) => {
            let dist = p5.Vector.dist(pt, pad.pos);
            if (dist < min_dist){
                min_dist = dist;
            }
        });
        let attempts = 0;
        const max_attempts = 100;
        while (min_dist < 2*(default_lilypad_size*scale_factor)){
            min_dist = 99999;
            pt = p.createVector(p.random(p.width), p.random(p.height));
            lilypads.forEach((pad) => {
                const dist = p5.Vector.dist(pt, pad.pos);
                if (dist < min_dist){
                    min_dist = dist;
                }
            });
            if (attempts++ > max_attempts){
                break;
            }
        }
        return pt;
    }

    class Chain{
        constructor(sizes, spaces, head, c_stroke, c_fill){
            this.sizes = sizes;
            this.spaces = spaces;
            this.constructLinks(head, sizes, spaces);
            this.c_stroke = c_stroke;
            this.c_fill = c_fill;
        }

        constructLinks(head, sizes, spaces){
            this.n_links = sizes.length;
            this.links = [];
            this.links[0] = {size: sizes[0], space: 0, pos: head};
            for (let i = 1; i < this.n_links; i++){
                const p0 = this.links[i-1].pos;
                const p1 = p.createVector(0, spaces[i]);
                const p2 = p5.Vector.add(p0, p1);
                this.links.push({size: sizes[i], space: spaces[i], pos: p2});
            }
        }

        randomTrack(i){
            const d = p5.Vector.sub(this.links[0].pos, this.links[1].pos);
            const pt = p5.Vector.add(d.setMag(10*d.mag()*(0.03+p.noise(p.frameCount/100, i))).rotate(p.noise(p.frameCount/150, i)-0.5), this.links[0].pos);
            this.track(pt, 0.04);
        }

        track(pos, f){
            const DIST_THRESHOLD = 30*scale_factor;
            const ANGLE_THRESHOLD = p.PI/7;
            const d = p5.Vector.sub(pos, this.links[0].pos);
            d.setMag(p.max(d.mag()-DIST_THRESHOLD, 0)*f);

            // This assumes there's at least two links in the chain
            const a = p5.Vector.sub(this.links[0].pos, this.links[1].pos);
            if (d.angleBetween(a) > ANGLE_THRESHOLD){
                d.setHeading(a.heading() - ANGLE_THRESHOLD);
            }
            else if (d.angleBetween(a) < -ANGLE_THRESHOLD){
                d.setHeading(a.heading() + ANGLE_THRESHOLD);
            }
            this.links[0].pos.add(d);
            this.constrain();
        }

        render(){
            p.stroke(this.c_stroke);
            p.fill(this.c_fill);
            p.strokeWeight(weight);
            const n = this.n_links*2;
            let body_points = Array(n);
            const PECTORAL_INDICES = [1,2];
            const DORSAL_INDICES = [1,2];
            const VENTRAL_INDICES = [3,4];
            const CAUDAL_INDEX = 5;
            let pectoral_points = [];
            let dorsal_points = [];
            let ventral_points = [];
            let caudal_points = [];
            for (let i = 0; i < this.n_links; i++){
                let d = 0;
                if (i == this.n_links-1){
                    d = p5.Vector.sub(this.links[i-1].pos, this.links[i].pos);
                } else {
                    d = p5.Vector.sub(this.links[i].pos, this.links[i+1].pos);
                }
                const a = d.heading();
                const p0 = p5.Vector.fromAngle(a + 0.5*p.PI).setMag(this.links[i].size/2);
                const p1 = p5.Vector.fromAngle(a - 0.5*p.PI).setMag(this.links[i].size/2);
                const pl = p5.Vector.add(this.links[i].pos, p0);
                const pr = p5.Vector.add(this.links[i].pos, p1);
                if (PECTORAL_INDICES.includes(i)){
                    pectoral_points.push(pl);
                    pectoral_points.push(pr);
                }
                if (DORSAL_INDICES.includes(i)){
                    dorsal_points.push(pl);
                    dorsal_points.push(pr);
                }
                if (VENTRAL_INDICES.includes(i)){
                    ventral_points.push(pl);
                    ventral_points.push(pr);
                }
                if (CAUDAL_INDEX == i){
                    caudal_points.push(pl);
                    caudal_points.push(pr);
                }

                body_points[i] = pr;
                body_points[n-i-1] = pl;
                if (i != this.n_links-1){
                    //line(this.links[i].pos.x, this.links[i].pos.y, this.links[i+1].pos.x, this.links[i+1].pos.y);
                }
            }
            const a = p5.Vector.sub(this.links[0].pos, this.links[1].pos).angleBetween(p5.Vector.sub(this.links[4].pos, this.links[5].pos));
            this.fins(pectoral_points, dorsal_points, ventral_points, caudal_points, a);
            p.beginShape();
            for (let i = 0; i < n + 3; i++){
                p.splineVertex(body_points[i % n].x, body_points[i % n].y);
            }
            p.endShape();
            this.dorsalFin(dorsal_points, a);
            p.stroke(0, 0, 20);
            p.strokeWeight(2*weight);
            const eye_right = p5.Vector.lerp(this.links[0].pos, dorsal_points[0], 0.6);
            const eye_left = p5.Vector.lerp(this.links[0].pos, dorsal_points[1], 0.6);
        }

        fins(pectoral, dorsal, ventral, caudal, angle){
            // Angle of the second segment
            const a = p5.Vector.sub(this.links[1].pos, this.links[2].pos).heading();
            this.pectoralFins(pectoral);
            this.caudalFin(caudal, angle);
        }

        pectoralFins(points){
            // Right
            p.beginShape();
            p.splineVertex(points[0].x, points[0].y);
            const tip_inter = p5.Vector.sub(points[0], points[2]);
            let tip = p5.Vector.add(tip_inter.rotate(p.PI/2).setMag(tip_inter.mag()*0.9), points[2]);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[2].x, points[2].y);
            p.splineVertex(points[0].x, points[0].y);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[2].x, points[2].y);
            p.endShape();
            // Left
            p.beginShape();
            p.splineVertex(points[1].x, points[1].y);
            tip = p5.Vector.add(tip_inter.rotate(p.PI), points[3]);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[3].x, points[3].y);
            p.splineVertex(points[1].x, points[1].y);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(points[3].x, points[3].y);
            p.endShape();
        }

        caudalFin(points, angle){
            p.beginShape();
            p.splineVertex(points[0].x, points[0].y);
            const inter = p5.Vector.sub(points[0], points[1]);
            const center = this.links[this.n_links-1].pos;
            const tip0 = p5.Vector.add(p5.Vector.rotate(inter, 0.5*p.PI + 0.3*angle).setMag(inter.mag()*15), center);
            const tip1 = p5.Vector.add(p5.Vector.rotate(inter, 0.5*p.PI - 0.3*angle).setMag(inter.mag()*15), center);
            p.splineVertex(tip0.x, tip0.y);
            p.splineVertex(tip1.x, tip1.y);
            p.splineVertex(points[1].x, points[1].y);
            p.splineVertex(points[0].x, points[0].y);
            p.splineVertex(tip0.x, tip0.y);
            p.splineVertex(tip1.x, tip1.y);
            p.splineVertex(points[1].x, points[1].y);
            p.endShape();
        }

        dorsalFin(points, angle){
            const front = this.links[2].pos;
            const back = this.links[3].pos;
            p.beginShape();
            p.splineVertex(front.x, front.y);
            let tip = p5.Vector.sub(front, back);
            tip.setMag(tip.mag()*0.6).rotate(-0.7*angle).add(front);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(back.x, back.y);
            p.splineVertex(front.x, front.y);
            p.splineVertex(tip.x, tip.y);
            p.splineVertex(back.x, back.y);
            p.endShape();
        }

        constrain(){
            this.wrap();
            for (let i = 1; i < this.n_links; i++){
                const d = p5.Vector.sub(this.links[i].pos, this.links[i-1].pos);
                d.setMag(this.links[i].space);
                this.links[i].pos = p5.Vector.add(this.links[i-1].pos, d);
            }
        }

        wrap(){
            if (this.links[0].pos.x > p.width*1.3){
                this.links.forEach((link) => {
                    link.pos.x -= p.width*1.3;
                });
            }
            else if (this.links[0].pos.x < -p.width*0.3){
                this.links.forEach((link) => {
                    link.pos.x += p.width*1.3;
                });
            }
            if (this.links[0].pos.y > p.height*1.3){
                this.links.forEach((link) => {
                    link.pos.y -= p.height*1.3;
                });
            }
            else if (this.links[0].pos.y < -p.height*0.3){
                this.links.forEach((link) => {
                    link.pos.y += p.height*1.3;
                });
            }
        }
    }

    class LilyPad{
        constructor(pos, radius, angle, c_stroke, c_fill){
            this.pos = pos;
            this.anim_pos = pos;
            this.radius = radius;
            this.angle = angle;
            this.angle_open = p.random(1.7, 1.95)*p.PI;
            this.c_stroke = c_stroke;
            this.c_fill = c_fill;
        }

        animate(i){
            this.anim_pos = p5.Vector.add(this.pos, p.createVector(this.radius*(p.noise(p.frameCount/300, i)-0.5), this.radius*(p.noise(i, p.frameCount/300)-0.5)));
            this.anim_angle = this.angle + (p.PI*p.noise(i, i, p.frameCount/300)-0.5);
        }

        render(){
            p.stroke(this.c_stroke);
            p.fill(this.c_fill);
            p.arc(this.anim_pos.x, this.anim_pos.y, this.radius, this.radius, this.anim_angle, this.anim_angle + this.angle_open, p.PIE);
        }
    }

    p.windowResized = function(){
        p.setup();
    }
}