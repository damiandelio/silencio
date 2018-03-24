$(document).ready(main);

//Detecta la altura de la pantalla y la del hader para restarlas y mostrar full screen.

var windowHeight = $( document ).height();
//var windowHeight = screen.availHeight;
var headerHeight = $( 'header' ).height();
var bulletsHeight = $( '#container-bullets' ).height();
var mainHeight;
var sliderHeight;

function main() {
  mainHeight = windowHeight - headerHeight;
  $( 'main' ).css( 'height' , mainHeight );

  sliderHeight = mainHeight - bulletsHeight;
  $( '#slider-container' ).css( 'height' , sliderHeight );


  $( window ).resize(function() {
    var windowHeight = $( document ).height();
    //var windowHeight = screen.availHeight;
    var headerHeight = $( 'header' ).height();
    var bulletsHeight = $( '#container-bullets' ).height();
    var mainHeight;
    var sliderHeight;

    mainHeight = windowHeight - headerHeight;
    $( 'main' ).css( 'height' , mainHeight );

    sliderHeight = mainHeight - bulletsHeight;
    $( '#slider-container' ).css( 'height' , sliderHeight );
  });
}
