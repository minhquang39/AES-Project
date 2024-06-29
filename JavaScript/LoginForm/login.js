const email_signin = document.querySelector("#email_signin").value;
const password_signin = document.querySelector("#password_signin").value;
const signin_form = document.querySelector("#signin");

const info = [
  {
    user: 1,
    pass: 12345,
  },
  {
    user: 2,
    pass: 23456,
  },
  {
    user: 3,
    pass: 34567,
  },
];

function login() {
  const email_signin = document.querySelector("#email_signin").value;
  const password_signin = document.querySelector("#password_signin").value;
  for (var i = 0; i < info.length; i++) {
    if (email_signin === info[i].user && password_signin === info[i].pass) {
      alert("Thong tin chinh xac");
      return;
    } else {
      alert("Thong tin khong chinh xac");
    }
  }
}

signin_form.onsubmit = function (e) {
  e.preventDefault();
  const email_signin = document.querySelector("#email_signin").value;
  const password_signin = document.querySelector("#password_signin").value;

  login();
};
