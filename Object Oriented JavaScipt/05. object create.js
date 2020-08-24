const personPrototypes = {
  greeting: function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.greeting();

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
});

brad.greeting();
