function solve(speed, area){
let status = "";
let obj = {
    "motorway": 130,
    "interstate" : 90,
    "city" : 50,
    "residential" : 20,
};

if(speed <= obj[area]){
    console.log(`Driving ${speed} km/h in a ${obj[area]} zone`)
}else if(speed > obj[area] && speed <= obj[area] + 20){
    status = "speeding";
}else if(speed > obj[area] + 20 && speed <= obj[area] + 40){
    status = "excessive speeding";
}else{
    status = "reckless driving";
}
if(status !== ""){
    console.log(`The speed is ${speed - obj[area]} km/h faster than the allowed speed of ${obj[area]} - ${status}`)
}

}
solve(40, 'city')
solve(21, 'residential')

// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
