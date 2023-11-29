var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  loop: true,
  loopFillGroupWithBlank: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView:1
    },
    480:{
      slidesPerView:2
    },
    720:{
      slidesPerView:3
    },
    1080:{
      slidesPerView:4
    }

  }
});
