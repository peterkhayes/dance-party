function SlinkyDancer(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.horizontal = (Math.random() < 0.5 ? true : false);
  this.forward = (Math.random() < 0.5 ? true : false);
  this.maxStepSize = 50;
}

SlinkyDancer.prototype = Object.create(Dancer.prototype);
SlinkyDancer.prototype.constructor = SlinkyDancer;

SlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this, arguments);

  var newPos;
  if (this.horizontal) {
    var left = parseInt(this.$node.css("left"), 10);

    if (left > $("body").width() - this.maxStepSize) {
      this.forward = false;
    } else if (left < this.maxStepSize) {
      this.forward = true;
    }

    newPos = left + Math.random()*this.maxStepSize*(this.forward ? 1 : - 1);
    this.$node.css("left", newPos);
  } else {
    var top = parseInt(this.$node.css("top"), 10);

    if (top > $("body").height() - this.maxStepSize) {
      this.forward = false;
    } else if (top < this.maxStepSize) {
      this.forward = true;
    }

    newPos = top + Math.random()*this.maxStepSize*(this.forward ? 1 : - 1);
    this.$node.css("top", newPos);
  }
};

