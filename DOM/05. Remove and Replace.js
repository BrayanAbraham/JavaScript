const newHeading = document.createElement("h2");
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Task List"));

const oldHeading = document.getElementById("task-title");
const parent = document.querySelector(".card-action");

parent.replaceChild(newHeading, oldHeading);

const lis = document.querySelector("li");
const list = document.querySelector("ul");

lis[0].remove();
list.removeChild(lis[3]);

const fli = document.querySelector("li:first-child");
const a = fli.children[0];
a.className;
a.classList;
a.classList[0];
a.classList.add("test");
a.classList.remove("test");
a.getAttribute("href");
a.setAttribute("href", "http://google.com");
a.hasAttribute("href");
a.removeAttribute("title");

a.insertBefore(newChild, referenceChild);
