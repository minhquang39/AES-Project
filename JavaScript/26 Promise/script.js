var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 1000);
});

var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 2000);
});

Promise.all([promise1, promise2]).then(function (result) {
  var arr1 = result[0];
  var arr2 = result[1];
  console.log(arr1.concat(arr2));
});
