var postApi = "https://jsonplaceholder.typicode.com/comments";

//stream
fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
  });
