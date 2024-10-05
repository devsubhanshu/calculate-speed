let distanceInput = document.getElementById("distance")
let timeInput = document.getElementById("time")
let button = document.getElementById("button");
let result = document.getElementById("result")




function calculateSpeed() {
let distance = distanceInput.value;
let time = timeInput.value;
let speed = distance/time;
result.innerHTML = speed;
};
button.addEventListener("click",calculateSpeed);
