// import Swiper JS
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

let mainPageSwiper = new Swiper(".main-page-swiper__swiper", {
  slidesPerView: 'auto',
  centeredSlides: false,
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
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 30,
    }
  }
});

let mainPageMyCategoriesSwiper = new Swiper(".block-popular__filter-swiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
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
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 21,
    }
  },
  navigtion: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

let swiperTeacher = new Swiper('.teacher__list',{
  slidesPerView: 5,
  // loop: true,
  centeredSlides: false,
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 19,
    }
  }
});
 
let courseProgrammList  = new Swiper('.course__programm-list ', {
  direction: 'horizontal',
  slidesPerView: 2.5,
  slidesPerColumn: 3,
  spaceBetween: 20,
  slidesPerColumnFill: 'row',
  // autoHeight: true,
 

  // Управление колесом мыши
  mousewheel: {
    sensitiviti: 1,
  }
  
});

let skillsList = new Swiper('.skills__list',{
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerColumn: 3,
  spaceBetween: 15,
  slidesPerColumnFill: 'row',

  mousewheel: {
    sensitiviti: 1,
  }
});


