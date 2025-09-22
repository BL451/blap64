import fontUrl from 'url:../../../assets/fonts/CreatoDisplay-ExtraBold.otf';
import segFontUrl from 'url:../../../assets/fonts/DS-DIGII.TTF';
import fallbackFontUrl from 'url:../../../assets/fonts/BPdotsSquareVF.ttf';

export const sketch = function (p, options = {}) {
    let speed, tach;
    let short = 0;
    let font, seg_font;
    let gas = 0.0;
    let playing = false;
    let mobile = false;

    let osc0, osc1, osc2, lowpass, reverb;
    let SCROLL_MODE = false;
    let audioStarted = false;

    function isMobileDevice() {
        return (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia('(pointer: coarse)').matches
        );
    }

    p.setup = async function() {
        p.frameRate(60);
        mobile = isMobileDevice();
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        short = p.min(containerWidth, containerHeight);
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);
        p.colorMode(p.HSB);
        p.imageMode(p.CENTER);
        p.background(5);

        // Load fonts for WebGL mode using Parcel URLs
        try {
            console.log('Loading main font from:', fontUrl);
            font = await p.loadFont(fontUrl);
            console.log('Main font loaded for WebGL text rendering');
        } catch (e) {
            console.error('Failed to load main font:', e);
            // Try a fallback font
            try {
                console.log('Loading fallback font from:', fallbackFontUrl);
                font = await p.loadFont(fallbackFontUrl);
                console.log('Fallback font loaded');
            } catch (fallbackError) {
                console.error('Fallback font also failed:', fallbackError);
                font = null;
            }
        }

        // Load digital font
        try {
            console.log('Loading digital font from:', segFontUrl);
            seg_font = await p.loadFont(segFontUrl);
            console.log('Digital font loaded successfully');
        } catch (e) {
            console.error('Failed to load digital font:', e);
            seg_font = null; // Will use main font as fallback
        }

        speed = new Speed(-0.345*short, -short*0.32, 0.42*short, 0.15*short);
        tach = new Tach(0.02*short, short*0.01, 0.7*short, 0.2*short);

        // Setup audio system with Tone.js
        try {
            if (typeof Tone !== 'undefined') {
                // Create oscillators
                osc0 = new Tone.Oscillator(100, "sawtooth");
                osc1 = new Tone.Oscillator(100, "sawtooth");
                osc2 = new Tone.Oscillator(100, "sine");

                // Create effects
                lowpass = new Tone.Filter(800, "lowpass");
                reverb = new Tone.Reverb(2.0);

                // Set initial reverb wetness (0 = dry, 1 = fully wet)
                reverb.wet.value = 0.1;

                // Chain: oscillators -> lowpass -> reverb -> destination
                osc0.connect(lowpass);
                osc1.connect(lowpass);
                osc2.connect(lowpass);
                lowpass.connect(reverb);
                reverb.toDestination();

                // Store reverb for dynamic control
                window.nissan_reverb = reverb;

                // Set volumes (prevent clipping with dynamic reverb)
                osc0.volume.value = -12;
                osc1.volume.value = -12;
                osc2.volume.value = -14;

                console.log('Tone.js audio system initialized successfully');
            }
        } catch (e) {
            console.warn('Audio setup failed:', e);
            osc0 = osc1 = osc2 = lowpass = reverb = null;
        }

    }

    p.draw = function() {
        p.background(8);
        if (playing){
            if (p.mouseIsPressed){
                SCROLL_MODE = false;
                gas = p.min(1.0, gas + 0.05);
            } else if (!SCROLL_MODE){
                gas = p.max(0.15, gas - 0.05);
            }
        }
        tach.rpm = smoothFollow(tach.rpm, gas, 0.98, 0.01);
        speed.kmh = p.max(0.99*speed.kmh, smoothFollow(speed.kmh, 262*(tach.rpm-0.15), 0.99, 2.0, 0.0, 222.0));

        // good vibrations
        p.push();
        const shake = 4*tach.rpm;
        p.translate(p.random(-shake, shake), p.random(-shake, shake));
        p.translate(0.02*short, 0.06*short, -50);
        tach.render();
        speed.render();
        p.pop();
        p.camera(0, 200*tach.rpm, 800, 8*p.sin(p.HALF_PI + p.frameCount/100), 8*p.sin(p.frameCount/80)-20*tach.rpm, 0);

        // Audio feedback with Tone.js
        if (osc0 && playing && audioStarted) {
            try {
                osc0.frequency.value = 88*tach.rpm;
                osc1.frequency.value = 176*tach.rpm;
                osc2.frequency.value = 166*tach.rpm;
                if (lowpass) lowpass.frequency.value = 400 + 400.0*tach.rpm;

                // Dynamic reverb control - more reverb at higher RPM
                if (window.nissan_reverb) {
                    window.nissan_reverb.wet.value = 0.4 + 0.4*tach.rpm;
                    window.nissan_reverb.gain = 0.5 + 0.4*tach.rpm;
                }
            } catch (e) {
                console.warn('Audio update failed:', e);
            }
        }
    }

    p.mousePressed = async function(){
        if (!audioStarted && osc0){
            try {
                // Start Tone.js context
                await Tone.start();
                osc0.start();
                osc1.start();
                osc2.start();
                audioStarted = true;
                playing = true;
                console.log('Audio started');
            } catch (e) {
                console.warn('Failed to start audio:', e);
            }
        } else if (!playing && audioStarted) {
            playing = true;
        }
    }

    // Add mouse wheel control for RPM
    p.mouseWheel = async function(event){
        SCROLL_MODE = true;
        gas = p.constrain(gas - 0.0002*event.delta, 0.15, 1.0);
        if (!audioStarted && osc0){
            try {
                await Tone.start();
                osc0.start();
                osc1.start();
                osc2.start();
                audioStarted = true;
                playing = true;
                console.log('Audio started via scroll');
            } catch (e) {
                console.warn('Failed to start audio:', e);
            }
        } else if (!playing && audioStarted) {
            playing = true;
        }
    }

    function smoothFollow(v0, v1, smooth, max_step, lo=0.0, hi=1.0){
        const safe_smooth = p.constrain(1.0-smooth, 0.001, 0.999);
        return p.constrain(v0 + p.min(max_step, safe_smooth*(v1 - v0)), lo, hi);
    }

    class Speed{
        constructor(x, y, w, h){
            this.p = p.createVector(x, y);
            this.s = p.createVector(w, h);
            this.kmh = 0;
        }

        render(){
            p.textAlign(p.RIGHT, p.CENTER);
            p.push();
            p.translate(0, 0, 1);
            this.renderStatic();
            this.renderDynamic();
            p.pop();
        }

        renderStatic(){
            p.stroke('#D0D0D0');
            p.strokeWeight(3*short/1024);
            p.noFill();
            p.rect(this.p.x, this.p.y, this.s.x, this.s.y);
            p.fill('#D0D0D0');
            if (font) p.textFont(font);
            p.textSize(0.1*this.s.x);
            p.text("SPEED", this.p.x - 0.02*this.s.x, this.p.y + 0.88*this.s.y);
            p.noFill();
            p.circle(this.p.x + 1.2*this.s.x, this.p.y, this.s.x*0.08);
            p.line(this.p.x + 1.2*this.s.x, this.p.y + 0.2*this.s.y, this.p.x + 1.2*this.s.x, this.p.y + this.s.y);
            p.line(this.p.x + 1.2*this.s.x, this.p.y + this.s.y, this.p.x + 1.65*this.s.x, this.p.y + this.s.y);

            // Quarter circle sections
            p.arc(this.p.x + 1.22*this.s.x, this.p.y + 0.15*this.s.y, this.s.x*0.1, this.s.x*0.1, 0, p.HALF_PI);
            p.arc(this.p.x + 1.18*this.s.x, this.p.y + 0.15*this.s.y, this.s.x*0.1, this.s.x*0.1, p.HALF_PI, p.PI);

            p.fill('#D0D0D0');
            p.textAlign(p.RIGHT);
            p.textSize(0.13*this.s.y);
            p.text("CHECK", this.p.x + 1.65*this.s.x, this.p.y + 0.9*this.s.y);
            p.text("km/h", this.p.x + 1.14 * this.s.x, this.p.y + 0.3*this.s.y);
            p.text("MPH", this.p.x + 1.38 * this.s.x, this.p.y + 0.3*this.s.y);
        }

        renderDynamic(){
            p.textSize(1.2*this.s.y);
            p.fill('#AAFCE2');
            if (seg_font) p.textFont(seg_font);
            else if (font) p.textFont(font);
            const kmh_str = p.round(this.kmh).toString();
            const n = kmh_str.length;
            p.text(kmh_str[n-1], this.p.x + this.s.x*0.7, this.p.y + this.s.y * 0.38);
            if (n > 1){
                p.text(kmh_str[n-2], this.p.x + this.s.x*0.47, this.p.y + this.s.y * 0.38);
            }
            if (n > 2){
                p.text(kmh_str[n-3], this.p.x + this.s.x*0.25, this.p.y + this.s.y * 0.38);
            }
            if (font) p.textFont(font);
            p.textSize(0.1*this.s.x);
            p.text("km/h", this.p.x + 0.98*this.s.x, this.p.y + 0.2*this.s.y);
        }
    }

    class Tach{
        constructor(x, y, w, h){
            this.p = p.createVector(x, y);
            this.s = p.createVector(w, h);
            this.rpm = 0;
            this.rects = [];
            this.setupRects();
        this.frameCurve = this.getFrameCurve();
        }

        setupRects(){
            const NUM_RECTS = 38;
            const x_step = this.s.x/NUM_RECTS;
            for (let i = 0; i < NUM_RECTS; i++){
                const new_rect = new SegmentedRect(i*x_step, 0, x_step, this.getRectHeight(i), 8, 1, 0.6, 0.97);
                this.rects.push(new_rect);
            }
        }

        render(){
            p.textAlign(p.LEFT);
            this.renderDynamic();
            this.renderStatic();
        }

        renderStatic(){
            this.renderFrame();
            p.fill('#D0D0D0');
            if (font) p.textFont(font);
            p.textSize(0.05*this.s.x);
            p.text("TACH", this.p.x - 0.67*this.s.x, this.p.y + 0.61*this.s.y);
            p.textSize(0.04*this.s.x);
            p.text("0.5", this.p.x - 0.466*this.s.x, this.p.y + 0.74*this.s.y);
            p.text("1", this.p.x - 0.32*this.s.x, this.p.y + 0.74*this.s.y);
            p.text("2", this.p.x - 0.19*this.s.x, this.p.y + 0.74*this.s.y);
            p.text("3", this.p.x - 0.058*this.s.x, this.p.y + 0.74*this.s.y);
            p.text("4", this.p.x + 0.072*this.s.x, this.p.y + 0.74*this.s.y);
            p.text("5", this.p.x + 0.205*this.s.x, this.p.y + 0.74*this.s.y);
            p.text("6", this.p.x + 0.337*this.s.x, this.p.y + 0.74*this.s.y);
            p.text("7", this.p.x + 0.47*this.s.x, this.p.y + 0.74*this.s.y);
            p.textSize(0.025*this.s.x);
            p.text("x 1000r/min", this.p.x + 0.497*this.s.x, this.p.y + 0.723*this.s.y);
        }

        renderDynamic(){
            p.push();
            p.translate(this.p.x - 0.51*this.s.x, this.p.y - 0.1*this.s.y);
            p.textSize(0.1*this.s.x);
            p.fill('#AAFCE2');
            if (seg_font) p.textFont(seg_font);
            else if (font) p.textFont(font);
            p.textAlign(p.RIGHT);
            const rpm_str = p.round(70*this.rpm).toString();
            const n = rpm_str.length;
            p.text(rpm_str[n-1], 0.1*this.s.x, 0);
            if (n > 1){
                p.text(rpm_str[n-2], 0.05*this.s.x, 0);
            }
            // Static text next to RPM
            p.translate(0.23*this.s.x, 0);
            p.fill('#D0D0D0');
            p.textSize(0.025*this.s.x);
            if (font) p.textFont(font);
            p.text("x 100r/min", 0, -0.03*this.s.y);

            // Easter egg
            if (p.round(70*this.rpm) == 69){
                p.fill('#AAFCE2');
                p.textAlign(p.LEFT);
                p.textSize(0.05*this.s.x);
                if (seg_font) p.textFont(seg_font);
                else if (font) p.textFont(font);
                p.text("NICE", -0.1*this.s.x, -0.12*this.s.y);
            }
            p.pop();
            this.renderSegmentedRects();
        }

        renderSegmentedRects(){
            p.noStroke();
            p.push();
            p.translate(this.p.x - 0.5*this.s.x, this.p.y + 0.5*this.s.y);
            this.rects.forEach((sr, idx) => {
                sr.raw_value = gas;
                if (idx >= 32){
                    if (p.ceil(37*this.rpm) == idx){
                        p.fill('#FD8181');
                    } else {
                        p.fill('#DD1111');
                    }
                } else if (p.ceil(37*this.rpm) == idx){
                    p.fill('#AAFCE2');
                } else{
                    p.fill('#48C9A0');
                }
                sr.render();
                if ((idx - 2) % 5 == 0){
                    p.rect(sr.p.x, sr.p.y, sr.x_ratio*sr.s.x, 0.013*this.s.x);
                }
            });
            p.pop();
        }

        renderFrame(){
            p.stroke('#D0D0D0');
            p.strokeWeight(3*short/1024);
            const top_left = p.createVector(this.p.x - 0.52*this.s.x, this.p.y + 0.145*this.s.y);
            const bottom_left = p.createVector(this.p.x - 0.52*this.s.x, this.p.y + 0.6*this.s.y);
            const bottom_right = p.createVector(this.p.x + 0.512*this.s.x, this.p.y + 0.6*this.s.y);
            const top_right = p.createVector(this.p.x + 0.512*this.s.x, this.p.y -0.29*this.s.y);
            p.line(top_left.x, top_left.y, bottom_left.x, bottom_left.y);
            p.line(bottom_left.x, bottom_left.y, bottom_right.x, bottom_right.y);
            p.line(bottom_right.x, bottom_right.y, top_right.x, top_right.y);

            // Add curved top section
            p.push();
            p.translate(this.p.x-0.505*this.s.x, this.p.y + 0.47*this.s.y);
            p.noFill();
            p.stroke('#A01010');
            p.beginShape();
            this.frameCurve.forEach((pt, idx) => {
                if (idx == 0 || idx == 37){
                    p.splineVertex(pt.x, pt.y);
                }
                p.splineVertex(pt.x, pt.y);
            });
            p.endShape();
            p.pop();
        }

        getFrameCurve(){
            let curve_points = [];
            const x_step = this.s.x/37;
            for (let i = 0; i < 38; i++){
                curve_points.push({x: i*x_step, y: -this.getRectHeight(i)});
            }
            return curve_points;
        }

        getRectHeight(i){
            return 0.33*this.s.y*p.max(2 + p.sin(i*p.PI/27 - p.PI/2), 1);
        }
    }

    class SegmentedRect{
        constructor(x, y, w, h, num_segments, min_segments=1, x_ratio=0.8, y_ratio=0.8){
            this.p = p.createVector(x, y);
            this.s = p.createVector(w, h);
            this.num_segments = num_segments;
            this.min_segments = min_segments;
            this.x_ratio = x_ratio;
            this.y_ratio = y_ratio;
            this.raw_value = 0.0;
        }

        getActiveSegments(){
            return p.max(this.min_segments, p.round(this.num_segments*this.raw_value));
        }

        render(){
            const n = this.getActiveSegments();
            const y_step = this.s.y/this.num_segments;
            for (let i = 0; i < n; i++){
                p.rect(this.p.x, this.p.y - i*y_step, this.x_ratio*this.s.x, -this.y_ratio*y_step);
            }
        }
    }

    p.windowResized = function(){
        p.setup();
    }

    p.remove = function(){
        if (audioStarted && osc0) {
            try {
                osc0.stop();
                osc1.stop();
                osc2.stop();
                osc0.dispose();
                osc1.dispose();
                osc2.dispose();
                lowpass.dispose();
                reverb.dispose();
                if (window.nissan_reverb) {
                    delete window.nissan_reverb;
                }
                console.log('Nissan sketch audio resources cleaned up');
            } catch (e) {
                console.warn('Error cleaning up audio:', e);
            }
        }
        audioStarted = false;
        playing = false;
    }
}
