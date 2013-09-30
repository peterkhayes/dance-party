function TwinkyDancer(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.horizontal = (Math.random() < 0.5 ? true : false);
  this.growing = true;
  this.gFactor = 20; // Growth factor.
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

TwinkyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this, arguments);

  if (this.horizontal) {
    this.$node.css("width", this.width() + (this.gFactor)*(this.growing ? 1 : -1));
    this.$node.css("left", parseInt(this.$node.css("left"),10) - (this.gFactor/2)*(this.growing ? 1 : -1));

    if (this.width() > this.maxSize) {
      this.growing = false;
    } else if (this.width() < 1) {
      this.$node.css("width", 0);
      this.growing = true;
      this.horizontal = false;
    }

    if (this.height() > 0) { // Make sure the height isn't growing.
      this.$node.css("height", 0);
    }

  } else {
    this.$node.css("height", this.height() + (this.gFactor)*(this.growing ? 1 : -1));
    this.$node.css("top", parseInt(this.$node.css("top"),10) - (this.gFactor/2)*(this.growing ? 1 : -1));

    if (this.height() > this.maxSize) {
      this.growing = false;
    } else if (this.height() < 1) {
      this.$node.css("height", 0);
      this.growing = true;
      this.horizontal = true;
    }

    if (this.width() > 0) { // Make sure the width isn't growing.
      this.$node.css("width", 0);
    }
  }
};

