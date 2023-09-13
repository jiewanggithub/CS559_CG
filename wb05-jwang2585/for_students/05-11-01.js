// //@ts-check
export {};  // null statement to tell VSCode we're doing a module

// draw the spiral - account for the checkbox and slider

let canvas = (document.getElementById("canvas1"));
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let context = canvas.getContext("2d");

let slider = document.getElementById("slider");
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");

draw();
slider.oninput = draw;
checkbox1.onchange = draw;
checkbox2.onchange = draw;


function f(u) {
    return [200 + u*180*Math.cos(2*Math.PI*4*u), 200+u*180*Math.sin(2*Math.PI*4*u)];
}

function draw(){
    context.clearRect(0,0,canvas.width,canvas.height);
    let sv = slider.value;
    let cv1 = checkbox1.checked;
    let cv2 = checkbox2.checked;

    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    if(cv1){
        if(cv2){
            context.beginPath();
            context.moveTo(f(0)[0], f(0)[1]);
            sv *= 2;
            for (let i = 1; i < sv-3; i+=3){
                let p1 = f(i/sv);
                let p2 = f((i+1)/sv);
                let p3 = f((i+2)/sv);
                context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
              } 
              context.stroke();
        }
        else{
            context.beginPath();
            context.moveTo(f(0)[0], f(0)[1]);
            for (let i = 0; i < sv; i++){
                let tmp = f(i/sv);
                context.lineTo(tmp[0], tmp[1]);
            } 
            context.stroke();
        }
        
    }
    else{
        for (let i = 0; i < sv; i++){
            let tmp = f(i/sv);
            context.beginPath();
            context.moveTo(tmp[0],tmp[1]);
            context.arc(tmp[0], tmp[1], 1, 0, Math.PI*2);
            context.fill();
        }
    }
    
}