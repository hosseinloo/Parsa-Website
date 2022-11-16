function init() {
  var swiper = new Swiper( ".mySwiperSub", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#nextSub",
      prevEl: "#prevSub",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  } );
}
init()