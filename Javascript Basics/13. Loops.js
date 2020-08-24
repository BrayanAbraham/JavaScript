for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 2) {
    console.log("Number 2");
    continue;
  }
  if (i > 5) {
    break;
  }
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

i = 11;
do {
  console.log(i);
  i++;
} while (i < 10);

const num = ["a", "b", "c", "d", "e"];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

num.forEach((n) => console.log(n));
num.forEach((n, i, a) => console.log(n, i, a));

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
];

const ids = users.map((user) => {
  return user.id;
});

console.log(ids);

const user = {
  f: "John",
  l: "Doe",
  age: 40,
};

for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}
