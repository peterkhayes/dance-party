describe("dancer", function() {
  var dancer;

  beforeEach(function() {
    dancer = makeDancer(20, 10);
  });

  it("should have a left and top coordinate", function() {
    expect(dancer.left).toBe(20);
    expect(dancer.top).toBe(10);
  });

  it("should have a jQuery node object", function() {
    expect(dancer.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function() {
    expect(dancer.frequency).toEqual(jasmine.any(Number));
    expect(dancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    var mockElement = {
      toggle: function(){},
      css: function(){}
    };

    dancer.moneyMaker = mockElement;
    spyOn(mockElement, 'toggle');
    dancer.step();
    expect(mockElement.toggle).toHaveBeenCalled();
  });

  it("should have a dance function that is a pain to test", function() {
    expect(dancer.dance).toEqual(jasmine.any(Function));
  });
});
