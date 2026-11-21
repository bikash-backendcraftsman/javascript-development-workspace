
/**
 * Objects in JavaScript are collections of key-value pairs, where keys are strings (or symbols) and values 
 * can be any data type, including other objects or functions. This flexibility makes objects a powerful tool
 *  for representing real-world entities and organizing complex, hierarchical data.
 */

// creating objects
const user = {
    name: "Bikash",
    age: 34,
    isAdmin: false
};

//Accessing the properties
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);


// We can able to modify the object attributes

//updating the value
user.name = "Subash Bose"
user.age = 70;

//Adding a property
user.email = "lucida@Nexocare.health"

//printing the values of Object
console.log(user);

// now deleting aproperly
delete user.isAdmin;
console.log(user);

