// Select the HTML element to manipulate
const d = new Date();
const year = d.getFullYear();
document.querySelector("#yearField").innerHTML = year;
document.getElementById("timestamp").innerHTML = document.lastModified;