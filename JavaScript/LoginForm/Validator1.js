const signin_but = document.querySelector(".sign_in"); // Sign in: Đăng nhập
const signup_but = document.querySelector(".register"); // Register = Sign up: Đăng kí

const signin = document.querySelector("#signin");
const signup = document.querySelector("#signup");

signin_but.onclick = function (e) {
  e.preventDefault();
  signup.parentElement.classList.add("hidden");
  signin.parentElement.classList.remove("hidden");
};

signup_but.onclick = function (e) {
  e.preventDefault();
  signup.parentElement.classList.remove("hidden");
  signin.parentElement.classList.add("hidden");
};

function Validator(options) {
  const rulesSelector = {};

  function validate(inputElement, rule) {
    const errorElement =
      inputElement.parentElement.querySelector(".form-message");

    // mảng rules là mảng chứa các hàm của selector
    var rules = rulesSelector[rule.selector];

    var errorMessage;

    // Duyệt qua các rule có trong mảng
    // Nếu có message lỗi, dừng lại thực hiện hiển thị lỗi và check lỗi, sau đó duyệt tiếp
    for (var i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }

    // Nếu là undefined, chuyển nó sang boolean và giá trị nhận dc là true vì undefined là falsy
    // Tức là khi không có lỗi trả về giá trị true, có lỗi sẽ trả về giá trị false
    // Nếu ! undefined, kết quả nhận dc là false
    return !errorMessage;
  }
  // Thực hiện kiểm tra xem form đó có tồn tại hay không
  const formElement = document.querySelector(options.form);

  // Sau khi có form, thực hiện duyệt qua các rules, vì rules là một mảng nên ta dùng  forEach
  if (formElement) {
    // Xử lý hành vi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      // Thực hiện lặp qua từng rule và validate
      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);

        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});
          options.onSubmit(formValues);
        }
      }
    };
    options.rules.forEach((rule) => {
      // Thêm các rule
      if (Array.isArray(rulesSelector[rule.selector])) {
        rulesSelector[rule.selector].push(rule.test);
      } else {
        rulesSelector[rule.selector] = [rule.test];
      }

      // Từ các rule, get được các ô input

      // get input: rule.selector
      // get value: rule.test()
      var inputElement = formElement.querySelector(rule.selector);
      // Kiểm tra xem có ô input không, nếu có tiếp tục kiểm tra giá trị của nó

      if (inputElement) {
        // Xử lý sự kiện khi blur khỏi ô input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          validate(inputElement, rule);
        };
      }
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Fill me";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Must be email";
    },
  };
};

Validator.isPassword = function (selector, number) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= number
        ? undefined
        : `must be more ${number} characters`;
    },
  };
};

Validator.isPasswordConfirmation = function (selector, getPassword) {
  return {
    selector: selector,
    test: function (value) {
      return value === getPassword() ? undefined : "Must be match";
    },
  };
};

// Thực thi hàm Validator với option truyền vào là form cần thực hiện kiểm tra giá trị và các mức cần kiểm tra
Validator({
  form: "#signup",
  rules: [
    Validator.isRequired("#name", "Must be name"),
    Validator.isRequired("#email"),
    Validator.isEmail("#email"),
    Validator.isRequired("#password"),
    Validator.isPassword("#password", 6),
    Validator.isRequired("#password_confirmation"),
    Validator.isPasswordConfirmation("#password_confirmation", function () {
      return document.querySelector("#password").value;
    }),
  ],
  onSubmit: function (data) {
    console.log(data);
  },
});

// Validator({
//   form: "#signin",
//   rules: [
//     Validator.isRequired("#email_signin"),
//     Validator.isPassword("#password_signin", 6),
//   ],
// });
