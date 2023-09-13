/**
 * 04-04-01.js - a simple JavaScript file that gets loaded with
 * page 4 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 *
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as utilities from "./04-04-utilities.js";

/**
 * TwoDots - a function for the student to write
 * Notice that it gets the two points and the context as arguments
 * This function should apply a transformation
 *
 * You must write this function using rotate, translate and scale
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
function twoDots(context, x1, y1, x2, y2) {
    context.translate(x1, y1);
    //20， 20
    let dx = x2-x1;
    let dy = y2-y1;
    // theta = arctangent of (dy / dx)
    let angle = Math.atan(dy/dx);
    if (dx < 0) {
      angle += Math.PI;
    }
    context.rotate(angle);
    context.scale(Math.sqrt(dx**2 + dy**2)/10, Math.sqrt(dx**2 + dy**2)/10);
}

utilities.setup("canvas1", twoDots, "black");


