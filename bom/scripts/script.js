const userInput = document.getElementById("favchap");
const addButton = document.getElementById("addButton");
const favList = document.getElementById("list")
const numItems = document.getElementById("listItemCounter");

numItems.textContent = favList.childElementCount;

addButton.addEventListener('click', function () {
    if (userInput.value != "") {
        let listItem = document.createElement('li');
        let listText = document.createElement('span');
        let listDelete = document.createElement('button');


        listItem.appendChild(listText);
        listText.textContent = userInput.value;
        listItem.appendChild(listDelete);
        // Add a Big Red X
        listDelete.innerHTML = '&#10060;';
        favList.appendChild(listItem);

        listDelete.addEventListener('click', () => {
            favList.removeChild(listItem);
        });
        
        numItems.textContent = favList.childElementCount;
        userInput.value = '';
        userInput.focus();
    } 
})