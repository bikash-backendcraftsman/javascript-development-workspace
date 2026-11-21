// simple arrow function of single parameter

//Exmaple  - 1
const  greet = (name) => `Hello, ${name}!`;
console.log(greet("Bikash"))

//Example - 2
const applyColor = (color) => `Flower is , ${color}!`;
console.log(applyColor('red'));


// arrow function with multiple parameter

//Example - 1
const add = (f1 , f2) => f1 + f2;
console.log(add(100,200));

//Example - 2
let price = 20 ;
const calculateProductPrice = (quantity) => price * quantity;
console.log(calculateProductPrice(3));


// Arrow function with block body

//Example - 1
const multiply = (a, b) => {
    const result = a * b;
    return result;
}
 // calling the function
 console.log(multiply(3,4));

//Example - 2
const calculateLearningHour = (langugae) => {
    // implement arrow function logic
    let perHour =  5;
    let cTotal = 0;
    if(langugae == 'telugu'){
         cTotal =  30 * perHour;
    } 
    return  cTotal;
}

//call the function
console.log(calculateLearningHour('telugu'));
