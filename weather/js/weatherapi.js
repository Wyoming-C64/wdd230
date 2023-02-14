const currentTemp = document.getElementById('currentTemp');
const captionDesc = document.getElementById('weatherCondition');
const weatherIcon = document.getElementById('weatherIcon');
const windSpeed = document.getElementById('windSpeed');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=8919aa73725d124e224d2d89ade3b590";

function displayResults(weatherData) {
    // Get the current temperature and stuff it into our
    // temperature HTML element.
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(2)}</strong>`;

    // Build a URL to the proper icon image, using the 
    // filename returned by the API.
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    // Build simple variables to reference the data we want.
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed;
    const dir = weatherData.wind.deg;

    // Set our HTML icon element and description elements.
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    // We will set up a compass of cardinal, intercardinal,
    // and secondary intercardinal directions. This divides
    // the compass into 16 sections of 22.5 degrees. The
    // array is 0-based (0-15). 
    const compass = [
        'N','NNE','NE','ENE',
        'E','ESE','SE','SSE',
        'S','SSW','SW','WSW',
        'W','WNW','NW','NNW',
    ];

    // Calculate the simplified direction by dividing the azimuth angle by 22.5, round to the nearest integer, then bitwise AND to limit the result to a number between 0 and 15. ('North' could theoretically be either 0 or 16).
    const dirIndex = Math.round(dir/22.5) & 15;

    const windString = compass[dirIndex] + " " + speed.toFixed(1) + " mph";

    windSpeed.textContent = windString;
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