angular.module('PlanitApp')

.controller('newClassController', ['$scope', function($scope){
  var default = new Date();
  d.setHours( 14 );
  d.setMinutes( 0 );

	$scope.monday = false;
  $scope.mondayTime = default;
  $scope.tuesday = false;
  $scope.tuesdayTime = default;
  $scope.wednesday = false;
  $scope.wednesdayTime = default;
  $scope.thursday = false;
  $scope.thursdayTime = default;
  $scope.friday = false;
  $scope.fridayTime = default;
  
  
}]);
