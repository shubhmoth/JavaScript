//nn bb ss u  -- Primitives DataTypes in JS
// There are 7 total types of dataTypes in JavaScript 
// NULL, NUMBER, BOOLEAN, BigInt, STRING, SYMBOL, Undefined

let a = null;  // null 
let b = 345;   // number
let c = true;   // boolean
let d = BigInt("567") + BigInt("3")  // BigInt
let e = "OHH"     // String
let f = Symbol("I am a nice symbol") //Symbol
let g    // Undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)   // To check the type of variable

// Non Primitive Data Types - Objects in JS
const item = {
  "ROHAN": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])

// Here item is the const object in JavaScript 

//Chapter 1 - Q3
const a1 = {
  name: "Rohan",
  section: 1,
  isPrincipal: false
}
//a1 = 45
//a1 = {}
//Chapter 1 - Q4
a1['friend'] = "Shubham"
a1['name'] = "Lovish"
console.log(a1)


console.log("Operators in JS")
// Arithmetic Operators
let a2 = 45;
let b2 = 4;
console.log("a2 + b2 = ", a2 + b2)
console.log("a2 - b2 = ", a2 - b2)
console.log("a2 / b2 = ", a2 / b2)
console.log("a2 * b2 = ", a2 * b2)
console.log("a2 ** b2 = ", a2 ** b2)
console.log("a2 % b2 = ", a2 % b2)
console.log("++a2 = ", ++a2)
console.log("a2++ = ", a2++)
console.log("--a2 = ", --a2)
console.log("a2-- = ", a2--)
console.log("a2 = ", a2)
console.log("a2-- = ", a2--)

//Assignment Operator
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)