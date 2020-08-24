const map1 = new Map();

const key1 = "some string",
  key2 = {},
  key3 = function () {};

map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

console.log(map1.size);

for (let [key, value] of map1) {
  console.log(`${key}: ${value}`);
}

for (let key of map1.keys()) {
  console.log(key);
}

for (let value of map1.values()) {
  console.log(value);
}

map1.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

const arr = Array.from(map1);
console.log(arr);

const arr2 = Array.from(map1.values());
console.log(arr2);

const ar3 = Array.from(map1.keys());
console.log(ar3);
