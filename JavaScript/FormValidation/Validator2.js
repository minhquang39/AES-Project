function Validator(formSelector) {
  function getParent(element, selector) {
    // while (element.parentElement) {
    //   if (element.parentElement.matches(selector)) {
    //     return element.parentElement;
    //   }
    //   element = element.parentElement;
    // }
    if (element.closest(selector)) {
      return element.closest(selector);
    }
    return null;
  }
  // Biến lưu các rules của input
  const formRules = {};
  const validatorRules = {
    required: function (value) {
      return value ? undefined : "Vui lòng nhập trường này";
    },
    email: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Trường này phải là email";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Mật khẩu phải lớn hơn ${min} kí tự`;
      };
    },
  };

  const formElement = document.querySelector(formSelector);

  if (formElement) {
    var inputs = document.querySelectorAll("[name][rules]");

    for (var input of inputs) {
      var rules = input.getAttribute("rules").split("|");
      for (var rule of rules) {
        var isRuleHasValue = rule.includes(":");

        if (isRuleHasValue) {
          var ruleInfo = rule.split(":");
          rule = ruleInfo[0];
        }

        var ruleFunc = validatorRules[rule];
        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }
        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }
      }

      // Lắng nghe sự kiện trên thẻ input
      input.onblur = handleValidate;
      input.oninput = handleValue;
    }

    function handleValidate(event) {
      var rules = formRules[event.target.name];
      var errorMessage;
      for (var rule of rules) {
        errorMessage = rule(event.target.value);
        console.log(errorMessage);
        if (errorMessage) {
          break;
        }
      }

      // Nếu có lỗi thì hiển thị ra website
      if (errorMessage) {
        var formGroup = getParent(event.target, ".form-group");

        if (formGroup) {
          var formMessage = formGroup.querySelector(".form-message");

          if (formMessage) {
            formMessage.innerHTML = errorMessage;
            formGroup.classList.add("invalid");
          }
        }
      }
      return !errorMessage;
    }

    function handleValue(event) {
      var formGroup = getParent(event.target, ".form-group");

      if (formGroup.classList.contains("invalid")) {
        formGroup.classList.remove("invalid");

        var formMessage = formGroup.querySelector(".form-message");
        if (formMessage) {
          formMessage.innerHTML = "";
        }
      }
    }
  }

  formElement.onsubmit = function (e) {
    e.preventDefault();
    var inputs = document.querySelectorAll("[name][rules]");
    // var isValid = true;
    for (var input of inputs) {
      if (!handleValidate({ target: input })) {
        // isValid = false;
      }
    }

    // if (isValid) {
    //   formElement.submit();
    // }
  };
}

Validator("#form1");
