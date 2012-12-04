describe("danceFloor", function() {
  var danceFloor;

  beforeEach(function() {
    var spy = jasmine.createSpy();
    var kindsOfDancers = {
      fakeDancer: spy
    };
    var dancers = [];
    danceFloor = makeDanceFloor(kindsOfDancers, dancers);
  });

  it("should have width and height properties", function(){
    expect(danceFloor.width).toBeGreaterThan(0);
    expect(danceFloor.height).toBeGreaterThan(0);
  });

});
