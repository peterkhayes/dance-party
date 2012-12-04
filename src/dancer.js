var makeDancer = function(left, top){
  var dancer = {
    top: top,
    left: left,
    frequency: Math.random() * 2000,

    // get dressed...
    moneyMaker: $("<span class='dancer'></span>"),

    dance: function(){
      // go out...
      dancer.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(dancer.step, dancer.frequency);
    },

    step: function(){
      dancer.getInPosition();
      dancer.blink();
    },

    getInPosition: function(){
      dancer.moneyMaker.css({top: dancer.top, left: dancer.left});
    },

    blink: function(){
      dancer.moneyMaker.toggle();
    }

  };
  dancer.getInPosition();

  return dancer;
};
