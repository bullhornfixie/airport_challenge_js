'use strict';

describe('Airport Test Suite', function() { 
    var airport;
    var plane;
  
    //This will be called before running each spec
    beforeEach(function() { airport = new Airport(); plane = new Plane();});

    it('instructs a plane to land at an airport', function() {
      airport.land(plane)
      expect(airport.land()).toEqual(1)
  
    });
  
  });