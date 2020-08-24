let firstName = "Brayan";
let lastName = "Abraham";

console.log(firstName + lastName);
console.log(firstName + " " + lastName);

firstName += " " + lastName;
console.log(firstName);

console.log("Hello! My name is " + firstName);
console.log("That's awesome I can't wait");
console.log(firstName.length);

let val = "test";
let s = "strings";
console.log(val.concat(" ", s));
console.log(val.toUpperCase());
console.log(val.toLowerCase());
console.log(val[3]);
console.log(val.indexOf("t"));
console.log(val.lastIndexOf("t"));
console.log(val.charAt(2));
console.log(val.charAt(val.length - 1));
console.log(val.substring(1, 2));
console.log(val.slice(0, 2));
console.log(firstName.split(" "));
console.log(val.replace("es", "ab"));
console.log(firstName.includes("Hello"));
