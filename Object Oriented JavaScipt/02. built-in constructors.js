let val1 = "Jeff";
let val2 = new String("Jeff");

console.log(val1, typeof val1);
console.log(val2, typeof val2);

if (val2 === "Jeff") {
  console.log("Type + val check passed");
} else {
  console.log("Type + val check failed");
  if (val2 == "Jeff") {
    console.log("val check passed");
  } else {
    console.log("val check failed");
  }
}

val1 = 5;
val2 = new Number(5);

console.log(val1, typeof val1);
console.log(val2, typeof val2);

val1 = true;
val2 = new Boolean(true);

console.log(val1, typeof val1);
console.log(val2, typeof val2);

val1 = function (x, y) {
  return x + y;
};

val2 = new Function("x", "y", "return x+y");

console.log(val1(1, 2), typeof val1);
console.log(val2(1, 2), typeof val2);

val1 = {
  name: "John",
};
val2 = new Object({ name: "John" });

console.log(val1, typeof val1);
console.log(val2, typeof val2);

val1 = [1, 2, 3, 4];
val2 = new Array(1, 2, 3, 4);

console.log(val1, typeof val1);
console.log(val2, typeof val2);

val1 = /\w+/;
val2 = new RegExp("\\w+");

console.log(val1, typeof val1);
console.log(val2, typeof val2);
