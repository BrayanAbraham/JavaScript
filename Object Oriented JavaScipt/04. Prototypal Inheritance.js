function Person(name, dob) {
  this.name = name;
  this.dob = new Date(dob);
}

Person.prototype.greeting = function () {
  console.log(`Hello ${this.name}`);
};

const firstObject = new Person("Barry Allen", "2/28/1998");

console.log(firstObject);
firstObject.greeting();

function Customer(name, dob, membership) {
  Person.call(this, name, dob);
  this.membership = membership;
}

const secondObject = new Customer("Wally West", "2/28/1998", "Gold");

console.log(secondObject);

// secondObject.greeting();  error

Customer.prototype = Object.create(Person.prototype);

//to make prototype to return Customer
Customer.prototype.constructor = Customer;

const thirdObject = new Customer("Jay Garrick", "2/28/1998", "Gold");
console.log(thirdObject);
thirdObject.greeting();

const fourthObject = new Customer("Bart Allen", "2/28/1998", "Gold");
console.log(fourthObject);

//overriding
Customer.prototype.greeting = function () {
  console.log(`Hello ${this.name}! welcome`);
};
