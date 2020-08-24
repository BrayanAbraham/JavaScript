function Person(name, dob) {
  this.name = name;
  this.dob = new Date(dob);
  //   this.getAge = () => {
  //     const diff = Date.now() - this.dob.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  //   };
}

Person.prototype.getAge = function () {
  const diff = Date.now() - this.dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const obj = new Person("John", "2/28/1998");
console.log(obj);
console.log(obj.getAge());
console.log(obj.hasOwnProperty("name")); // from object prototype
