'use strict';

{
  const open = document.querySelector('#open');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('#close');
  const link = document.querySelector('.link');
  const link2 = document.querySelector('.link2');
  const link3 = document.querySelector('.link3');

  // ナビゲーション

  open.addEventListener('click', () =>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  link.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  link2.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  link3.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  console.log(innerWidth);

  // スクロールイベント

  $(function(){
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
  })

  // スワイパー

  const swiper = new Swiper
    ('.swiper1', {
      loop: true,
      loopSlides: 1,
      grabCursor: true,
      speed: 3000,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      slidesPerView: 3,
      spaceBetween: 32,
      watchSlidesProgress: true,
      centeredSlides: true,
    });
  
}