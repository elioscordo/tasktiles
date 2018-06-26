'use strict';

angular.
  module('taskTilesApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/tiles', {
          template: '<tile-list></tile-list>'
        }).
        otherwise('/tiles');
    }
  ]);
