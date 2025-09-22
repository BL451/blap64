import vertShaderSource from './vert.glsl';
import fragShaderSource from './frag.glsl';

export const sketch = function (p, options = {}) {
    let shady, shadyTex, start;

    p.setup = function() {
        const containerWidth = p._userNode ? p._userNode.clientWidth : 800;
        const containerHeight = p._userNode ? p._userNode.clientHeight : 600;
        p.createCanvas(containerWidth, containerHeight, p.WEBGL);

        try {
            shady = p.createShader(vertShaderSource, fragShaderSource);
            shadyTex = p.createGraphics(p.width, p.height, p.WEBGL);
            shadyTex.noStroke();
        } catch (e) {
            console.error('Failed to create shader:', e);
            shady = null;
        }

        p.noStroke();
        start = p.random()*9999.0;

    }

    p.draw = function() {
        p.background(0);

        if (shady) {
            try {
                shady.setUniform("u_resolution", [p.width, p.height]);
                shady.setUniform("u_time", start + p.millis() / 2000.0);
                shady.setUniform("u_scale", 1.0);
                p.shader(shady);
                p.rect(-p.width/2, -p.height/2, p.width, p.height);
            } catch (e) {
                console.error('Shader rendering error:', e);
                p.fill(255, 0, 0);
                p.text('Shader Error', 0, 0);
            }
        } else {
            // Fallback: show debug info
            p.fill(255);
            p.text('WebGL/Shader not available', -p.width/4, 0);
            if (!shady) p.text('Shader not loaded', -p.width/4, 20);
            if (!p._renderer) p.text('No renderer', -p.width/4, 40);
            if (!p._renderer.GL) p.text('No GL context', -p.width/4, 60);
        }
    }

    p.windowResized = function(){
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}
