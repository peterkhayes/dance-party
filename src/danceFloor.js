var startDanceFloor = function(kindsOfDancers, dancers){
  var danceFloorWidth = $("body").width();
  var danceFloorHeight = $("body").height();

  var dancerButtonHandler = function(){
    // figure out which dancer we're supposed to make
    var dancerMakerName = $(this).data("dancer-creator");
    var dancerMaker = kindsOfDancers[dancerMakerName];

    // make a dancer with a random position
    var w = Math.random() * danceFloorWidth;
    var h = Math.random() * danceFloorHeight;
    var d = dancerMaker(w, h);
    
    d.dance();
    dancers.push(d);
  };

  $(".clickable").on("click", dancerButtonHandler);

}