function solve(fruit, weight, pricePerKilo){

let weightInKilo = weight / 1000;
let totalPrice = weightInKilo * pricePerKilo;
console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);


}
solve('apple', 1563, 2.35)