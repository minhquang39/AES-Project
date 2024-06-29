const array = [1, 2, 3, 2, 4, 2, 5];
function sortArray(array) {
  const b = array.slice();
  for (let i = 0; i < b.length - 1; i++) {
    for (let j = i + 1; j < b.length; j++) {
      if (b[i] > b[j]) {
        let temp = b[i];
        b[i] = b[j];
        b[j] = temp;
      }
    }
  }
  return b;
}

console.log(sortArray(array));
