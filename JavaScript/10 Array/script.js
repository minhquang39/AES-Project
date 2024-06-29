const cars = [
  { type: "volvo", year: 2016 },
  { type: "saab", year: 2001 },
  { type: "bmw", year: 2010 },
];

let txt = "";
cars.forEach(myFuncton);
var i = 0;

function myFuncton(cars) {
  txt = txt + i++ + " " + cars.type + " " + cars.year + "<br>";
}

document.getElementById("demo").innerHTML = txt;
