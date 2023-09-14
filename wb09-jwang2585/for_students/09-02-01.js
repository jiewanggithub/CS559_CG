// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });

let sphere = new T.SphereGeometry();
let sphere2 = new T.SphereGeometry();
sphere2.translate(7,0,0)
let Earth_texture = new T.TextureLoader().load("../libs/earth.jpg");
let Earth_material = new T.MeshStandardMaterial({
    map: Earth_texture,
    roughnessMap: Earth_texture
    }
)
let Moon_texture = new T.TextureLoader().load("../libs/moon.jpg");
let Moon_material = new T.MeshStandardMaterial({
    map: Moon_texture,
    roughnessMap: Moon_texture
    }
)
let Earth = new GrObject("Earth",new T.Mesh(sphere,Earth_material))
Earth.setPos(0,2,0);
let Moon = new GrObject("Earth",new T.Mesh(sphere2,Moon_material))
Moon.setScale(0.3,0.3,0.3)
Moon.setPos(0,2,0);


Earth.stepWorld = function(delta, timeOfDay) {
    Earth.objects[0].rotateY(delta/1000);
    Moon.objects[0].rotateY(delta/1000);
}
world.add(Earth);
world.add(Moon);
world.go();

