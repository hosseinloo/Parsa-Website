$( document ).ready( function () {
   $( 'video.video-player' ).on( 'play', function () {
      $( ".video-title" ).hide( 0 );
   } )
   $( "button.video-icon" ).click( function () {
      var video = $( "#myVideo" ).get( 0 );

      if ( video.paused ) {
         video.play();
         $( "#play" ).toggle( 400 );

      } else {
         video.pause();
         $( "#play" ).toggle( 400 );
      }

      return false;
   } );
} )