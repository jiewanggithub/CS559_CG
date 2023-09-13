let lasttime;
let forward = true;
/** @type{HTMLInputElement} */ let slr = (/** @type{HTMLInputElement} */ document.getElementById("slider"));

function advanceSLR(timestamp) {
    let newValue;
    if (lasttime === undefined) {
        newValue = 0;
    } else {
        const delta = (timestamp - lasttime);  
        const change = delta / 1000.0 * 100.0; 
        if(forward){
            newValue = (Number(slr.value) + change);
            if(Math.round(newValue) >= 100){
                forward = false;
            } 
        }
        else {
            newValue = (Number(slr.value) - change);
            if(Math.round(newValue) <= 0){
                forward = true;
            } 
        }
    }
    slr.value = newValue.toString();
    window.requestAnimationFrame(advanceSLR);
    lasttime = timestamp;      
}
window.requestAnimationFrame(advanceSLR);  