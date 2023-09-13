/** @type{HTMLInputElement} */ let text = (/** @type{HTMLInputElement} */document.getElementById("ex3-span"));
let lasttime;
let value = 0;
let green;
let colorSwap = true;

function goFade(timestamp){

    if (!(lasttime === undefined)) {
        const delta = (timestamp - lasttime) / 10.0;
        
        if(colorSwap){
            value = Math.round(value + delta);
            // console.log(value);
            green = value.toString(16);
            text.style.backgroundColor = "#ff"+green+"00";
            if(value >= 255){
                colorSwap = false;
            } 
            
        }
        else {
            value = Math.round(value - delta);
            // console.log(value);
            green = value.toString(16);
            text.style.backgroundColor = "#ff"+green+"00";
            if(value <= 0){
                colorSwap = true;
            } 
             
        }
        
      }
      lasttime = timestamp; 
      window.requestAnimationFrame(goFade);
}
window.requestAnimationFrame(goFade);




