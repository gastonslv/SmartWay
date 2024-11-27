//import { Valve } from "./valve.js";

const form = document.getElementById("form_configuration");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // schedules
    const hour_start = parseInt(document.getElementById("select_hour_start").value);
    const minutes_start = parseInt(document.getElementById("select_minutes_start").value);
    const hour_end = parseInt(document.getElementById("select_hour_end").value);
    const minutes_end = parseInt(document.getElementById("select_minutes_end").value);
    const valves = parseInt(document.getElementById("select_valves").value);
    const flow = parseInt(document.getElementById("select_flow").value);

    if (verifyShcedules(hour_start, minutes_start, hour_end, minutes_end)) {
        
        if (valves == -1 || flow == -1) {
            alert("Select a valid option in valves and flow rate");
        } else {
            
            window.location.href = "./pages/valves.html";
        }   
    }

});

function verifyShcedules(hour_start, minutes_start, hour_end, minutes_end) {
    const start_time = hour_start * 60 + minutes_start;
    const end_time = hour_end * 60 + minutes_end;

    if (start_time >= end_time) {
        if (start_time === end_time) {
            alert("Irrigation cannot be started and stopped at the same time");
            return false;
        } else {
            alert("Irrigation cannot be started if you terminate it before");
            return false;
        }
    } else {
        return true;
    }
}