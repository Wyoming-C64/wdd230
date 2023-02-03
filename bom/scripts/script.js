const userInput = document.getElementById("favchap");
const addButton = document.getElementById("addButton");
const favList = document.getElementById("list")

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

        userInput.value = '';
        userInput.focus();
    } 
})