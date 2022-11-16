function init() {
      new Swiper( "#swiperProSlider", {
            slidesPerView: 1,
            spaceBetween: 30,
            

            breakpoints: {
                  450: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                  },
                  768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                  },
                  992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                  },
                  1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                  },
                  1400: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                  },
            },

            centeredSlides: true,
            // effect: 'creative',
            loop: true,

            // slidePerGroup: 3,
            // init: true,
            grapCursor: true,
            // watchOverflow: true,
            touchMoveStopPropagation: true,

            navigation: {
                  nextEl: "#brandProductNext",
                  prevEl: "#brandProductPrev",
            },
            mousewheel: true,
            keyboard: true,
      } );
}

init();