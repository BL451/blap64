export const mobileCheck = () => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const isTablet =
        /iPad/i.test(navigator.userAgent) ||
        (/Android/i.test(navigator.userAgent) &&
            !/Chrome/i.test(navigator.userAgent));
    const isDesktop = !(isMobile || isTablet);

    return !isDesktop;
};

export const smoothFollow = (raw, follow, smoothing, max_step=100) => {
    return follow + Math.min(smoothing * (raw - follow), max_step);
};

export const easeInCubic = (x) => {
    return x * x * x;
};

export const getFontSizes = (w, h) => {
    if (widthCheck(w) && mobileCheck()){
        return { "small": 16, "medium": 24, "large": 48};
    } else {
        return { "small": 24, "medium": 32, "large": 64};
    }
}

export const widthCheck = (w) => {
    if (w < 768){
        return true;
    }
    return false;
};

export const isDesktopOnly = () => {
    // Returns true only for desktop devices (excludes tablets and phones)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const isTablet = /iPad/i.test(navigator.userAgent) ||
                    (/Android/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent));
    return !(isMobile || isTablet);
};

// Media utilities
export const getMediaPath = (mediaItem) => {
    if (typeof mediaItem === 'string') {
        return mediaItem;
    } else if (mediaItem && typeof mediaItem === 'object') {
        return mediaItem.default || mediaItem.src || mediaItem.href || mediaItem.toString();
    } else {
        return String(mediaItem);
    }
};

export const isVideoFile = (path) => {
    return path.toLowerCase().match(/\.(mp4|mov|webm|avi)(\?.*)?$/i);
};

export const calculateMediaDimensions = (aspectRatio, maxWidth, maxHeight) => {
    let mediaWidth, mediaHeight;
    if (aspectRatio > maxWidth / maxHeight) {
        mediaWidth = maxWidth;
        mediaHeight = maxWidth / aspectRatio;
    } else {
        mediaHeight = maxHeight;
        mediaWidth = maxHeight * aspectRatio;
    }
    return { width: mediaWidth, height: mediaHeight };
};

export const calculateCropDimensions = (mediaWidth, mediaHeight, boxWidth, boxHeight) => {
    const aspectRatio = mediaWidth / mediaHeight;
    const boxAspectRatio = boxWidth / boxHeight;
    let sourceX = 0;
    let sourceY = 0;
    let sourceWidth = mediaWidth;
    let sourceHeight = mediaHeight;

    if (aspectRatio > boxAspectRatio) {
        // Media is wider - crop sides
        sourceWidth = mediaHeight * boxAspectRatio;
        sourceX = (mediaWidth - sourceWidth) / 2;
    } else {
        // Media is taller - crop top/bottom
        sourceHeight = mediaWidth / boxAspectRatio;
        sourceY = (mediaHeight - sourceHeight) / 2;
    }

    return { sourceX, sourceY, sourceWidth, sourceHeight };
};

export const getViewportSize = () => {
    let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
    );
    let vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
    );
    return { width: vw, height: vh };
};

// injectFontLink and loadGoogleFontSet from Dave Pagurek: https://editor.p5js.org/davepagurek/sketches/Q6HAN1qhX
export const injectFontLink = (href) => {
    const link = document.createElement('link');
    link.id = 'font';
    link.href = href;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
};

export const loadGoogleFontSet = async (url, p = window) => {
    injectFontLink(url);
    await document.fonts.ready; // ??
    let pfonts = Array.from(document.fonts).map(f => {
    let pf = new p5.Font(p, f);
    pf.path = pf.path || url;
    });
    return pfonts;
};

// Reusable cursor management function
// Takes p5 instance, mouse coordinates, and array of objects with contains() method
// Also accepts optional custom hover checks as functions
export const updateCursor = (p, mouseX, mouseY, ...hoverCheckTargets) => {
    let isHovering = false;

    // Check all provided targets for hover state
    for (const target of hoverCheckTargets) {
        if (Array.isArray(target)) {
            // Handle arrays of objects with contains() method
            for (const element of target) {
                if (element && element.contains && element.contains(mouseX, mouseY)) {
                    isHovering = true;
                    break;
                }
            }
        } else if (typeof target === 'function') {
            // Handle custom hover check functions
            if (target(mouseX, mouseY)) {
                isHovering = true;
            }
        } else if (target && target.contains) {
            // Handle single objects with contains() method
            if (target.contains(mouseX, mouseY)) {
                isHovering = true;
            }
        }

        if (isHovering) break;
    }

    // Set cursor style
    if (isHovering) {
        p.cursor('pointer');
    } else {
        p.cursor('default');
    }
};

