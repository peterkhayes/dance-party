$(document).ready(function(){

  var danceFloorHeight = $("body").height();
  var danceFloorWidth = $("body").width();

  window.dancers = [];

  var setupDancer = function(d){
    // make a dancer with a random position
    var w = Math.random() * danceFloorWidth;
    var h = Math.random() * danceFloorHeight;
    var d = makeDancer(w, h);
    d.dance();
    dancers.push(d);
  };

  $(".clickable").on("click", function(){
    var dancerCreator = $(this).data("dancer-creator");
    var d = window[dancerCreator]();
    setupDancer(d);
  });
});