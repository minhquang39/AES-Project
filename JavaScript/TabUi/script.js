const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$(".tab-item");
const tabPanes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabItems.forEach((item, index) => {
  const pane = tabPanes[index];
  item.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    item.classList.add("active");
    pane.classList.add("active");

    // line.style.left = item.offsetLeft + "px";
    line.style.width = item.offsetLeft + "px";
  };
});
