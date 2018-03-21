$("#slider-01").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass('animateR01');
    $( '#slider-container' ).removeClass( 'animateR07' );
    $( '#slider-container' ).removeClass( 'animateR02' );
  }
});

$("#slider-02").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass( 'animateR02' );
    $( '#slider-container' ).removeClass( 'animateR01' );
    $( '#slider-container' ).removeClass( 'animateR03' );
  }
});

$("#slider-03").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass( 'animateR03' );
    $( '#slider-container' ).removeClass( 'animateR02' );
    $( '#slider-container' ).removeClass( 'animateR04' );
  }
});

$("#slider-04").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass( 'animateR04' );
    $( '#slider-container' ).removeClass( 'animateR03' );
    $( '#slider-container' ).removeClass( 'animateR05' );
  }
});

$("#slider-05").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass( 'animateR05' );
    $( '#slider-container' ).removeClass( 'animateR04' );
    $( '#slider-container' ).removeClass( 'animateR06' );
  }
});

$("#slider-06").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass( 'animateR06' );
    $( '#slider-container' ).removeClass( 'animateR05' );
    $( '#slider-container' ).removeClass( 'animateR07' );
  }
});

$("#slider-07").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $( '#slider-container' ).addClass( 'animateR07' );
    $( '#slider-container' ).removeClass( 'animateR06' );
    $( '#slider-container' ).removeClass( 'animateR01' );
  }
});
