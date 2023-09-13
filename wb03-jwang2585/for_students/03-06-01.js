// @ts-check
export {};

// somewhere in your program you'll want a line
// that looks like:
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
const context = canvas.getContext('2d');
// and you will want to make an animation loop with something like:
/**
 * the animation loop gets a timestamp from requestAnimationFrame
 * 
 * @param {DOMHighResTimeStamp} timestamp 
 */

let x1 = 450;
let y1 = 600;
let x2 = 150;
let y2 = 0;
let x3 = 0;
let y3 = 0;
let lastx3;
let lasty3;

let lasttime;
let flag = 0;
let flag2 = 1;
let flag3 = 0;

let xControl = 0;
let yControl = 0;
let vX = 0;
let vY = 0;

addEventListener("keydown",function(e){
    if(e.key == 'w' || e.key == 'W'){
        vY = -10;
        flag3 = 0;
    }
    if (e.key == 's' || e.key == 'S'){
        vY = 10;
        flag3 = 1;
    }
    if (e.key == 'a' || e.key == 'A'){
        vX = -10;
    }
    if (e.key == 'd' || e.key == 'D'){
        vX = 10;
    }
});
addEventListener("keyup",function(e){
    if(e.key == 'w' || e.key == 'W'){
        vY = 0;
    }
    if (e.key == 's' || e.key == 'S'){
        vY = 0;
    }
    if (e.key == 'a' || e.key == 'A'){
        vX = 0;
    }
    if (e.key == 'd' || e.key == 'D'){
        vX = 0;
    }
});



function drawQuadcopter(angle,x,y,colors){

    const sideLength = 40;
    const headRadius = 20;
    // arms constant
    const armLength = 25;
    const propellerRadius = 20;
    context.save();
        context.save();
        context.translate(x,y);
        context.lineWidth = 2;
        context.moveTo(0,0);
        context.lineTo(0,sideLength);
        context.moveTo(headRadius * 2,sideLength);
        context.arc(headRadius,sideLength,headRadius,0,Math.PI,false);
        context.moveTo(headRadius * 2,sideLength);
        context.lineTo(headRadius * 2,0);
        context.moveTo(headRadius * 2,0);
        context.arc(headRadius,0,headRadius,0, Math.PI,true);
        context.moveTo(headRadius,10);
        context.lineTo(headRadius,30);
        context.moveTo(headRadius,10);
        context.lineTo(headRadius/2,20);
        context.moveTo(headRadius,10);
        context.lineTo(headRadius*3/2,20);
            context?.rect(-20,0,8,35);
            context?.rect(-40,5,8,25);
            context?.rect(-60,10,8,15);
            context?.rect(12+2*headRadius,0,8,35);
            context?.rect(32+2*headRadius,5,8,25);
            context?.rect(52+2*headRadius,10,8,15);
            context?.moveTo(headRadius,-2*sideLength);
            context?.lineTo(-20,0);
            context?.moveTo(headRadius,-2*sideLength);
            context?.lineTo(20+2*headRadius,0);
            context?.lineTo(headRadius,-sideLength);
            context?.lineTo(-20,0);
            context?.moveTo(headRadius,-sideLength);
            context.lineWidth = 3;
            context.strokeStyle = "silver";
            context?.lineTo(-20,sideLength);
            context?.moveTo(headRadius,-sideLength);
            context?.lineTo(20+2*headRadius,sideLength);
            context?.moveTo(0,sideLength);
            context?.lineTo(-10,2*headRadius+sideLength);
            context?.lineTo(-20,headRadius);
            context?.lineTo(headRadius,2*sideLength);
            context?.lineTo(2*headRadius+2,sideLength+2);
            context?.moveTo(2*headRadius+2,sideLength+2);
            context?.lineTo(20+2*headRadius-8,2*headRadius+sideLength);
            context?.lineTo(20+2*headRadius,sideLength);
            context.fill();
            context?.stroke();
        context.fillStyle = colors;
        context.fill();
        context.stroke();
        context?.restore();
        
        context.save();
            context.translate(x,y);
            context.beginPath();
            context.lineWidth = 4;
            context.moveTo(0,0);
            context.lineTo(-armLength,-armLength);
            context.stroke();
            // upper left
                context.save();
                context.translate(-armLength - propellerRadius,-armLength - propellerRadius);
                context.beginPath();
                context.moveTo(propellerRadius + 10,0);
                context.arc(0,0,propellerRadius + 10,0,Math.PI*2,false);
                context.stroke();
                    // propeller
                    context.save();
                    context.rotate(angle[0]);
                        context.fillStyle = colors;
                        context.lineWidth = 4;
                        context.strokeStyle = colors;
                        context.beginPath();
                        context.moveTo(propellerRadius + 10,0);
                        context.lineTo(-propellerRadius - 10,0);
                        context.moveTo(0,-propellerRadius - 10);
                        context.lineTo(0,propellerRadius + 10);
                        context.stroke();
                    context.restore();
                context.restore(); 
        context.restore();

        context.save();
            context.translate(x,y + sideLength);
            context.beginPath();
            context.lineWidth = 4;
            context.moveTo(0,0);
            context.lineTo(-armLength,+armLength);
            context.stroke();
            // lower left
                context?.save();
                context?.translate(-armLength - propellerRadius,+armLength + propellerRadius);
                context?.beginPath();
                context?.moveTo(propellerRadius + 10,0);
                context?.arc(0,0,propellerRadius + 10,0,Math.PI*2,false);
                context?.stroke();
                // propeller
                context.save();
                context.rotate(angle[2]);
                    context.lineWidth = 4;
                    context.strokeStyle = colors;
                    context.beginPath();
                    context.moveTo(propellerRadius + 10,0);
                    context.lineTo(-propellerRadius - 10,0);
                    context.moveTo(0,-propellerRadius - 10);
                    context.lineTo(0,propellerRadius + 10);
                    context.stroke();
                context.restore();
                context.restore();   
        context.restore();

        context.save();
            context.translate(x + headRadius * 2,y + sideLength);
            context.beginPath();
            context.lineWidth = 4;
            context.moveTo(0,0);
            context.lineTo(+armLength,+armLength);
            context.stroke();
            // lower right
                context.save();
                context.translate(armLength + propellerRadius,+armLength + propellerRadius);
                context.beginPath();
                context.moveTo(propellerRadius + 10,0);
                context.arc(0,0,propellerRadius + 10,0,Math.PI*2,false);
                context.stroke();
                // propeller
                context.save();
                context.rotate(angle[3]);
                    context.lineWidth = 4;
                    context.strokeStyle = colors;
                    context.beginPath();
                    context.moveTo(propellerRadius + 10,0);
                    context.lineTo(-propellerRadius - 10,0);
                    context.moveTo(0,-propellerRadius - 10);
                    context.lineTo(0,propellerRadius + 10);
                    context.stroke();
                context.restore();
                context?.restore();   
        context?.restore();

        context?.save();
            context.translate(x + headRadius * 2,y);
            context.beginPath();
            context.lineWidth = 4;
            context.moveTo(0,0);
            context.lineTo(+armLength,-armLength);
            context.stroke();
            // upper right
                context.save();
                context.translate(armLength + propellerRadius,-armLength - propellerRadius);
                context.beginPath();
                context.moveTo(propellerRadius + 10,0);
                context.arc(0,0,propellerRadius + 10,0,Math.PI*2,false);
                context.stroke();
                // propeller
                context.save();
                context.rotate(angle[3]);
                    context.lineWidth = 4;
                    context.strokeStyle = colors;
                    context.beginPath();
                    context.moveTo(propellerRadius + 10,0);
                    context.lineTo(-propellerRadius - 10,0);
                    context.moveTo(0,-propellerRadius - 10);
                    context.lineTo(0,propellerRadius + 10);
                    context.stroke();
                context.restore();
                context?.restore();   
        context.restore();
    context.restore();
}


