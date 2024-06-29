function mostFrequent(array) {
  const b = [];
  for (let i = 0; i < array.length; i++) {
    if (b.includes(array[i]) === false) {
      b.push(array[i]);
    }
  }

  let maxCount = 0;
  let count = 0;
  let maxElement = 0;
  let i = 0,
    j = 0;
  for (i = 0; i < b.length; i++) {
    count = 0;
    for (j = 0; j < array.length; j++) {
      if (b[i] === array[j]) {
        count++;
        maxElement = array[j];
      }
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  console.log(
    "Phan tu xuat hien nhieu nhat la " + maxElement + " voi " + maxCount
  );
}

const array = [1, 2, 3, 4, 3, 2, 3, 3, 3, 3, 3, 1, 2, 3, 1, 1];
console.log(array);
console.log(mostFrequent(array));
