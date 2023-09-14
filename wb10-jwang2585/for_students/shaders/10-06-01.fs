/* a simple procedural texture */
/* the student should change this to implement a checkerboard */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;

/* number of checks over the UV range */
uniform float checks;

void main()
{
  
  // calculate checkerboard pattern
  vec2 checkerCoords = floor(v_uv * checks);
  float checker = mod(checkerCoords.x + checkerCoords.y, 2.0);
  
  // mix black and white based on checkerboard pattern
  vec4 color = mix(vec4(0.0), vec4(1.0), step(0.6,checker));
  
  // set color to black or white based on checkerboard pattern
  if (color.r < 0.5) {
    color = vec4(dark,1.);
  } else {
    color = vec4(light,1.);
  }
  
  gl_FragColor = color;
}

