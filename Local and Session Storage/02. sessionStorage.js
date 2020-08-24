sessionStorage.setItem("name", "John");
sessionStorage.removeItem("name");
sessionStorage.getItem("name");
sessionStorage.clear();

//to get items from store
JSON.parse(sessionStorage.getItem("name"));

//to store items
var tasks;
sessionStorage.setItem("name", JSON.stringify(tasks));
