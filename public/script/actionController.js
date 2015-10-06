var mediaApp = angular.module('mediaApp', []);
mediaApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
  var refresh = function(){
    $http.get('/actions/actionlist').success(function(response){
      $scope.actionlist = response;
      $scope.action = "";
    });
  }
  refresh();

  $scope.addAction = function () {
    console.log($scope.action);
    $http.post('/actions/actionlist', $scope.action).success(function(response){
      console.log(response);
      refresh();
    })
  };

  $scope.editAction = function (id){
    console.log(id);
    $http.get('/actions/actionlist/'+ id).success(function(response){
      $scope.action = response
    });
  };

  $scope.removeAction = function (id){
    console.log(id);
    $http.delete('/actions/actionlist/' + id).success(function(response){
      refresh();
    })
  };

  $scope.updateAction = function(){
    console.log($scope.action);
    $http.put('/actions/actionlist/'+ $scope.action._id, $scope.action).success(function(response){
      refresh();
      $scope.action = "";
    })
  };
}]);
