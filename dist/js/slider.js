$( document ).ready( function () {
      var owlBlog = $( '.owl-carousel-blog' );
      var owl = $( '.owl-carousel-an' );
      var owlProduct = $( '.owl-carousel-product' );
      // Go to the next item Subset
      $( '.next-btn' ).click( function () {
            owl.trigger( 'next.owl.carousel', [ 300 ] );
      } )
      // Go to the previous item
      $( '.prev-btn' ).click( function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger( 'prev.owl.carousel', [ 300 ] );
      } )
      // Go to the next item Blog
      $( '.next-btn-blog' ).click( function () {
            owlBlog.trigger( 'next.owl.carousel', [ 300 ] );
      } )
      // Go to the previous item
      $( '.prev-btn-blog' ).click( function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owlBlog.trigger( 'prev.owl.carousel', [ 300 ] );
      } )
      // Go to the next item Product
      $( '.next-btn-product' ).click( function () {
            owlProduct.trigger( 'next.owl.carousel', [ 300 ] );
      } )
      // Go to the previous item
      $( '.prev-btn-product' ).click( function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owlProduct.trigger( 'prev.owl.carousel', [ 300 ] );
      } )
      owlBlog.owlCarousel( {
            items: 4,
            rtl: true,
            loop: true,
            center: true,
            responsiveClass: true,
            autoWidth: false,
            mouseDrag: true,
            dots: false,
            center: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  768: {
                        item: 2
                  },
                  960: {
                        items: 3
                  },
                  1200: {
                        items: 4
                  }
            }
      } );
      owlProduct.owlCarousel( {
            items: 2,
            rtl: false,
            loop: false,
            itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
            responsiveClass: true,
            // center: true,
            mouseDrag: true,
            dots: false,
            // center: true,
            responsive: {

                  960: {
                        items: 3
                  },
                  1200: {
                        items: 3,
                  }
            }
      } );

      var htmlWidth = $( document ).width();
      if ( htmlWidth > 768 ) {
            $( '.blog-slider' ).click( function () {
                  $( '.blog-slider' ).removeClass( 'active-show' );
                  $( this ).addClass( 'active-show' );
            } )
      }




} );