// UI Classes
export class AnimationManager{
    constructor(states){
        this.states = states;
        this.to_render = {};
        this.t = 0;
    }

    execute(p){
        this.t += p.deltaTime;
        const t = this.t;
        this.to_render = {};
        this.states.every((state, i) => {
            if (t >= state.start_time && t < state.start_time + state.duration){
                this.to_render[state.idx] = i;
            } else if (t >= state.start_time + state.duration && state.persist){
                this.to_render[state.idx] = i;
            }
            return true;
        });
        Object.values(this.to_render).forEach((idx) => {
            const progress = Math.min((t - this.states[idx].start_time) / this.states[idx].duration, 1);
            this.states[idx].fn(progress, ...this.states[idx].args);
        });
    }
}

export class UIObj{
    constructor(p, x, y, w, h){
        this.p5 = p;
        this.p = p.createVector(x, y);
        this.s = p.createVector(w, h);
    }

    dist(x, y){
        const v = this.p5.createVector(x, y);
        return p5.Vector.dist(this.p, v);
    }
}

export class UICornerBoxButton extends UIObj{
    constructor(p, x, y, w, h, sx, sy, text, textSize){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy);
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
    }

    contains(x, y){
        return this.insideBox(x, y, this.p.x, this.p.y, this.s.x, this.s.y);
    }

    insideBox(pointX, pointY, boxCenterX, boxCenterY, boxWidth, boxHeight) {
        // Calculate the box boundaries from center and dimensions
        const left = boxCenterX - boxWidth / 2;
        const right = boxCenterX + boxWidth / 2;
        const top = boxCenterY - boxHeight / 2;
        const bottom = boxCenterY + boxHeight / 2;

        // Check if point is within all boundaries
        return pointX >= left && pointX <= right && pointY >= top && pointY <= bottom;
    }

    render(){
        let sx = this.p5.constrain(this.s.x*(this.cs.x-0.5), -0.1*this.s.x, this.s.x);
        let sy = this.p5.constrain(this.s.y*(this.cs.y-0.5), -0.1*this.s.y, this.s.y);
        this.corners(this.p.x, this.p.y, this.s.x, this.s.y, sx, sy);
    }

    corners(x, y, w, h, sx, sy){
        const top_left = { x: x - 0.5 * w, y: y - 0.5 * h };
        const top_right = { x: x + 0.5 * w, y: y - 0.5 * h };
        const bottom_left = { x: x - 0.5 * w, y: y + 0.5 * h };
        const bottom_right = { x: x + 0.5 * w, y: y + 0.5 * h };
        this.corner(top_left.x, top_left.y, sx, sy);
        this.corner(top_right.x, top_right.y, -sx, sy);
        this.corner(bottom_left.x, bottom_left.y, sx, -sy);
        this.corner(bottom_right.x, bottom_right.y, -sx, -sy);
    }

    corner(x, y, sx, sy){
        this.p5.line(x, y, x + sx, y);
        this.p5.line(x, y, x, y + sy);
    }
}

export class UIPlanetButton extends UIObj{
    constructor(p, x, y, radius, orbitRadius, angle, speed, color, text = "", textSize = 12, textOffsetX = 0, textOffsetY = 0){
        super(p, x, y, radius * 2, radius * 2);
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.angle = angle;
        this.speed = speed;
        this.color = color;
        this.originalAngle = angle;
        this.textOffsetX = textOffsetX;
        this.textOffsetY = textOffsetY;
        this.textWriter = new TextWriter(p, x + textOffsetX, y + textOffsetY, undefined, undefined, text, textSize);
        this.active = false;
    }

    contains(x, y){
        const distance = this.p5.dist(x, y, this.p.x, this.p.y);
        return distance <= this.radius * 1.5; // Include some padding for the UI triangles
    }

