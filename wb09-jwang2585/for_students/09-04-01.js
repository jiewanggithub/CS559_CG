// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });


let Earth_texture = new T.TextureLoader().load("../libs/earth.jpg");
let Earth_sphere = new T.SphereGeometry();
let combined = new T.MeshStandardMaterial({
    map: Earth_texture,
    bumpMap: Earth_texture,
})
Earth_sphere.translate(0,1,0);
let Earth_combined = new GrObject("Earth", new T.Mesh(Earth_sphere,combined));

let env_box = new T.BoxGeometry(100,100,100);
let star_texture = new T.TextureLoader().load("../libs/star.jpg");
let env_mesh = new T.Mesh(env_box, [
    new T.MeshStandardMaterial({map:star_texture, side: T.BackSide}),
    new T.MeshStandardMaterial({map:star_texture, side: T.BackSide}),
    new T.MeshStandardMaterial({map:star_texture, side: T.BackSide}),
    new T.MeshStandardMaterial({map:star_texture, side: T.BackSide}),
    new T.MeshStandardMaterial({map:star_texture,side: T.BackSide}),
    new T.MeshStandardMaterial({map:star_texture, side: T.BackSide})
  ])
Earth_combined.setScale(5,5,5);
  world.add(new GrObject("envir", env_mesh))
  world.add(Earth_combined);
  world.go();