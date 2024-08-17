document.addEventListener( 'DOMContentLoaded', function() {
  
  // const splide = new Splide( '.splide', {    
  //   type   : 'loop',
  //   drag   : 'free',
  //   focus  : 'center',
  //   perPage: 3,
  //   gap: '50px',
  //   arrows: false,
  //   autoScroll: {
  //     speed: 1,
  //   },
  // } );
  
  new Splide('.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 5,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
  })
  .mount( window.splide.Extensions );
  // splide.mount(); 
});





