# Callback

- Là hàm
- Được truyền qua đối số
- Được gọi lại trong hàm nhận đối số

# myReduce

var numbers = [1, 2, 3, 4, 5];
let result = 0;
let i = 0;
Array.prototype.reduce2 = function (callback, initial) {
result = initial;
if (arguments.length < 2) {
result = this[0];
i = 1;
}

for (; i < this.length; i++) {
result = callback(result, this[i], i, this);
}
return result;
};

# myMap
var languages = ["JavaScript", "C", "HTML"];
// Định nghĩa Array có phương thức map2, có đối số là một hàm callback
Array.prototype.map2 = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    var result = callback(i, this[i]);
    arr.push(result);
  }
  return arr;
};

const htmls = languages.map2((index, lang) => {
  return `<h2>${lang}</h2>`;
});

console.log(htmls.join(""));
