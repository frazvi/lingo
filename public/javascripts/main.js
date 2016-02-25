angular.module('lingoApp', [])

angular.module('lingoApp')
	.controller('translateController', ['$scope', '$http', function($scope, $http){
		$http.get('/')
		var s = $scope
		s.translator = function () {
			$http.post('/api/translate', s.word)
		}
	}]);

angular.module('lingoApp')
	.controller('quizController', ['$scope', function($scope){
		
	}]);
