function toggleMenu() {
    console.log("It worked!!");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
 }

 const myButton = document.getElementById("hamburgerBtn");

 myButton.onclick = toggleMenu;

// Select the HTML element to manipulate
const d = new Date();
const dow = d.getDay();
const alertBar = document.getElementById("alertBar");

if ((dow >=1 && dow <= 2) && alertBar) {
    alertBar.style.display = "block";
}

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


function dateDiff(first, second) {
    let result = Math.round((second - first) / (1000*60*60*24));
    return result;
}

function doDatevisited() {
    const daysSinceField = document.getElementById("daysSinceField");
    const nowVisit = Date.now();
    const lastVisit = Number(window.localStorage.getItem("scc-LastVisited"));

    let message = "Welcome, it looks like this is your first time to this page!";
    
    if (lastVisit > 0) {
        let daysSince = dateDiff(lastVisit, nowVisit);
        
        switch (true) {
            case (daysSince < 1):
                daysSince = "less than one";
                
            case (daysSince == 1):
                dayNoun = "day";
            break;
            default:
                dayNoun = "days";
        }
                    
        message = "Welcome back! It's been " + daysSince + " " + dayNoun + " since your last visit to this page.";
    }

    daysSinceField.textContent = message;
    window.localStorage.setItem("scc-LastVisited", nowVisit.toString());
}

doDatevisited();