    updatePosition(centerX, centerY, deltaTime){
        this.angle += -this.speed * deltaTime;
        const pos = radialToCartesian(this.orbitRadius, this.angle, this.p5);
        this.p.x = centerX + pos.x;
        this.p.y = centerY + pos.y;

        // Update text writer position with offset
        this.textWriter.p.x = this.p.x + this.textOffsetX;
        this.textWriter.p.y = this.p.y + this.textOffsetY;
    }

    render(smoothVector, short){
        const d = this.p5.map(smoothVector.dist(this.p5.createVector(this.p.x, this.p.y)), 0, 0.1*short, 1, 0, true);
        const adjustedRadius = this.radius;

        // Draw planet arcs
        this.p5.stroke(this.color, 128 + d*127);
        this.p5.strokeWeight(2);
        this.p5.noFill();

        const o = -this.angle + this.p5.PI/2;
        this.p5.arc(this.p.x, this.p.y, adjustedRadius, adjustedRadius, o + 0.1 - d, o + this.p5.PI - 0.1 + d);
        this.p5.strokeWeight(1);
        this.p5.arc(this.p.x, this.p.y, 0.8*adjustedRadius, 0.8*adjustedRadius, o + this.p5.PI + 0.1 - d, o - 0.1 + d);

        // Draw sci-fi UI triangles
        this.renderUITriangles(adjustedRadius, d);

        // Render text
        this.renderText(d);
    }

    renderUITriangles(r, d){
        const squareSize = r * (1.5 + 0.2*this.p5.sin(0.05*this.p.x + 0.05*this.p.y + 0.001*this.p5.millis()));
        const triangleSize = r * 0.2;

        this.p5.fill(128 + d*127, 20, 20, 128 + d*127);
        this.p5.noStroke();

        // Four corners of the square around the planet
        const corners = [
            { x: this.p.x - squareSize/2, y: this.p.y - squareSize/2, angle: 5*this.p5.PI/4 },   // top-left
            { x: this.p.x + squareSize/2, y: this.p.y - squareSize/2, angle: 7*this.p5.PI/4 },   // top-right
            { x: this.p.x + squareSize/2, y: this.p.y + squareSize/2, angle: this.p5.PI/4 },     // bottom-right
            { x: this.p.x - squareSize/2, y: this.p.y + squareSize/2, angle: 3*this.p5.PI/4 }    // bottom-left
        ];

        corners.forEach(corner => {
            this.p5.push();
            this.p5.translate(corner.x, corner.y);
            this.p5.rotate(corner.angle + this.p5.PI/2);
            this.p5.triangle(0, -triangleSize*(0.5-2*d), -triangleSize * 0.8, triangleSize * 0.5, triangleSize * 0.8, triangleSize * 0.5);
            this.p5.pop();
        });
    }

    renderText(d){
        if (this.textWriter && this.textWriter.t && this.textWriter.t.length > 0) {
            this.p5.push();
            this.p5.fill(74, 144 + 80*d, 230);
            this.p5.noStroke();
            this.p5.textAlign(this.p5.LEFT, this.p5.CENTER);
            this.p5.textFont('BPdotsSquareVF', {
                fontVariationSettings: `wght 900`
            });
            this.p5.textSize(this.textWriter.size);

            // Try to get cached text data, fall back to calculation if not available
            let lines;
            let lineHeight;

            // Check if we have access to the global textCache (from sketch.js)
            if (typeof window !== 'undefined' && window.textCache && window.textCache.has(this.textWriter.t)) {
                const cached = window.textCache.get(this.textWriter.t);
                lines = cached.lines;
                lineHeight = cached.lineHeight;
            } else {
                // Fallback to original calculation (for compatibility)
                const maxChars = 16;
                const words = this.textWriter.t.split(' ');
                lines = [];
                let currentLine = '';

                for (const word of words) {
                    if ((currentLine + word).length > maxChars && currentLine.length > 0) {
                        lines.push(currentLine.trim());
                        currentLine = word + ' ';
                    } else {
                        currentLine += word + ' ';
                    }
                }
                if (currentLine.length > 0) {
                    lines.push(currentLine.trim());
                }
                lineHeight = this.textWriter.size * 1.2;
            }

            // Render each line
            lines.forEach((line, lineIndex) => {
                const lineY = this.textWriter.p.y + (lineIndex - (lines.length - 1) / 2) * lineHeight;
                this.p5.text(line, this.textWriter.p.x, lineY);
            });

            this.p5.pop();
        }
    }

