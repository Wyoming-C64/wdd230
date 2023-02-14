// OpenWeatherMap API Key - 8919aa73725d124e224d2d89ade3b590

const currentTemp = document.getElementById('currentTemp');
const currentTempValue = parseFloat(currentTemp.innerText);

const windSpeed = document.getElementById('windSpeed');
const windSpeedValue = parseFloat(windSpeed.innerText);
const windChill = document.getElementById('windChill');


function calcWindChill(fahrTemp, speedMPH) {
    let result = "N/A";
    
    // If within the bounds for wind chill, calculate it. 
    // Otherwise, it will remain "N/A".
    if (fahrTemp <= 50 && speedMPH > 3) {
        let windChill = 
            (35.74 + 
            0.6215 * fahrTemp - 
            35.75 * speedMPH ** 0.16 + 
            0.4275 * fahrTemp * speedMPH ** 0.16);
        result = windChill.toFixed(1);
    }
    
    return result;
}



windChill.innerHTML = calcWindChill(currentTempValue, windSpeedValue);