function loop(timestamp) {
    if(!(lasttime === undefined)){
    const delta = (timestamp - lasttime)/10.0;

    const rates = [];
    for (let i = 0; i < 4; i++){
        rates[i] = performance.now() / (10 + delta*i);
    }
    context?.clearRect(0,0,canvas.width,canvas.height);

    context?.save();
    context?.translate(300,300);
    context?.scale(0.5,0.5);
    x3 = 400*Math.sin(timestamp/1000);
    y3 = 400*Math.sin(timestamp/1000)*Math.cos(timestamp/1000);
    lastx3 = x3;
    lasty3 = y3;
    let angle = (Math.atan(Math.sqrt(7)- 4*Math.cos(timestamp/1000)) + 
    Math.atan(Math.sqrt(7) + 4*Math.cos(timestamp/1000))) 
    - (Math.atan(4 - Math.sqrt(7)) + Math.atan(4 + Math.sqrt(7)));
    context?.rotate(angle*2);
    drawQuadcopter(rates,x3,y3,"purple");
    context?.restore();
    
    context?.save();
    if(flag == 0){
        y1 = y1 - delta*2;
        context.save();
        context?.scale(0.7,0.7);
        drawQuadcopter(rates,x1/0.7,y1/0.7,"red");
        context.restore();
        if(y1 <= 0){
            flag = 1;
        }
    }
    if (flag == 1){
        y1 = y1 + delta*2;
        context?.save();
        context?.scale(0.7,-0.7);
        drawQuadcopter(rates,x1/0.7,-y1/0.7,"red");
        context?.restore();
        if(y1 >= 600){
            flag = 0;
        }
    }
    if(flag2 == 0){
        y2 = y2 - delta*2;
        context.save();
        context?.scale(0.7,0.7);
        drawQuadcopter(rates,x2,y2,"orange");
        context.restore();
        if(y2 <= 0){
            flag2 = 1;
        }
    }
    if (flag2 == 1){
        y2 = y2 + delta*2;
        context?.save();
        context?.scale(0.7,-0.7);
        drawQuadcopter(rates,x2,-y2,"orange");
        context?.restore();
        if(y2 >= 600){
            flag2 = 0;
        }
    }
    context?.restore();
    
    let anglechange = timestamp/1000;
    context.save();
        context?.translate(300,300);
        context?.rotate(-anglechange);
        context?.scale(0.5,0.5);
        drawQuadcopter(rates,350,0,"green");

    context.restore();

   
    context.save(); 
            xControl += vX;
            yControl += vY;
            if(flag3 == 0){
                context.translate(300,300);
                context.scale(0.5,0.5);
                drawQuadcopter((rates),xControl,yControl,"skyblue");
            }
            if (flag3 == 1){
                
                context.translate(300,300);
                context.scale(0.5,-0.5);
                drawQuadcopter((rates),xControl,-yControl,"skyblue");
            }
    context.restore();


    }
    lasttime = timestamp;
    window.requestAnimationFrame(loop);
};


//and then you would start the loop with:
window.requestAnimationFrame(loop);