    setTextOffset(offsetX, offsetY){
        this.textOffsetX = offsetX;
        this.textOffsetY = offsetY;
        this.textWriter.p.x = this.p.x + this.textOffsetX;
        this.textWriter.p.y = this.p.y + this.textOffsetY;
    }


    toggle(){
        this.active = !this.active;
    }

    setActive(active){
        this.active = active;
    }

    isActive(){
        return this.active;
    }
}

export class UIArcButton extends UIObj{
    constructor(p, x, y, w, h, sx, sy, text, textSize){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy);
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
    }

    contains(x, y){
        return this.dist(x, y) <= this.s.x/2;
    }

    insideBox(pointX, pointY, boxCenterX, boxCenterY, boxWidth, boxHeight) {
        // Calculate the box boundaries from center and dimensions
        const left = boxCenterX - boxWidth / 2;
        const right = boxCenterX + boxWidth / 2;
        const top = boxCenterY - boxHeight / 2;
        const bottom = boxCenterY + boxHeight / 2;

        // Check if point is within all boundaries
        return pointX >= left && pointX <= right && pointY >= top && pointY <= bottom;
    }

    render(){
        this.p5.arc(this.p.x, this.p.y, this.s.x, this.s.y, this.p5.TWO_PI*this.cs.x, this.p5.TWO_PI*this.cs.x - this.p5.min(1.5*this.p5.PI*(1-this.cs.x), 1.5*this.p5.PI));
    }
}

