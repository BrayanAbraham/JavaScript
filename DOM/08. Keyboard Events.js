const btn = document.querySelector("task");

btn.addEventListener("keydown", runEvent);
btn.addEventListener("keyup", runEvent);
btn.addEventListener("keypress", runEvent);
btn.addEventListener("focus", runEvent);
btn.addEventListener("blur", runEvent);
btn.addEventListener("cut", runEvent);
btn.addEventListener("paste", runEvent);
btn.addEventListener("input", runEvent);
btn.addEventListener("change", runEvent);

const form = document.querySelector("from");

form.addEventListener("submit", runEvent);
