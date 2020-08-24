const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post Two", body: "this is post two" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post 3", body: "This is Post three" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
