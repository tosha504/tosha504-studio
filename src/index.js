jQuery(document).ready(function($) {
  const $burger = $(".header__burger");

  $burger.on("click", function() {
    $burger.toggleClass("active");
    $(".header__links").toggleClass("active");
  });

  $(".main-screen__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    cssEase: "linear",
  });
  // $(".slick-prev").addClass("active");
  $(".slick-arrow").on("click", () => {
    $(".slick-prev,.slick-next").toggleClass("active");
  });

  $(".slick-prev").html("<");
  $(".slick-next").html(">");

  $(".think__slider").slick({
    arrows: false,
    infinite: true,
    dots: true,
    cssEase: "linear",
    // autoplay: true,
    // autoplaySpeed: 3000,
  });

  $(".slick-dots li").html("");

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 650 && $(this).scrollTop() < 1000) {
      $(".work__item").addClass("anim");
    }
  });
});
