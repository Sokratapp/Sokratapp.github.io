// import Swiper JS
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

let mainPageSwiper = new Swiper(".main-page-swiper__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".main-page-swiper__pagination",
  },
});

let mainPagePopularSwiper = new Swiper(".block-popular__swiper", {
  centeredSlides: true,
  spaceBetween: 20,
});

let mainPageMyCategoriesSwiper = new Swiper(".block-popular__filter-swiper", {
  centeredSlides: true,
  spaceBetween: 27,
});

let mainPageCompilationsSwiper = new Swiper(".compilations__swiper", {
  spaceBetween: 20,
});
