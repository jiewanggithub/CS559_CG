// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });

let group = new T.Group();
let Earth_texture = new T.TextureLoader().load("../libs/earth.jpg");
let Earth_sphere = new T.SphereGeometry();
let combined = new T.MeshStandardMaterial({
    map: Earth_texture,
    bumpMap: Earth_texture,
})
group.add(new T.Mesh(Earth_sphere,combined));
Earth_sphere.translate(0,1,0);

let bg = new T.CubeTextureLoader().load([
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
    "../libs/star.jpg",
  ])
  world.scene.background = bg;
  world.add(new GrObject("group",new T.Mesh(Earth_sphere,combined)));
  world.go();