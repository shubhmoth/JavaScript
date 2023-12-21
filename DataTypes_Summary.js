console.log("SUMMARY OF DATATYPES in JAVASCRIPT")

/* JavaScript is a DYNAMICALLY typed language. 
This means that the data type of a variable is not 
explicitly declared, and the JavaScript engine determines 
the data type at runtime based on the value assigned to the variable. */


/* Data types are classified in two types 
based on the how they are stored in memory and how they are accessed */


// The Two types of Datatypes are 
// PRIMITIVE (Value)  uses stack memory
// they are of 7 types: string, number, boolean, null, undefined, bigInt, symbol

 
//SYMBOLS IN JAVASCRIPT
//Symbols are completely unique identifiers.
//Every time you call the factory function, a new and unique symbol is created.
let s1 = Symbol(123)
let s2 = Symbol(123)
console.log(s1==s2) //false
console.log(s1===s2) //false


//BigInt in JAVASCRIPT
//Used to store very big numbers
let num = 234565435676543223456n   //as we wrote n in last of a number so it is typecasted to bigINt
console.log(typeof num)
console.log(num)




// NON PRIMITIVE (Reference Type) uses heap memory
// Arrays, Objects, Functions

const arr = ["shubh","sunny","sumesh"] // array --> [ '', '', '']

let myObj = {
    name : "shubh",
    age : 18,
    profession : "engineer"
}

const myFunction = function(){
    console.log("Hello World")
}

