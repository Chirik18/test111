const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
  },
  1280: {
    slidesPerView: 3,
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.button-arrow.next',
    prevEl: '.button-arrow.prev',
  },
});
