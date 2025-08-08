const swiper = new Swiper('.swiper-container', {
  loop: true,
  sliderPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  navigation: {
    nextEl: '.swiper-button.next',
    prevEl: '.swiper-button.prev',
  },
});
