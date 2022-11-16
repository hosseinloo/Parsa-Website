$( document ).ready( function () {
      var owlGroups = $( '#owlGroupBox' );
      // Go to the next item Product
      $( '.owl-next-group' ).click( function () {
            owlGroups.trigger( 'next.owl.carousel', [ 300 ] );
      } )
      // Go to the previous item
      $( '.owl-prev-group' ).click( function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owlGroups.trigger( 'prev.owl.carousel', [ 300 ] );
      } )
      owlGroups.owlCarousel( {
            items: 1,
            rtl: true,
            responsiveClass: true,
            autoplay: true,
            loop: true,
            center: true,
            
            dots: true,
            dotsContainer: "#dotsContent",
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