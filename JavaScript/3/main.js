// var firstName = "Minh";
// var lastName = "Quang";
// var fullName = firstName + "," + lastName;
// console.log(fullName);

// Hậu tố trả về giá trị trước rồi mới tăng
// var a = 3;
// console.log("Increase a " + a++);
// console.log("Current a " + a);

// Tiền tố tăng trước rồi mới trả về giá trị
// var a = 3;
// console.log("Increase a " + a++);
// console.log("Current a " + a);

// var a = 6;

// var b = a++;
// Đầu tiên, gán giá trị biến b bằng a
// Sau đó mới thực hiện tăng giá trị cho biến a
// Kết quả a = 6 còn b = 7
// document.write(b);
// document.write(a);

// var b = 7;
// var output = --b;
// document.write(output);
// Trường hợp này thì ngược lại, vì đây là tiền tố nên đầu tiên nó sẽ tăng giá trị của biến b trước, sau đó mới thực hiện phép gán cho output

// var number = 5;

// // number = number++ + --number;
// number = ++number * 2 - --number*2
// document.write(number);

// Giải thích: sau cái tố đầu tiên number nhận giá trị là 5, trước khi thực hiện phép trừ thì giá trị của nó là 6, sau đó phép trừ là tiền tố nên nó sẽ là 6 -1 =5 . Tổng cộng là 10

//                          TOÁN TỬ NỐI CHUỖI

// var firstName = "Minh";
// var lastName = "Quang";
// var fullName = firstName + lastName;
// document.write(fullName)

// document.write("Minh ' Quang")

//                          TOÁN TỬ SO SÁNH

// Phân biệt chữ hoa chữ thường
// var a = 'ngoc son' == "ngoc Son";
// document.write(a);

// Số 1 bằng với chuỗi 1 @@
// var a = 1 == "1";
// document.write(a);

// Nhưng khi so sánh cả về giá trị lẫn kiểu dữ liệu thì nó lại sai
// var b = 1 === "1";
// document.write(b);

// var a = "true";
// document.write(a);

//             NHỮNG GIÁ TRỊ SAI Ở TRONG CÂU ĐIỀU KIỆN
// - 0
// - "" or ''
// - false
// - NaN Not a Number
// underfined
// null

// Ngược đời số 0 có thể bằng giá trị 0 nhưng '0' trong câu điều kiện là đúng:v và 'false' cũng vậy

// var check = null;
// if (check) {
//   document.write("dung");
// } else {
//   document.write("sai");
// }

// TOÁN TỬ LOGIC
// var a = 1;
// var b = 2;
// var c = -1;

// var d = a > b && a > c;
// var d = (!(a<c))
// var d = a < 0 || c <0

// var a = true;
// var b = false;
// var d = a || b;

// document.write(d)

//     // FUNCTION
// var myFunction = function () {
//   alert("Xin chao chung may");
// };

// myFunction();

// OBJECT
// var myObject = {
//   name: "Minh Quang",
//   age: 28,
//   address: "Nghệ An",
// };
// document.write(myObject);
// console.log(myObject);

// ARRAY
// var myArray = [1, 2, 3];
// document.write(myArray[2]);

// document.write(typeof myArray);
// document.write(typeof myObject);
// document.write(typeof null);
// document.write(typeof 1);
// document.write(typeof NaN);
// document.write(typeof underfined);

// document.write(Boolean(1))
// document.write(Boolean("true"))
// document.write(Boolean(!!"hi"))

// document.write(typeof document.all)

// var result = 'a' && 'b' && NaN && 'd'
// document.write(result);

var result = null || undefined || false;
document.write(result);
