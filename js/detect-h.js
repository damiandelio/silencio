//Detecta la altura de la pantalla y la del hader para restarlas y mostrar full screen.

var windowHeight = $( window ).height();
var headerHeight = $( 'header' ).height();
var bulletsHeight = $( '#container-bullets' ).height();
var mainHeight;
var sliderHeight;

mainHeight = windowHeight - headerHeight;

$( 'main' ).css( 'height' , mainHeight );


sliderHeight = mainHeight - bulletsHeight;

$( '#slider-container' ).css( 'height' , sliderHeight );
