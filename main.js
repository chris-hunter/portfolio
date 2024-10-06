const kitchenNewSetpoint = document.querySelector("#kitchen-new-setpoint");
const kitchenNewSetpointDisplay = document.querySelector("#kitchen-new-setpoint-number");

kitchenNewSetpointDisplay.textContent = kitchenNewSetpoint.value;
kitchenNewSetpoint.addEventListener("change", (event) => {
    kitchenNewSetpointDisplay.textContent = event.target.value;
});