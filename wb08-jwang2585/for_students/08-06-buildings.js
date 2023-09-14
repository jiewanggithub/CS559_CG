/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { CylinderGeometry } from "../libs/CS559-Three/build/three.module.js";
export { House1, House2, House3, Tree };
let roof_texture = new T.TextureLoader().load("../images/wood1.jpg");
let wall_texture = new T.TextureLoader().load("../images/wall1.jpg");
let roof2_texture = new T.TextureLoader().load("../images/wood2.jpg");
let wall2_texture = new T.TextureLoader().load("../images/wall2.jpg");
let door_texture = new T.TextureLoader().load("../images/door.png");
function box(x = 10, y = 10, z = 10) {
  let geometry = new T.BufferGeometry();
  const vertices = new Float32Array([
    0,
    0,
    0, // 0
    0,
    0,
    1, // 1
    0,
    1,
    1, // 2
    0,
    1,
    0, // 3
    1,
    0,
    0, // 4
    1,
    0,
    1, // 5
    1,
    1,
    1, // 6
    1,
    1,
    0, // 7

    0,
    0,
    0, // 0
    0,
    0,
    1, // 1
    0,
    1,
    1, // 2
    0,
    1,
    0, // 3
    1,
    0,
    0, // 4
    1,
    0,
    1, // 5
    1,
    1,
    1, // 6
    1,
    1,
    0, // 7

    0,
    0,
    0, // 0
    0,
    0,
    1, // 1
    0,
    1,
    1, // 2
    0,
    1,
    0, // 3
    1,
    0,
    0, // 4
    1,
    0,
    1, // 5
    1,
    1,
    1, // 6
    1,
    1,
    0, // 7
  ]);
  geometry.setAttribute("position", new T.BufferAttribute(vertices, 3));
  const i = 8;
  geometry.computeVertexNormals();
  geometry.setIndex([
    0,
    1,
    2,
    0,
    2,
    3,
    4,
    6,
    5,
    4,
    7,
    6,
    i + 0,
    i + 5,
    i + 1,
    i + 0,
    i + 4,
    i + 5,
    i + 2,
    i + 7,
    i + 3,
    i + 2,
    i + 6,
    i + 7,
    2 * i + 1,
    2 * i + 5,
    2 * i + 6,
    2 * i + 1,
    2 * i + 6,
    2 * i + 2,
    2 * i + 0,
    2 * i + 3,
    2 * i + 7,
    2 * i + 0,
    2 * i + 7,
    2 * i + 4,
  ]);

  const uv = new Float32Array([
    0,
    1 / 3,
    0,
    2 / 3,
    1 / 3,
    2 / 3,
    1 / 3,
    1 / 3,

    1,
    1 / 3,
    1,
    2 / 3,
    2 / 3,
    2 / 3,
    2 / 3,
    1 / 3,

    1 / 3,
    1 / 3,
    2 / 3,
    1 / 3,
    2 / 3,
    0,
    1,
    0,

    1 / 3,
    2 / 3,
    2 / 3,
    2 / 3,
    2 / 3,
    1 / 3,
    1,
    1 / 3,

    1 / 3,
    1 / 3,
    2 / 3,
    1 / 3,
    1,
    1 / 3,
    0,
    1 / 3,

    1 / 3,
    2 / 3,
    2 / 3,
    2 / 3,
    1,
    2 / 3,
    0,
    2 / 3,
  ]);
  geometry.setAttribute("uv", new T.BufferAttribute(uv, 2));
  geometry.scale(x, y, z);
  return geometry;
}

