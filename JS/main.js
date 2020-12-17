$(function(){
    $(".thumbnail").click(function() {
    $('body').addClass('is-fixed');
      $(".modal-inner").html($(this).prop('outerHTML'));
      $(".modal").fadeIn();
    });
    $(".modal, .modal-inner").click(function() {
        $(".modal").fadeOut();
        $('body').removeClass('is-fixed');
    });
 });