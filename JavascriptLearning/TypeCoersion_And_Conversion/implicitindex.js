/**
 * Here we are trying to understand implicit conversion
 */

// string and number
let result1 = "5" + 3; // no 3 is coreced into String
console.log(result1)

/**
 * Implicit type coercion in JavaScript means the language automatically converts values from one type to another 
 * when needed, like during operations. In '5' - 2, the string '5' is converted to the number 5 because 
 * the - (minus) operator expects numbers, so JavaScript coerces the string to a numeric type before subtraction.
 */

//Number and String with Substraction
let result2 = '5' - 2; // Output : 3 (String '5' is coerced to Number)
console.log(result2);


/**
 * In JavaScript, when you use the + operator with a boolean and a number,
 *  the boolean is implicitly converted (coerced) to a number: true becomes 1 and 
 * false becomes 0. So, true + 2 is actually 1 + 2, which results in 3.
 */

//Boolean and number
let result3 = true + 1
console.log("Printing :", result3);

