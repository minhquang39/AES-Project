//                 -----------------Function declarations (parameters)-------------------------------

// function myFunction() {
//   document.write("Hello World");
// }
// myFunction();

// function myFunction(a, b) {
//   document.write(a * b);
// }
// myFunction(4, 3);

//                 -----------------Function expression (parameters)-------------------------------
// let x = function () {
//   document.write("Hello World");
// };

// document.write(x);
// console.log(x);

// const x = function (a, b) {
//   return a * b;
// };
// let z = x(4, 6);
// document.getElementById("demo").innerHTML = z;

// --------------------------Function() constructor--------------------------------

// const myFunction = new Function("a", "b", "return a*b");
// document.getElementById("demo").innerHTML = myFunction(4, 5);

//              ----------------------Function Hoisting--------------------------------
// Only use for function declaration not expression

// myFunction(5);

// function myFunction(y) {
//   return Math.pow(y, 2);
// }

// document.write((x = myFunction(5)));

// y(5);

// const y = function (z) {
//   return z * z;
// };

// document.write(y);

//  -----------------Self-Invoking function -----------------------------
// (function () {
//   document.write("Hello World");
// })();

// ----------------------------- ARROW FUNCTION----------------------------
// const x = (x, y) => {
//   return x * y;
// };

// document.write(x(3, 4));

// function myFunction(a, b = 10) {
//   return a * b;
// }

// console.log(myFunction(3));

// const x = function (...args) {
//   let sum = 0;
//   for (arg of args) {
//     sum += arg;
//   }
//   document.write(sum);
// };

// document.getElementById("demo").innerHTML = x(
//   3,
//   4,
//   1,
//   3,
//   4,
//   5,
//   5,
//   6,
//   7,
//   8,
//   9,
//   9,
//   0,
//   199999999999999
// );

// function findMax() {
//   let max = -Infinity; //  Đậu xanh Ìninity là vô cùng, muốn chỉ âm vô cùng thì phải thêm dấu âm
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// Tập hợp các tham số đầu vào tạo thành một mảng
// function findSum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// document.write((max = findSum(1, 2, 4, 5, 2, 4, 5, 6)));

// let x = myFunction();
// function myFunction() {
//   return this;
// }
// console.log(x);

// const myObject = {
//   firstName: "John",
//   lastName: "Doe",
//   //   fullName: function () {
//   //     return this.firstName + " " + this.lastName;
//   //   },
//   fullName: function () {
//     return this;
//   },
// };

// document.write(myObject.fullName());

// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName = arg2;
// }

// const myObj = new myFunction("John", "Doe");
// document.write(myObj.firstName)

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// document.write(person.fullName.call(person1))

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// document.write(person.fullName.call(person1, "Oslo", "Norway"));

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// document.write(person.fullName.apply(person1));
// console.log(person.fullName.apply(person1));

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// document.write(person.fullName.apply(person1,["Oslo","Norway"]))

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const logFullName = function () {
//   console.log("Full name:", this.fullName());
// };

// person1 = {
//   firstName: "Minh",
//   lastName: "Quang",
// };

// const boundLogFullName = logFullName.bind(person1);
// document.write(boundLogFullName)

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person.fullName.bind(member);
// document.write(fullName())

// const person = {
//   firstName: "JoHn",
//   lastName: "Doe",
//   display: function () {
//     let x = document.getElementById("demo");
//     document.write(x);
//     x.innerHTML = this.firstName + " " + this.lastName;
//   },
// };

// person.display();

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   display: function () {
//     let x = document.getElementById("demo");
//     x.innerHTML = this.firstName + " " + this.lastName;
//   },
// };

// person1 = {
//   firstName: "Nam",
//   lastName: "Phong",
// };

// let display = person.display.bind(person1);
// setTimeout(display, 3000);

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// document.write()

// let myFunction = (a, b) => a * b;

// document.write();

// var hello = () => {
//   return "Hello";
// };
// document.write(hello())

// var hello = () => "Hello World";

// document.write(hello());

// var hello = (val) => "Hello " + val;

// document.write(hello("cocainit"));

// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }

// const mycar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// const x = mycar.make;

// myFunc(mycar);

// const y = mycar.make;

// document.write(y)

// function myFunc(Arr) {
//   Arr[0] = 30;
// }

// const arr = [45];
// console.log(arr[0]);
// document.write(arr[0]);

// myFunc(arr);
// document.write(arr[0]);

// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// document.write(factorial(3))

// function map(f, a) {
//     const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//         result[i] = f(a[i]);
//     }
//     return result;
// }

// BT1 Viết một hàm tính tổng của hai số và trả về kết quả.
// function sumOf2Numbers(a, b) {
//   return a + b;
// }

// document.write("Tong cua hai so la " + sumOf2Numbers(3, 4));

// var x = function (a, b) {
//     return a + b;
// }

// document.write(x(3, 4));

// Hàm tìm số lớn nhất trong mảng và trả về kết quả
const myArray = [1, 2, 3, 1, 2, 3, 5, 6, 9];

function findMaxOfArray(myArray) {
  let max = -Infinity;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > max) {
      max = myArray[i];
    }
  }
  return max;
}

document.write(max);
