const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const gallery = $(".gallery");
const gallery_item = Array.from($$(".gallery-item"));
console.log(gallery_item);
