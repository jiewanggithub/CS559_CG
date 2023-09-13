// JavaScript file to be filled in by the student for Box 4-2
// we'll give you something to get started...

// you should start by getting the canvas, then draw whatever you want!
// Be sure to use the Canvas drawing API, not SVG!
/** @type {HTMLCanvasElement} */
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let ctx = canvas.getContext('2d');

// 500 x 500
// ultraman 

// window background
// ctx.fillStyle = "#eeff00"
ctx.fillStyle = `rgb(255,195,0)`;
ctx.fillRect(200,100,150,150);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.strokeRect(200,100,150,150);


//head
ctx.ellipse(275,178,48,51,0,0,2 * Math.PI);
ctx.lineWidth = 1;
ctx.fillStyle = "#f1f1f1";
ctx.strokeStyle = "black";
ctx.fill();
ctx.stroke();

//eyes
ctx.beginPath();
ctx.ellipse(295,175,14,18,Math.PI/4,0,2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";   
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(252,175,14,18,Math.PI *3/4,0,2 * Math.PI);
ctx.fillStyle = "yellow"; 
ctx.strokeStyle = "black";  
ctx.fill();
ctx.stroke();

// head mark
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.fillRect(273,105,4,20);
ctx.strokeRect(273,105,4,20);

// left ear
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillRect(225,165,5,18);
ctx.strokeRect(225,165,5,18);
ctx.fillRect(220,170,5,8);
ctx.strokeRect(220,170,5,8);

// right ear
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillRect(321,165,5,18);
ctx.strokeRect(321,165,5,18);
ctx.fillRect(326,170,5,8);
ctx.strokeRect(326,170,5,8);

ctx.beginPath();
ctx.arc(235,245,15,0,Math.PI * 2, false);
ctx.strokeStyle = "balck";
ctx.fillStyle = `rgba(255,0,0,0.5)`;
ctx.lineWidth = 1;
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(255,225);
ctx.lineTo(245,235);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(285,215);
ctx.lineTo(265,215);
ctx.lineWidth = 3.5;
ctx.stroke();

ctx.beginPath();
ctx.lineTo(293,225);
ctx.lineTo(303,235);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(315,245,15,0,Math.PI * 2, false);
ctx.strokeStyle = "balck";
ctx.fillStyle = `rgba(255,0,0,0.5)`;
ctx.lineWidth = 1;
ctx.fill();
ctx.stroke();






