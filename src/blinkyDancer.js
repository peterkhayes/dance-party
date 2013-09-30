function BlinkyDancer(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
}

BlinkyDancer.prototype = new Dancer();

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this, arguments);

  //toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag. 
  this.$node.toggle();
};

