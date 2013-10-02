function DiscoLight(layer, phase) { // Phase is between 0 and 1, layer is a natural number.
  this.$node = $('<span class="discoLight"></span>');
  this.layer = layer;
  this.phase = phase;

  // Adjust css from passed variables, and give a random color.
  this.$node.css({
    "border-color": this.colors[Math.floor(Math.random()*this.colors.length)],
    "border-radius": 6*this.layer,
    "border-width": 6*this.layer,
    "opacity": 0.4 - this.layer/15
  });

  this.setPosition(this.targetPos()[0], this.targetPos()[1]);
  this.step();
}

DiscoLight.prototype.step = function() {
  this.$node.animate({top: this.targetPos()[0], left:this.targetPos()[1]}, 200);

  setTimeout(this.step.bind(this), 200);
};

DiscoLight.prototype.colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "FFFFCC", "FFCCFF", "CCFFFF"];

DiscoLight.prototype.setPosition = Dancer.prototype.setPosition;

DiscoLight.prototype.moveTo = Dancer.prototype.moveTo;

DiscoLight.prototype.targetPos = function() {
  var angle = (generateAngle(10) + this.phase*Math.PI*2) % (2*Math.PI);
  var radius = this.layer*$('body').width()/10 + 10*this.layer*this.layer;

  var x = radius*Math.cos(angle) + $('body').width()/2;
  var y = (-1)*radius*Math.sin(angle) + $('body').height()/2;

  return [y, x];
};