const today = new Date();
console.log(today);

let val = new Date("9/10/1981");
console.log(val);

val = new Date("9/10/1981 11:25:00");
console.log(val);

val = new Date("september 10 1981 11:25:56");
console.log(val);
console.log(today.getMonth()); // 0 = Jan
console.log(today.getDate());
console.log(today.getDay()); //0 = Sunday
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());

val.setMonth(2);
val.setDate(12);
val.setFullYear(1985);
val.setHours(3);
val.setMinutes(30);
val.setSeconds(25);
console.log(val);
