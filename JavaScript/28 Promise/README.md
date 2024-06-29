// Example Promise
var users = [
  {
    id: 1,
    name: "Lê Bá Thiện",
  },
  {
    id: 2,
    name: "Sơn Đặng",
  },
  {
    id: 3,
    name: "Hưng Trần",
  },
  {
    id: 4,
    name: "Kiên Nguyễn",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Chưa ra bài mới à anh :)?",
  },
  {
    id: 2,
    user_id: 2,
    content: "Vừa mới ra xong :D",
  },
  {
    id: 2,
    user_id: 1,
    content: "Cảm ơn anh nhiều (^_^)",
  },
];
var avatars = [
  {
    id: 1,
    user_id: 1,
    link: "google.com.vn",
  },
  {
    id: 2,
    user_id: 4,
    link: "f8.edu.vn",
  },
  {
    id: 3,
    user_id: 3,
    link: "fullstack.edu.vn",
  },
  {
    id: 4,
    user_id: 2,
    link: "fullstack.dev",
  },
];

// Creative getcommetns function
function getComments(comments) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
      reject("error function getComments");
    }, 1000);
  });
}
// Creative getUsersById function
function getUsersById(userIds, users) {
  return new Promise(function (resolve, reject) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
      reject("error function getUserId");
    }, 1000);
  });
}
// Creative getAvatarsByUserId function
function getAvatarsById(userIds, avatars) {
  var result = avatars.filter(function (avatar) {
    return userIds.includes(avatar.user_id);
  });
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(result);
      reject("error function getAvatarsById");
    }, 1000);
  });
}
/*
 * Nếu getComments thành công
 * Thực hiện getUserById theo comment.user_id
 * Nếu thành công thực hiện getAvatarById
 * Trả về kết quả
 */
getComments(comments)
  .then(function () {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return userIds;
  })
  .then(function (userIds) {
    return getUsersById(userIds, users)
      .then(function (users) {
        return users;
      })
      .then(function (users) {
        return getAvatarsById(userIds, avatars)
          .then(function (avatars) {
            return {
              users: users, // Chỗ này vẫn bị
              avatars: avatars, // CallBack hell
              comments: comments, // Hay gọi khác là Pyramid of doom
            };
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment_block");
    var html = "";
    data.comments.forEach(function (comment) {
      var users = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      var avatars = data.avatars.find(function (avatar) {
        return avatar.user_id === comment.user_id;
      });
      html += `<li>${avatars.link} - ${users.name} : ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });
