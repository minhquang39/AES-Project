function highlight([first, ...strings], ...values) {
  return values.reduce(
    (acc, cur) => [acc, `<span>${cur}</span>`, strings.shift()],
    first
  );
}

var brand = "F8";
var course = "Javascript";

const html = highlight`Học lập trình ${course} tại ${brand}!`;
console.log(html);
