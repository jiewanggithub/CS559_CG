// put some code here
/** @type{HTMLInputElement} */ let slider1 = (/** @type{HTMLInputElement} */ document.getElementById("slider1"));
/** @type{HTMLInputElement} */ let slider2 = (/** @type{HTMLInputElement} */ document.getElementById("slider2"));
/** @type{HTMLInputElement} */ let slider3 = (/** @type{HTMLInputElement} */ document.getElementById("slider3"));

slider1.oninput = function(){
    slider3.value = slider2.value - slider1.value;
}
slider2.oninput = function(){
    slider3.value = slider2.value - slider1.value;
}
slider3.oninput = function(){
    if(slider3.value > 0){
        slider2.value = slider3.value;
        console.log("slider1_" +slider1.value);
        console.log("slider2_" +slider2.value);
    }
    if(slider3.value < 0){
        slider1.value = -slider3.value;
        console.log("slider1_" +slider1.value);
        console.log("slider2_" +slider2.value);
    }
}