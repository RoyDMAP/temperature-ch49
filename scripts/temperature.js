function convertTemp(){

    let temperature = prompt("Enter the temperature (Celsius):");
    let f = (temperature * 9/5) + 32;
    document.getElementById("tempResult").innerHTML = `<p> ${temperature} C to ${f} F </p>`;   
}
    






