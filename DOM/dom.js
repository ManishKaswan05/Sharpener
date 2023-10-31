// document.getElementById("main-header").style.borderBottom = "solid 3px #000";
// document.getElementsByClassName("title")[0].style.color = "green";
// document.getElementsByClassName("list-group-item")[2].style.background = "green"
// document.getElementsByClassName("list-group-item")[0].style.fontWeight = "bold"
// document.getElementsByClassName("list-group-item")[1].style.fontWeight = "bold"
// document.getElementsByClassName("list-group-item")[3].style.fontWeight = "bold"
// document.querySelectorAll("li")[1].style.backgroundColor = "green"
// document.querySelectorAll("li")[2].style.display = "None"
// document.querySelectorAll("li")[1].style.color = "green"
// document.querySelectorAll("li")[1].style.backgroundColor = "green"
// document.querySelectorAll("li")[3].style.backgroundColor = "green"

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// // ChildNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousELementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'Green';

// // createElement

// // create a div
// let newDiv = document.createElement('div');
// // add Class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'hello 1';

// // add attr
// newDiv.setAttribute('title','Hello Div');

// // create text node
// let newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '20px'

// container.insertBefore(newDiv, h1);


let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;

  // Create new li element
  let li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  let deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}




