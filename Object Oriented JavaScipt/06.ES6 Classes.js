class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  static add(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "2/28/1998");

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());
mary.getMarried("Thompson");
console.log(mary.greeting());

// mary.add(1,2)
console.log(Person.add(1, 2));
