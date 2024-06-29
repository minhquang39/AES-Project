const item = document.querySelectorAll("li");
const done = document.querySelector(".done");
const ongoing = document.querySelector(".ongoing");
const coming = document.querySelectorAll(".coming");

item.forEach((e) => {
  e.style.padding = "10px";
  e.style.marginBottom = "5px";
});

done.style.backgroundColor = "green";
ongoing.style.backgroundColor = "red";
coming.forEach((e) => {
  e.style.backgroundColor = "yellow";
});

function showTime() {
  var colors = ["red", "blue", "green", "yellow", "orange", "violet"];
  var date = new Date();
  var time = "";
  var month = date.toLocaleString("en-US", { month: "long" });
  var day = date.getDate();
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  time =
    time +
    " " +
    month +
    " " +
    day +
    ", " +
    year +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second;
  document.getElementById("date").innerHTML = time;

  var randomIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomIndex];
  document.getElementById("date").style.color = randomColor;
  document.querySelector(".year").style.color = randomColor;
}

setInterval(showTime, 1000);
