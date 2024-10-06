const newSetpoints = document.getElementsByClassName("new-setpoint-input");
const newSetpointDisplays = document.getElementsByClassName("new-setpoint-number");

for (let i = 0; i < newSetpoints.length; i++) {
    newSetpointDisplays[i].textContent = newSetpoints[i].value;
    newSetpoints[i].addEventListener("change", (event) => {
        newSetpointDisplays[i].textContent = event.target.value;
    });
};