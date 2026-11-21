const product = {
    id : 1,
    name : "Laptop",
    //nested Object Creation
    spec : {
        processor : "Intel I7",
        ram: "16GB"
    }
};

//accessing Object data
//object.parentObject.childProperty : The Rule

console.log(product.spec.ram);

