angular.module('AirplaneCtrls', ['AirplaneServices'])
.controller('AirplaneCtrl', ['$scope', 'Airplane', function($scope, Airplane) {
	$scope.airplanes = [];

	Airplane.query(function success(data) {
		$scope.airplanes = data;
	}, function error(data) {
		console.log(data);
	});
}]).controller('AirplaneShowCtrl', [
	'$scope', 
	'$routeParams', 
	'Airplane',
	function($scope, $routeParams, Airplane) {
		Airplane.get({id:$routeParams.id}, function success(data) {
			$scope.airplane = data;
		}, function error (data) {
			console.log(data);
		});
	}]);