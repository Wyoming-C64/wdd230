const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector("article");

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

function showGrid() {
	display.classList.add("grid");
	display.classList.remove("list");
}

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList); 

const url = 'json/data.json';

function displayDirectory(directory) {
    
    directory.forEach((org) => {
        // Create the elements to put in the div.cards element
        let card = document.createElement('section');
        card.setAttribute('class', 'picture');
        let h4 = document.createElement('h4');
        let logo = document.createElement('img');
        let streetAddress = document.createElement('p');
        let phone = document.createElement('p');
        let memberLevel = document.createElement('p');
        // We'll create this next one as a <p> but stuff 
        // an <a> in the .innerHTML attribute.
        let webUrl = document.createElement('p');

        // Build the h2 content to show the organization's name

        h4.textContent = org.name;

        // Some details

        h4.textContent = org.name;
        streetAddress.textContent =org.address;
        phone.textContent = org.phone;
        webUrl.innerHTML = `<a href="#" target="_blank">${org.url}</a>`;
        memberLevel.textContent = `${org.level} Member`;

        // Build the image portrait by using the relevant attributes

        logo.setAttribute('src', org.logo);
        logo.setAttribute('alt', `Logo ${org.name}`);
        logo.setAttribute('title', `${org.name}`)
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');

        // Append all this to the card elements. 
        card.appendChild(logo);
        card.appendChild(h4);
        card.appendChild(webUrl);
        card.appendChild(streetAddress);
        card.appendChild(phone);
        card.appendChild(memberLevel);

        // Attach all cards to our master card element. 
        display.appendChild(card)
    }); // end forEach
}   // end of displayProphets()


async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory);
    displayDirectory(data.directory);
}

getDirectoryData();
