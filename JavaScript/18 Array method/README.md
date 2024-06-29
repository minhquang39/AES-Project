# forEach - Duyệt qua các phần tử của mảng

const arrays = [1, 4, 23, 5, 7, 8, 2, 2];

arrays.forEach(function (index, array) {
console.log(`${index} ${array}`);
});

# every - Kiểm tra tất cả điều kiện và trả về kiểu boolean

var check = arrays.every((array)=>{return array > 10});

# some - Kiểm tra một vài phần tử xem có thoả mãn điều kiện hay không


# reduce - mất não
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
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  i++;
  var total = accumulator + currentValue.coin;
  console.table({
    "Lượt chạy: ": i,
    "Biến tích trữ :": accumulator,
    "Giá khoá học: ": currentValue.coin,
    "Tích trữ được: ": total,
  });
  return total;
}

var totalCoin = courses.reduce((total, course) => {
  return total + course.coin;
}, 0);
console.log(totalCoin);
