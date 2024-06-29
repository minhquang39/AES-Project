var buttons = document.querySelectorAll("label");

var startBut = document.querySelector(".start");
var stopBut = document.querySelector(".stop");
var resetBut = document.querySelector(".reset");
var ticks = 0;
var seconds = 0;
var minutes = 0;
var interval;

startBut.onclick = function () {
  clearInterval(interval);
  interval = setInterval(showTime, 10);
};

stopBut.onclick = function () {
  clearInterval(interval);
};

resetBut.onclick = function () {
  clearInterval(interval);
  document.querySelector(".minute").innerHTML = "0";
  document.querySelector(".second").innerHTML = "0";
  document.querySelector(".tick").innerHTML = "0";
};

function showTime() {
  ticks++;

  if (ticks < 10) {
    document.querySelector(".tick").innerHTML = "0" + ticks;
  } else if (ticks > 10 && ticks < 100) {
    document.querySelector(".tick").innerHTML = ticks;
  } else if (ticks > 100) {
    ticks = 0;
    seconds++;
    document.querySelector(".second").innerHTML = seconds;
  }
  if (seconds >= 59 && ticks === 99) {
    minutes++;
    document.querySelector(".minute").innerHTML = minutes;
    seconds = 0;
    ticks = 0;
  }
}
