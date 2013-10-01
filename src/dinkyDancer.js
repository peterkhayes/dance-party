function DinkyDancer(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.horizontal = (Math.random() < 0.5 ? true : false);
  this.forward = (Math.random() < 0.5 ? true : false);
  this.maxStepSize = 20;
}

DinkyDancer.prototype = Object.create(Dancer.prototype);
DinkyDancer.prototype.constructor = DinkyDancer;

DinkyDancer.prototype.defaultStep = function() {
  //Dancer.prototype.step.apply(this, arguments);

  var left = parseInt(this.$node.css("left"),10);
  var top = parseInt(this.$node.css("top"),10);

  this.moveTo(top + (Math.random()*2 - 1)*this.maxStepSize, left + (Math.random()*2 - 1)*this.maxStepSize);
};

