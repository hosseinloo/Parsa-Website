$( document ).ready( function () {
      var owlFeed = $( '#feedCarousel' );
      // Go to the next item Product
      $( '.owl-next-custom' ).click( function () {
            owlFeed.trigger( 'next.owl.carousel', [ 300 ] );
      } )
      // Go to the previous item
      $( '.owl-prev-custom' ).click( function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owlFeed.trigger( 'prev.owl.carousel', [ 300 ] );
      } )
      owlFeed.owlCarousel( {
            items: 1,
            rtl: true,
            touchDrag: true,
            // nav: true,
            // navigation : true,
            stopOnHover: true,
            autoplay: true,
            loop: true,
            center: true,
            // navContainer: "owl-nav",
            mouseDrag: true,
            dots: true,
            dotsContainer: "#dotsContent",
            // center: true,
            responsive: {

                  960: {
                        items: 1
                  },
                  1200: {
                        items: 1,
                  }
            }
      } );

} )