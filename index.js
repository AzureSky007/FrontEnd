const Area = function(height, width) {
    return height*width
}

console.log("The Area is " + Area(3,4))
console.log("This was the Expression Function")
console.log("")


for(i = 0; i < 3; i++){
    console.log("Current value of i is " + i)   
}
console.log("This was the IIFE function")
console.log("")



anon = function(){
    console.log("This is anonymous IIFE fucntion")
}
anon()
console.log("")


let value = 1;
console.log("Before the callback function, the value is " + value)

change = function(){
    value = 2
    return value
} 
console.log("After the callback function, the value is " + change())