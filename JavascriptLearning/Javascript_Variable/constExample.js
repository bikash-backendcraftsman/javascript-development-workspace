/*
Immutable bindings mean that once a variable is declared with const, it cannot be reassigned to a different value. 
For example, const x = 5; means x will always reference the value 5 and cannot be changed to something else.
*/

    const z = 45;
    console.log("Printing Z : ", z);
    // const variable must be initialized with a value and con not be re assigned

    // Now we will try to reassiged a value to z variable

    // TypeError: Assignment to constant variable.
    z = 90