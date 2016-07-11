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

})