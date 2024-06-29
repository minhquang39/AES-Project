const courses = [
  {
    id: 0,
    name: "java",
    coin: 400,
  },
  {
    id: 1,
    name: "c",
    coin: 200,
  },
  {
    id: 2,
    name: "c++",
    coin: 0,
  },
  {
    id: 3,
    name: "js",
    coin: 0,
  },
  {
    id: 4,
    name: "php",
    coin: 100,
  },
];

// courses.forEach(function (course, index) {
//   console.log(index, course);
// });

// var check = courses.every(function (course) {
//   return course.coin === 0;
// });

// console.log(check);

var check = courses.find(function (course) {
  return course.coin === 0;
});
console.log(check);
