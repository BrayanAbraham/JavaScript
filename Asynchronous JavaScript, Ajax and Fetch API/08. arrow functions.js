// const sayHEllo = function () {
//   console.log("Hello");
// };

// const sayHEllo = () => {
//   console.log("Hello");
// };

const sayHEllo = () => console.log("Hello");

sayHEllo();

// const sayHi = function () {
//   return "Hello";
// };

// const sayHi = () => {
//   return "Hello";
// };

const sayHi = () => "Hi";

console.log(sayHi());

// const sayYo = function () {
//   return {
//     msg: "Hello",
//   };
// };

// const sayYo = () => {
//   return {
//     msg: "Hello",
//   };
// };

const sayYo = () => ({ msg: "Hello" });

console.log(sayYo());

// const sayHelloName = function (name) {
//   console.log(`Hello ${name}`);
// };

// const sayHelloName = (name) => {
//   console.log(`Hello ${name}`);
// };

const sayHelloName = (name) => console.log(`Hello ${name}`);

sayHelloName("Brayan");

const sayHelloFullName = (fname, lname) =>
  console.log(`Hello ${fname} ${lname}`);

sayHelloFullName("Brayan", "Abraham");

const users = ["Nathan", "John", "William"];
const nameLengths = users.map((name) => name.length);
console.log(nameLengths);
