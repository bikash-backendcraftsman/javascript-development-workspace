//global Scope
let globVar = "I am Global"; // Global scope variable can be accessed 


function exampleFunction(){
//Function scope
var myFun = "I am in Function";
console.log(myFun); // functional scope printing
console.log(globVar);  
}

exampleFunction();
console.log(myFun); // this is functin scope variable, can not be access outside function