function solve(n1, n2, operator){

let obj = {
    '+': function(a, b){
        let result = a + b;
        return result
    },
    '-' : function(a, b){
        let result = a - b;
        return result;
    },
    '*' : function(a, b){
        let result = a * b;
        return result;
    },
    '/': function(a, b){
        let result = a / b;
        return result;
    },
    '%' : function(a, b){
        let result = a % b;
        return result;
    },
    '**': function(a, b){
        let result = a ** b;
        return result;
    }
}

console.log(obj[operator](n1, n2));

}
solve(5, 6, '+');
'+', '-', '*', '/', '%', '**'