/*jshint esversion: 6 */
// @ts-check

/**
 * Minimal Starter Code for the QuadCopter assignment
 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(600, 400);
document.body.appendChild(renderer.domElement);

let scene = new T.Scene();
let camera = new T.PerspectiveCamera(
        40,
        renderer.domElement.width / renderer.domElement.height,
        1,
        1000
    );

camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 0, 0);

// since we're animating, add OrbitControls
let controls = new OrbitControls(camera, renderer.domElement);

scene.add(new T.AmbientLight("white", 0.2));

// two lights - both a little off white to give some contrast
let dirLight1 = new T.DirectionalLight(0xf0e0d0, 1);
dirLight1.position.set(1, 1, 0);
scene.add(dirLight1);

let dirLight2 = new T.DirectionalLight(0xd0e0f0, 1);
dirLight2.position.set(-1, 1, -0.2);
scene.add(dirLight2);

// make a ground plane
let groundBox = new T.BoxGeometry(10, 0.1, 10);
let groundMesh = new T.Mesh(
        groundBox,
        new T.MeshStandardMaterial({ color: 0x88b888, roughness: 0.9 })
    );
// put the top of the box at the ground level (0)
groundMesh.position.y = -0.05;
scene.add(groundMesh);

let Quadcopter = function(color) {
    // parent group
	this.group = new T.Group();

    // main body
	let cockpit = new T.Mesh(
        new T.BoxGeometry(60,50,50,1,1,1),
        new T.MeshPhongMaterial({color:color}));
	this.group.add(cockpit);
	
	// head
	let head = new T.Mesh(
        new T.BoxGeometry(20,50,50,1,1,1),
        new T.MeshPhongMaterial({color:"silver"}));
	head.position.x = 40;
	this.group.add(head);
	
	// tail
	let tail = new T.Mesh(
        new T.BoxGeometry(18,40,5,1,1,1),
        new T.MeshPhongMaterial({color:"silver"})
    );
	tail.position.set(-35,25,0);
	this.group.add(tail);
	
	// wings
	let wing = new T.Mesh(
        new T.BoxGeometry(40,8,150,1,1,1),
        new T.MeshPhongMaterial({color:"silver"}));
	this.group.add(wing);
	
	// propeller left
    this.propeller_left_node = new T.Mesh(
    new T.BoxGeometry(20,5,5,1,1,1),
    new T.MeshPhongMaterial({color: 0x59332e})
    );
    let propeller_left = new T.Mesh(
        new T.BoxGeometry(1,30,10,1,1,1),
        new T.MeshPhongMaterial({color: 0x59332e})
    );
    propeller_left.position.set(6,0,0);
    this.propeller_left_node.add(propeller_left);
    this.propeller_left_node.position.set(30,0,-50);
    this.group.add(this.propeller_left_node);
    
	// propeller right
	this.propeller_right_node = new T.Mesh(
    new T.BoxGeometry(20,5,5,1,1,1),
    new T.MeshPhongMaterial({color: 0x59332e})
    );
    var propeller_right = new T.Mesh(
    new T.BoxGeometry(1,30,10,1,1,1),
    new T.MeshPhongMaterial({color: 0x59332e})
    );
	propeller_right.position.set(6,0,0);
	this.propeller_right_node.add(propeller_right);
	this.propeller_right_node.position.set(30,0,50);
	this.group.add(this.propeller_right_node);
    this.pilot = new Pilot();
    this.pilot.group.position.set(0,35,0)
    this.group.add(this.pilot.group);
};

let Pilot = function(){
	this.group = new T.Object3D();
	this.group.name = "pilot";
	this.hair_angle=0;

	// Body
	let body = new T.Mesh(
        new T.BoxGeometry(15,15,15),
        new T.MeshPhongMaterial({color:0x23190f}));
	body.position.set(2,-12,0);
	this.group.add(body);

	// Face
	let face = new T.Mesh(
        new T.BoxGeometry(10,12,12),
        new T.MeshLambertMaterial({color:0xF5986E}));
	this.group.add(face);

	// Hair element
	let hair = new T.Mesh(
        new T.BoxGeometry(4,4,4),
        new T.MeshLambertMaterial({color:0x59332e}));
	hair.geometry.applyMatrix4(new T.Matrix4().makeTranslation(0,3,0));
	let hairs = new T.Group();
	this.hairsTop = new T.Group();
	// hair at the top: spreading the hair at the top
	for (let i=0; i<12; i++){
		let hair_clone = hair.clone();
		let col = i%3;
		hair_clone.position.set(-4 + (Math.floor(i/3))*4, 0, -4 + col*4);
		this.hairsTop.add(hair_clone);
	}
	hairs.add(this.hairsTop);
	// create other hair
	let hair_side = new T.BoxGeometry(12,5,1);
	hair_side.applyMatrix4(new T.Matrix4().makeTranslation(-6,0,0));
	let hair_side_right = new T.Mesh(hair_side,
        new T.MeshLambertMaterial({color:0x59332e}));
	let hair_side_left = hair_side_right.clone();
	hair_side_right.position.set(8,-2,6);
	hair_side_left.position.set(8,-2,-6);
	hairs.add(hair_side_right);
	hairs.add(hair_side_left);
	let hair_back = new T.Mesh(
        new T.BoxGeometry(2,8,10),
        new T.MeshLambertMaterial({color:0x59332e}));
	hair_back.position.set(-1,-4,0)
	hairs.add(hair_back);
	hairs.position.set(-5,5,0);
	this.group.add(hairs);

    // Ear
	let ear_left = new T.Mesh(
        new T.BoxGeometry(2,3,2),
        new T.MeshLambertMaterial({color:0xF5986E}));
	ear_left.position.set(0,0,-6);
	let ear_right = ear_left.clone();
	ear_right.position.set(0,0,6);
	this.group.add(ear_left);
	this.group.add(ear_right);

    // mouse
	let mouse = new T.Mesh(
        new T.BoxGeometry(8,0.5,8),
        new T.MeshLambertMaterial({color:0xF5986E}));
    mouse.position.set(2,-2.1,0);
	this.group.add(mouse);

    // eye
    let eye_left = new T.Mesh(
        new T.BoxGeometry(3,1,3),
        new T.MeshBasicMaterial({color:0xF5986E}));
    eye_left.position.set(4,4.5,4);
    let eye_right = new T.Mesh(
        new T.BoxGeometry(3,1,3),
        new T.MeshBasicMaterial({color:0xF5986E}));
    eye_right.position.set(4,4.5,-4);
    this.group.add(eye_left);
    this.group.add(eye_right);

    // nose
    let nose = new T.Mesh(
        new T.BoxGeometry(2,1,1),
        new T.MeshBasicMaterial({color:0x59332e}));
    nose.position.set(4,2,0);
    this.group.add(nose);
    //scale accordingly
    this.group.scale.set(3,3,3);
}

// animate hairs
Pilot.prototype.updateHairs = function(){
	let hairs = this.hairsTop.children;
	for (let i=0; i<hairs.length; i++){
		let hair = hairs[i];
		hair.scale.y = .8 + Math.cos(this.hair_angle+i/3)*.25;
	}
	this.hair_angle += 0.2;
}

let Radar = function(){
  this.group = new T.Group();
  let points = [];
  for ( let i = 0; i < 10; i++ ) {
    points.push(new T.Vector2( 2 * Math.cos( 0.1 * i * Math.PI )
    , 1 - Math.sin( 0.1 * i * Math.PI )));
  }
  let part1 = new T.Mesh( 
    new T.LatheGeometry( points ), 
    new T.MeshStandardMaterial( {color:"grey",roughness: 1 } )
  );
  part1.scale.set(1.5,1.5,1.5);
  let part2 = new T.Mesh(
    new T.ConeGeometry( 1, 3, 32 ),
    new T.MeshBasicMaterial( {color: "grey"} )
  )
  part2.translateY(2.2);
  part2.scale.set(1.5,1.5,1.5);
  this.group.add(part1);
  this.group.add(part2);
}

let quadcopter1 = new Quadcopter("orange");
quadcopter1.group.scale.set(.01,.01,.01);
quadcopter1.group.position.y = 1;
scene.add(quadcopter1.group);

let quadcopter2 = new Quadcopter("skyblue");
quadcopter2.group.scale.set(.015,.015,.015);
scene.add(quadcopter2.group);

let quadcopter3 = new Quadcopter("red");
quadcopter3.group.scale.set(.015,.015,.015);
quadcopter3.group.translateY(2);
scene.add(quadcopter3.group);

let radar = new Radar();
radar.group.scale.set(0.2, 0.2, 0.2);
radar.group.position.y = 0.4;
scene.add(radar.group);

// animation loop
function animateLoop(timestamp) {
    let theta = timestamp / 1000;
    quadcopter1.pilot.updateHairs();
    quadcopter1.propeller_left_node.rotation.x = 10*theta;
    quadcopter1.propeller_right_node.rotation.x = -10*theta;
    quadcopter1.group.position.x = 3*Math.cos(theta);
    quadcopter1.group.position.z = 3*Math.sin(theta);
    quadcopter1.group.rotation.y = -theta-Math.PI/2;

    quadcopter2.pilot.updateHairs();
    quadcopter2.propeller_left_node.rotation.x = 10*theta;
    quadcopter2.propeller_right_node.rotation.x = -10*theta;
    quadcopter2.group.position.x = 3*Math.cos(theta);
    quadcopter2.group.position.y = 3+Math.cos(2*theta);
    quadcopter2.group.position.z = 3*Math.sin(theta);
    quadcopter2.group.rotation.y = -theta-Math.PI/2;

    let index = (timestamp/1000) % 8;
    quadcopter3.pilot.updateHairs();
    quadcopter3.propeller_left_node.rotation.x = 10*theta;
    quadcopter3.propeller_right_node.rotation.x = -10*theta;
    if (index<1){
      quadcopter3.group.position.x = 2*index-1;
    } else if (index<2) {
      index = (index-1)*Math.PI/2;
      quadcopter3.group.position.x = 1 + Math.sin(index);
      quadcopter3.group.position.y = 3 - Math.cos(index);
      quadcopter3.group.rotation.z = index;
    } else if (index<3) {
      index -= 2;
      quadcopter3.group.position.y = 3 + 2*index;
    } else if (index<4) {
      index = (index-3)*Math.PI/2;
      quadcopter3.group.position.x = 1 + Math.cos(index);
      quadcopter3.group.position.y = 5 + Math.sin(index);
      quadcopter3.group.rotation.z = index+Math.PI/2;
    } else if (index<5) {
      index -= 4;
      quadcopter3.group.position.x = -2*index+1;
    } else if (index<6) {
      index = (index-5)*Math.PI/2;
      quadcopter3.group.position.x = -1 - Math.sin(index);
      quadcopter3.group.position.y = 5 + Math.cos(index);
      quadcopter3.group.rotation.z = index+Math.PI;
    } else if (index<7) {
      index -= 6;
      quadcopter3.group.position.y = 5 - 2*index;
    } else {
      index = (index-7)*Math.PI/2;
      quadcopter3.group.position.x = -1 - Math.cos(index);
      quadcopter3.group.position.y = 3 - Math.sin(index);
      quadcopter3.group.rotation.z = index+3*Math.PI/2;
    }
  
    // point to vehicle
    radar.group.rotation.set(0, 0, 0);
    radar.group.rotateZ(Math.PI/2);
    radar.group.rotateX(-theta + Math.PI);
    radar.group.rotateZ(-Math.atan((3+Math.cos(2*theta))/3));
    renderer.render(scene, camera);
    window.requestAnimationFrame(animateLoop);
  }
window.requestAnimationFrame(animateLoop);