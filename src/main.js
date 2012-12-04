$(document).ready(function(){

  var danceFloorHeight = $("body").height();
  var danceFloorWidth = $("body").width();

  window.dancers = [];

  var setupDancer = function(){
    // figure out which dancer we're supposed to make
    var dancerMakerName = $(this).data("dancer-creator");
    var dancerMaker = window[dancerMakerName];

    // make a dancer with a random position
    var w = Math.random() * danceFloorWidth;
    var h = Math.random() * danceFloorHeight;
    var d = dancerMaker(w, h);
    
    d.dance();
    dancers.push(d);
  };

  $(".clickable").on("click", setupDancer);
});