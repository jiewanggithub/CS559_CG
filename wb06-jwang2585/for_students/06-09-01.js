// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";
import { setupBasicScene } from "./06-09-01-helpers.js";

// students can use the object loader
// uncomment this if necessary
// import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";

/** Setup the window */
/** @type{number} */
let wid = 670; // window.innerWidth;
/** @type{number} */
let ht = 500; // window.innerHeight;
/** @type{T.WebGLRenderer} */
let renderer = new T.WebGLRenderer();
renderer.setSize(wid, ht);
renderer.shadowMap.enabled = true;

document.getElementById("museum_area").appendChild(renderer.domElement);

/* setupBasicScene creates a scene and puts the pedestals in place */
/** @type{T.Scene} */
let scene = setupBasicScene();

// Here, we add a basic, simple first object to the museum.
/**@type{T.Material} */
let material = new T.MeshPhongMaterial({
  color: "#00aa00",
  shininess: 15,
  specular: "#00ff00",
});
/**@type{T.BufferGeometry} */
let geometry = new T.BoxGeometry(0.5, 0.5, 0.5);
/**@type{T.Mesh} */
let cube = new T.Mesh(geometry, material);
cube.position.set(2, 1.35, 2);
cube.rotation.set(Math.PI / 4, 0, Math.PI / 4);
cube.castShadow = true;

// TODO: You need to create three more objects, and place them on pedestals.



// TODO: You need to place the lights.
let snowman = new T.Group();
{
  let button1 = new T.Mesh(
    new T.SphereGeometry(2,50,50),
    new T.MeshBasicMaterial({color:"black"})
);
button1.translateX(4.2);
button1.translateY(22);

let button2 = new T.Mesh(
    new T.SphereGeometry(2,50,50),
    new T.MeshBasicMaterial({color:"red"})
);

button2.translateX(8);
button2.translateY(12);

let snowman_p1 = new T.Mesh(
    new T.SphereGeometry(10,50,50),
    new T.MeshStandardMaterial({color:"white",metalness:0.02,roughness:0.3,emissive:"white"})
);
snowman_p1.position.setY(10);

let snowman_p2 = new T.Mesh(
    new T.SphereGeometry(6,50,50),
    new T.MeshStandardMaterial({color:"white",metalness:0.02,roughness:0.3,emissive:"white"})
);
snowman_p2.position.setY(22);

let snowman_p3 = new T.Mesh(
    new T.SphereGeometry(4,50,50),
    new T.MeshStandardMaterial({color:"white",metalness:0.02,roughness:0.3,emissive:"white"})
);
snowman_p3.position.setY(31);

let snowman_mouse = new T.Mesh(
    new T.CylinderGeometry(0.15,0.15,2,2),
    new T.MeshStandardMaterial({color:"red"})
);
snowman_mouse.translateY(29.4);
snowman_mouse.translateX(4);
snowman_mouse.rotateX(Math.PI/2);

let snowman_leftEye = new T.Mesh(
    new T.SphereGeometry(0.3,50,50),
    new T.MeshBasicMaterial({color:"black"})
);
snowman_leftEye.translateY(33);
snowman_leftEye.translateX(3);
snowman_leftEye.translateZ(2);

let snowman_rightEye = new T.Mesh(
    new T.SphereGeometry(0.3,50,50),
    new T.MeshBasicMaterial({color:"black"})
);
snowman_rightEye.translateY(33);
snowman_rightEye.translateX(3);
snowman_rightEye.translateZ(-2);

let snowman_nose = new T.Mesh(
    new T.ConeGeometry(0.8,6,32),
    new T.MeshBasicMaterial({color:"orange"})
);
snowman_nose.translateY(31);
snowman_nose.translateX(4);
snowman_nose.rotateX(Math.PI/2);
snowman_nose.rotateZ(-Math.PI/2);

let arm_angle = Math.PI/6;
let snowman_leftArm = new T.Mesh(
  new T.CylinderGeometry(0.5,0.5,15,32),
  new T.MeshStandardMaterial({color:"orange"})
)
snowman_leftArm.translateY(22 + 2*Math.sin(arm_angle));
snowman_leftArm.translateZ(8*Math.cos(arm_angle));
snowman_leftArm.rotateX(Math.PI/2 +arm_angle);

let snowman_rightArm = new T.Mesh(
  new T.CylinderGeometry(0.5,0.5,15,32),
  new T.MeshStandardMaterial({color:"orange"})
)
snowman_rightArm.translateY(22 + 2*Math.sin(arm_angle));
snowman_rightArm.translateZ(-8*Math.cos(arm_angle));
snowman_rightArm.rotateX(-Math.PI/2 - arm_angle);

snowman.add(snowman_p1,snowman_p2,snowman_p3,snowman_rightArm,
  snowman_leftArm,snowman_mouse,snowman_nose,snowman_leftEye
  ,snowman_rightEye,button1,button2);
}
snowman.scale.set(0.03, 0.03, 0.03);
snowman.position.set(2, 0, 2);
snowman.rotateOnWorldAxis(new T.Vector3(0, 1, 0), -Math.PI/2);
snowman.castShadow = true;
scene.add(snowman);

let loader = new OBJLoader();
let astronaut = await loader.loadAsync("./objects/07-astronaut.obj");
console.log(astronaut);
astronaut.position.set(2, 1.8, -2);
astronaut.scale.set(0.1, 0.1, 0.1);
astronaut.children[0].material = new 
T.MeshStandardMaterial({color:"orange"});
scene.add(astronaut);

