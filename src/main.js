$(document).ready(function(){

  var dancerSources = [makeDancer, makeDancer, makeDancer];
  var dancers = [];

  var danceFloorHeight = $("body").height();
  var danceFloorWidth = $("body").width();

  var setupDancer = function(d){
    // make a dancer with a random position
    var w = Math.random() * danceFloorWidth;
    var h = Math.random() * danceFloorHeight;
    var d = makeDancer(w, h);

    // put it on the dance floor to do its thing
    d.elem = $(d.htmlString);
    d.elem.css("left", d.left);
    d.elem.css("top", d.top);
    $(".stage").append(d.elem);
    dancers.push(d);
  };

  dancerSources.forEach(setupDancer);

  setInterval(function(){
    dancers.forEach(function(d){
      d.step();
    });
  }, 1000);
});