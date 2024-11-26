//import { Valve } from "./valve.js";

const form = document.getElementById("form_configuration");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const hour_start = document.getElementById("select_hour_start");
    const minutes_start = document.getElementById("select_minutes_start");
    const hour_end = document.getElementById("select_hour_end");
    const minutes_end = document.getElementById("select_minutes_end");


    
    if (
        parseInt(hour_start.value) >= parseInt(hour_end.value) && 
        parseInt(minutes_start.value) >= parseInt(minutes_end.value)
    ) {
        
        if (
            parseInt(hour_start.value) === parseInt(hour_end.value) &&
            parseInt(minutes_start.value) === parseInt(minutes_end.value)
        ) {
            console.log("No se puede iniciar el riego y finalizarlo a la misma hora.")
        } else {
            console.log("No se puede iniciar el riego si usted lo finaliza antes.");
        }
    } else {
        console.log("a");
    }

});

function verifyShchedules() {

}