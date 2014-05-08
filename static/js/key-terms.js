$(document).ready(function () {
  $(".key-terms dt").addClass("clickable").addClass("term-inactive");
  $(".key-terms dt").click(function() {
    //$(this).next("dd").toggle();
    $(this).toggleClass("term-inactive");
  });
  
  if(window.location.hash) {
    var hash = window.location.hash; //Puts hash in variable, and removes the # character
   $(hash).removeClass("term-inactive");
  }
});