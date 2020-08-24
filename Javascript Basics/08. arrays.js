const number = [43, 56, 33, 23, 44, 36, 5];
const num = new Array(1, 2, 3, 4, 5);
const arr = [1, 2, "a", new Date(), { a: 1, b: 2 }];

console.log(number);
console.log(num);
console.log(arr);

console.log(number.length);
console.log(Array.isArray(number));
console.log(number[3]);

number[2] = 100;
console.log(number);

console.log(number.indexOf(100));

number.push(250); //end
console.log(number);

number.unshift(120); //start
console.log(number);

number.shift(); //start
console.log(number);

number.pop(); //end
console.log(number);

console.log(number.splice(1, 1));

console.log(number.reverse());

console.log(number.concat(num));

number.sort();
console.log(number);

number.sort((x, y) => x - y);
console.log(number);

console.log(number.find((x) => x < 50));

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
