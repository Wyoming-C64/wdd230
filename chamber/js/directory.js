const url = 'json/data.json';

function displayDirectory(directory) {
    const cards = document.querySelector('div.cards');
    let count = 1;
    directory.forEach((org) => {
        // Create the elements to put in the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let streetAddress = document.createElement('p');
        let phone = document.createElement('p');
        let memberLevel = document.createElement('p');
        // We'll create this next one as a <p> but stuff 
        // an <a> in the .innerHTML attribute.
        let webUrl = document.createElement('p');

        // Build the h2 content to show the organization's name

        h2.textContent = org.name;

        // Some details

        document.getElementById("me").innerHTML
        streetAddress.textContent =org.address;
        phone.textContent = org.phone;
        webUrl.innerHTML = `<a href="${org.url}" target="_blank">${org.url}</a>`;
        memberLevel.textContent = `${org.level} Member`;

        // Build the image portrait by using the relevant attributes

        logo.setAttribute('src', org.logo);
        logo.setAttribute('alt', `Logo ${org.name}`);
        logo.setAttribute('title', `${org.name}`)
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        // Append all this to the card elements. 
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(streetAddress);
        card.appendChild(phone);
        card.appendChild(memberLevel);

        // Attach all cards to our master card element. 
        cards.appendChild(card)
        count++;
    }); // end forEach
}   // end of displayProphets()


async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory);
    // displayProphets(data.prophets);
}

getDirectoryData();
