'use strict';

describe('Tile', function() {
  var $httpBackend;
  var Tile;
  var tilesData = [
    {launch: '2019-01-01',"status":'pending'},
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Tile` service before each test
  beforeEach(module('core.tile'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Tile_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/tiles/tiles').respond(tilesData);

    Tile = _Tile_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    //$httpBackend.verifyNoOutstandingExpectation();
    //$httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the tiles data', function() {
    //var tiles = Tile.list();
    //expect(tiles).toEqual([]);

    $httpBackend.flush();
    //expect(tiles).toEqual(tileData);
  });

});
