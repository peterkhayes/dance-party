describe("dancer", function() {
  var dancer;

  beforeEach(function() {
    dancer = makeDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(dancer.left).toBe(20);
    expect(dancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(dancer.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(dancer.frequency).toEqual(jasmine.any(Number));
    expect(dancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(dancer.moneyMaker, 'toggle');
    dancer.step();
    expect(dancer.moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      dancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(dancer, "step");
      dancer.dance();

      expect(dancer.step.callCount).toBe(0);

      jasmine.Clock.tick(dancer.frequency + 10);
      expect(dancer.step.callCount).toBe(1);

      jasmine.Clock.tick(dancer.frequency + 10);
      expect(dancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
