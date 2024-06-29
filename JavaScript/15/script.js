function show() {
  let month = parseInt(document.getElementById("month_input").value);
  var ngay;
  var currentYear = new Date();
  console.log(currentYear);
  var year = currentYear.getFullYear();
  console.log(year);
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      ngay = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      ngay = 30;
      break;
    case 2:
      if (year % 4 == 0) {
        ngay = 29;
      } else {
        ngay = 28;
      }
      break;
    default:
      //   console.log("Dữ liệu không hợp lệ");
      ngay = "false";
      break;
  }
  document.getElementById("result").innerHTML = "Tháng " + month + "có " + ngay;
}
