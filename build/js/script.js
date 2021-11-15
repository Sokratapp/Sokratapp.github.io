'use strict';
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const links = document.querySelectorAll('.modals__item');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    const currentLink = document.querySelector(".modals__item .active");
    links[i].classList.toggle("active");
  });
};
