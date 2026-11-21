/**
 * Inside JavaScript Number() String Parsing
 * ========================================
Number("100") ends up as the numeric value 100 because JavaScript runs a standard coercion pipeline, 
and the actual string parsing happens in the StringToNumber step. Everything before that is about 
getting the input into a primitive form that can be turned into a double-precision number.


Where parsing actually happens
==============================
When you call Number(x), JavaScript performs ToNumber on x. If x is already a number, it is returned. 
If it is a boolean, true becomes 1 and false becomes 0. If it is a string, that is where parsing kicks in.
If x is an object, it is first converted with ToPrimitive. For example, Number(new String("100")) first 
becomes the primitive string "100", then parses to 100. The output is always a JavaScript number,
 which is an IEEE-754 double, so the final step is producing that double value, possibly with rounding.

 */

let strNum = '100';
let num = Number(strNum);
console.log("Printing num :", num); // output : 100
console.log(typeof(num)); //output : number


// Number to String
let numStr = String(50);
console.log(numStr); // Output: '50'
console.log(typeof numStr); // Output: string


// Boolean Conversion
let isActive = Boolean(1);  // Boolean will be converted to true , as 1 represents true and 0  represents false
console.log(isActive); // Output: true
console.log(typeof isActive); // Output: boolean

