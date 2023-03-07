const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
    let count = 1;
    prophets.forEach((prophet) => {
        // Create the elements to put in the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let ordinal = 'th';

        switch(true) {
            case (count % 10 == 1 && count % 100 != 11):
                ordinal = 'st';
            break;
            case (count % 10 == 2 && count % 100 != 12):
                ordinal = 'nd';
            break;
            case (count % 10 == 3 && count % 100 != 13):
                ordinal = 'rd';
            break;
        }

        // Build the h2 content to show the prophet's full name

        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Some details

        birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;

        // Build the image portrait by using the relevant attributes

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('title', `${prophet.name} ${prophet.lastname}: ${count}${ordinal} Latter-day Prophet`)
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append all this to the card elements. 
        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Attach all cards to our master card element. 
        cards.appendChild(card)
        count++;
    }); // end forEach
}   // end of displayProphets()

function doSomeStuff() {
    const newVariable = fetch(url);
    giveMeAlert();
}

doSomeStuff();

var giveMeAlert = function() {
    console.log("This is your courtesy alert.")
}