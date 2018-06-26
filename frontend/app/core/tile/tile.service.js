'use strict';
const BASE_URL = "http://127.0.0.1:8081/api/tiles/"
angular.
  module('core.tiles').
  factory('Tiles', ['$resource',
    function($resource) {
      return $resource(BASE_URL + 'tiles', {}, {
        list: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);

  angular.
  module('core.tasks').
  factory('Tasks', ['$resource',
    function($resource) {
      return $resource(BASE_URL + 'tasks', {}, {});
    }
  ]);

  angular.
  module('core.task').
  factory('Task', ['$resource',
    function($resource) {
      return $resource(BASE_URL + 'task/:taskId',  {taskId: '@id'},  {
        'update': { method:'PUT'}}
      );
    }
  ]);

  angular.
  module('core.tile').
  factory('Tile', ['$resource',
    function($resource) {
      return $resource(BASE_URL + 'tile/:tileId/',  {tileId: '@id'},  {
        'update': { method:'PUT'
      
      }
      });
    }
  ]);
