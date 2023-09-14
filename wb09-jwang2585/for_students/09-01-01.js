// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });

let rectangle =  new T.BoxGeometry(9,0.3,4);
let front_texture = new T.TextureLoader().load("../libs/keyboard.png");
let front_mtrl = new T.MeshStandardMaterial({
    map:front_texture
})

let grey_mtrl = new T.MeshStandardMaterial({
    color:"silver",
    metalness:0.2
})

let keyBoard = new T.Mesh(
    rectangle,
    [   grey_mtrl,
        grey_mtrl,
        front_mtrl,
        grey_mtrl,
        grey_mtrl,
        grey_mtrl]
);

let obj = new GrObject("",keyBoard);
obj.setPos(0,0.2,0);
world.add(obj);
world.go();

