// Immediately Invoked Functions Expression

(function fun1(){
    console.log("Imediately Invoked")
})();


((str)=>{   // Arraoe functions
    console.log(`Immedialy Invoked ${str}`)
})("Functions");


// Syntax of Arrow functions are 
//(parameters)=> (whatever you want to return)

console.log((()=>("Hello Arrow Functions"))) // will return Function anonymous 

console.log((()=>("Hello Arrow Functions"))())




