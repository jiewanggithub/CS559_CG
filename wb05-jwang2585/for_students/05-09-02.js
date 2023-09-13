//// @ts-check
export {};  // null statement to tell VSCode we're doing a module

// draw a picture using curves!

let canvas = document.getElementById("canvas1");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");
    let context = canvas.getContext('2d');
    context.translate(50,50);
    context.scale(3,3);
    context.save();
    context.strokeStyle = "Orange";
    context.moveTo(50,75);
    context.lineTo(50,25);
    context.moveTo(75,50);
    context.lineTo(25,50);
    context.stroke();
    context.restore();
    context.beginPath();
    context.moveTo(25,0);
    context.bezierCurveTo(25,25,50,25,50,50);
    context.bezierCurveTo(50,75,75,75,75,100);
    context.stroke();

