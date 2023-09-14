// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });


let Earth_texture = new T.TextureLoader().load("../libs/earth.jpg");
let Earth_sphere = new T.SphereGeometry();
let bumpped = new T.MeshStandardMaterial({
    color:"grey",
    bumpMap:Earth_texture
})

let normalized = new T.MeshStandardMaterial({
    color:"grey",
    normalMap:Earth_texture
})

let combined = new T.MeshStandardMaterial({
    map: Earth_texture,
    bumpMap: Earth_texture,
})

let Earth_bumpped = new GrObject("Earth", new T.Mesh(Earth_sphere,bumpped));
let Earth_normalized = new GrObject("Earth", new T.Mesh(Earth_sphere,normalized));
let Earth_combined = new GrObject("Earth", new T.Mesh(Earth_sphere,combined));
Earth_bumpped.setPos(0,2,0);
world.add(Earth_bumpped);
world.add(Earth_normalized);
world.add(Earth_combined);
Earth_combined.setPos(-3,2,0);
Earth_normalized.setPos(3,2,0);
world.go();