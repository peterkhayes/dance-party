function TwinkyDancer(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.horizontal = (Math.random() < 0.5 ? true : false);
  this.growing = true;
  this.gFactor = 10; // Growth factor.
  this.maxSize = 40;
}

TwinkyDancer.prototype = Object.create(Dancer.prototype);
TwinkyDancer.prototype.constructor = TwinkyDancer;

TwinkyDancer.prototype.width = function() {
  return parseInt(this.$node.css("width"), 10);
};
TwinkyDancer.prototype.height = function () {
  return parseInt(this.$node.css("height"), 10);
};

TwinkyDancer.prototype.defaultStep = function() {
  //Dancer.prototype.step.apply(this, arguments);
  debugger;
  this.$node.animate({
    'height': this.height() + (this.gFactor)*(this.growing ? 1 : -1),
    'top': parseInt(this.$node.css("top"),10) - (this.gFactor)*(this.growing ? 1 : -1),
    'left': parseInt(this.$node.css("left"),10) - (this.gFactor)*(this.growing ? 1 : -1)
  }, 'fast');

  if (this.height() > this.maxSize) {
    this.growing = false;
  } else if (this.height() < 10) {
    this.growing = true;
  }

};

