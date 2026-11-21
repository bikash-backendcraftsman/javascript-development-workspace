/**
 * You can also create an object first and add nested properties later.
 * 
 * below Examples are given.
 */

const user =  {
    id : 1,
    name : "Bikash"
};

// Add a nested object
user.address = {
    city : "Bangalore",
    localArea : "MarathHalli",
    pincode : 560066
};

//accessing the variable
console.log(user.address.pincode);

//updating the object properties
user.address.localArea = "DodenKodi";

console.log(user.address.localArea);