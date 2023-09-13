// yellow: ffff00
// green: 00ff00
// red: ff0000

// step 1
// green to yellow to red
// 00ff00 -> ffff00 -> ff0000
// step 2
// red to yellow to green
// ff0000 -> ffff00 -> 00ff00

/** @type{HTMLInputElement} */ let text = (/** @type{HTMLInputElement} */document.getElementById("ex3-span"));
let redHex;
let greenHex;
let lasttime;
let value = 0;
let fadeFromGreen = true;
let greenToYellow = true;
let redToYellow = true;
function fadeBetweenThreeColors(timestamp){
    if(!(lasttime === undefined)){
        const delta = (timestamp - lasttime)/10.0;
        
        if(fadeFromGreen){
            if(greenToYellow){
                value = Math.round(value + delta);
                redHex = value.toString(16);
                text.style.backgroundColor = "#"+redHex+"ff00";
                if(value >= 255){
                    greenToYellow = false;
                }
            }
            else{
                value = Math.round(value - delta);
                greenHex = value.toString(16);
                text.style.backgroundColor = "#ff"+greenHex+"00";
                if(value <= 0){
                    greenToYellow = true;
                    fadeFromGreen = false;
                } 
            }
        }
        else{
            if(redToYellow){
                value = Math.round(value + delta);
                greenHex = value.toString(16);
                text.style.backgroundColor = "#ff"+greenHex+"00";
                if(value >= 255){
                    redToYellow = false;
                }
            }
            else{
                value = Math.round(value - delta);
                redHex = value.toString(16);
                text.style.backgroundColor = "#"+redHex+"ff00";
                if(value <= 0){
                    redToYellow = true;
                    fadeFromGreen = true;
                } 
            }
        }
    }
    lasttime = timestamp;
    window.requestAnimationFrame(fadeBetweenThreeColors);

}
window.requestAnimationFrame(fadeBetweenThreeColors);



