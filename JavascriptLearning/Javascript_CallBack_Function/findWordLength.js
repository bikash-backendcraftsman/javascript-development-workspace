const words = ["React", "JavaScript", "Functions", "Arrow"];



/**
 * 
 * Using const to declare getLengths as an arrow function ensures the function reference cannot be reassigned,
 *  providing safer and clearer code. You could use a regular function declaration (function getLengths(words)
 *  { ... }), but const with arrow functions is common in modern JavaScript for concise syntax and immutability.
 */

/** Note : Very very Important */

/**
 * Declaring functions with const and arrow syntax offers advantages like preventing reassignment (immutability), 
 * more concise code, and lexical this binding, which avoids common bugs with this in callbacks. This style leads 
 * to clearer, safer, and more predictable code, especially in React development.
 */

const getLength = words => words.map(word => word.length);
console.log(getLength(words));