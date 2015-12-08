angular.module('AirplaneServices', ['ngResource'])
.factory('Airplane', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/airplanes/:id');
}])
.factory('Auth', ['$window', function($window) {
	return {
		saveToken: function(token) {
			$window.localStorage["secretairplanes-token"] = token;
		},
		getToken: function(token) {
			return $window.localStorage["secretairplanes-token"];
		},
		removeToken: function(token) {
			$window.localStorage.removeItem("secretairplanes-token");
		},
		isLoggedIn: function() {
			var token = this.getToken();
			return token ? true : false;
		}
	}
}])
.factory("AuthInterceptor", ["Auth", function(Auth) {
	return {
		request: function(config) {
			var token = Auth.getToken();
			if (token) {
				config.headers.Authorization = "Bearer "+token;
			}
			return config;
		}
	};
}]);