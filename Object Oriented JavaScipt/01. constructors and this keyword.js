const firstObject = {
  name: "John",
  age: 30,
};

console.log(firstObject);

function Person() {
  this.name = "Barry";
}

const secondObject = new Person();
const thirdObject = new Person();

console.log(secondObject);
console.log(thirdObject);

function Person2(name, dob) {
  this.name = name;
  this.dob = new Date(dob);
  this.getAge = function () {
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const fourthObject = new Person2("Eobard", "2/28/1998");
console.log(fourthObject);
console.log(fourthObject.getAge());
