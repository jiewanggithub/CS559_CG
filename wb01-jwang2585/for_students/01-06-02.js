/** @type{HTMLInputElement} */ let slider1 = /** @type{HTMLInputElement} */ document.getElementById("slider1");
/** @type{HTMLInputElement} */ let buttonStart =/** @type{HTMLInputElement} */ document.getElementById("button1"); 
/** @type{HTMLInputElement} */ let buttonStop = /** @type{HTMLInputElement} */ document.getElementById("button2"); 
let speed;
 buttonStart.onclick = function(){
    speed = 1;
 }
 buttonStop.onclick = function(){
    speed = 0;
 }
function advanceSLR1() {
    let newValue = (Number(slider1.value) + speed) % 100;
    slider1.value = newValue.toString();
    window.requestAnimationFrame(advanceSLR1);
  }
  advanceSLR1();