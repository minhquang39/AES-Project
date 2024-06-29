var listCoursesBlock = document.querySelector("#list-courses");

var courseApi = "http://localhost:3000/courses";

function start() {
  getCourses(function (courses) {
    renderCourses(courses);
  });
  handleCreateForm();
}
start();

function getCourses(callback) {
  fetch(courseApi)
    .then(function (Response) {
      return Response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (Response) {
      Response.json();
    })
    .then(callback);
}

function deleteCourse(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, options)
    .then(function (Response) {
      Response.json();
    })
    .then(function () {
      var courseItem = document.querySelector(".course-item-" + id);

      if (courseItem) {
        courseItem.remove();
      }
    });
}

function updateCourse(id, data, callback) {
  var options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi + "/" + id, options)
    .then(function (Response) {
      Response.json();
    })
    .then(callback);
}

function handleUpdateForm(id) {
  var createBtn = document.querySelector("#create");
  createBtn.innerHTML = "Cập nhật";
  createBtn.onclick = function () {
    var name = document.querySelector("input[name=name]").value;
    var description = document.querySelector("input[name=description]").value;

    var updateData = {
      name: name,
      description: description,
    };
    updateCourse(id, updateData, function () {
      getCourses(renderCourses);
    });
    name.value = "";
    description.value = "";
  };
}

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
        <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="deleteCourse(${course.id})")>Xoá</button>
        <button onclick="handleUpdateForm(${course.id})">Sửa</button>
        </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var name = document.querySelector("input[name=name]").value;
    var description = document.querySelector("input[name=description]").value;

    var formData = {
      name: name,
      description: description,
    };
    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}
