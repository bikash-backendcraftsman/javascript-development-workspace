// Array created and values initialized.
const jeansBrand = ["levis","H&M","Zara","Sparky","Spykar"];

// Array in javascrip is kind of dynamic  in naturu,, so we can add and delete and it can grow and shrink as well.

jeansBrand.push("UsPOL");

/**
 * colors.shift(); // Remove the first element.  > 
console.log(colors); // ["green", "blue"]

colors.unshift("pink"); // Add to the beginning.  >
console.log(colors); // ["pink", "green", "blue"]
 */


//iterating over arrays

//Using foor lopp
for(let i = 0;i<jeansBrand.length;i++){
    console.log(jeansBrand[i]);
}


console.log("==================");
//using forEach Loop
jeansBrand.forEach(b => console.log(b));