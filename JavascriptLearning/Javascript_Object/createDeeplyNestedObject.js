// Here we have two nested Object inside one Object.
const commapny = {
    name: "Tech Solution",
    employee : {
        name : "Bikash",
        Address : {
            city: "Hyderabad",
            country: "India",
            pinCode: 500081
        }
    }
};


// accessing the variable

console.log(commapny.employee.Address.city);

console.log(commapny.employee.Address.pinCode);