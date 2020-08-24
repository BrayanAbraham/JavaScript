let id = 100;

if (id == "100") {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

if (id != "101") {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

if (id === "100") {
  console.log("INCORRECT");
} else if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

if (id !== 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

if (typeof id2 !== "undefined") {
  console.log("NUMBER DEFINED");
} else {
  console.log("NUMBER UNDEFINED");
}

console.log(id === 100 ? "CORRECT" : "INCORRECT");

const color = "green";
switch (color) {
  case "red":
    console.log("red");
    break;
  case "blue":
    console.log("blue");
    break;
  default:
    console.log("neither red nor blue");
    break;
}
