var startBut = document.querySelector(".start");
var stopBut = document.querySelector(".stop");
var resetBut = document.querySelector(".reset");

var tick = document.querySelector(".tick");
var second = document.querySelector(".second");
var minute = document.querySelector(".minute");

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

  tick.innerHTML = ticks < 10 ? "0" + ticks : ticks;

  if (ticks > 99) {
    seconds++;
    ticks = 0;
    second.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    if (seconds >= 60) {
      seconds = 0;
      ticks = 0;
      second.innerHTML = "0";
      tick.innerHTML = "0";
      minutes++;
      minute.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    }
  }
}
