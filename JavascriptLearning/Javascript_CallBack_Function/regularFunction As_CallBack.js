
/**
 * 
 * The processUserInput function takes a callback function as an argument and calls it with the name parameter. 
 * The greet function is passed as the callback to processUserInput, and it logs a greeting message to the console.
 *  When processUserInput is called with greet, it prints “Hello, Alice!” to the console. This shows how callbacks 
 * can be used to handle asynchronous operations or deferred execution.
 */

/**
 * Here, processUserInput accepts callback as a parameter. When processUserInput is called,
 *  it defines a variable name with the value "Alice" and then calls the callback function,
 *  passing name as its argument. The greet function is passed as the callback and is executed, 
 * logging Hello, Alice! to the console. This pattern is especially useful for flexible and 
 * reusable functions.
 */


function processUserInput(callback){
    const name = "Alice";
    callback(name);
}

function greet(name){
    console.log(`Hello, ${name}!`);
}