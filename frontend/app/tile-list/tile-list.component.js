'use strict';

// Promises called more then once
function createTilePromise(Tiles, tile, $log, callback) {
  // Called in case of Tile creation or when the first Task is created and the user did not create the Tile
  $log.log(tile)
  Tiles.save(tile).$promise.then(function (data) {
    callback(data)
  }, function (error) {
    $log.log(error)
    alert("Something went wrong. ")
  });
}

function createTaskPromise(Tasks, task, $log, callback) {
   // Called for new and already created Tiles
  $log.log(task)
  Tasks.save(task).$promise.then(function (data) {
    callback(data)
  }, function (error) {
    $log.log(error)
    alert("Something went wrong.")
  });
}

function listTilesPromise(Tiles, $scope) {
   // The list refresh
  Tiles.list($scope.filter).$promise.then(function (data) {
    $scope.tiles = data
      angular.forEach($scope.tiles, function (tile) {
        tile.newTask = {}
        tile.focusTaskId = 0
        tile.createTask = false
    });
  },function (error) {
    alert(error)
  });
 
}
// Register `tileList` component, along with its associated controller and template
angular.
  module('tileList').
  component('tileList', {
    templateUrl: 'tile-list/tile-list.template.html',
    controller: ['$scope', '$log', 'Tasks', 'Tiles','Tile','Task',
      function TileListController($scope, $log, Tasks, Tiles,Tile,Task) {
        // configuration  
        var ct = this
        $scope.$log = $log;
        this.tileFields = tileFields
        this.taskFields = taskFields
        this.filterFields = filterFields
        
        // initialization  with default values
        this.newTask = {order:1,type:"my type",title:"My title",body:"My body"};
        this.displayCreateTask = false
        this.newTile = {status:"pending", launch:"2019-01-01"};
        $scope.filter = {from:"2018-01-01", to:"2019-01-01"};

        this.filterTiles = function createTile(filter) {
          listTilesPromise(Tiles, $scope);
        }
        // configuration  
        this.createTile = function createTile(tile) {
          createTilePromise(Tiles, tile, $log, function (data) {
            $log.log(data);
            $scope.tiles = Tiles.list();
          })
        };
        // Shows the edit form for the focused Task within a Tile
        this.focusTask = function focusTask(tile,task) {
          tile.focusTaskId = task.id
        }
        // Shows the Task Creation Form within a created Tile
        this.addTask = function addTask(tile) {
          tile.createTask = true
        }
        // Shows the Task Creation Form within a new Tile
        this.addTaskNewTile = function addTaskNewTile() {
          ct.displayCreateTask = true
        }

        this.updateTile = function updateTile(tile) {
          Tile.update(tile).$promise.then(function (data) {
            $log.log(data)
            listTilesPromise(Tiles, $scope);
          }, function (error) {
            $log.log("Error:")
            $log.log(error)
          });
        };

        this.updateTask = function updateTask(task) {
          Task.update(task).$promise.then(function (data) {
            $log.log(data)
            listTilesPromise(Tiles, $scope);
          }, function (error) {
            $log.log("Error:")
            $log.log(error)
          });
        };

        this.deleteTile = function deleteTile(tile) {
          $log.log("Deleting: " + tile.id);
          Tile.delete({tileId: tile.id}).$promise.then(function (data) {
            $log.log("Deleted")
            listTilesPromise(Tiles, $scope);
          }, function (error) {
            $log.log("Error:")
            $log.log(error)
          });
        }

        this.deleteTask= function deleteTask(task) {
          $log.log("Deleting: " + task.id);
          Task.delete({taskId: task.id}).$promise.then(function (data) {
            $log.log("Deleted")
            listTilesPromise(Tiles, $scope);
          }, function (error) {
            $log.log("Error:")
            $log.log(error)
          });
        }

        // Create the Task and/or the Tile (in case of a new Tile)
        this.createTask = function createTask(tile, task) {
          $log.log(tile);
          if (tile.hasOwnProperty('id')) {
            $log.log("yes id");
            task.tile = tile.id
            createTaskPromise(Tasks,task,$log,function(data){
              listTilesPromise(Tiles, $scope);
              $log.log("task created");
            })
          } else {
            $log.log("no id");
            createTilePromise(Tiles, tile, $log, function (data) {
              $log.log(data);
              $log.log("tile created id: " + data.id);
              task.tile = data.id
              createTaskPromise(Tasks,task,$log,function(data){
                listTilesPromise(Tiles, $scope);
                $log.log("task created");
              })
            })
          }

        };
        // Create the Task and/or the Tile (in case of a new Tile)
        listTilesPromise(Tiles, $scope);
      }
    ]
  }
  );
