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

  const open = document.querySelector('#open');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('#close');

  open.addEventListener('click', () =>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })

  console.log(innerWidth);

  $(function(){
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
  })
}