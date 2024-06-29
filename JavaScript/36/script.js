const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const line = $(".line");
line.style.left = tabs[0].offsetLeft + "px";
line.style.width = tabs[0].offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    pane.classList.add("active");
    this.classList.add("active");
  };
});
