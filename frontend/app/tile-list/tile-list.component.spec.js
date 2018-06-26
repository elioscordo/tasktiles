'use strict';

describe('tileList', function() {

  // Load the module that contains the `tileList` component before each test
  beforeEach(module('tileList'));

  // Test the controller
  describe('TileListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      //$httpBackend.expectGET('api/tiles/tiles')
      //            .respond([{launch: '2019-01-01',status:'pending'},]);

      ctrl = $componentController('tileList');
    }));

    it('should create a `tiles` property with 1 tile fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      $httpBackend.flush();
    });

  

  });

});
