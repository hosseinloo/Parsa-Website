function init() {
  var swiper = new Swiper( ".swiper-subset", {
    slidesPerView: 1,
    spaceBetween: 10,
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
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  } );
}
init()