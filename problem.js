let initialSpeed = 30;  
let maxSpeed = 120;    
let totalTime = 96;     
let interval = 10;      
let currentSpeed = initialSpeed;
let distance = 0;
for (let time = 0; time < totalTime; time += interval) {
    let speedPerMinute = currentSpeed / 60;
    distance += speedPerMinute * interval;
    currentSpeed = Math.min(currentSpeed * 2, maxSpeed);
}
console.log("Total Distance Travelled: " + distance.toFixed(2) + " km");
