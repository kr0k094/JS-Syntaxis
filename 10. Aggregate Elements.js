function solve(arr) {
arr.map(Number);

function sum(arr){
    result = arr.reduce((a,b)=> a + b, 0);
    console.log(result);
}
function aggregate(arr){
    let result = arr.reduce((a,b)=> a + 1 / b, 0);
    console.log(result);
    }
function concatenate(arr){
    result = arr.join("");
    console.log(result);
}

sum(arr);
aggregate(arr);
concatenate(arr); 

}
solve([1, 2, 3])