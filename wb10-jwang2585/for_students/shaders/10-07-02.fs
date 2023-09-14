/* a simple procedural texture */
/* the student should change this to implement a checkerboard */

/* passed interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;

/* number of checks over the UV range */
uniform float checks;

void main()
{
vec2 checkerCoords = floor(v_uv * checks);
float checker = mod(checkerCoords.x + checkerCoords.y, 2.0);

// calculate subpixel offset
vec2 subpixel = fract(v_uv * checks) * 2.0 - 1.;

// apply anti-aliasing to edges
float antialias = max(abs(subpixel.x), abs(subpixel.y));
float m = fwidth(antialias);
// mix black and white based on checkerboard pattern
vec4 color = mix(vec4(dark, 1.0), vec4(light, 1.0), smoothstep(.9-m, .9+m, checker + antialias));

gl_FragColor = color;
}

