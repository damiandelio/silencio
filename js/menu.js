$(document).ready(main);

var contador = 1;

function main() {
  $('#button-menu , #shadow').click(function(){
    if (contador == 1) {
      $('menu').removeClass('ocult-menu');
      $('menu').addClass('show-menu');
      $('#shadow').css("display","block");
      $('#shadow').animate({
        opacity: '0.4'
      });
      contador = 0;
    } else {
      $('menu').removeClass('show-menu');
      $('menu').addClass('ocult-menu');
      $('#shadow').animate({
        opacity: '0'
      }, function(){
        $(this).css("display","none");
      });
      contador = 1;
    }
  });
}
