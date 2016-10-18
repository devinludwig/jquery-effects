$(document).ready(function() {
  $(".clickable").click(function() {
    $(".small").toggle();
    $(".big").toggle();
  });
  $(".whatever").click(function() {

    $(".showcastle").fadeToggle();
    $(".initial").toggle();
    $(".after").toggle();
  });
});