let suzanne = await loader.loadAsync("./objects/07-suzanne.obj");
suzanne.position.set(-2, 1.8, 2);
suzanne.scale.set(0.03, 0.03, 0.03);
suzanne.children[0].material = new T.MeshStandardMaterial({color:"skyblue"});
scene.add(suzanne);

let teapot = await loader.loadAsync("./objects/07-teapot.obj");
teapot.position.set(-2, 1.4, -2);
teapot.scale.set(0.02, 0.02, 0.02);
teapot.children[0].material = new T.MeshStandardMaterial({color:"green"});
scene.add(teapot);

/* put a spotlight on the first object */
/**@type{T.SpotLight} */
let spotlight_1 = new T.SpotLight(0xaaaaff, 0.5);
spotlight_1.angle = Math.PI / 16;
spotlight_1.position.set(2, 5, 2);
spotlight_1.target = snowman;
spotlight_1.castShadow = true;
scene.add(spotlight_1);

let spotlight_2 = new T.SpotLight(0xaaaaff, 0.5);
spotlight_2.angle = Math.PI / 16;
spotlight_2.position.set(2, 5, -2);
spotlight_2.target = astronaut;
spotlight_2.castShadow = true;
scene.add(spotlight_2);

let spotlight_3 = new T.SpotLight(0xaaaaff, 0.5);
spotlight_3.angle = Math.PI / 16;
spotlight_3.castShadow = true;
spotlight_3.position.set(-2, 5, 2);
spotlight_3.target = suzanne;
spotlight_3.castShadow = true;
scene.add(spotlight_3);

let spotlight_4 = new T.SpotLight(0xaaaaff, 0.5);
spotlight_4.angle = Math.PI / 16;
spotlight_4.castShadow = true;
spotlight_4.position.set(-2, 5, -2);
spotlight_4.target = teapot;
spotlight_4.castShadow = true;
scene.add(spotlight_4);

/** create a "main camera" */
/** @type{T.PerspectiveCamera} */
let main_camera = new T.PerspectiveCamera(60, wid / ht, 1, 100);
main_camera.position.set(0, 4, 6);
main_camera.rotation.set(-0.5, 0, 0);

/** this will be the "current camera" - we will switch when a button is pressed */
let active_camera = main_camera;

// TODO: You need to place these cameras.
let camera_1 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_1.position.set(0, 3, 0);
camera_1.lookAt(3, 0 ,3);
let camera_2 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_2.position.set(0, 3, 0);
camera_2.lookAt(3, 0 ,-3);
let camera_3 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_3.position.set(0, 3, 0);
camera_3.lookAt(-3, 0 ,3);
let camera_4 = new T.PerspectiveCamera(60, wid / ht, 1, 100);
camera_4.position.set(0, 3, 0);
camera_4.lookAt(-3, 0 ,-3);
// scene.add(cube);

// add orbit controls - but only to the main camera
let controls = new OrbitControls(main_camera, renderer.domElement);

/** Tie the buttons to the cameras */
function setupCamButton(name, camera) {
  const button = document.getElementById(name);
  if (!(button instanceof HTMLButtonElement))
    throw new Error(`Button ${name} doesn't exist`);
  button.onclick = function () {
    active_camera = camera;
    renderer.render(scene, active_camera);
  };
}
setupCamButton("main_cam", main_camera);
setupCamButton("cam_1", camera_1);
setupCamButton("cam_2", camera_2);
setupCamButton("cam_3", camera_3);
setupCamButton("cam_4", camera_4);

// finally, draw the scene. Also, add animation.
renderer.render(scene, active_camera);

let lastTimestamp; // undefined to start

function animate(timestamp) {
  // Convert time change from milliseconds to seconds
  let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
  lastTimestamp = timestamp;

  // Animate the cube (basic object)
  // cube.rotateOnWorldAxis(new T.Vector3(0, 1, 0), timeDelta);
  let t = (0.001 * lastTimestamp) % 2;
  let arm_left = snowman.children[4];
  let arm_right = snowman.children[3];
  if (t < 1) {
    arm_left.rotateX((Math.PI/6 - Math.PI/3*timeDelta));
    arm_right.rotateX((Math.PI/6 - Math.PI/3*timeDelta));
  } else {
    arm_left.rotateX((-Math.PI/6 + timeDelta*(1-timeDelta)));
    arm_right.rotateX((-Math.PI/6 + timeDelta*(1-timeDelta)));
  };

  astronaut.rotateOnWorldAxis(new T.Vector3(0, 1, 0), -timeDelta);
  astronaut.rotateOnWorldAxis(new T.Vector3(1, 0, 0), -timeDelta);
  suzanne.rotateOnWorldAxis(new T.Vector3(0, 1, 0), -timeDelta);
  teapot.rotateOnWorldAxis(new T.Vector3(0, 1, 0), timeDelta);
  // TODO: animate your objects
  snowman.position.set(2, 1.2 +
     0.2*Math.sin(timestamp*0.002), 2);
  astronaut.position.set(2, 1.8 +
     0.2*Math.sin(timestamp*0.002 + Math.PI/2), -2);
  suzanne.position.set(-2, 1.8 +
     0.2*Math.sin(timestamp*0.002 + Math.PI), 2);
  teapot.position.set(-2, 1.8 +
     0.2*Math.sin(timestamp*0.002 - Math.PI/2), -2);
  // draw and loop
  renderer.render(scene, active_camera);
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
