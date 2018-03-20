//Detecta la altura de la pantalla y la del hader para restarlas y mostrar full screen.

var windowHeight = $( window ).height();
var headerHeight = $( 'header' ).height();

windowHeight = windowHeight - headerHeight;

$( 'main' ).css( 'height' , windowHeight );
