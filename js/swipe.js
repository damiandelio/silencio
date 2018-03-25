$("#slider-01").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR01');
    $('#slider-container').removeClass('animateR09 animateL02');
    $('#bullet-02').addClass('active');
  }
});

$("#slider-02").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR02');
    $('#slider-container').removeClass('animateR01 animateL03');
    $('#bullet-03').addClass('active');
  }
});

$("#slider-03").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR03');
    $('#slider-container').removeClass('animateR02 animateL04');
    $('#bullet-04').addClass('active');
  }
});

$("#slider-04").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR04');
    $('#slider-container').removeClass('animateR03 animateL05');
    $('#bullet-05').addClass('active');
  }
});

$("#slider-05").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR05');
    $('#slider-container').removeClass('animateR04 animateL06');
    $('#bullet-06').addClass('active');

  }
});

$("#slider-06").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR06');
    $('#slider-container').removeClass('animateR05 animateL07');
    $('#bullet-07').addClass('active');
    $( '#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06' ).css('display' , 'none');
    $( '#bullet-08 , #bullet-09' ).css( 'display' , 'block' );

  }
});

$("#slider-07").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR07');
    $('#slider-container').removeClass('animateR06 animateL08');
    $('#bullet-08').addClass('active');
    $( '#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06' ).css('display' , 'none');
    $( '#bullet-08 , #bullet-09' ).css( 'display' , 'block' );
  }
});

$("#slider-08").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR08');
    $('#slider-container').removeClass('animateR07 animateL09');
    $('#bullet-09').addClass('active');

  }
});

$("#slider-09").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateR09');
    $('#slider-container').removeClass('animateR08 animateL01');
    $('#bullet-01').addClass('active');
    $( '#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06' ).css( 'display' , 'block' );
    $( '#bullet-08 , #bullet-09' ).css( 'display' , 'none' );
  }
});

//  LEFT -----------------------------------------------------------------------------------------

$("#slider-01").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL01');
    $('#slider-container').removeClass('animateR09 animateL02');
    $('#bullet-09').addClass('active');
    $( '#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06' ).css( 'display' , 'none' );
    $( '#bullet-08 , #bullet-09' ).css( 'display' , 'block' );
  }
});

$("#slider-02").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL02');
    $('#slider-container').removeClass('animateR01 animateL03');
    $('#bullet-01').addClass('active');
  }
});

$("#slider-03").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL03');
    $('#slider-container').removeClass('animateR02 animateL04');
    $('#bullet-02').addClass('active');
  }
});

$("#slider-04").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL04');
    $('#slider-container').removeClass('animateR03 animateL05');
    $('#bullet-03').addClass('active');
  }
});

$("#slider-05").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL05');
    $('#slider-container').removeClass('animateR04 animateL06');
    $('#bullet-04').addClass('active');
  }
});

$("#slider-06").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL06');
    $('#slider-container').removeClass('animateR05 animateL07');
    $('#bullet-05').addClass('active');
  }
});

$("#slider-07").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL07');
    $('#slider-container').removeClass('animateR06 animateL08');
    $('#bullet-06').addClass('active');
    $( '#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06' ).css( 'display' , 'block' );
    $( '#bullet-08 , #bullet-09' ).css( 'display' , 'none' );
  }
});

$("#slider-08").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL08');
    $('#slider-container').removeClass('animateR07 animateL09');
    $('#bullet-07').addClass('active');
  }
});

$("#slider-09").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $('#bullet-01 , #bullet-02 , #bullet-03 , #bullet-04 , #bullet-05 , #bullet-06 , #bullet-07 , #bullet-08 , #bullet-09').removeClass('active');
    $('#slider-container').addClass('animateL09');
    $('#slider-container').removeClass('animateR08 animateL01');
    $('#bullet-08').addClass('active');

  }
});
