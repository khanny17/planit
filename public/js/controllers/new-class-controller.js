angular.module('PlanitApp')

.controller('newClassController', ['$scope', function($scope){
  	var defaultTime = new Date();
  	defaultTime.setHours( 14 );
  	defaultTime.setMinutes( 0 );

	$scope.monday = false;
  	$scope.mondayTime = defaultTime;
  	$scope.tuesday = false;
  	$scope.tuesdayTime = defaultTime;
  	$scope.wednesday = false;
  	$scope.wednesdayTime = defaultTime;
  	$scope.thursday = false;
  	$scope.thursdayTime = defaultTime;
  	$scope.friday = false;
  	$scope.fridayTime = defaultTime;
  
  
}]);
