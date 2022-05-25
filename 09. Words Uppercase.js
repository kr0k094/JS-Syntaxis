function solve(input){
// input = input.split(" ");

let result = [];
let regex = /\w+/gm
let arr = input.match(regex);

let upperCase = arr.map((x)=> x.toUpperCase());
console.log(upperCase.join(", "));
}
// solve('Hi, how are you?')
 solve('hello')
solve('Functions in JS can be nested, i.e. hold other functions')
