const set1 = new Set();

set1.add(100);
set1.add("ABCD");
set1.add({ name: "John Doe" });
set1.add(true);
set1.add([1, 2, 3]);
set1.add(100);

const set2 = new Set([1, true, "ABCD"]);

console.log(set1);
console.log(set2);
console.log(set1.size);
console.log(set1.has(100));
console.log(set1.has({ name: "John" })); //false Reference type

set1.delete(100);
console.log(set1);

for (let i of set1) {
  console.log(i);
}

set1.keys();
set1.values();
set1.entries();

const setarr = Array.from(set1);
console.log(setarr);