export class UITriangleButton extends UIObj{
    constructor(p, x, y, w, h, sx, sy, z, text, textSize, unhoveredColor = [230], hoveredColor = [230, 20, 20]){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy, z);
        this.top = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z), this.p.y + this.s.y*p.sin(this.cs.z));
        this.left = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z+2*p.PI/3), this.p.y + this.s.y*p.sin(this.cs.z+2*p.PI/3));
        this.right = p.createVector(this.p.x + this.s.x*p.cos(this.cs.z+4*p.PI/3), this.p.y + this.s.y*p.sin(this.cs.z+4*p.PI/3));
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
        this.unhoveredColor = unhoveredColor;
        this.hoveredColor = hoveredColor;
    }

    render(){
        this.top = this.p5.createVector(this.p.x + this.s.x*this.p5.cos(this.cs.z), this.p.y + this.s.y*this.p5.sin(this.cs.z));
        this.left = this.p5.createVector(this.p.x + this.s.x*this.p5.cos(this.cs.z+2*this.p5.PI/3), this.p.y + this.s.y*this.p5.sin(this.cs.z+2*this.p5.PI/3));
        this.right = this.p5.createVector(this.p.x + this.s.x*this.p5.cos(this.cs.z+4*this.p5.PI/3), this.p.y + this.s.y*this.p5.sin(this.cs.z+4*this.p5.PI/3));
        this.cs.x = this.p5.map(this.cs.x, 0, 1, 0.25, 0.08, true);
        const inter_top = p5.Vector.lerp(this.top, this.right, this.cs.x);
        const inter_left = p5.Vector.lerp(this.left, this.top, this.cs.x);
        const inter_right = p5.Vector.lerp(this.right, this.left, this.cs.x);
        const inter_top1 = p5.Vector.lerp(this.top, this.right, 1-this.cs.x);
        const inter_left1 = p5.Vector.lerp(this.left, this.top, 1-this.cs.x);
        const inter_right1 = p5.Vector.lerp(this.right, this.left, 1-this.cs.x);
        this.p5.line(inter_top1.x, inter_top1.y, inter_top.x, inter_top.y);
        this.p5.line(inter_left1.x, inter_left1.y, inter_left.x, inter_left.y);
        this.p5.line(inter_right1.x, inter_right1.y, inter_right.x, inter_right.y);
    }

    renderTriangle(){
        this.top = this.p5.createVector(this.p.x + this.s.x*this.p5.cos(this.cs.z), this.p.y + this.s.y*this.p5.sin(this.cs.z));
        this.left = this.p5.createVector(this.p.x + this.s.x*this.p5.cos(this.cs.z+2*this.p5.PI/3), this.p.y + this.s.y*this.p5.sin(this.cs.z+2*this.p5.PI/3));
        this.right = this.p5.createVector(this.p.x + this.s.x*this.p5.cos(this.cs.z+4*this.p5.PI/3), this.p.y + this.s.y*this.p5.sin(this.cs.z+4*this.p5.PI/3));

        // Draw outer triangle
        this.p5.triangle(this.top.x, this.top.y, this.left.x, this.left.y, this.right.x, this.right.y);

        // Draw nested triangles based on cs.x progress
        for(let i = 1; i <= 3; i++){
            const progress = this.p5.map(this.cs.x, (i-1)/3, i/3, 0, 1, true);
            if(progress > 0){
                const scale = 1 - (i * 0.25 * progress);
                const nestedTop = this.p5.createVector(this.p.x + this.s.x*scale*this.p5.cos(this.cs.z), this.p.y + this.s.y*scale*this.p5.sin(this.cs.z));
                const nestedLeft = this.p5.createVector(this.p.x + this.s.x*scale*this.p5.cos(this.cs.z+2*this.p5.PI/3), this.p.y + this.s.y*scale*this.p5.sin(this.cs.z+2*this.p5.PI/3));
                const nestedRight = this.p5.createVector(this.p.x + this.s.x*scale*this.p5.cos(this.cs.z+4*this.p5.PI/3), this.p.y + this.s.y*scale*this.p5.sin(this.cs.z+4*this.p5.PI/3));
                this.p5.triangle(nestedTop.x, nestedTop.y, nestedLeft.x, nestedLeft.y, nestedRight.x, nestedRight.y);
            }
        }
    }

    contains(x, y){
        return this.isPointInTriangleFast(x, y, this.top.x, this.top.y, this.left.x, this.left.y, this.right.x, this.right.y);
    }

    isPointInTriangleFast(px, py, ax, ay, bx, by, cx, cy) {
        const d1 = this.sign(px, py, ax, ay, bx, by);
        const d2 = this.sign(px, py, bx, by, cx, cy);
        const d3 = this.sign(px, py, cx, cy, ax, ay);

        const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
        const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);

        return !(hasNeg && hasPos);
    }

    sign(px, py, ax, ay, bx, by) {
        return (px - bx) * (ay - by) - (ax - bx) * (py - by);
    }

    setTextOffset(offsetX, offsetY) {
        this.textWriter.p.x = this.p.x + offsetX;
        this.textWriter.p.y = this.p.y + offsetY;
    }

    getColor(isHovered) {
        return isHovered ? this.hoveredColor : this.unhoveredColor;
    }
}

export class UIHexButton extends UIObj{
    constructor(p, x, y, w, h, sx, sy, text, textSize){
        super(p, x, y, w, h);
        this.cs = p.createVector(sx, sy);
        this.vertices = this.calculateHexVertices();
        this.textWriter = new TextWriter(p, x, y, undefined, undefined, text, textSize);
    }

    calculateHexVertices(){
        const vertices = [];
        for(let i = 0; i < 6; i++){
            const angle = (i * this.p5.PI) / 3;
            const x = this.p.x + this.radius * this.p5.cos(angle);
            const y = this.p.y + this.radius * this.p5.sin(angle);
            vertices.push({x, y});
        }
        return vertices;
    }

    contains(x, y){
        return this.isPointInHexagon(x, y);
    }

    isPointInHexagon(px, py){
        // Simple distance-based check for hexagon containment
        return this.p5.dist(px, py, this.p.x, this.p.y) <= this.radius;
    }

