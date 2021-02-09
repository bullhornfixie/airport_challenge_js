describe('Plane', function() {
  var plane;

  beforeEach(function() { plane = new Plane; });

  it('instructs a plane to land at an aiport', function() {
    expect(plane.land('airport')).toEqual(true);
  });

})
