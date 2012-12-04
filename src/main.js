$(document).ready(function(){

  var danceFloorHeight = $("body").height();
  var danceFloorWidth = $("body").width();

  window.dancers = [];

  var setupDancer = function(){
    // figure out which dancer we're supposed to make
    var dancerCreatorName = $(this).data("dancer-creator");
    var dancerCreator = window[dancerCreatorName];

    // make a dancer with a random position
    var w = Math.random() * danceFloorWidth;
    var h = Math.random() * danceFloorHeight;
    var d = dancerCreator(w, h);
    
    d.dance();
    dancers.push(d);
  };

  $(".clickable").on("click", setupDancer);
});