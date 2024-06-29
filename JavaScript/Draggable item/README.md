# pageX: Vị trí của phần tử so với trục Ox (x=0)

# offsetLefl: Vị trí của phần tử so với phần tử cha của nó

// Khởi tạo biến slider bao gồm các item
var slider = document.querySelector(".items");

// Biến isDrag cho biết trạng thái kéo
var isDrag = false;

// Khởi tạo biến khởi đầu cho vị trí cách trục Ox và giá trị thanh cuộn ngang
var preX, preScrollLeft;

var dragStart = (e) => {
// Khi bắt đầu kéo thì biến kéo có giá trị true
isDrag = true;
// Khởi tạo giá trị ban đầu cho biến preX và preScrollLeft, khởi tạo khi bắt đầu chạm vào slider
preX = e.pageX;
preScrollLeft = slider.scrollLeft;
};

var dragging = (e) => {
if (!isDrag) return;
// Cập nhật lại giá trị của pageX
var positionDiff = e.pageX - preX;
slider.scrollLeft = preScrollLeft - positionDiff;
};

var dragStop = () => {
isDrag = false;
};
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mouseleave", dragStop);
slider.addEventListener("mouseup", dragStop);

var arrows = document.querySelectorAll(".wrapper i");
var item = document.querySelector(".item");
var itemWidth = item.clientWidth + 20;

var move = (e) => {
slider.scrollLeft += e.target.id === "left" ? -itemWidth : itemWidth;
arrows[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
slider.classList.add("smooth");
};

arrows.forEach((arrow) => {
arrow.addEventListener("click", move);
});
