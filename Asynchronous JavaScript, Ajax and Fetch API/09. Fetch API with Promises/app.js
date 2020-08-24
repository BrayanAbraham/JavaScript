const http = new EasyHTTP();

// GET ALL POSTS
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//ADD POST
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@gmail.com",
};

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//PUT
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//DELETE
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
