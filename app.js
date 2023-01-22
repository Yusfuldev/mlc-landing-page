/***** Selectors *****/
const openMenu = document.querySelector(".burger");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector("menu");
const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
const first = document.querySelector("#grey");
const next = document.querySelector("#next");
const head = document.querySelector("header");

/***** Open/close nav-menu *****/
openMenu.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
  document.body.classList.toggle("opaque");
  head.classList.toggle("opaque");
});

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
  document.body.classList.toggle("opaque");
  head.classList.toggle("opaque");
});

/***** carousel *****/
next.addEventListener("click", () => {
  cards.forEach((slide) => {
    slidesWidth = slide.clientWidth;
    cardsContainer.scrollLeft += slidesWidth;
  });
});

first.addEventListener("click", () => {
  cards.forEach((slide) => {
    slidesWidth = slide.clientWidth;
    cardsContainer.scrollLeft -= slidesWidth;
  });
});
