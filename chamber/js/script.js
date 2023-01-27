function toggleMenu() {
    console.log("It worked!!");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
 }

 const myButton = document.getElementById("hamburgerBtn");

 myButton.onclick = toggleMenu;

// Select the HTML element to manipulate
const d = new Date();
const year = d.getFullYear();
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}
const fullDate = d.toLocaleDateString("en-GB", options);
document.querySelector("#yearField").innerHTML = year;
document.getElementById("timestamp").innerHTML = document.lastModified;

// Update Today's Date
document.getElementById("todayDate").innerHTML = fullDate;
