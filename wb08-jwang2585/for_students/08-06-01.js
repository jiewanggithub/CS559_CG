/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import {House1,House2,House3,Tree} from "./08-06-buildings.js";
// your buildings are defined in another file... you should import them
// here

let world = new GrWorld();
let house1 = new House1();
house1.objects.forEach(obj => {
  obj.translateX(2);
  obj.translateZ(-2);
})
let house2 = new House2();
house2.objects.forEach(obj => {
  obj.translateX(-3);
  obj.translateZ(-2);
})
let house3 = new House3();
house3.objects.forEach(obj => {
  obj.translateX(-2)
  obj.translateZ(2)
  obj.rotateY(-Math.PI/2);
})
house3.setScale(1.5,1.5,1.5);
world.add(house1);
world.add(house2);
world.add(house3);
let t1 = new Tree();
t1.setScale(2,2,2);
t1.setPos(1,0,-2);
world.add(t1);
let t2 = new Tree();
t1.setScale(2,2,2);
t2.setPos(0,0,-4);
world.add(t2);
world.go();


