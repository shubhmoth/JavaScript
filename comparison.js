console.log("Cpmparasions in JavaScript")
console.log()

// in comparison null is being converted in 0 comparison is >=, <=, <,> but not in equality ==
console.log("with NULL")
console.log(null==0)
console.log(null<0)
console.log(null>=0)  // true
console.log(null <= "") //true
console.log(null=="") 

// undefined is always undefined
console.log("with undefined")
console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<=0)
console.log(undefined >= null)
console.log(undefined>="")

//STRING
console.log("with String")
console.log("2">1)
console.log("5"<25)
console.log(2=="2") // true

// '==' this is light check while '===' this is strong check 
// '===' this will check dataype also of both the variables
console.log("using ===")
console.log(2==="2") //false
