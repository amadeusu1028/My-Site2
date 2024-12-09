'use strict';

{
  const swiper = new Swiper('.swiper1', {
    loop: true,
    loopAdditionalSlides: 1,
    grabCursor: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      reverseDirection: true,
    },
    slidesPerView: 3,
    spaceBetween: 32,
    watchSlidesProgress: true,
    centeredSlides: true,
  });

  console.log(innerWidth);
}