class House1 extends GrObject {
  constructor() {
    let wall_material = new T.MeshStandardMaterial({
      map: wall_texture, // map texture
    });

    let house1_body = box(10, 10, 10);
    let house1 = new T.Mesh(house1_body, wall_material);
    let house1_roof_geo = new T.BufferGeometry();
    const vertices = new Float32Array([
      0, 5, 0, 10, 0, 0, 0, 0, 10, -10, 0, 0, 0, 0, -10,
    ]);
    house1_roof_geo.setAttribute(
      "position",
      new T.BufferAttribute(vertices, 3)
    );
    house1_roof_geo.setIndex([0, 2, 1, 0, 3, 2, 0, 4, 3, 0, 1, 4]);
    house1_roof_geo.computeVertexNormals();
    const uv = new Float32Array([1 / 2, 1 / 2, 0, 0, 1, 0, 1, 1, 0, 1]);
    house1_roof_geo.setAttribute("uv", new T.BufferAttribute(uv, 2));
    let roof_material = new T.MeshStandardMaterial({
      map: roof_texture,
    });
    let roof = new T.Mesh(house1_roof_geo, roof_material);
    roof.rotateY(Math.PI / 4);
    roof.translateX(10 / Math.sqrt(2));
    roof.translateY(10);
    house1.rotation.z = Math.PI / 2;
    house1.translateZ(-10);
    house1.translateY(-10);
    let group = new T.Group();
    // group.add(house1);
    group.add(roof);
    let box1 = new T.BoxGeometry(10, 10, 10);
    box1.translate(5, 5, -5);
    let material = new T.MeshStandardMaterial({
      color: "white",
    });
    let door_material = new T.MeshStandardMaterial({
      map: door_texture,
    });
    group.add(
      new T.Mesh(box1, [
        wall_material,
        wall_material,
        wall_material,
        wall_material,
        door_material,
        wall_material,
      ])
    );
    group.scale.set(0.2, 0.2, 0.2);
    super("house1", group);
  }
}
class House2 extends GrObject {
  constructor() {
    let house2_body = box(10, 10, 10);
    let wall_material = new T.MeshStandardMaterial({
      map: wall2_texture, // map texture
    });
    let house2 = new T.Mesh(house2_body, wall_material);
    let house2_roof_geo = new T.BufferGeometry();
    const vertices = new Float32Array([
      0, 3, 0, 15, 3, 0, 0, 0, 8, 15, 0, 8, 0, 0, -8, 15, 0, -8,
    ]);
    house2_roof_geo.setAttribute(
      "position",
      new T.BufferAttribute(vertices, 3)
    );
    house2_roof_geo.setIndex([
      0, 2, 3, 0, 3, 1, 0, 1, 5, 0, 5, 4, 0, 4, 2, 1, 3, 5,
    ]);
    house2_roof_geo.computeVertexNormals();
    const uv = new Float32Array([0, 1 / 2, 1, 1 / 2, 0, 1, 1, 1, 0, 0, 1, 0]);
    house2_roof_geo.setAttribute("uv", new T.BufferAttribute(uv, 2));
    let roof_material = new T.MeshStandardMaterial({
      map: roof2_texture,
    });

    let roof = new T.Mesh(house2_roof_geo, roof_material);
    roof.rotateY(Math.PI / 2);
    roof.translateX(-2.5);
    roof.translateY(9);
    roof.translateZ(5);
    let group = new T.Group();
    house2.rotation.z = Math.PI / 2;
    house2.translateZ(-10);
    house2.translateY(-10);
    group.add(roof);
    group.add(house2);
    group.scale.set(0.2, 0.2, 0.2);
    super("house2", group);
  }
}
class Tree extends GrObject {
  constructor() {
    let brown = new T.MeshStandardMaterial({
      color: "#643212",
    });
    let green = new T.MeshStandardMaterial({
      color: "green",
    });
    let treeStem = new CylinderGeometry(0.1, 0.2, 1);
    treeStem.translate(0, 0.4, 0);
    let top1 = new CylinderGeometry(0.2, 0.45, 0.35);
    top1.translate(0, 0.4, 0);
    let top2 = new CylinderGeometry(0.1, 0.32, 0.35);
    top2.translate(0, 0.7, 0);
    let top3 = new CylinderGeometry(0, 0.21, 0.35);
    top3.translate(0, 1.0, 0);
    let tree = new T.Group();
    tree.add(new T.Mesh(treeStem, brown));
    tree.add(new T.Mesh(top1, green));
    tree.add(new T.Mesh(top2, green));
    tree.add(new T.Mesh(top3, green));
    super("Tree", tree);
  }
}
class House3 extends GrObject {
  constructor() {
    let body1 = new T.BoxGeometry(1, 1, 1);
    body1.translate(0, 0.5, 0);
    let body2 = new T.BoxGeometry(1, 1, 1);
    body2.translate(-1, 0.5, 1);
    let body3 = new T.BoxGeometry(1, 1, 1);
    body3.translate(0, 0.5, 1);
    let body4 = new T.BoxGeometry(1, 1, 1);
    body4.translate(1, 0.5, 1);
    let window_texture = new T.TextureLoader().load("../images/window.jpg");
    let window_material = new T.MeshStandardMaterial({
      map: window_texture,
    });

    let door_material = new T.MeshStandardMaterial({
      map: door_texture,
    });
    let material = new T.MeshStandardMaterial({
      map: wall_texture,
    });
    let group = new T.Group();
    group.add(
      new T.Mesh(body1, [
        material,
        material,
        material,
        material,
        material,
        door_material,
      ])
    );
    group.add(
      new T.Mesh(body2, [
        material,
        material,
        material,
        material,
        material,
        window_material,
      ])
    );
    group.add(
      new T.Mesh(body3, [
        material,
        material,
        material,
        material,
        material,
        window_material,
      ])
    );
    group.add(
      new T.Mesh(body4, [
        material,
        material,
        material,
        material,
        material,
        window_material,
      ])
    );
    let roof1 = new T.BufferGeometry();
    let vertices = new Float32Array([
      0,
      0.5,
      0, // 0
      3,
      0.5,
      0, // 1
      0,
      0,
      0.5, // 2
      3,
      0,
      0.5, // 3
      0,
      0,
      -0.5, // 4
      3,
      0,
      -0.5, //5
    ]);
    roof1.setAttribute("position", new T.BufferAttribute(vertices, 3));
    roof1.setIndex([0, 2, 3, 0, 3, 1, 0, 1, 5, 0, 5, 4, 0, 4, 2, 1, 3, 5]);
    roof1.computeVertexNormals();
    roof1.translate(-1.5, 1, 1);

    let roof2 = new T.BufferGeometry();
    vertices = new Float32Array([
      0, 1.5, 1, 0, 1.5, -0.25, 0.5, 1, 1, 0.5, 1, -0.5, -0.5, 1, 1, -0.5, 1,
      -0.5,
    ]);
    roof2.setAttribute("position", new T.BufferAttribute(vertices, 3));
    roof2.setIndex([0, 2, 3, 0, 3, 1, 0, 1, 5, 0, 5, 4, 0, 4, 2, 1, 3, 5]);
    roof2.computeVertexNormals();

    const uv = new Float32Array([0, 1 / 2, 1, 1 / 2, 0, 1, 1, 1, 0, 0, 1, 0]);
    roof2.setAttribute("uv", new T.BufferAttribute(uv, 2));
    roof1.setAttribute("uv", new T.BufferAttribute(uv, 2));
    let roof_material = new T.MeshStandardMaterial({
      map: roof_texture,
    });
    group.add(new T.Mesh(roof1, roof_material));
    group.add(new T.Mesh(roof2, roof_material));

    super("House3", group);
  }
}
