console.log("final report.js");

function convertTemperatureRange(startValue, endValue, scale) {
    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
            let fahrenheit = (temp * 9) /5 + 32;
            console.log(`${temp}C is equal to ${fahrenheit} F`);
        } else if (scale === "F") {
            let celsius = ((temp - 32) * 5) / 9;  
            console.log(`${temp}F is equal to ${celsius} C`);
        } else {  
            console.log("Invalid scale, Please enter C or F. ");
        }
    }
} 

//Get the user input
let startValue = Number(prompt("Enter starting temperature: ")); //10
let endValue = Number(prompt("Enter ending temperature: ")); //13
let scale = prompt("Enter scale C or F: ");

convertTemperatureRange(startValue, endValue, scale);

//document.getElementById("rangeOfTemperatures").innerHTML = `<p>${scale} ${fahrenheit}</p>`;

//document.getElementById("rangeOfTemperatures").innerHTML = `<p>${scale} ${celsius}</p>`;

//document.getElementById("rangeOfTemperatures").innerHTML = "<p>Invalid selection or cancelled.</p>";

//console.log(`${temp}C is equal to ${fahrenheit} F`);
//console.log(`${temp}F is equal to ${celsius} C`);
//console.log("Invalid scale, Please enter C or F."); 