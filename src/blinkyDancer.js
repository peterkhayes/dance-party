function BlinkyDancer(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.defaultStep = function() {
  //Dancer.prototype.step.apply(this, arguments);
  this.$node.toggle();
};

