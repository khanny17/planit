angular.module('PlanitApp')

.controller('accountSettingsController', ['$scope', function($scope){

    $scope.schoolStartTime = new Date();
  	$scope.schoolStartTime.setHours( 8 );
  	$scope.schoolStartTime.setMinutes( 45 );
    
    $scope.schoolEndTime = new Date();
  	$scope.schoolEndTime.setHours( 14 );
  	$scope.schoolEndTime.setMinutes( 15 );
    
    
    $scope.submit = function() {
        
    };

}]);
