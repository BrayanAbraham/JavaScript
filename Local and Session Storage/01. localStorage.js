localStorage.setItem("name", "John");
localStorage.removeItem("name");
localStorage.getItem("name");
localStorage.clear();

//to get items from store
JSON.parse(localStorage.getItem("name"));

//to store items
var tasks;
localStorage.setItem("name", JSON.stringify(tasks));
