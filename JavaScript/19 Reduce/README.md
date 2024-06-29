# reduce

- Nhận vào 2 tham số đầu vào đó là callback() và initial
- Callback có thể bao gồm:
  - accmulator: Giá trị trả về của hàm từ lần gọi trước
  - currentValue: giá trị mảng lần lặp hiện tại
  - index (maybe)
  - array(maybe)
- Initial value: giá trị đầu vào, có thể truyền vào đó là giá trị, kiểu dữ liệu

- 2 trường hợp là truyền initial và không truyền initial :
  - Nếu truyền initial thì giá trị ban đầu của accmulator là initial
  - Nếu không truyền initial thì giá trị của accmulator sẽ là phần tử đầu tiên của mảng, còn currentValue sẽ là 2 của mảng

# reduce hack nao

var courses = [
{
id: 1,
name: "Javascript",
coin: 250,
},
{
id: 2,
name: "HTML, CSS",
coin: 0,
},
{
id: 3,
name: "Ruby",
coin: 0,
},
{
id: 4,
name: "PHP",
coin: 400,
},
{
id: 5,
name: "ReactJS",
coin: 500,
},
];
var i = 0;
var totalCoin = courses.reduce(function (total, course) {
i++;
console.log(i, total, course);
return total + course.coin;
});

console.log(totalCoin);

////////////////////////////////////////////////////////

Array.prototype.reduce2 = function (callback, result) {
let i = 0;
if (arguments.length < 2) {
i = 1;
result = this[0];
}
for (; i < this.length; i++) {
result = callback(result, this[i]);
}
return result;
};

const numbers = [1, 2, 3, 4, 5];

var total = numbers.reduce2((total, number) => {
return total + number;
});

console.log(total);

////////////////////////////////////////////////////////////
const duLieu = [
{ name: "Apple", country: "Mỹ" },
{ name: "Samsung", country: "Hàn Quốc" },
{ name: "Google", country: "Mỹ" },
];
console.log(duLieu);
// output
// const duLieuDaThayDoi = {
// Apple: { country: "Mỹ" },
// Samsung: { country: "Hàn Quốc" },
// Google: { country: "Mỹ" },
// };

var data = duLieu.reduce((Obj, key) => {
Obj[key.name] = { country: key.country };
return Obj;
}, {});

console.log(data);
