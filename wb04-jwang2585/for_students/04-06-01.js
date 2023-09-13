/**
 * CS559 Spring 2023 Example Solution
 * Written by CS559 course staff
 */

// @ts-check
/* jshint -W069, esversion:6 */

import { runCanvas } from "../libs/CS559/runCanvas.js";

/* no need for onload - we use defer */

/* note how the draw function takes two arguments: the canvas and the time */
/* note that this is DIFFERENT than what we need for requestAnimationFrame */

/**
 * These parameter specifications are used by the type checker to find bugs!
 * @param {HTMLCanvasElement} canvas 
 * @param {Number} time 
 */
function myDraw(canvas, time) {
    let context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.width,canvas.height);
    context?.save();
    context.fillStyle = "pink";
    context.transform(Math.cos(Math.PI*time),-Math.sin(Math.PI*time),Math.sin(Math.PI*time),
    Math.cos(Math.PI*time),100,100);
    context?.fillRect(0,0,50,50);
    context?.restore(); 
}

// note - we can pass "runCanvas" either the name of the canvas, or the canvas element
runCanvas("canvas1",myDraw,0,0,0,2 /* student will want to change the parameters */);
