// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");

// Try to complete the method with options
try {
	const options = {
		month: "short",
		day: "2-digit",
		year: "numeric"
	};
	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>!`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${monthName} ${d.getDate()} ${year}`;
document.querySelector("#date2").textContent = fulldate;


let myString = `Current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`
document.getElementById("template").textContent = myString;
let quantity;

function updateResult() {
    quantity = document.querySelector('#q').value;
    document.querySelector("#result").textContent = quantity;
}

function getTemperature(input = 0) {
    return (input * 9/5) + 32;
}

document.getElementsByTagName("p")[0].innerHTML = "Welcome to <em>our</em> neighborhood!"

document.querySelector("#temp").value = `${getTemperature(20)} degrees Fahrenheit`;

let divs = document.querySelectorAll("div").length;

document.querySelector("#numDivs").innerHTML = `There are a total of <b>${divs} DIVs</b> in this document.`

let cityNames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];

let filterC = cityNames.filter(city => city.charAt(0) === "C");

document.querySelector("#cityList").innerHTML = filterC.join(", ");