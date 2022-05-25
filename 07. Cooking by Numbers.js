function solve(...params){
let input = params;
let num = Number(input.shift());
let obj = {
    "chop": (x)=> x / 2,
    "dice": (x)=> Math.sqrt(x),
    "spice": (x)=> x + 1, 
    "bake": (x)=> x * 3,
    "fillet": (x)=> x - (x * 0.20),
}


for (const command of input) {
     num = obj[command](num)
    
    console.log(num);
}


}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
