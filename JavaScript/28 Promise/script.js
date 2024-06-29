var users = [
  {
    id: 1,
    name: "Kien Dang",
  },
  {
    id: 2,
    name: "Minh Quang",
  },
  {
    id: 3,
    name: "Son Dang",
  },
  {
    id: 4,
    name: "Huu Tu",
  },
];

var comments = [
  {
    cmt_id: 1,
    user_id: 1,
    content: "Anh chua ra video",
  },
  {
    cmt_id: 2,
    user_id: 2,
    content: "Vua ra xong e oi",
  },
  {
    cmt_id: 3,
    user_id: 1,
    content: "Cam on anh nhe",
  },
  {
    cmt_id: 4,
    user_id: 3,
    content: "Khong co chi",
  },
];

function getUsersByIds(listUserIDs) {
  return new Promise((resolve) => {
    var result = users.filter((user) => {
      return listUserIDs.includes(user.id);
    });
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
}

getComments()
  .then((comments) => {
    var listUserIDs = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(listUserIDs).then(function (usersId) {
      return {
        users: usersId,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    // var commentBlock = document.getElementById("comment_block");
    // var html = "";
    // data.comments.forEach((comment) => {
    //   var user = data.users.find(function (user) {
    //     return user.id === comment.user_id;
    //   });
    //   html += `<li>${user.name}:${comment.content}</li>`;
    // });
    // commentBlock.innerHTML = html;
  });
