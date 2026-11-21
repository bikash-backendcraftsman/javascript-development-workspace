
//this refers to the object that is currently calling the function
console.log(this);

var age = 28;
function diaplayAge(){
    console.log(age);
    console.log(this);
}

diaplayAge(); // this refers to the window object


var person = {
    age : 26,
    diaplayAge : diaplayAge
}

person.diaplayAge();