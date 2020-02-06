$(".js-featured").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  appendDots: $(".slide-controls"),
  dotsClass: "custom-dots",
  customPaging: function (slider, i) {
    return "<span class=\"dot\" role=\"button\"></span>";
  },
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

$(".js-post-item").slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: false,
});

$("#js-ontop").click(function () {
  $("html").animate({ scrollTop: 0 }, 1000);
});

$.truncateMe({
  elem: ".js-content-preview",
  trimTo: 18,
  add: "...",
});

$('.js-open').click(function () {
  $(".js-menu-left").addClass('menu__left--show');
})

$('.js-close').click(function () {
  $(".js-menu-left").removeClass('menu__left--show');
})

$(".js-social-button").click(function () {
  $(".social").toggleClass('show');
})
