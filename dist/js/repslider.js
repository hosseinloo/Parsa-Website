function init() {
      var swiper = new Swiper( ".mySwiperRep", {
            slidesPerView: 1,
            cssMode: true,
            centeredSlides: true,
            speed: 1000,
            // spaceBetween: 100,
            loop: true,
            autoplay: {
                  delay: 2000,
            },

            navigation: {
                  nextEl: "#nextRep",
                  prevEl: "#prevRep",
            },
            pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
            },
            // mousewheel: true,
            // keyboard: true,
      } );
}

init();