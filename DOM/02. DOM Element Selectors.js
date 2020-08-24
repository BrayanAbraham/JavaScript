//Single Element Selectors
const element = document.getElementById("task-title");
element.id;
element.className;
element.style.background = "#333";
element.style.color = "#fff";
element.style.padding = "5px";
element.style.display = "none";
element.textContent = "Task List";
element.innerText = "My Tasks";
element.innerHTML = "<span>My Task List</span>";

let newElement = document.querySelector("#task-title"); //id
newElement = document.querySelector(".card-title"); //class
newElement = document.querySelector("h5"); //tag
newElement = document.querySelector("li");
newElement = document.querySelector("li:last-child");
newElement = document.querySelector("li:nth-child(3)");
newElement.style.color = "red";

//Multiple Element Selectors

//HTML Collections methods
const items = document.getElementsByClassName("collection-item");
const liitems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");
const listItems = document.getElementsByTagName("li");

//to convert HTML collection to Arrays to use array methods
const lis = Array.from(listItems);

//Node list methods - no need to convert to array can use things like forEach
const itemlist = document.querySelectorAll("ul.collection li.collection-item");
