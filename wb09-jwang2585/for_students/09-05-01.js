// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas ,groundplane:false});

let sphere_geo = new T.SphereGeometry(2)
sphere_geo.translate(0,2,0);
let bg = new T.CubeTextureLoader().load([
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
])

let texture = new T.TextureLoader().load("../libs/star.jpg");
let material = new T.MeshBasicMaterial({
  envMap: texture
});

world.scene.background = bg;

world.add(new GrObject("", new T.Mesh(sphere_geo, material)))
world.go();