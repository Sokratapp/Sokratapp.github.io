// import Swiper JS
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

let mainPageSwiper = new Swiper(".main-page-swiper__swiper", {
  slidesPerView: 'auto',
  centeredSlides: false,
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: ".main-page-swiper__pagination",
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    }
  },
});

let mainPagePopularSwiper = new Swiper(".block-popular__swiper", {
  slidesPerView: 3,
  centeredSlides: false,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 30,
    }
  }
});

let mainPageMyCategoriesSwiper = new Swiper(".block-popular__filter-swiper", {
  slidesPerView: 'auto',
  centeredSlides: false,
  // loop: true,
  spaceBetween: 27,
  breakpoints: {
    768: {
      spaceBetween: 22,
    }
  }
});

let mainPageCompilationsSwiper = new Swiper(".compilations__swiper", {
  slidesPerView: 4,
  centeredSlides: false,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 21,
    }
  },
  
});

let swiperTeacher = new Swiper('.teacher__list',{
  slidesPerView: 5,
  loop: true,
  centeredSlides: false,
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 19,
    }
  }
});
let teacherItemMobile  = new Swiper('.teacher__list__mobile ', {
  direction: 'horizontal',
  slidesPerView: 1.2,
  slidesPerColumn: 3,
  // loop: true,

  spaceBetween: 20,
  slidesPerColumnFill: 'row',
 
  
});
 
let courseProgrammList  = new Swiper('.course__programm-list ', {
  direction: 'horizontal',
  slidesPerView: 2.5,
  slidesPerColumn: 3,
  loop: true,
  spaceBetween: 20,
  slidesPerColumnFill: 'row',
 
  
});

let skillsList = new Swiper('.skills__list',{
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  slidesPerColumn: 3,
  spaceBetween: 15,
 

  mousewheel: {
    sensitiviti: 1,
  }
});

let reviewList = new Swiper('.review__list', {
  direction: 'horizontal',
  slidesPerView: 4.5,
  centeredSlides: false,
  
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 30,
    }
  }
})


