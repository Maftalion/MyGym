angular.module('myGym', [])
.config(function($routeProvider, $httpProvider){
	// $routeProvider
	//IF TIME ROUTE TO LOGIN/SIGNUP
})
.factory('Workouts', function($https){

	//Create a function to fetch all workouts from DB
	var fetchAll = function(){
		return $http({
			method: 'GET',
			url: '/workouts'
		})
		.then(function (res, req){
			return res.data;
		});
	};

	return {
		fetchAll: fetchAll
	};

})//Create controller to handle workout requests
.controller('workoutsCtrl', function($scope, Workouts){
	//store workouts to scope
	$scope.data = {};

	//fetch all workouts
	Workouts.fetchAll().then(function(res, req){
		$scope.data.workouts = res;
	});

})