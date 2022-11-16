  //  Easy selector helper function

  const select = ( el, all = false ) => {
    el = el.trim()
    if ( all ) {
      return [ ...document.querySelectorAll( el ) ]
    } else {
      return document.querySelector( el )
    }
  }

  // Easy on scroll event listener 

  const onScroll = ( el, listener ) => {
    el.addEventListener( 'scroll', listener )
  }


  //   Header Scrolled Function
  const header = select( '.navbar' );
  const navbar = select( '.navbar-nav' );
  if ( header ) {
    const headerScrolled = () => {
      if ( window.scrollY > 150 ) {
        header.classList.add( "header-styles" );
        //   navbar.style.top = '60px';

      } else {
        header.classList.remove( 'header-styles' );
        //   navbar.style.top = '90px' ;
      }
    }
    window.addEventListener( 'load', headerScrolled );
    onScroll( document, headerScrolled );
  }
