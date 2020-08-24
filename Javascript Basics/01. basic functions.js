//Console Log
console.log("Hello World");

//Print Table
console.table({
  a: 1,
  b: 2,
});

//Give Error
console.error("Error");

//Give Warning
console.warn("Warning");

//Alert
alert("Hello World");

//Clear Console
console.clear();

//Timing
console.time("ID");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.timeEnd("ID");
