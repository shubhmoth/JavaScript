// function se aram se baar baar ek hi kaam krva loge 
// baar baar ek hi kam krne se achha h ek function bnao us m kaam kro aur jab bhi vo kaam dubara krna ho call function

function myName(){  //function declare kr diya re
    console.log("S")
    console.log("H")
    console.log("U")
    console.log("B")
    console.log("H")
}
myName()  //Execution of Functions
console.log()

function addNumbers(num1,num2){    // num1 & num2 are parameters
    console.log(num1+num2)
}

addNumbers(2,3)   // here 2 and 3 are arguments
addNumbers(2,null)

function multiplyNumbers(num1,num2){    // num1 & num2 are parameters
    return num1*num2
    console.log(num1*num2)  // this will never be executed bcoz we had break the function by calling return
}

const result = multiplyNumbers(2,3)
console.log(result)


// What if have unknown amount of parameters then use rest operators 
function calculateTotal(...num1) { // ...are rest operators , here num1 will be treated as Array
    return num1
}
console.log(calculateTotal(2,3,4,5,6))


// Passing object as parameter in a function
