// from , is , of Functions in ARRAY

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8,8]

arr1.push(arr2)   //this will insert an array arr2 in arr1 NOT MERGE
console.log(arr1)
console.log(arr2) 
arr1.pop()
console.log()


// concat function is used to merge two arrays in JS
arr1.concat(arr2)
console.log(arr1)   // this will print the same array only no concat will be done
console.log(arr2)   // same as above
console.log()


let arr3 = arr1.concat(arr2)   // this will finally merge two arrays and will put in arr3
console.log(arr3) // finally our new merged array is ready
console.log()



// as if there are multiple arrays to merge it's hectic task so we can use SPREAD operator instead
const merger = [...arr1,...arr2,...arr3]    // ...array1, ...array2, .......arrayN will concate all arrays 
console.log(merger)
console.log()



//if u stuck in a situation like an array consist of elements and 
//some array which also consist of some array with elements in it and you want to flatten it 
// USE            ++++++     flat(int depth)     ++++++

const fake_array=[1,2,[3,4,5],6,[7,[8,9],0]]
const real_array =  fake_array.flat(Infinity)
console.log(real_array)



// To check wheter the given variable is array or not Array.isArray() is used

const num = "Shubh"   // the case gets intersting if we assign a number to it
console.log(Array.isArray(num))
const numArr = Array.from(num)
console.log(numArr)
console.log()



//Constructing array from multiple variables
// use Array.of()

let a = 10
let b = 20
var c = 30
var d = false
var e = "Gupta"
const arr = Array.of(a,b,c,d,e);
console.log(arr)