    render(){
        // Update vertices based on current position and size
        this.radius = Math.min(this.s.x, this.s.y) / 2;
        this.vertices = this.calculateHexVertices();

        // Draw hexagon with animation based on cs.x
        for(let i = 0; i < 6; i++){
            const currentVertex = this.vertices[i];
            const nextVertex = this.vertices[(i + 1) % 6];
            const prevVertex = this.vertices[(i - 1 + 6) % 6];

            // Calculate the line segment to draw based on cs.x
            // cs.x = 0: draw from corner towards center (small segments)
            // cs.x = 1: draw complete lines between vertices
            const progress = this.p5.map(this.cs.x, 0, 1, 0.2, 0.9, true);

            // Offset from vertices - lines don't start exactly at the vertex
            const offset = 0.1; // 10% offset from vertex

            // Draw line towards next vertex
            const startToNextX = this.p5.lerp(currentVertex.x, nextVertex.x, offset);
            const startToNextY = this.p5.lerp(currentVertex.y, nextVertex.y, offset);
            const endX = this.p5.lerp(currentVertex.x, nextVertex.x, offset + progress * (1 - offset));
            const endY = this.p5.lerp(currentVertex.y, nextVertex.y, offset + progress * (1 - offset));
            this.p5.line(startToNextX, startToNextY, endX, endY);

            // Draw line towards previous vertex
            const startToPrevX = this.p5.lerp(currentVertex.x, prevVertex.x, offset);
            const startToPrevY = this.p5.lerp(currentVertex.y, prevVertex.y, offset);
            const startX = this.p5.lerp(currentVertex.x, prevVertex.x, offset + progress * (1 - offset));
            const startY = this.p5.lerp(currentVertex.y, prevVertex.y, offset + progress * (1 - offset));
            this.p5.line(startToPrevX, startToPrevY, startX, startY);
        }
    }
}

// Date utility functions
export const daysSince = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    return Math.floor((now - start) / (1000 * 60 * 60 * 24));
};

// Math utility functions
export const radialToCartesian = (r, a, p5Instance) => {
    return { x: r * p5Instance.cos(a), y: -r * p5Instance.sin(a) };
};

export class TextWriter extends UIObj{
    constructor(p, x, y, w, h, t, size = 32, weight = undefined){
        super(p, x, y, w, h);
        this.t = t;
        this.size = size;
        this.weight = weight;
        this.alphabet = "~!@#$%&*_+=/<>?";
        this.progress = 0;
    }

    render(){
        this.p5.textSize(this.size);
        this.p5.text(this.t, this.p.x, this.p.y, this.s.x);
    }

    renderRandom(progress=undefined){
        if (progress == undefined){
            progress = this.progress;
        }
        const n = this.t.length;
        let t_render = "";
        for (let i = 0; i < n; i++){
            if (this.p5.random() > progress){
                t_render += this.alphabet[this.p5.floor(this.p5.random(0, this.alphabet.length))];
            } else {
                t_render += this.t[i];
            }
        }
        this.p5.textSize(this.size);
        this.p5.text(t_render, this.p.x, this.p.y);
    }

    renderSequential(progress=undefined){
        if (progress == undefined){
            progress = this.progress;
        }
        const n = this.t.length;
        const n_letters = this.p5.round(progress*n);
        let t_render = this.t.slice(0, n_letters);
        this.p5.textSize(this.size);
        this.p5.text(t_render, this.p.x, this.p.y);
    }

    renderSequentialRandom(progress=undefined){
        if (progress == undefined){
            progress = this.progress;
        }
        progress = this.p5.constrain(progress, 0, 1);
        const n = this.t.length;
        const n_letters = this.p5.round(progress*n);
        let t_render = this.t.slice(0, n_letters);
        // Create consistent randomness per character position
        this.p5.randomSeed(progress * 12345 * n + this.p5.millis());
        if (n_letters != n){
            t_render += this.alphabet[this.p5.floor(this.p5.random(0, this.alphabet.length))];
        }
        this.p5.randomSeed();
        this.p5.textSize(this.size);
        if (this.s.x){
            this.p5.text(t_render, this.p.x, this.p.y, this.s.x);
        } else {
            this.p5.text(t_render, this.p.x, this.p.y);
        }
    }

