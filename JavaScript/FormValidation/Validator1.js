function Validator(options) {
  // Đối tượng lưu rules
  var selectorRules = {};

  function getParent(element, selector) {
    // while (element.parentElement) {
    //   if (element.parentElement.matches(selector)) {
    //     // Chỉnh sửa từ mathches thành matches
    //     return element.parentElement;
    //   }
    //   element = element.parentElement;
    // }

    return element.closest(selector);
  }

  function validate(inputElement, rule) {
    var errorElement = getParent(inputElement, ".form-group").querySelector(
      ".form-message"
    );
    // var errorElement =
    //   getParent(inputElement, ".form-group").querySelector(".form-message");
    var errorMessage;
    // value: inputElement.value
    // test function : rule.test()

    var rules = selectorRules[rule.selector];
    for (var i = 0; i < rules.length; i++) {
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      // errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, ".form-group").classList.add("invalid");
    } else {
      errorElement.innerText = "";
      getParent(inputElement, ".form-group").classList.remove("invalid");
    }

    // Trả về true nếu không có lỗi (!undefined=true)
    // Trả về false nếu có lỗi (!true = false)
    return !errorMessage;
  }

  // Đầu tiên thực hiện kiểm tra xem có form đó ko
  const formElement = document.querySelector("#form1");
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      // Trạng thái form submit, nếu không có lỗi mới hiển thị thông tin ra console
      var isFormValid = true;

      // Lặp qua từng rule và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);

        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        var enableInput = formElement.querySelectorAll("[name]:not([disable])");
        var formValues = Array.from(enableInput).reduce(function (
          values,
          input
        ) {
          // return (values[input.name] = input.value) && values;
          switch (input.type) {
            case "radio":
              // if (input.matches(":checked")) {
              //   values[input.name] = input.value;
              // }
              values[input.name] = formElement.querySelector(
                'input[name="' + input.name + '"]:checked'
              ).value;
              break;
            case "checkbox":
              // if (!input.matches(":checked")) return values;
              if (!Array.isArray(values[input.name])) {
                values[input.name] = [];
              }
              if (input.matches(":checked")) {
                values[input.name].push(input.value);
              }
              break;
            case "file":
              values[input.name] = input.files;
              break;
            default:
              values[input.name] = input.value;
          }
          return values;
        },
        {});
        options.onSubmit(formValues);
      } else {
        // Call API
        // formElement.submit();
      }
    };

    // Lặp qua mỗi rule và xử lý sự kiện khi blur, input
    options.rules.forEach((rule) => {
      //Lưu lại các rules cho mỗi input

      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      // selectorRules[rule.selector] = rule.test;

      // Các điều kiện trong mảng rules thực chất là gọi hàm có tham số đầu vào là các id
      // Thực hiện việc tìm kiếm các ô input các điều kiện cần kiểm tra

      // var inputElement = formElement.querySelector(rule.selector);

      var inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach(function (inputElement) {
        if (inputElement) {
          //Thực hiện kiểm tra dữ liệu khi di chuyển ra khỏi ô input
          inputElement.onblur = function () {
            validate(inputElement, rule);
          };

          // Thực hiện kiểm tra dữ liệu khi thực hiện nhập dữ liệu
          inputElement.oninput = function () {
            validate(inputElement, rule);
          };

          inputElement.onchange = function () {
            validate(inputElement, rule);
          };
        }
      });
    });
  }
}

//Định nghĩa rules
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi họp lễ => Không trả ra gì cả (undefined)

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : "Fill me";
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

Validator.isPassword = function (selector, length) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= length
        ? undefined
        : `must be more than ${length} characters`;
    },
  };
};

Validator.isPasswordConfirmation = function (selector, getPassword) {
  return {
    selector: selector,
    test: function (value) {
      return value == getPassword() ? undefined : "Passwords must match";
    },
  };
};

Validator({
  form: "#form1",
  rules: [
    // Validator.isRequired("#fullname"),
    // Validator.isRequired("#email"),
    // Validator.isEmail("#email"),
    // Validator.isRequired("#password"),
    // Validator.isPassword("#password", 6),
    // Validator.isRequired("#password_confirmation"),
    // Validator.isRequired("input[name='gender']"),
    // Validator.isPasswordConfirmation("#password_confirmation", function () {
    //   return document.querySelector("#password").value;
    // }),
    // Validator.isRequired("#province"),
    Validator.isRequired("#avatar"),
  ],
  onSubmit: function (data) {
    console.log(data);
  },
});
