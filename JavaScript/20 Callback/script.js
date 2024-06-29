var numbers = [1, 2, 3, 4, 5];

Array.prototype.forEach2 = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};

numbers.forEach2((number) => {
  console.log(number);
});
