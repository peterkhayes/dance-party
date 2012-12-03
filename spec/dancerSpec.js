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
});