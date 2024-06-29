var courseApi = "http://localhost:3000/courses";

function getCourse(callback) {
  fetch(courseApi)
    .then(function (Response) {
      return Response.json();
    })
    .then((callback) => {});
}

getCourse(callback);
