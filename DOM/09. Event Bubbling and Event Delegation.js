//Bubbling
document.querySelector("task").addEventListener("click", runEvent);
document
  .querySelector("task")
  .parentElement.addEventListener("click", runEvent);
document
  .querySelector("task")
  .parentElement.parentElement.addEventListener("click", runEvent);

//Delegation
document.body.addEventListener("click", deleteItem);

deleteItem = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
};
