/**
 * Starter file for 02-07-01.js - the only exercise of page 7 of Workbook 2
 */

// @ts-check

// Find the canvas and start!
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("box1canvas"));
let context = canvas.getContext('2d');

// declare a circles that contains a list of circle in canvas
// x,y postion, radius, start angle, end angle, true
let circles = [];
let mouseX = -10;
let mouseY = -10;


function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}
canvas.onmousemove = function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;
    console.log(mouseX);
    console.log(mouseY);
}
canvas.onmouseleave = function() {
    mouseX = -10;
    mouseY = -10;
};

canvas.onclick = function(){
    let pushNew = true;;
    circles.forEach(function(circle){
        let distance = getDistance(circle.x,circle.y,mouseX,mouseY);
        if(distance <= 5){
            pushNew = false;
            if(circle.click == 0){
                circle.click = 1;
            }
            else{
                circle.click = 0; 
            }
        }
    })
    if ( (mouseX > 0) && (mouseY > 0) && (pushNew == true)) {
        circles.push({"x":mouseX,"y":mouseY,"color":0,"r":15,"overTime":0,"click":0});
    }
}


function mouseOver(circle){
    let distance = circle.r;
    let distance2 = getDistance(circle.x,circle.y,mouseX,mouseY);
    if(distance2 <= distance){
        circle.color = 1;
    }
    else{
        circle.color = 0;
    }
}

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    circles.forEach(function(circle){
        mouseOver(circle);
        context?.beginPath();
        context?.moveTo(circle.x,circle.x);
        if(circle.overTime < 25){
            context.fillStyle = "#00ff0088";
            circle.overTime++;
        }
        else{
            if(circle.click == 0){
                if(circle.color == 0){
                    context.fillStyle = "#00ff0088";
                }
                else{
                    context.fillStyle = "#ffff0088"; 
                    }
            }
            else{
                if(circle.color == 0){
                    context.fillStyle = "orange";
                }
                else{
                    context.fillStyle = "red"; 
                    }
            }
            
        }
        
        context?.arc(circle.x,circle.y,circle.r,0,Math.PI*2,true);
        context?.fill();
    });

    window.requestAnimationFrame(animate);
}
animate();

