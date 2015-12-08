var app = angular.module('AirplaneApp', ['ngRoute', 'AirplaneServices', 'AirplaneCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/airplanes.html',
		controller:  'AirplaneCtrl'
	})
	.when('/about', {
		templateUrl: 'app/views/about.html'
	})
	.when('/airplanes/new', {
		templateUrl: 'app/views/new.html',
		controller: 'AirplaneNewCtrl'
	})
	.when('/airplanes/delete/:id', {
		templateUrl: 'app/views/show.html',
		controller: 'AirplaneDeleteCtrl'
	})
	.when('/airplanes/:id', {
		templateUrl: 'app/views/show.html',
		controller: 'AirplaneShowCtrl'
	})
	.otherwise({
		templateUrl: 'app/views/404.html'
	});

	$locationProvider.html5Mode(true);
}]);