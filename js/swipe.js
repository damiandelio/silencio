$("#slider-container").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass( 'displace-right' );
  }
});
