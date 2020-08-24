//create element
const li = document.createElement("li");
li.className = "collection-item";
li.id = "new-item";
li.setAttribute("title", "New Item");

//write text
const text = document.createTextNode("Hello World");
li.appendChild(text);

//create child elements
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

//add to document
document.querySelector("ul.collection").appendChild(li);
