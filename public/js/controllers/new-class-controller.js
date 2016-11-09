angular.module('PlanitApp')

.controller('newClassController', ['$scope', 'classService', function($scope, classService){
  	var defaultTime = new Date();
  	defaultTime.setHours( 14 );
  	defaultTime.setMinutes( 0 );

	$scope.submit = function() {
		classService.addClass($scope.className, $scope.days);
	};
	
	$scope.invalidForm = function() {
		if(!$scope.className) {
			return true;	
		}
		
		//Array.prototype.every() stops looping and returns false when the callback returns false
		// if no callbacks return false, it returns true
		return $scope.days.every(function(day){
			//If even one day is active, then the form is valid
			if(day.active) {
				return false;
			}
			return true;
		});
	};
	
	$scope.days = [
		{
			name: 'Monday',
			active: false,
			time: defaultTime,
			duration: 60 //How long the class is, in minutes
		},
		{
			name: 'Tuesday',
			active: false,
			time: defaultTime,
			duration: 60
		},
		{
			name: 'Wednesday',
			active: false,
			time: defaultTime,
			duration: 60
		},
		{
			name: 'Thursday',
			active: false,
			time: defaultTime,
			duration: 60
		},
		{
			name: 'Friday',
			active: false,
			time: defaultTime,
			duration: 60
		}
	];  
  
}]);
