console.log("Calculator script");
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operation = prompt("Select the operation: 1. Addition, 2. subtraction, 3. Multiplication, 4. Division");

console.log(num1);
console.log(num2);
console.log(operation);

if(operation==1){
    //do operation
    let result = Number(num1) + Number(num2);
    //display result
    console.log(result);
}
if(operation==2){
    //subtraction
    let result = Number(num1) - Number(num2);
    //display result
    console.log(result);
}
if(operation==3){
    //multiplication
    let result = Number(num1) * Number(num2);
    //display result
    console.log(result);
}
if(operation==4){
    //division
    let result = Number(num1) / Number(num2);
    //display result
    console.log(result);
}
