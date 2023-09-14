/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define a class of Domino here - it should be a subclass of GrObject
class dominos extends GrObject {
    constructor() {
      let geometry = new T.BufferGeometry;
      const vertices = new Float32Array([
        0, 0, 0, // 0
        0, 0, 1, // 1
        0, 1, 1, // 2
        0, 1, 0, // 3
        1, 0, 0, // 4
        1, 0, 1, // 5
        1, 1, 1, // 6
        1, 1, 0, // 7
  
        0, 0, 0, // 0
        0, 0, 1, // 1
        0, 1, 1, // 2
        0, 1, 0, // 3
        1, 0, 0, // 4
        1, 0, 1, // 5
        1, 1, 1, // 6
        1, 1, 0, // 7
  
        0, 0, 0, // 0
        0, 0, 1, // 1
        0, 1, 1, // 2
        0, 1, 0, // 3
        1, 0, 0, // 4
        1, 0, 1, // 5
        1, 1, 1, // 6
        1, 1, 0, // 7
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
      const i = 8;
      geometry.computeVertexNormals();
      geometry.setIndex([
        0,1,2, 3,0,2, // left
        4,6,5, 7,6,4, // right
        i+0,i+5,i+1, i+0,i+4,i+5, // bottom
        i+3,i+2,i+7, i+2,i+6,i+7, // top
        2*i+6,2*i+1,2*i+5, 2*i+1,2*i+6,2*i+2, // lower 
        2*i+3,2*i+7,2*i+0, 2*i+7,2*i+4,2*i+0, // upper
      ]);
  
      const uvs = new Float32Array([
        0,0, 0,0,
        0,0, 0,0,
        0,0, 0,0,
        0,0, 0,0, 
        0,0, 0,0, 
        2/3,-1/3, 
        1,-1/3,
        0,0, 0,0, 
        2/3,1/3, 
        1,1/3,
        0,0, 0,0, 
        0,0, 0,0,
        0,0, 0,0, 
        0,0, 0,0,
      ])
      geometry.setAttribute('uv',new T.BufferAttribute(uvs, 2));
      let texture = new T.TextureLoader().load("../images/dice_texture.png");
      texture.wrapT = T.MirroredRepeatWrapping;
      let material = new T.MeshStandardMaterial({
        map: texture,
      });
      let mesh = new T.Mesh(geometry, material);
      mesh.scale.set(2,0.5,1);
      super('Dominos', mesh);
    }
  }

let world = new GrWorld();
for (let i = 0; i < 5; i++){
  let d1 = new dominos();
  d1.objects.forEach(element => {
    element.rotation.z = Math.PI/2;
    element.position.x = i*2 - 4;
  })
  world.add(d1);
}
world.go();
