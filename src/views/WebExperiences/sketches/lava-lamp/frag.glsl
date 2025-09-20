#ifdef GL_ES
precision highp float;
#endif

#define PI 3.14159265358979323846
#define TWO_PI 2.0*3.14159265358979323846

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_scale;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float circle (in vec2 _st, in float _radius){
  vec2 dist = _st-vec2(0.5);
  return 1.0-smoothstep(_radius-(_radius*0.3), _radius+(_radius*0.3), dot(dist,dist)*4.0);
}

vec3 shape(in vec2 pos, float N, float s, float m, float i, float j, float fade){
  vec2 sPos = pos*2.-1.;
  float a = atan(sPos.x+i, sPos.y+j)+PI;
  float r = TWO_PI/float(N);
  float d = cos(floor(m+a/r)*r-a)*length(sPos);
  return vec3(1.000-smoothstep(s-fade,s,d),1.000-smoothstep(s-fade,s,d),1.000-smoothstep(s-fade,s,d));
}


void main() {

  vec2 coord = vTexCoord;

  vec3 edge0 = vec3(0.0, 0.0, 0.0);
  vec3 edge1 = vec3(1.0, 1.0, 1.0);

  float field0 = snoise(u_scale*coord+vec2(u_time/30.0, u_time/6.0));
  float field1 = snoise(u_scale*coord-vec2(u_time/40.0, u_time/5.0));

  float smooth_field01add = smoothstep(0.1, 1.0, field0+field1);
  float smooth_field01div = smoothstep(0.0, 1.0, 0.1+field0-field1);
  float smooth_field0 = smoothstep(0.0, 1.0, field0);
  float smooth_field1 = smoothstep(0.0, 1.0, field1);


  vec3 circleColor = vec3(0.075 + circle(coord, 3.*smooth_field01add), 0., 0.);
  //vec3 circleColor2 = vec3(circle(coord, (smooth_field01)), circle(coord, (smooth_field0)-0.1), circle(coord, (smooth_field1)-0.3));
  vec3 circleColor2 = vec3(0., circle(coord, smooth_field01div), abs(smooth_field1-smooth_field0) + 0.05);

  //vec3 border = vec3(shape(coord, 4.0, 0.5, 0.5, 0.0, 0.0, -0.5));
  vec3 finalColor = circleColor+circleColor2;//smoothstep(0.0, 0.1, circleColor*circleColor2);

  gl_FragColor = vec4(finalColor, 1.0);
}
