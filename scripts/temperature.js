function convertTemp() {
    
    let temperature = prompt("Choose conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");

    if (temperature === "1") {
        // Convert Celsius to Fahrenheit
        let temperature = prompt("Enter the temperature in C:");
        let fahrenheit = (temperature * 9/5) + 32;
        document.getElementById("tempResult").innerHTML = `<p>The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}</p>`;
    } else if (temperature === "2") {
        // Convert Fahrenheit to Celsius
        let temperature = prompt("Enter the temperature in Fahrenheit:");
        let celsius = (temperature -32) *5/9;
        document.getElementById("tempResult").innerHTML = `<p>The conversion of Fahrenheit ${temperature} to Celsius is ${celsius}</p>`;
    } else {
        // invalid input
        document.getElementById("tempResult").innerHTML = "<p>Invalid selection or cancelled.</p>";
    }
}






