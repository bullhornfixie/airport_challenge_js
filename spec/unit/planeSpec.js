describe('Plane Test Suite', function() { 
  var plane;

  //This will be called before running each spec
  beforeEach(function() { plane = new Plane; });
 
  it('instructs a plane to land at an airport', function() {
    expect(plane.land('airport')).toEqual(true)

  });

});