$(document).ready(function(){
  $('.slider-big').slick({
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    asNavFor: ".slider-small",
  });

  $('.slider-reviews').slick({
    dots: true,
    slidesToShow: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    centerMode: true,
  });

  $('.slider-small').slick({
    arrows: false,
    fade: true,
    asNavFor: ".slider-big",
  });
});
