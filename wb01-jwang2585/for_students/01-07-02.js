/** @type{HTMLInputElement} */ let text = (/** @type{HTMLInputElement} */document.getElementById("ex3-span"));
/** @type{HTMLInputElement} */ let red = (/** @type{HTMLInputElement} */document.getElementById("red"));
/** @type{HTMLInputElement} */ let green = (/** @type{HTMLInputElement} */document.getElementById("green"));
/** @type{HTMLInputElement} */ let yellow = (/** @type{HTMLInputElement} */document.getElementById("yellow"));

let lasttime;
let lasttime2;
let value;
let value2;
let currHex = [255,255,255];

let fromYellowToRed = false;
let fromWhiteToRed = false;
let fromGreenToRed = false;

let fromWhiteToGreen = false;
let fromRedToGreen = false;
let fromYellowToGreen = false;

let fromRedToYellow = false;
let fromWhiteToYellow = false;
let fromGreenTOYellow = false;

let toRed = false;
let toGreen = false;
let toYellow = false;

let stopRed = false;
red.onclick = function(){
    // yellow to red:   ffff00 -> ff0000 -g
    // white to red:   ffffff -> ff0000 -g -b 
    // green to red:   00ff00 -> ff0000 -g +r 
    toRed = true;
    toGreen = false;
    toYellow = false;

    if(currHex[0] === 255 && currHex[1] === 255 && currHex[2] === 0){
        fromYellowToRed = true;
    }
    if(currHex[0] === 255 && currHex[1] === 255 && currHex[2] === 255){
        fromWhiteToRed = true;
        console.log(fromWhiteToRed);
    }
    if(currHex[0] === 0 && currHex[1] === 255 && currHex[2] === 0){
        fromGreenToRed = true;
        
    }
    text.innerHTML = "some text that will become RED.";
    window.requestAnimationFrame(textColor);
    
}
green.onclick = function(){
    // white to green:  ffffff -> 00ff00 -r -b
    // yellow to green: ffff00 -> 00ff00 -r
    // red to green:    ff0000 -> 00ff00 -r +g
    toRed = false;
    toGreen = true;
    toYellow = false;

    if(currHex[0] === 255 && currHex[1] === 255 && currHex[2] === 255){
        fromWhiteToGreen = true;
    }
    if(currHex[0] === 255 && currHex[1] === 255 && currHex[2] === 0){
        fromYellowToGreen = true;
        console.log(fromYellowToGreen);
    }
    if(currHex[0] === 255 && currHex[1] === 0 && currHex[2] === 0){
        fromRedToGreen = true;
    }
    text.innerHTML = "some text that will become Green.";
    window.requestAnimationFrame(textColor);
}
    
    yellow.onclick = function(){
    toRed = false;
    toGreen = false;;
    toYellow = true;;

    if(currHex[0] === 255 && currHex[1] === 255 && currHex[2] === 255){
        fromWhiteToYellow = true;
    }
    if(currHex[0] === 0 && currHex[1] === 255 && currHex[2] === 0){
        fromGreenTOYellow = true;
    }
    if(currHex[0] === 255 && currHex[1] === 0 && currHex[2] === 0){
        fromRedToYellow = true;
    }
    text.innerHTML = "some text that will become Yellow.";
    window.requestAnimationFrame(textColor);
}

function textColor(timestamp){
    if(!(lasttime === undefined)){
        const delta = (timestamp - lasttime)/20.0;
        if(toRed){
            console.log(currHex);
            
            if(!(fromYellowToRed)){

                if(fromWhiteToRed){
                    
                    let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                    text.style.backgroundColor = rgb;
                    let newValue = Math.round(currHex[2] - delta);
                    let para = newValue % 255;
                    currHex[2] = para;
                    

                    if(newValue <= 0){
                    fromWhiteToRed = false;
                    currHex[2] = 0;
                    } 
                }
                if(fromGreenToRed){
                    let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                    text.style.backgroundColor = rgb;
                    let newValue = Math.round(currHex[0] + delta) ;
                    let para = newValue & 255;
                    currHex[0] = para;
                    

                    if(newValue >= 255){
                    currHex[0] = 255;
                    fromGreenToRed = false;
                    } 
                }
            }
            // 1 - From yellow to Red
            let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
            text.style.backgroundColor = rgb;
            let Value = Math.round(currHex[1] - delta);
            let para = Value % 255;
            currHex[1] = para;
            if(Value <= 0){
                currHex[1] = 0;
                toRed = false;
                lasttime = undefined;
            }
            console.log(currHex);
            
        }
        if(toGreen){
            console.log(currHex);
            if(!(fromYellowToGreen)){
                if(fromRedToGreen){
                    let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                    text.style.backgroundColor = rgb;
                    let newValue = Math.round(currHex[1] + delta);
                    let para = newValue % 255;
                    currHex[1] = para;
                    

                    if(newValue >= 0){
                    fromRedToGreen = false;
                    currHex[1] = 255;
                    } 
                }
                if(fromWhiteToGreen){
                    let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                    text.style.backgroundColor = rgb;
                    let newValue = Math.round(currHex[2] - delta) ;
                    let para = newValue % 255;
                    currHex[2] = para;
                    if(newValue <= 0){
                    currHex[2] = 0;
                    fromWhiteToGreen = false;
                    } 
                }
        
          }
                let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                text.style.backgroundColor = rgb;
                let Value = Math.round(currHex[0] - delta);
                let para = Value % 255;
                currHex[0] = para;
                if(Value <= 0){
                    currHex[0] = 0;
                    toGreen = false;
                    console.log(currHex);
                    lasttime = undefined;
                
                }   
        }
        if(toYellow){
            console.log(currHex);
            if(fromRedToYellow){
                let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                text.style.backgroundColor = rgb;
                let Value = Math.round(currHex[1] + delta);
                let para = Value % 255;
                currHex[1] = para;
                if(Value >= 255){
                    currHex[1] = 255;
                    toYellow = false;
                    console.log(currHex);
                    fromRedToYellow = false;
                    lasttime = undefined;
                }    
            }
            if(fromWhiteToYellow){
                let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                text.style.backgroundColor = rgb;
                let Value = Math.round(currHex[2] - delta);
                let para = Value % 255;
                currHex[2] = para;
                if(Value <= 0){
                    currHex[2] = 0;
                    toYellow = false;
                    console.log(currHex);
                    fromWhiteToYellow = false;
                    lasttime = undefined;
                }    
            }
            if(fromGreenTOYellow){
                let rgb = "rgb("+currHex[0]+","+currHex[1]+","+currHex[2]+")";
                text.style.backgroundColor = rgb;
                let Value = Math.round(currHex[0] + delta);
                let para = Value % 255;
                currHex[0] = para;
                if(Value >= 255){
                    currHex[0] = 255;
                    toYellow = false;
                    console.log(currHex);
                    fromRedToYellow = false;
                    lasttime = undefined;
                }     
            }
            
        }
        }  
        lasttime = timestamp;
        if(toRed || toGreen || toYellow){
            window.requestAnimationFrame(textColor);  
    }
        
     
}
