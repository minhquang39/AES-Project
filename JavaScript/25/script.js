let startTime = Date.now();
let count = 0;

setTimeout(() => {
  console.log(1);
  count++;
  if (count === 3) {
    let endTime = Date.now();
    let totalTime = endTime - startTime;
    console.log("Tổng thời gian:", totalTime + "ms");
  }
}, 1000);

setTimeout(() => {
  console.log(2);
  count++;
  if (count === 3) {
    let endTime = Date.now();
    let totalTime = endTime - startTime;
    console.log("Tổng thời gian:", totalTime + "ms");
  }
}, 2000);

setTimeout(() => {
  console.log(3);
  count++;
  if (count === 3) {
    let endTime = Date.now();
    let totalTime = endTime - startTime;
    console.log("Tổng thời gian:", totalTime + "ms");
  }
}, 5000);
