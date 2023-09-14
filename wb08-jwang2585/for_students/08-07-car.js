/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program

export { Car };
function createWheel() {
  const wheel1 = new T.Mesh(
    new T.CylinderGeometry(8, 8, 5, 32),
    new T.MeshStandardMaterial({ color: 0x444444 })
  );
  const wheel2 = new T.Mesh(
    new T.CylinderGeometry(8, 8, 5, 32),
    new T.MeshStandardMaterial({ color: 0x444444 })
  );
  wheel1.rotateX(Math.PI / 2);
  wheel1.translateY(-14);
  wheel2.rotateX(Math.PI / 2);
  wheel2.translateY(14);
  let group = new T.Group();
  group.add(wheel1);
  group.add(wheel2);
  return group;
}

function getFrontTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 64, 32);
  ctx.fillStyle = "grey";
  ctx.fillRect(8, 8, 48, 24);
  return new T.CanvasTexture(canvas);
}
function getSideTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 128, 32);
  ctx.fillStyle = "grey";
  ctx.fillRect(8, 8, 38, 24);
  ctx.fillRect(50, 8, 60, 24);
  return new T.CanvasTexture(canvas);
}

class Car extends GrObject {
  constructor(color) {
    const car = new T.Group();
    const front = createWheel();
    front.position.y = 6;
    front.position.x = 18;
    car.add(front);
    const back = createWheel();
    back.position.y = 6;
    back.position.x = -18;
    car.add(back);

    const car_body = new T.Mesh(
      new T.BoxGeometry(50, 12.5, 30),
      new T.MeshStandardMaterial({ color: color })
    );
    car_body.position.y = 12;
    car.add(car_body);

    const leftSideTexture = getSideTexture();
    leftSideTexture.center = new T.Vector2(0.5, 0.5);
    leftSideTexture.rotation = Math.PI;
    leftSideTexture.flipY = false;
    const cabin = new T.Mesh(new T.BoxGeometry(35, 10, 20), [
      new T.MeshStandardMaterial({ map: getFrontTexture() }),
      new T.MeshStandardMaterial({ map: getFrontTexture() }),
      new T.MeshStandardMaterial({ color: color }),
      new T.MeshStandardMaterial({ color: color }),
      new T.MeshStandardMaterial({ map: leftSideTexture }),
      new T.MeshStandardMaterial({ map: getSideTexture() }),
    ]);
    cabin.position.x = -3;
    cabin.position.y = 24;
    car.add(cabin);
    car.scale.set(0.05, 0.05, 0.05);
    super("Car", car);
  }
}
