const person = {
  firstName: "Jason",
  lastName: "Webb",
  age: 30,
  job: ["web developer", "designer"],
  location: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: () => {
    return 2020 - person.age;
  },
};

console.log(person);
console.log(person.age);
console.log(person["job"]);
console.log(person.getBirthYear());
