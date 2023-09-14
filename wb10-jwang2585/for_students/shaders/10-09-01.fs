/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the dots */
uniform vec3 light;
uniform vec3 dark;

/* number of dots over the UV range */
uniform float dots;

/* how big are the circles */
uniform float radius;
varying vec3 v_normal;
varying vec3 v_position;
void main()
{
    float x = v_uv.x * dots;
    float y = v_uv.y * dots;

    float xc = floor(x);
    float yc = floor(y);

    float dx = x-xc-.5;
    float dy = y-yc-.5;

    float d = sqrt(dx*dx + dy*dy);
    float dc = step(d,radius);

    float r = mod(xc+yc,2.0);
    vec3 darkHat;
    if (r < 1.0){
    darkHat = vec3(0,0,1);
    }
    else{
    darkHat = vec3(0,1,0);
    }

    vec3 light = vec3(.8,.8,.8);
    float dots = 4.;
    float radius = 0.3;
    vec3 surface_color = mix(light,dark,dc);

    vec3 lightDir = vec3(0,0,1);
    vec3 normal = normalize(v_normal);
    vec3 diffuse = surface_color * max(dot(normal,lightDir),0.);
    gl_FragColor = vec4(diffuse, 1.);
}

