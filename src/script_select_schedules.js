const select_hour_start = document.getElementById("select_hour_start");
const select_minutes_start = document.getElementById("select_minutes_start");
const select_hour_end = document.getElementById("select_hour_end");
const select_minutes_end = document.getElementById("select_minutes_end");

let s_h_s = '<option value="-1" selected> Initial Hour </option>';
let s_m_s = '<option value="-1" selected> Initial Minute </option>';
let s_h_e = '<option value="-1" selected> End hour</option>';
let s_m_e = '<option value="-1" selected> End Minute </option>';

for (let h = 0; h < 24; h++)  {
    const formatted_hour = h.toString().padStart(2, "0");
    s_h_s += `<option value="${formatted_hour}"> ${formatted_hour} </option>`;
    s_h_e += `<option value="${formatted_hour}"> ${formatted_hour} </option>`;
}

for (let m = 0; m < 60; m += 5) {
    const formatted_minute = m.toString().padStart(2, "0");
    s_m_s += `<option value="${formatted_minute}"> ${formatted_minute} </option>`;
    s_m_e += `<option value="${formatted_minute}"> ${formatted_minute} </option>`;
}

select_hour_start.innerHTML = s_h_s;
select_minutes_start.innerHTML = s_m_s;
select_hour_end.innerHTML = s_h_e;
select_minutes_end.innerHTML = s_m_e;