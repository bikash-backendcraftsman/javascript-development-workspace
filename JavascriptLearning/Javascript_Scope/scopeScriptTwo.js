/**
 * Applies to variables declared with let and const, restricting their access to the specific block 
 * where they are defined.
 */

if (true) {
  // Block scope
  let blockVar = "I am in a block";
  console.log(blockVar); // Accessible
}
//console.log(blockVar); // Error: blockVar is not defined