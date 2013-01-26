describe("blinkyDancer", function() {
  var blinkyDancer;

  beforeEach(function() {
    blinkyDancer = makeBlinkyDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(blinkyDancer.left).toBe(20);
    expect(blinkyDancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(blinkyDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(blinkyDancer.frequency).toEqual(jasmine.any(Number));
    expect(blinkyDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(blinkyDancer.$moneyMaker, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      blinkyDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(blinkyDancer, "step");
      blinkyDancer.dance();

      expect(blinkyDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(blinkyDancer.frequency + 10);
      expect(blinkyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(blinkyDancer.frequency + 10);
      expect(blinkyDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
