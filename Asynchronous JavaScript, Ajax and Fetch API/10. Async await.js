async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });
  const res = await promise;
  return res;
}

myFunc().then((res) => console.log(res));

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return data;
}

getUsers()
  .then((users) => console.log(users))
  .catch((err) => console.log(err));
