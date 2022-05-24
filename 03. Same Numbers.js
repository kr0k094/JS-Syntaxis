function solve(input){
input = input.toString();
let flag = true;

let arr = input.split("");
arr = arr.map(Number)
for (const n of arr) {
    if(n !== arr[0]){
        flag = false;
        break;
    }
}

let sum = arr.reduce((a,b)=> a + b, 0);
console.log(flag);
console.log(sum);
}
solve(1234)