describe("slinkyDancer", function() {

  var dancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new SlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node move", function() {
    var oldLeft = dancer.$node.css("left");
    var oldTop = dancer.$node.css("top");
    dancer.step();
    var moved = (dancer.$node.css("left") !== oldLeft || dancer.$node.css("top") !== oldTop);
    expect(moved).to.be.true;
  });

  it("should not leave the screen", function() {
    for (var i = 0; i < 100; i++) {
      dancer.step();
      var left = parseInt(dancer.$node.css("left"), 10);
      var top = parseInt(dancer.$node.css("top"), 10);
      var offScreen = (left < -100 || left > $("body").width() + 100 || top < -100 || top > $("body").height() + 100);
      expect(offScreen).to.be.false;
    }
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(dancer, "step");
      expect(dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });
});
