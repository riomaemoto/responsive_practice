
$(function () {

  $(function () {
    $(".fadeSlider_box img:not(:first-child)").hide();
    setInterval(function () {
      $(".fadeSlider_box img:first-child").fadeOut(5000).next("img").fadeIn(5000).end().appendTo(".fadeSlider_box");
    }, 5000);
  });

  $('.fadeUp1').addClass('fadein-active02');
  $('.fadeUp').addClass('fadein-active02');

  $(window).scroll(function () {
    $('.animation').each(function () {
      var elemPos = $(this).offset().top,
        windowHeight = $(window).height();
      scroll = $(window).scrollTop();

      if (scroll > elemPos - windowHeight) {
        $(this).addClass('fadein-active02');
      }

      if (scroll > elemPos + $(this).height() || scroll < elemPos - windowHeight) {
        $(this).removeClass('fadein-active02');
      }
    });
  });

  $('.hamburger').on('click', function () {
    $('.nav_sp').toggleClass('nav_sp-active');
    $(this).toggleClass('close');
  });

});

