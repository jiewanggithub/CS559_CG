//// @ts-check
/* jshint -W069, esversion:6 */

/**
 * drawing function for box 1
 *
 * draw something.
 **/

// note that checking that canvas is the right type of element tells typescript
// that this is the right type - it's a form of a safe cast 
let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let context = canvas.getContext("2d");

context.beginPath();

// change these so that rather than connecting with straight lines,
// they use cardinal interpolation
// your points should cycle - to make a loop


// context.lineTo(350,150);    // this line gets replaced by a bezierCurveTo
// context.lineTo(350,50);     // this line gets replaced by a bezierCurveTo
// context.lineTo(200,100);    // this line gets replaced by a bezierCurveTo
// context.lineTo(50,50);      // this line gets replaced by a bezierCurveTo
// context.lineTo(50,150);     // this line gets replaced by a bezierCurveTo
let p1 = [50,150];
let p2 = [350,150];
let p3 = [350,50];
let p4 = [200,100];
let p5 = [50,50];


let p1_d = [(1/2*(p2[0] - p5[0])),(1/2*(p2[1] - p5[1]))];
let p2_d = [(1/2*(p3[0] - p1[0])),(1/2*(p3[1] - p1[1]))];
let p3_d = [(1/2*(p4[0] - p2[0])),(1/2*(p4[1] - p2[1]))];
let p4_d = [(1/2*(p5[0] - p3[0])),(1/2*(p5[1] - p3[1]))];
let p5_d = [(1/2*(p1[0] - p4[0])),(1/2*(p1[1] - p4[1]))];

let p1_prime_0 = [p1[0] + 1/3*(p1_d[0]),p1[1] + 1/3*(p1_d[1])];
let p2_prime_0 = [p2[0] + 1/3*(p2_d[0]),p2[1] + 1/3*(p2_d[1])];
let p3_prime_0 = [p3[0] + 1/3*(p3_d[0]),p3[1] + 1/3*(p3_d[1])];
let p4_prime_0 = [p4[0] + 1/3*(p4_d[0]),p4[1] + 1/3*(p4_d[1])];
let p5_prime_0 = [p5[0] + 1/3*(p5_d[0]),p5[1] + 1/3*(p5_d[1])];

let p1_prime_1 = [p2[0] - 1/3*(p2_d[0]),p2[1] - 1/3*(p2_d[1])];
let p2_prime_1 = [p3[0] - 1/3*(p3_d[0]),p3[1] - 1/3*(p3_d[1])];
let p3_prime_1 = [p4[0] - 1/3*(p4_d[0]),p4[1] - 1/3*(p4_d[1])];
let p4_prime_1 = [p5[0] - 1/3*(p5_d[0]),p5[1] - 1/3*(p5_d[1])];
let p5_prime_1 = [p1[0] - 1/3*(p1_d[0]),p1[1] - 1/3*(p1_d[1])];


context.moveTo(50,150);     // you don't need to change this line
context.bezierCurveTo(p1_prime_0[0],p1_prime_0[1],p1_prime_1[0],p1_prime_1[1],p2[0],p2[1]);
context.bezierCurveTo(p2_prime_0[0],p2_prime_0[1],p2_prime_1[0],p2_prime_1[1],p3[0],p3[1]);
context.bezierCurveTo(p3_prime_0[0],p3_prime_0[1],p3_prime_1[0],p3_prime_1[1],p4[0],p4[1]);
context.bezierCurveTo(p4_prime_0[0],p4_prime_0[1],p4_prime_1[0],p4_prime_1[1],p5[0],p5[1]);
context.bezierCurveTo(p5_prime_0[0],p5_prime_0[1],p5_prime_1[0],p5_prime_1[1],p1[0],p1[1]);
context.closePath();
context.lineWidth = 3;
context.stroke();
