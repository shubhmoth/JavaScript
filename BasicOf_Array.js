console.log("Arrays in JavaScript")

// Array are initialized by SQUARE Brackets in JavaScript (without new Keyword)
//In JavaScript array can consist of multiple types of elements
const myArr1 = [1,2,"Shubh",true]
console.log(typeof myArr1)
console.log(myArr1)
const myArr2 = new Array(1,2,"Hello","World")
console.log(typeof myArr2)
console.log(myArr2)


//In javascript INDEXING of array is ZERO based
// javascript array-copy-operations create SHALLOW COPIES(referenced)
//Deep copies are not refrenced

//Push and Pop Operation O(1) - operations pop and push element from back
myArr1.push(false)
console.log(myArr1)
myArr1.pop()
console.log(myArr1)

//Unshift and Shift Operations O(n) - operations insert and remove element from front
myArr2.unshift(3)
console.log(myArr2)
myArr2.shift()
console.log(myArr2)

// Functions in Arrays 
// includes
// indexOf
// join
const newArr = myArr1.join() // Converts the array type from object to string
console.log(typeof newArr) // string
console.log(newArr) // same array withot bracket comma separated

//slice and splice    ++++++++ IMPORTANT +++++++

