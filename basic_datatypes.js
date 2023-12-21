const id = 12108561  // can never be changed
//id = 43     -   can't do
let name = "Shubh"
var age = "19"
city = "Jhansi"
console.table([id,name,age,city])
name = "Sunny"
age = "21"
city = "Jammu"
console.table([id,name,age,city])


//Difference between Var and let
//   if a variable is declared inside scope by "var" keyword it can be used outside scope too
//   while if we use let keyword to declare a variable then it's avaibility is till scope only

/*
Prefer not to use var bcoz of issue in block scope and functional scope 
 */

/*
if we don't define 
 */

// number - 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

let i; // undefined
let j=null; // null  -> Object

console.log(typeof j);  // Display Object
console.log(typeof i); // Display Undefined


// OBJECTS in JS
