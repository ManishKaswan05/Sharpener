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

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// ChildNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousELementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'Green';

// createElement

// create a div
let newDiv = document.createElement('div');
// add Class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello 1';

// add attr
newDiv.setAttribute('title','Hello Div');

// create text node
let newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '20px'

container.insertBefore(newDiv, h1);







