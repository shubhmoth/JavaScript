/ Arrow Functions are a type of functions in Modern JavaScript 
// The basic syntax of arrow functions are 

(() =>{
    console.log("Hello Arrow Functions");
})(); //self called function

const func = (i)=> {
    return i+1;
}

console.log(func(5));
