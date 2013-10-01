function Dancer(top, left, timeBetweenSteps, number) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.behavior = "default";
  this.step();
  this.setPosition(top, left);
  this.number = number;
}

Dancer.prototype.step = function() {
  
  if (this.behavior === "default") {
    this.defaultStep();
  } else {
    this[this.behavior]();
  }
  // Bind like a boss; otherwise when setTimeout calls step, window will be the "this".
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.moveTo = function (top, left, speed) {
  speed = speed || 200;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings, speed);
};

Dancer.prototype.lineUp = function() {
  this.$node.show();
  var height = $('body').height();
  var targety = 40 + (24*this.number) % (Math.floor((height - 40)/24)*24);
  var targetx = 50 + 24*Math.floor((40+24*this.number)/(Math.floor((height - 40)/24)*24)-1);
  if (parseInt(this.$node.css("top"),10) !== targety) {
    this.moveTo(targety,targetx, "slow");
  }
};



