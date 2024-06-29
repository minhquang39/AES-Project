class Statistics {
  constructor(array) {
    this.array = array;
  }
  count() {
    return `Length: ${this.array.length}`;
  }
  sum() {
    var total = this.array.reduce((value, total) => {
      return (total += value);
    });
    return total;
  }
  min() {
    return Math.min(...this.array);
  }
  max() {
    return Math.max(...this.array);
  }
}

const s1 = new Statistics([1, 2, 3, 4, 5]);
console.log(s1.count());
console.log(s1.sum());
console.log(s1.min());
console.log(s1.max());
