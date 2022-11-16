$( document ).ready( function () {
      $( 'button.blog' ).click( function () {
            $( 'button.blog' ).removeClass( 'active-blog' );
            $( this ).addClass( 'active-blog' );
            $( this ).find( 'i' ).removeClass( 'bx-radio-circle' ).addClass( 'bx-radio-circle-marked' );
            $( 'button.blog' ).find( 'i' ).removeClass( 'bx-radio-circle-marked' ).addClass( 'bx-radio-circle' );
      } )

      $( '.circle-button' ).click( function () {
            $( '.circle-button' ).removeClass( 'on-circle-button' );
            $( this ).addClass( 'on-circle-button' );
      } )

      $( '.circle-button-brand' ).click( function () {
            $( '.circle-button-brand' ).removeClass( 'on-btn-brand' );
            $( this ).addClass( 'on-btn-brand' );
      } )

      $( '.circle-button-sub-company' ).click( function () {
            $( '.circle-button-sub-company' ).removeClass( 'on-sub-btn' );
            $( this ).addClass( 'on-sub-btn' );
      } )

      $( '.circle-button-proslider' ).click( function () {
            $( '.circle-button-proslider' ).removeClass( 'proslider-on' );
            $( this ).addClass( 'proslider-on' );
      } )

      $( '.btn-wiki' ).click( function () {
            $( '.btn-wiki' ).removeClass( 'on-wiki' );
            $( this ).addClass( 'on-wiki' );
      } )

      $( '.btn-hero' ).click( function () {
            $( '.btn-hero' ).removeClass( 'btn-on' );
            $( this ).addClass( 'btn-on' );
      } )

      $( '.btn-catalog' ).click( function () {
            $( '.btn-catalog' ).removeClass( 'on-catalog' );
            $( this ).addClass( 'on-catalog' );
      } )

      $( '.circle-button-product' ).click( function () {
            $( '.circle-button-product' ).removeClass( 'on-product-button' );
            $( this ).addClass( 'on-product-button' );
      } )

      $( '.cta-button' ).click( function () {
            $( '.cta-button' ).removeClass( 'checked-cta-button' );
            $( this ).addClass( 'checked-cta-button' );
      } )

      $( '.circle-button-sub' ).click( function () {
            $( '.circle-button-sub' ).removeClass( 'subset-btn' );
            $( this ).addClass( 'subset-btn' );
      } )

      $( '.nav-link' ).click( function () {
            $( '.nav-link' ).removeClass( 'active-menu' );
            $( this ).addClass( 'active-menu' );
      } )
} )