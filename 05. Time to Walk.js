function solve(steps, footPrint, kmInHour){

let metersInSecond = kmInHour / 3.6;
let distance = steps * footPrint;
let neededTime = distance / metersInSecond;
let rest = Math.floor(distance / 500);

let timeMin = Math.floor(neededTime / 60);
let timeSec = Math.round(neededTime - (timeMin * 60));
let timeHr = Math.floor(neededTime / 3600);
console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + 
(timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + 
(timeSec < 10 ? "0" : "") + timeSec);

}
solve(4000, 0.60, 5)    