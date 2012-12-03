var makeDancer = function(left, top){
  var dancer = {
    htmlString: "<span class='dancer'></span>",
    left: left,
    top: top,
    step: function(){
      this.elem.toggle();
    }
  };
  return dancer;
};
