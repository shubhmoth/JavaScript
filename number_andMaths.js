console.log("Numbers and Maths in JavaScript")

const num = new Number(20)
console.log(typeof num)    //object
const numb = 20
console.log(typeof numb)   //number
console.log(num)
console.log(numb)


//console.log(num.toString())    we can convert it to string type also


console.log(num.toFixed(5))
console.log(numb.toFixed(3))

console.log(typeof num) //object
console.log(typeof numb) //number

const number = 1234.7990
console.log(number.toPrecision(5))
console.log(number.toPrecision(3))    //1.23e+3
console.log(typeof number) //number
const n = number.toPrecision(4)
console.log(typeof n)   // string



const nub = 1000000
console.log(nub.toLocaleString())   // Convert the number according to US Standards
console.log(nub.toLocaleString('en-IN'))  

// ++++++++ MATHS ++++++++

console.log(Math.round(23.5))
console.log(Math.round(Math.random()*100))
console.log(Math.max(2,3,-1,6,9,0))

console.log(Math.random()) // it will generate a value between 0 and 1 only

// If you want to generate the random value between two NUMBERS that is 
const lowerBound = 1
const upperBound = 6

// A formula that generate the random values between LowerBound and UpperBound
let randomValue = (Math.floor((Math.random())*(upperBound-lowerBound+1))+lowerBound)  // *VERY_IMP*
console.log(randomValue)