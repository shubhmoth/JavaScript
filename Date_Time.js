// January 1 1970 - By default start date of JavaScript
let myDate = new Date()    // CURRENT DATE
console.log(typeof myDate)
console.log(myDate)
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDay())
console.log(myDate.getTimezoneOffset())
console.log()

//CONVERSIONS
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString())
console.log()


//creating our custom Date
let date1 = new Date(2022,0,6,89,67) //Months starts from 0 when separated by commas - format 1
console.log(date1.toLocaleString())
let date2 = new Date("2024-01-15")    // Months start from 1 - format 2
console.log(date2.toDateString())
console.log()



//timestamp
let time1 = Date.now();    
console.log(typeof time1)    // number
console.log(time1)


