function init() {
  var swiper = new Swiper( ".mySwiperBrand", {
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#nextBrand",
      prevEl: "#prevBrand",
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
  } );
}
init()