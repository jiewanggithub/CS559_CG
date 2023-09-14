/* simplest possible fragment shader - just a constant color */
/* but a wrinkle: we pass the color from the javascript program in a uniform */
uniform vec3 color;

// We also passed in the time as a uniform (for bonus exercise)
uniform float time;
void main()
{
    gl_FragColor = vec4(
        sin(time + 4.0)/2.0 + 1.0,
        sin(time + 4.0)/2.0 + 1.0,
        sin(time)/2.0 + 1.0,
        1);
    // gl_FragColor = vec4(color,1);
}

