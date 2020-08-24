//Child Tags
const list = document.querySelector("ul.collection");

//Node List - Tags + Other stuff
list.childNodes;
list.childNodes[0];
list.childNodes[0].childNodes;
list.childNodes[0].nodeName;
list.childNodes[0].nodeType;
/*
        1 Element
        2 Attribute
        3 Text
        8 Comment
        9 Document
        10 Doctype
    */
list.childNodes[0].textContent = "XYZ"; //and other stuff too
list.firstChild;
list.lastChild;

//HTML Collection - Tags Only
list.children;
list.children[0];
list.children[0].children;
list.children[0].textContent = "XYZ"; //and other stuff too
list.firstElementChild;
list.lastElementChild;
list.childElementCount;

//Parent Tags
const listItem = document.querySelector("li.collection=item");

//Node List
listItem.parentNode;
listItem.parentNode.parentNode;

//HTML Collection
listItem.parentElement;
listItem.parentElement.parentElement;

//Sibling Tags
//Node List
listItem.nextSibling;
listItem.previousSibling;
listItem.nextSibling.nextSibling;
listItem.nextSibling.previousSibling;

//HTML Collection
listItem.nextElementSibling;
listItem.previousElementSibling;
listItem.nextElementSibling.nextElementSibling;
listItem.nextElementSibling.previousElementSibling;
