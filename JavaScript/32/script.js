var courseApi = "http://localhost:3000/courses";

// Hàm start khởi động ứng dụng
function start() {
  getCourses(renderCourses);
  handleCreateForm();
}

// Khởi động ứng dụng
start();

// Hàm lấy khoá học từ API
function getCourses(callback) {
  fetch(courseApi)
    .then(function (Response) {
      return Response.json();
    })
    .then(callback);
}

// Hàm tạo khoá học
function createCourse(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (Response) {
      return Response.json();
    })
    .then(callback);
}

// Hàm xoá khoá học
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
    method: "PUT",
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

// Sau khi lấy khoá học từ API, thực hiện hiển thị khoá học ra HTML
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");

  var htmls = courses.map(function (course) {
    return `
            <li class="course-item-${course.id}">
            <h4 class="name-id-${course.id}">${course.name}</h4>
            <p class="description-id-${course.id}">${course.description}</p>
            <button onclick="deleteCourse(${course.id})">Delete</button>
            <button onclick="handleUpdateForm(${course.id})">Update</button>
            </li>
        `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

//Xử lý form tạo khoá học
function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    var name = document.querySelector("input[name=name]").value;
    var description = document.querySelector("input[name=description]").value;

    var formData = {
      name: name,
      description: description,
    };

    // Sau khi có thông tin khoá học từ form thì thực hiện tạo khoá học mới
    if (name === "" || description === "") {
      alert("Error");
    } else {
      createCourse(formData, function () {
        getCourses(renderCourses);
      });
    }
  };
}

// Xử lý form cập nhật dữ liệu
function handleUpdateForm(id) {
  var createBtn = document.querySelector("#create");
  createBtn.innerHTML = "Save";

  var oldName = document.querySelector(".name-id-" + id).innerHTML;
  var oldDescription = document.querySelector(
    ".description-id-" + id
  ).innerHTML;

  var name = document.querySelector("input[name=name]");
  var description = document.querySelector("input[name=description]");

  name.value = oldName;
  description.value = oldDescription;

  createBtn.onclick = function () {
    var name = document.querySelector("input[name=name]").value;
    var description = document.querySelector("input[name=description]").value;
    var formData = {
      name: name,
      description: description,
    };
    updateCourse(id, formData, function () {
      getCourses(renderCourses);
      document.querySelector("input[name=name]").value = "";
      document.querySelector("input[name=description]").value = "";
      createBtn.innerHTML = "Create";
    });
  };
}
