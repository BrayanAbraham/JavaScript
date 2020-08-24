greet = () => {
  console.log("Hello");
};

greet();

greet2 = (name) => {
  return "Hello " + name;
};

console.log(greet2("Brad"));

greet3 = (f = "John", l = "Doe") => {
  return "Hello " + f + " " + l;
};

console.log(greet3());

const square = function (x) {
  return x * x;
};

console.log(square(8));

(() => {
  console.log("Immidiately Invoked Function");
})();

((name) => {
  console.log(`Hello ${name}`);
})("Brad");

const todo = {
  add: () => {
    console.log("Add Todo");
  },
};

todo.add();
