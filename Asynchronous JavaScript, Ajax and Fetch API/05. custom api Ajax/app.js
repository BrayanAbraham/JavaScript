const http = new easyHTTP();

// GET ALL POSTS
http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// GET ONE POST
http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//ADD POST
const data = {
  title: "Custom Post",
  body: "this is a custom post",
};

http.post("https://jsonplaceholder.typicode.com/posts", data, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//PUT
http.put("https://jsonplaceholder.typicode.com/posts/5", data, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//DELETE
http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post, "POST DELETED");
  }
});
