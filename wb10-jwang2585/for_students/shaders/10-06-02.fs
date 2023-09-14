/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;
uniform float checks;
uniform vec3 light;
uniform vec3 dark;

void main(){

  
    float x = v_uv.x * checks;
    float y = v_uv.y * checks;

    float xc = floor(x) + 0.5;
    float yc = floor(y) + 0.5;

    float dx = x - xc;
    float dy = y - yc;

    float radius = 0.3;
    float r = mod(xc+yc,2.0);
    float dc;
    vec3 darkHat;
    if (r < 1.0){
    darkHat = vec3(0,0,1);
    float d = sqrt(dx*dx + dy*dy);
    dc = step(d,radius);
    }
    else{
    float m = max(abs(dx),abs(dy));
    dc = step(m, 1./checks);
    darkHat = vec3(0,1,0);
    }
    gl_FragColor = vec4(mix(light,darkHat,dc), 1.);
    
 
}

