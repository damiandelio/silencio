$("#slider-01").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-01' ).addClass( 'displace-right' );
  }
});
