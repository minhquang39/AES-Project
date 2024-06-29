// Variable in javascript not begin with number / digits
// must begin with letters, underscore, dollar sign

// Tạo biến fullName với giá trị được gán là Đinh Minh Quang
var fullName = "Dinh Minh Quang";

// Tạo biến age với giá trị là 26
var age = 26;

// Hiển thị thanh thông báo 2 giá trị của 2 biến fullName và age
// alert(fullName);
// alert(age);

// Hiển thị giá trị của biến fullName và age dưới tab console
// console.log(fullName);
// console.log(age);

// Hàm hiển thị chuỗi sau một khoảng thời gian, chuỗi được hiện liên tục
// setInterval(function () {
//   //   console.log("co cai nit " + Math.random);
// }, 1000);

// declare x and y, give them the value 5 and 10
var x = 5;
var y = 10;
// x stores the value 5, y store the value 10

// declaring some variables and assign their value, display them to screen
let a = 3,
  b = 4,
  c = 5;
document.write(a + "<br>" + b + "<br>" + c);

// document.write(x);
// document.write(y);
// document.write(x + y);
// document.write("Hello World");

// Java Script can change HTML content
// Tìm kiếm id demo trong file HTML, thay đổi giá trị của thẻ có id là demo
// document.getElementById("demo").innerHTML = x + y;
document.getElementById("demo").innerHTML = "Hello" + " " + "World";

// Java Script can change attribute value

// Java Script can hide/show HTML elements
// document.getElementById("demo").style.display = "none";
// document.getElementById("demo").style.display = "inline";

// Khi đã khai báo một biến với giá trị đi kèm, dù có tái định nghĩa lại thì giá trị của biến cũng không thay đổi
// Tái định nghĩa lại biến chỉ áp dụng cho var, không dùng được cho let và const
var car = "Volvo";
var car;
document.getElementById("demo").innerHTML = car;

// Biến được khởi tạo bằng let phải được khai báo giá trị trước khi sử dụng
// Biến được khởi tạo từ let phải có phạm vi biến, ở đây là {}
// Biến được khai báo trong khối không thể sử dụng ở bên ngoài
{
  x = 4;
}
// x can't use here

// Khai báo lại một biến trong khối cũng làm thay đổi giá trị của biến ở bên ngoài (var)
var x = 10;
// The value of x is 10

{
  var x = 5;
}
// Now the value of x is 5

// Dùng let có thể giải quyết điều này
let x = 10;

{
  let x = 5;
  // here x = 5
}

// here x = 10
