// function showDialog() {
//   alert("hello world");
// }

// showDialog();

//           Hàm có tham số

// function writeLog(Log1, Log2) {
//   console.log(typeof +Log1);
// }

// writeLog("coconkac");

// function writeLog() {
//   console.log(arguments);
// }

// writeLog("Log1", 2);

// var isConfirm = confirm("Message?");
// console.log(isConfirm);

// function cong(a, b) {
//   //   return a + b;
// }

// var result = cong(22, 8);
// console.log(result);

// function myFunction(a, b) {
//   return a * b;
// }

// var x = function (a, b) {
//   return a * b;
// };

// // document.getElementById("demo").innerHTML = x;
// function myFunction() {
//   return arguments.length;
// }

// document.getElementById("demo").innerHTML = myFunction.toString();

const x = (a, b) => a * b;
document.getElementById("demo").innerHTML = x(4, 5);
