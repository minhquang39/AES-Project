// var myString = "Co\\ cai nit";

// Kiểm tra độ dài chuỗi
// console.log(myString.length);
// console.log(myString);

// Slice
// let text = "Apple, Banana, Kiwi";
// console.log(text.length);
// console.log(text.slice(-12, -6));
// console.log(text);

// var myString = "Hoc JS tai F8 js js";

// console.log(myString.length);
// console.log(myString.replace(/js/i, "JavaScript"));
// console.log(myString);

// Concat()
// Trim

// let x = "Hello World World World";
// console.log(x.length);
// console.log(x.indexOf(/World/));
// // console.log(x.lastIndexOf("World"));
// // console.log(x.indexOf("World", 15));
// // console.log(x.lastIndexOf("World", 10));
// let x = "Hello world World";

// console.log(x.endsWith("World", 5));

const str1 = prompt("Nhập chuỗi thứ nhất: ");
const str2 = prompt("Nhập chuỗi thứ hai: ");
if (str1.length > str2.length) {
  console.log(`Chuỗi lớn hơn là "${str1}"`);
} else if (str2.length > str1.length) {
  console.log(`Chuỗi lớn hơn là "${str2}"`);
} else {
  console.log("Hai chuỗi bằng nhau về độ dài");
}
