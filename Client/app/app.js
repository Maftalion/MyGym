angular.module('mygym', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
  .when('/exercises', {
    templateUrl: 'app/exercises.html',
    controller: 'exercisesCtrl'
  })
  .otherwise({
      redirectTo: '/exercises'
    });
	//IF TIME ROUTE TO LOGIN/SIGNUP
})
.controller('exercisesCtrl', function($scope, Workouts){
  //store workouts to scope
  $scope.data = {};
  //fetch all workouts
  Workouts.fetchAll().then(function(exercises){
    $scope.data.workouts = exercises;
    }).catch(function(err){
      console.log(err);
  })
})
.factory('Workouts', function($http){

	//Create a function to fetch all workouts from DB
	var fetchAll = function(){
    return $http({
      method: 'GET',
      url: '/api/exercises'
    })
    .then(function (res){
      return res.data;
    });
  }
  return {
    fetchAll: fetchAll
  }
})
// })//Create controller to handle workout requests

