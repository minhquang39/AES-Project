// Danh sách các nút trong máy tính
var buttons = document.querySelectorAll(".item");

// Màn hình hiển thị
var display = document.querySelector(".container_top-display");

// Màn hình đầu vào
var input = document.querySelector(".container_top-input");
// Hàm tính toán nhận đối số là giá trị của button

// Khởi tạo biến data lưu giá trị chuỗi nhập vào từ các phím
var data = "";
// Hàm caculate nhận các phím khi nhấn vào
function caculate(e) {
  // Nếu giá trị text là AC thì hiển thị chuỗi rỗng lên màn hình, đồng thòi giá trị data bằng rỗng
  if (e.target.innerText === "AC") {
    display.innerHTML = "";
    input.innerHTML = "0";
    data = "";
    // addSymbol(false);
  }
  // Nếu là dấu bằng thì thực hiện hiển thị giá trị lên màn hình display
  else if (e.target.innerHTML === "=") {
    // display.innerHTML = addCommas(eval(data));
    if (Number.isInteger(Number(eval(data)))) {
      display.innerHTML = addCommas(eval(data));
    } else {
      display.innerHTML = addCommas2(eval(data));
    }
    addSymbol(false);
  }
  // Nếu giá trị text là phím DEL thì thực hiện xoá bớt kí tự, đồng thời hiển thị lên màn hình input
  else if (e.target.innerHTML === "DEL") {
    data = data.substring(0, data.length - 1);
    input.innerHTML = data;
    // addSymbol(false);
  }
  // Nếu là phím khác các phím trên thì thực hiện thêm giá trị chuỗi vào biến data, đồng thời hiển thị chúng lên màn hình input
  else {
    data += e.target.innerText;
    input.innerHTML = data;
    addSymbol(checkSymbol(data));
  }
}
// Thêm số phẩy sau số nguyên
function addCommas(string) {
  var result = "";
  var reverse = string.toString().split("").reverse().join("");
  for (let i = 0; i < reverse.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      result += ",";
    }
    result += reverse[i];
  }
  return result.split("").reverse().join("");
}
// Thêm số phẩy sau số thập phân

function addCommas2(string) {
  // Tách string nhận được thành 2 phần nguyên và thập phân
  var number = string < 0 ? Math.abs(string) : string;
  var result = number.toString().split(".");
  result[0] = addCommas(result[0]);
  if (string >= 0) {
    return result.join(".");
  } else {
    return "-" + result.join(".");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", caculate);
});

var symbols = document.getElementsByClassName("symbol");
var symbolValue = [];
for (var i = 0; i < symbols.length; i++) {
  symbolValue.push(symbols[i].innerHTML);
}

function checkSymbol(dataString) {
  return symbolValue.find((symbol) => {
    return dataString.includes(symbol);
  });
}
var flag = true;
function addSymbol(check) {
  if (check) {
    [...symbols].forEach((symbol) => {
      symbol.disabled = true;
    });
  } else {
    [...symbols].forEach((symbol) => {
      symbol.disabled = false;
    });
  }
}
