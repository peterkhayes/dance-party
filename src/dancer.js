var makeDancer = function(left, top){
  var dancer = {
    htmlString: "<span class='dancer'></span>",
    left: left,
    top: top,
    period: Math.random() * 2000,
    step: function(){
      this.elem.toggle();
    },
    dance: function(){
      //get dressed
      this.elem = $(this.htmlString);
      this.elem.css("left", this.left);
      this.elem.css("top", this.top);
      $(".stage").append(this.elem);

      //...and do those sexy moves
      var that = this;
      setInterval(function(){
        that.step();
      }, this.period);
    }
  };
  return dancer;
};
