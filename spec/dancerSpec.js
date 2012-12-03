describe("dancer", function() {
  var dancer;

  beforeEach(function() {
    dancer = makeDancer(20, 10);
  });

  it("should have a x and y coordinate", function() {
    expect(dancer.x).toBe(20);
    expect(dancer.y).toBe(10);
  });

  it("should have an html string", function() {
    expect(dancer.htmlString).toMatch(jasmine.any(String));
  });
});