    renderTransition(progress=undefined, start_string, end_string, glitch_width = 0.15) {
        if (progress == undefined){
            progress = this.progress;
        }
        this.p5.textSize(this.size);
        if (progress == 0){
            if (this.s.x){
                this.p5.text(start_string, this.p.x, this.p.y, this.s.x);
            } else {
                this.p5.text(start_string, this.p.x, this.p.y);
            }
            return;
        } else if (progress == 1){
            if (this.s.x){
                this.p5.text(end_string, this.p.x, this.p.y, this.s.x);
            } else {
                this.p5.text(end_string, this.p.x, this.p.y);
            }
        }
        progress = this.p5.map(progress, 0, 1, 0, 1 + glitch_width, true);
        const max_length = Math.max(start_string.length, end_string.length);
        let t_render = "";

        for (let i = 0; i < max_length; i++) {
            const start_char = i < start_string.length ? start_string[i] : "";
            const end_char = i < end_string.length ? end_string[i] : "";

            // Create consistent randomness per character position
            this.p5.randomSeed(i * 12345 + Math.floor(this.p5.millis() / 30));
            const char_random = this.p5.random();

            // Determine what to show based on progress and random chance
            if (char_random < progress - glitch_width || start_char == '\n') {
                // Character has fully transitioned
                t_render += end_char;
            } else if (char_random < progress + glitch_width) {
                // Character is in glitch zone
                if (start_char !== "" || end_char !== "") {
                    // Only show glitch if there's actually a character to transition
                    t_render += this.alphabet[this.p5.floor(this.p5.random(0, this.alphabet.length))];
                }
            } else {
                // Character hasn't started transitioning
                t_render += start_char;
            }
        }

        // Reset random seed to not affect other random calls
        this.p5.randomSeed();
        this.t = t_render;
        if (this.s.x){
            this.p5.text(t_render, this.p.x, this.p.y, this.s.x);
        } else {
            this.p5.text(t_render, this.p.x, this.p.y);
        }
    }
}

export class UIWebButton extends UIObj{
    constructor(p, x, y, radius, scale, project){
        super(p, x, y, radius * 2, radius * 2);
        this.radius = radius; // Used for physics calculations
        this.scale = scale; // Used for visual size
        this.project = project;
        this.hoverAlpha = 0;
        this.targetHoverAlpha = 0;
        this.image = null;
        this.imageLoaded = false;
        this.imageAlpha = 0;
        this.targetImageAlpha = 0;

        // Load project image
        if (project.image) {
            try {
                // Use getMediaPath to handle imported assets properly
                const imagePath = getMediaPath(project.image);
                // Don't store the initial return value, wait for callback
                p.loadImage(imagePath, (img) => {
                    // Ensure we have a valid image with dimensions
                    if (img && img.width > 0 && img.height > 0) {
                        this.image = img; // Store the callback-provided image object
                        this.imageLoaded = true;
                        this.targetImageAlpha = 255; // Trigger fade-in animation
                    } else {
                        console.error('Invalid image loaded for', project.name, '- no dimensions');
                        this.imageLoaded = false;
                    }
                }, (err) => {
                    console.error('Image load failed for', project.name, ':', err);
                    this.imageLoaded = false;
                });
            } catch (err) {
                console.error('Error calling loadImage for', project.name, ':', err);
                this.imageLoaded = false;
            }
        }
    }

    renderFallback(overrideAlpha = null){
        // Fallback: color based on position while image loads
        const colorR = this.p5.map(this.p.x, 0, this.p5.width, 0, 255);
        const colorG = this.p5.map(this.p.y, 0, this.p5.height, 0, 255);
        const colorB = 255;
        const baseAlpha = 255 - this.hoverAlpha * 50;
        const alpha = overrideAlpha !== null ? overrideAlpha : baseAlpha;

        this.p5.fill(colorR, colorG, colorB, alpha);
        this.p5.strokeWeight(1);
        this.p5.stroke(240, alpha);
        this.p5.square(this.p.x, this.p.y, this.scale);
    }

    contains(x, y){
        // Check if point is inside the square using visual scale
        const halfSize = this.scale * 0.5;
        return x >= this.p.x - halfSize && x <= this.p.x + halfSize &&
               y >= this.p.y - halfSize && y <= this.p.y + halfSize;
    }

