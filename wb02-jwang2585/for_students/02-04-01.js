// JavaScript file to be filled in by the student for Box 4-1
// we'll give you something to get started...
/** @type {HTMLCanvasElement} */
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let ctx = canvas.getContext('2d');

    // Circle
    ctx.arc(100,50,35,0,Math.PI*2,true);
    ctx.strokeStyle = "#846";
    ctx.fillStyle = "#F8E";
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();
   

    // Triangle
    ctx.beginPath();
    ctx.moveTo(100,110);
    ctx.lineTo(65,180);
    ctx.lineTo(135,180);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "darkgoldenrod";
    ctx.fillStyle = "sandybrown"; 
    ctx.fill();
    ctx.stroke();   
    
    // Capsule
    ctx.beginPath();
    ctx.arc(225,75,25,Math.PI * 3/2,Math.PI * 1/2,true);
    ctx.moveTo(225,100);
    ctx.lineTo(300,100);
    ctx.arc(300,75,25,Math.PI * 1/2, Math.PI * 3/2,true);
    ctx.lineTo(225,50);
    ctx.strokeStyle = "darkred";
    ctx.fillStyle = "lightpink";
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();

    // Sawtooth
    ctx.beginPath();
    ctx.moveTo(250,120);
    ctx.lineTo(275,150);
    ctx.lineTo(300,120);
    ctx.lineTo(325,150);
    ctx.lineTo(325,190);
    ctx.lineTo(225,190);
    ctx.lineTo(225,150);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "gray";
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke()

// you should start by getting the canvas

// then draw the 4 shapes

