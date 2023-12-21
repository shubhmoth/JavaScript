console.log("DataTypes Conversion in JAVASCRIPT")
let str = null
console.log(typeof str)
let num = Number(str)
console.log(typeof num)
console.log(num)

//        33 => number   33
//     33abc => number  NaN -> Not a Number
// undefined => number  undefined
//      true => 1; false =>0;
//      null => 0;

let numb = undefined
console.log(typeof numb)
let bol = Boolean(numb)
console.log(typeof bol)
console.log(bol)

//      0 => false
//      1 => true
//     "" => false
//  "abc" => true
//   null => false
//undefined => false


console.log(1+"1")
console.log("1"+1)
console.log("2"+3+5)
console.log(3+2+"5")
console.log(3+4+"2"+5+"6"+4)


console.log(+true)

console.log(+false)
//console.log(true+) Gives Error