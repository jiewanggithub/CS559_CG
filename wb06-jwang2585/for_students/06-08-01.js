// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(500, 500);
// @ts-ignore
document.getElementById("div1").appendChild(renderer.domElement);

// student does the rest.
let scene = new T.Scene();

// ground platform

let button1 = new T.Mesh(
    new T.SphereGeometry(2,50,50),
    new T.MeshBasicMaterial({color:"black"})
);
button1.translateX(4.2);
button1.translateY(22);
scene.add(button1);

let button2 = new T.Mesh(
    new T.SphereGeometry(2,50,50),
    new T.MeshBasicMaterial({color:"red"})
);

button2.translateX(8);
button2.translateY(12);
scene.add(button2);

let snowman_ground = new T.Mesh(
    new T.BoxGeometry(50,0.1,50),
    new T.MeshBasicMaterial({color:0x888888})
);
snowman_ground.position.y = -0.05;
scene.add(snowman_ground);

let snowman_p1 = new T.Mesh(
    new T.SphereGeometry(10,50,50),
    new T.MeshStandardMaterial({color:"white",metalness:0.02,roughness:0.3,emissive:"green"})
);
snowman_p1.position.setY(10);
scene.add(snowman_p1);

let snowman_p2 = new T.Mesh(
    new T.SphereGeometry(6,50,50),
    new T.MeshStandardMaterial({color:"white",metalness:0.02,roughness:0.3,emissive:"blue"})
);
snowman_p2.position.setY(22);
scene.add(snowman_p2);

let snowman_p3 = new T.Mesh(
    new T.SphereGeometry(4,50,50),
    new T.MeshStandardMaterial({color:"white",metalness:0.02,roughness:0.3,emissive:"blue"})
);
snowman_p3.position.setY(31);
scene.add(snowman_p3);

let snowman_mouse = new T.Mesh(
    new T.CylinderGeometry(0.15,0.15,2,2),
    new T.MeshStandardMaterial({color:"red"})
);
snowman_mouse.translateY(29.4);
snowman_mouse.translateX(4);
snowman_mouse.rotateX(Math.PI/2);
scene.add(snowman_mouse);

let snowman_leftEye = new T.Mesh(
    new T.SphereGeometry(0.3,50,50),
    new T.MeshBasicMaterial({color:"black"})
);
snowman_leftEye.translateY(33);
snowman_leftEye.translateX(3);
snowman_leftEye.translateZ(2);
scene.add(snowman_leftEye);

let snowman_rightEye = new T.Mesh(
    new T.SphereGeometry(0.3,50,50),
    new T.MeshBasicMaterial({color:"black"})
);
snowman_rightEye.translateY(33);
snowman_rightEye.translateX(3);
snowman_rightEye.translateZ(-2);
scene.add(snowman_rightEye);

let snowman_nose = new T.Mesh(
    new T.ConeGeometry(0.8,6,32),
    new T.MeshBasicMaterial({color:"orange"})
);
snowman_nose.translateY(31);
snowman_nose.translateX(4);
snowman_nose.rotateX(Math.PI/2);
snowman_nose.rotateZ(-Math.PI/2);
scene.add(snowman_nose);

let arm_angle = Math.PI/6;


let spotLight = new T.SpotLight("white");
spotLight.position.set(0,50,0);
scene.add(spotLight);
let ambientLight = new T.AmbientLight("white");
scene.add(ambientLight);
let camera = new T.PerspectiveCamera();
camera.position.set(80, 50, 0);
// camera.lookAt(0, 50, 0);
// @ts-ignore
let controls = new OrbitControls(camera, renderer.domElement);
let time = 0;
let number = 0;
let colorRamdom = "grey";
let lastTimestamp;
function animate(timestamp){
    let d = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
    time = (time + d)%2;
    lastTimestamp = timestamp;
    if (time < 1) {
        arm_angle = Math.PI/6 - Math.PI/3 * time;
    } else {
        arm_angle = -Math.PI/6 + Math.PI/3 * (time-1);
    }
    let snowman_leftArm = new T.Mesh(
        new T.CylinderGeometry(0.5,0.5,15,32),
        new T.MeshStandardMaterial({color:"orange"})
    )
    snowman_leftArm.translateY(22 + 2*Math.sin(arm_angle));
    snowman_leftArm.translateZ(8*Math.cos(arm_angle));
    snowman_leftArm.rotateX(Math.PI/2 +arm_angle);
    scene.add(snowman_leftArm);
    
    let snowman_rightArm = new T.Mesh(
        new T.CylinderGeometry(0.5,0.5,15,32),
        new T.MeshStandardMaterial({color:"orange"})
    )
    snowman_rightArm.translateY(22 + 2*Math.sin(arm_angle));
    snowman_rightArm.translateZ(-8*Math.cos(arm_angle));
    snowman_rightArm.rotateX(-Math.PI/2 - arm_angle);
    scene.add(snowman_rightArm);

    if((number++)%100 == 10){
        let colors = ["green","skyblue","orange","pruple","red","gery","cyan", "vilot",
        "silver"];
            colorRamdom = colors[Math.floor(Math.random()*10)];   
    }
    let hat_bottom = new T.Mesh(
        new T.BoxGeometry(6,0.1,10),
        new T.MeshBasicMaterial({color:colorRamdom})
    )
    hat_bottom.translateY(20+12+2)
    scene.add(hat_bottom);
    
    let hat_upper = new T.Mesh(
        new T.CylinderGeometry(3,3,6,50,50),
        new T.MeshBasicMaterial({color:colorRamdom})
    )
    hat_upper.translateY(20+12+5.1);
    scene.add(hat_upper);
    
    renderer.render(scene,camera);
    scene.remove(snowman_leftArm);
    scene.remove(snowman_rightArm);
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);

