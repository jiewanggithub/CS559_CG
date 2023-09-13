/**
 * 04-04-03.js - a simple JavaScript file that gets loaded with
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
 * This should perform some transformation - you can decide how it works
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
function twoDots(context, x1, y1, x2, y2) {
    let dx = x2-x1;
    let dy = y2-y1;
    let angle = Math.atan(dy/dx) - Math.PI/4;
    let distance = Math.sqrt(dx**2 + dy**2);
    if (dx < 0) {
      angle += Math.PI;
    }

    let a = Math.cos(angle)*distance/Math.sqrt(200);
    let b = Math.sin(angle)*distance/Math.sqrt(200);
    let c = -1* Math.sin(angle)*distance/Math.sqrt(200);
    let d = Math.cos(angle)*distance/Math.sqrt(200);
    let e = x1;
    let f = y1;
    // please leave this line - you should CHANGE the 6 lines above. Add additonal math/logic code as needed.
    context.transform(a, b, c, d, e, f);
}

// start the program running
utilities.setup("canvas1", twoDots);

