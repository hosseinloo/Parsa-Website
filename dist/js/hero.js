function init() {
      var swiper = new Swiper( ".hero-swip", {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        grabCursor: true,
        
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: ".btn-right",
          prevEl: ".btn-left",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      } );
    }
    init()