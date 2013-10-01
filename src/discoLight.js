function DiscoLight(layer, phase) { // Phase is between 0 and 1, layer is a natural number.
  this.$node = $('<span class="discoLight"></span>');
  this.layer = layer;
  this.phase = phase;

  // Give it a random color from the list.
  this.$node.css("border-color", this.colors[Math.floor(Math.random()*this.colors.length)]);

  this.moveTo(this.targetPos()[0], this.targetPos()[1]);
}

DiscoLight.prototype.step = function() {


  setTimeout(this.step.bind(this), 300);
};

DiscoLight.prototype.colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF"];

DiscoLight.prototype.setPosition = Dancer.prototype.setPosition;

DiscoLight.prototype.moveTo = Dancer.prototype.moveTo;

DiscoLight.prototype.targetPos = function() {
  var angle = (generateAngle(10) + this.phase*Math.PI*2) % (2*Math.PI);
  var radius = this.layer*$('body').width()/5 + 10*this.layer*this.layer;

  var x = radius*Math.cos(angle) + $('body').width()/2;
  var y = (-1)*radius*Math.sin(angle) + $('body').height()/2;

  return [y, x];
};