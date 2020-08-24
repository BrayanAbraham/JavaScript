let val;

val = 46;
console.log(val);

val = "John";
console.log(val);

val = String(46);
console.log(val, typeof val);

val = String(4 + 4);
console.log(val, typeof val);

val = String(true);
console.log(val, typeof val);

val = String(new Date());
console.log(val, typeof val);

val = String([1, 2, 3, 4, 5]);
console.log(val, typeof val);

val = (5).toString();
console.log(val, typeof val);

val = Number("5");
console.log(val, typeof val);

val = Number(true);
console.log(val, typeof val);

val = Number(false);
console.log(val, typeof val);

val = Number(null);
console.log(val, typeof val);

val = Number("Hello");
console.log(val, typeof val);

val = Number([1, 2, 3]);
console.log(val, typeof val);

val = parseInt("100");
console.log(val, typeof val);

val = parseInt("100.30");
console.log(val, typeof val);

val = parseFloat("100.30");
console.log(val, typeof val);

val = 5 + 6;
console.log(val, typeof val);

val = "5" + 6;
console.log(val, typeof val);

val = isNan(parseInt("Hello"));
console.log(val, typeof val);
