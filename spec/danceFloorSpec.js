describe("danceFloor", function() {
  var danceFloor;
  var dancers; // object that the dance floor modifies
  var makeFakeDancer;
  var fakeDancer;

  beforeEach(function() {
    // Set up spies
    fakeDancer = {
      dance: jasmine.createSpy()
    };
    makeFakeDancer = jasmine.createSpy().andReturn(fakeDancer);

    // Set up the arguments that makeDanceFloor requires.
    var kindsOfDancers = {
      makeFakeDancer: makeFakeDancer
    };
    dancers = [];

    danceFloor = makeDanceFloor(kindsOfDancers, dancers);
  });

  it("should have width and height properties", function(){
    expect(danceFloor.width).toBeGreaterThan(0);
    expect(danceFloor.height).toBeGreaterThan(0);
  });

  describe("makeDancer", function(){

    it("should make a dancer of the specified type", function(){
      danceFloor.addDancer("makeFakeDancer");
      expect(makeFakeDancer).toHaveBeenCalled();
    });

    it("should call 'dance' on the created dancer", function(){
      danceFloor.addDancer("makeFakeDancer");
      expect(fakeDancer.dance).toHaveBeenCalled();
    });

  });

});
