
function calcWindChill(fahrTemp, speedMPH) {
    let result = "N/A";
    if (fahrTemp <= 50 && speedMPH > 3) {
        let windChill = 
            (35.74 + 
            0.6215 * fahrTemp - 
            35.75 * speedMPH ** 0.16 + 
            0.4275 * fahrTemp * speedMPH ** 0.16);
        result = windChill.toFixed(1).toString() + "&deg; F";
    }
    return result;
}

const windSpeed = parseFloat(document.getElementById("windSpeed").innerText);

const currentTemp = parseFloat(document.getElementById("temperature").innerText);

document.getElementById("windChill").innerHTML = calcWindChill(currentTemp, windSpeed);

