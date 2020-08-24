let a, b;
[a, b] = [100, 200];
console.log(a);
console.log(b);

[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a);
console.log(b);
console.log(rest);

const people = ["John", "Beth", "Mike"];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

const person = {
  name: "John Doe",
  age: 23,
  city: "Miami",
  gender: "Male",
};

const { name, age, city, gender } = person;
console.log(name, age, city, gender);
