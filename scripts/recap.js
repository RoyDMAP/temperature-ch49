//Functions with arguments and parameters

//console.log("Hello from recap.js");

function sayMyName() {
    hello();
   
    // invoke a function with Argument "Leo"
    hello("Leo");

    hello("Mark");

    hello("Roy");
}

// name -> Parameter "name"
function hello(name ="John") {
    console.log(`Hello ${name}`);
}