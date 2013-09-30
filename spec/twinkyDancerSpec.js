describe("fatsoDancer", function() {

  var dancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new FatsoDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change size", function() {
    var oldWidth = dancer.$node.css("width");
    var oldHeight = dancer.$node.css("height");
    dancer.step();
    var grew = (dancer.$node.css("width") !== oldWidth || dancer.$node.css("height") !== oldHeight);
    expect(grew).to.be.true;
  });

  it("should not ever get too big", function() {
    for (var i = 0; i < 10; i++) {
      dancer.step();
      expect(parseInt(dancer.$node.css("width"), 10) < 150).to.be.true;
      expect(parseInt(dancer.$node.css("height"), 10) < 150).to.be.true;
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