    render(){
        this.p5.push();

        const halfSize = this.scale / 2;
        const cornerSize = this.scale * 0.15; // Corner bracket size
        const hudAlpha = 120 + (this.hoverAlpha * 135); // HUD elements alpha

        // Show fallback while image is loading or still fading in
        if (!this.imageLoaded || !this.image || this.imageAlpha < 255) {
            // Fade out fallback as image fades in
            const fallbackAlpha = (this.imageLoaded && this.image) ? (255 - this.imageAlpha) : 255;
            this.renderFallback(fallbackAlpha);
        }

        // Show image with fade-in animation if loaded
        if (this.imageLoaded && this.image && this.imageAlpha > 0) {
            const imageOpacity = this.imageAlpha * (255 - this.hoverAlpha * 30) / 255;
            this.p5.tint(255, imageOpacity);
            try {
                this.p5.image(this.image, this.p.x - halfSize, this.p.y - halfSize, this.scale, this.scale);
            } catch (err) {
                console.error('Error rendering image for project', this.project.name, ':', err);
            }
            this.p5.noTint();
        }

        // HUD Corner brackets (targeting system style)
        this.p5.stroke(74, 144, 230, hudAlpha); // Blue theme for web experiences
        this.p5.strokeWeight(2);
        this.p5.strokeCap(this.p5.SQUARE);
        this.p5.noFill();

        const corners = [
            [-halfSize, -halfSize], // top-left
            [halfSize, -halfSize],  // top-right
            [halfSize, halfSize],   // bottom-right
            [-halfSize, halfSize]   // bottom-left
        ];

        corners.forEach(([offsetX, offsetY], index) => {
            const x = this.p.x + offsetX;
            const y = this.p.y + offsetY;
            const xDir = index === 0 || index === 3 ? 1 : -1; // Left corners: right, Right corners: left
            const yDir = index === 0 || index === 1 ? 1 : -1; // Top corners: down, Bottom corners: up

            // L-shaped brackets
            this.p5.line(x, y, x + xDir * cornerSize, y);
            this.p5.line(x, y, x, y + yDir * cornerSize);
        });

        // Status indicator dots (sci-fi style)
        if (this.hoverAlpha > 0.1) {
            this.p5.fill(74, 144, 230, hudAlpha * 0.8);
            this.p5.noStroke();
            const dotSize = 3;
            const dotSpacing = 8;

            // Status dots in top-right area
            for (let i = 0; i < 3; i++) {
                const dotX = this.p.x + halfSize - 15 - (i * dotSpacing);
                const dotY = this.p.y - halfSize + 6;
                this.p5.circle(dotX, dotY, dotSize);
            }
        }

        // Subtle scan line effect when hovered
        if (this.hoverAlpha > 0.2) {
            this.p5.stroke(74, 144, 230, hudAlpha * 0.3);
            this.p5.strokeWeight(1);
            const scanY = this.p.y - halfSize + (this.p5.millis() * 0.05) % this.scale;
            this.p5.line(this.p.x - halfSize, scanY, this.p.x + halfSize, scanY);
        }

        // Main border with enhanced styling
        this.p5.stroke(74, 144, 230, hudAlpha * 0.6);
        this.p5.strokeWeight(1);
        this.p5.noFill();
        this.p5.square(this.p.x, this.p.y, this.scale);

        this.p5.pop();

        // Project name with HUD styling
        this.p5.push();
        const textOpacity = 120 + (this.hoverAlpha * 135);
        this.p5.fill(255, textOpacity);
        this.p5.noStroke();
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        const fontSize = this.p5.width < 768 ? 16 : 20;
        this.p5.textSize(fontSize);
        this.p5.text(this.project.name, this.p.x, this.p.y + halfSize + 25);

        // Status text when hovered
        if (this.hoverAlpha > 0.3 && this.project.subtitle) {
            this.p5.fill(74, 144, 230, hudAlpha * 0.7);
            this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
            this.p5.textSize(fontSize * 0.75); // Increased from 0.6 to 0.75
            this.p5.text(this.project.subtitle, this.p.x, this.p.y + halfSize + 45);
        }

        this.p5.pop();

        // Update hover animation
        this.hoverAlpha = this.p5.lerp(this.hoverAlpha, this.targetHoverAlpha, 0.1);

        // Update image fade-in animation (slower fade for better visibility)
        this.imageAlpha = this.p5.lerp(this.imageAlpha, this.targetImageAlpha, 0.03);
    }
}
