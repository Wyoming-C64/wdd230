// OpenWeatherMap API Key - 8919aa73725d124e224d2d89ade3b590

const city = 'Sundance';
const state = 'WY';
// document.getElementById('city').textContent = city;
// document.getElementById('state').textContent = state;
const currentTemp = document.getElementById('currentTemp');
const currentTempValue = parseFloat(currentTemp.innerText);

const weatherIcon = document.getElementById('weatherIcon');
const captionDesc = document.getElementById('weatherCondition');

const windSpeed = document.getElementById('windSpeed');
const windSpeedValue = parseFloat(windSpeed.innerText);
const windChill = document.getElementById('windChill');

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&state=${state}&units=imperial&appid=8919aa73725d124e224d2d89ade3b590`;


// function toTitleCase(theString) {
//     // Unfortunately, JS doesn't have a built-in toTitleCase, so here is a solution function.
//     // Take any string, capitalize only the first letter of each word (after a space) and make 
//     // all others lower case.
//     //
//     // I wrote this, but then decided against using it in favor of a CSS property that does the 
//     // same thing and has been supported by most browsers for a very long time. I feel better 
//     // about changing it as a display action rather than changing actual data. 
//     //
//     const theWords = theString.split(" ");
//     for (let i=0; i< theWords.length; i++) {
//         theWords[i] = theWords[i][0].toUpperCase() + theWords[i].substr(1).toLowerCase();
//     }
//     return theWords.join(" ");
// }


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
        result = `${windChill.toFixed(1)}`;
    }
    
    return result;
}

function windDirSpeedStr(bearing, speed) {
    // We will set up a compass of cardinal, intercardinal,
    // and secondary intercardinal directions. This divides
    // the compass into 16 sections of 22.5 degrees. The
    // array is 0-based (0-15). 
    const compass = [
        'N&nbsp;','NNE&nbsp;','NE&nbsp;','ENE&nbsp;',
        'E&nbsp;','ESE&nbsp;','SE&nbsp;','SSE&nbsp;',
        'S&nbsp;','SSW&nbsp;','SW&nbsp;','WSW&nbsp;',
        'W&nbsp;','WNW&nbsp;','NW&nbsp;','NNW&nbsp;',
        'N&nbsp;',''
    ];

    // Calculate the simplified direction by dividing the azimuth angle by 22.5, round to the nearest integer, then bitwise AND to limit the result to a number between 0 and 15. ('North' could theoretically be either 0 or 16).
    let dirIndex = Math.round(bearing/22.5) & 15;

    if (speed == 0) {
        dirIndex = 17;
    }

    const windString = `${compass[dirIndex]}${speed.toFixed(1)}`;

    return windString;
}


function displayResults(weatherData) {
    // Get the current temperature and stuff it into our
    // temperature HTML element.
    temp = weatherData.main.temp;
    currentTemp.innerHTML = `${temp.toFixed(1)}`;

    // Build a URL to the proper icon image, using the 
    // filename returned by the API.
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    
    // Set the image background to be reflective of sky conditions. Anything over level 04 
    // is considered stormy grey skies. Otherwise, use light blue.
    let backgroundColor = "lightblue";
    let weatherLevel = parseInt(weatherData.weather[0].icon.match(/(\d{2,})[dn]/g));
    let weatherID = parseInt(weatherData.weather[0].id);
    if (weatherID == 803 || weatherID == 804 || weatherLevel > 4) {
        backgroundColor = "#BBBBBB";
    }
    // Build simple variables to reference the data we want.
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed;
    const dir = weatherData.wind.deg;

    // Set our HTML icon element and description elements.
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.style.backgroundColor = backgroundColor;
    captionDesc.textContent = desc;

    windSpeed.innerHTML = windDirSpeedStr(dir, speed);
    windChill.innerHTML = calcWindChill(temp, speed);
}



async function apiFetch() {
    try {
        // Make our API request.
        const response = await fetch(url);
        if (response.ok) {
            // Store the returning data.
            const data = await response.json();
            console.log(data); // For testing.
            displayResults(data);
        } else {
            // Server returned an error... No data.
            throw Error(await response.text());
        }
    } catch (error) {
        // Something else broke with request.
        console.log(error);
    }
}


apiFetch();



