describe("dancer", function() {
  var dancer;

  beforeEach(function() {
    dancer = makeDancer(20, 10);
  });

  it("should have a left and top coordinate", function() {
    expect(dancer.left).toBe(20);
    expect(dancer.top).toBe(10);
  });

  it("should have an html string", function() {
    expect(dancer.htmlString).toMatch(jasmine.any(String));
  });

  it("should have a period", function() {
    expect(dancer.period).toMatch(jasmine.any(Number));
  });

  it("should have a step function that toggles its elem", function() {
    var mockElement = {toggle: function(){}};
    dancer.elem = mockElement;
    spyOn(mockElement, 'toggle');
    dancer.step();
    expect(mockElement.toggle).toHaveBeenCalled();
  });
});