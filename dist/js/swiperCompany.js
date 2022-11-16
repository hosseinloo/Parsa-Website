function init() {
  new Swiper("#swiperCompany", {
    slidesPerView: 1,
    spaceBetween: 0,

    // cssMode: true;

    cssWidthAndHeight: true,
    autoResize: false,
    // spaceBetween: 30,
    // pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
    // },

    // breakpoints: {
    //       450: {
    //             slidesPerView: 2,
    //             spaceBetween: 30,
    //       },
    //       768: {
    //             slidesPerView: 3,
    //             spaceBetween: 30,
    //             },
    //             992: {
    //             slidesPerView: 3,
    //             spaceBetween: 30,
    //             },
    //             1200: {
    //             slidesPerView: 4,
    //             spaceBetween: 30,
    //             },
    //             1400: {
    //             slidesPerView: 4,
    //             spaceBetween: 40,
    //             },
    //     },

    centeredSlides: true,
    // effect: 'creative',

    // slidePerGroup: 3,
    // init: true,
    grapCursor: true,
    // watchOverflow: true,
    touchMoveStopPropagation: true,

    navigation: {
      prevEl: "#companyPrev",
      nextEl: "#companyNext",
    },
    mousewheel: true,
    keyboard: true,
  });
}

init();
