function solve(n) {

let str = "* ";
let result = "";

for(let i = 0; i < n;i++){
    let currentLine = `${str.repeat(n)}${"\n"}` ;
    result += currentLine;
    

}
console.log(result);
}
solve(10)