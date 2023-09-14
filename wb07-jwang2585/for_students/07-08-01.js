/*jshint esversion: 6 */
// @ts-check

// get things we need
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import {
  GrSimpleSwing,
  GrColoredRoundabout,
  GrSimpleRoundabout,
  GrCarousel,
  Wolf,
  GrSwingRide,
  GrJumpRide
} from "./07-08-parkobjects.js";
import { SimpleBouncer } from "./07-08-simplepark.js";

let parkDiv = document.getElementById("div1");
let world = new GrWorld({ groundplanesize: 20, where: parkDiv });

// // world.add(new SimpleBouncer(0, 5));

let roundabout = new GrSimpleRoundabout({ x: -2, z:10 });
roundabout.setScale(2,2,2)
world.add(roundabout);

let roundabout_2 = new GrColoredRoundabout({ x: -12,  z:10});
roundabout_2.setScale(2,2,2)
world.add(roundabout_2);

let swing = new GrSimpleSwing({x: 12, z: -10});
swing.setScale(2,2,2)
world.add(swing);

let swing_2 = new GrSimpleSwing({ x: 12 });
swing_2.setScale(2,2,2)
world.add(swing_2);

let carousel = new GrCarousel({x: 2, z: -10});
carousel.setScale(1.8,1.8,1.8);
world.add(carousel);

let wolf = new Wolf();
world.add(wolf);

let swingRide = new GrSwingRide({x:-12, z:-10});
world.add(swingRide);

let jumpRide = new GrJumpRide({x:12,z:10});
world.add(jumpRide);
world.go();
