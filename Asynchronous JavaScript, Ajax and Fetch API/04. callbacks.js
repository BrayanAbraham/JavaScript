const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post Two", body: "this is post two" },
];

// Synchronous
// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

//Asynchronous
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
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

createPost({ title: "Post 3", body: "This is Post three" }, getPosts);
