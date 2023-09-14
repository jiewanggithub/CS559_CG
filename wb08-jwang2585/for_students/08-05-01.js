/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define a class of Dice here - it should be a subclass of GrObject
class dice extends GrObject {
    constructor() {
      let geometry = new T.BufferGeometry;
      const vertices = new Float32Array([
        0,1,1, 1,1,1, 0,1,0, 1,1,1, 1,1,0, 0,1,0,
        0,1,0, 0,1,1, 0,0,1, 0,0,0, 0,1,0, 0,0,1,
        0,0,0, 0,0,1, 1,0,1, 1,0,1, 1,0,0, 0,0,0,
        1,1,1, 0,1,1, 0,0,1, 0,0,1, 1,1,1, 1,0,1,
        0,1,0, 1,1,0, 1,0,0, 1,0,0, 0,0,0, 0,1,0,
        1,1,0, 1,0,0, 1,0,1, 1,1,0, 1,1,1, 1,0,1    
        ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      geometry.computeVertexNormals();
  
      const uvs = new Float32Array([
        
        1/3,1/3, 2/3,1/3, 1/3,2/3, 2/3,1/3, 2/3,2/3, 1/3,2/3,
        1/3,2/3, 1/3,1/3, 0,1/3, 0,2/3, 1/3,2/3, 0,1/3,
        2/3,2/3, 2/3,1/3, 1,1/3, 1,1/3, 1,2/3, 2/3,2/3,
        2/3,1/3, 1/3,1/3, 1/3,0, 1/3,0, 2/3,1/3, 2/3,0,
        1/3,2/3, 2/3,2/3, 2/3,1, 2/3,1, 1/3,1, 1/3,2/3, 
        2/3,1/3, 1,1/3, 1,0, 2/3,1/3, 2/3,0, 1,0 
      ])
      geometry.setAttribute('uv',new T.BufferAttribute(uvs, 2));
  
      let texture = new T.TextureLoader().load("../images/dice_texture.png");
      let material = new T.MeshStandardMaterial({
        map: texture, // map texture
        side: T.DoubleSide
      });
      let mesh = new T.Mesh(geometry, material);
      super('dice', mesh);
    }
  }
let world = new GrWorld();
let dice1 = new dice();
dice1.objects.forEach(element => {
  element.rotation.x = Math.PI/2;
});
let dice2 = new dice();
dice1.objects.forEach(element => {
  element.position.x = -2.5;
  element.position.y = 1;
});
world.add(dice2);
world.add(dice1);
world.go();

