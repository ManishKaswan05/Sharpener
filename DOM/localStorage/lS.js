function addItemToLocalStorage(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}
function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteItem(index));

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
    });
}

function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

document.addEventListener('DOMContentLoaded', () => {
    displayItems();

    const addButton = document.getElementById('addItemButton');
    const inputItem = document.getElementById('itemInput');
    const deleteButton = document.getElementById('deleteButton');

    addButton.addEventListener('click', () => {
        const newItem = inputItem.value.trim();
        if (newItem !== '') {
            addItemToLocalStorage(newItem);
            inputItem.value = '';
        }
    });

    deleteButton.addEventListener('click', () => {
    });
});
