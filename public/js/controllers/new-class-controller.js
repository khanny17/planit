angular.module('PlanitApp')

.controller('newClassController', ['$scope', function($scope){
  	var defaultTime = new Date();
  	defaultTime.setHours( 14 );
  	defaultTime.setMinutes( 0 );

	$scope.days = [
		{
			name: 'Monday',
			active: false,
			time: defaultTime,
			duration: 1 //How long the class is, in hours
		},
		{
			name: 'Tuesday',
			active: false,
			time: defaultTime,
			duration: 1 //How long the class is, in hours
		},
		{
			name: 'Wednesday',
			active: false,
			time: defaultTime,
			duration: 1 //How long the class is, in hours
		},
		{
			name: 'Thursday',
			active: false,
			time: defaultTime,
			duration: 1 //How long the class is, in hours
		},
		{
			name: 'Friday',
			active: false,
			time: defaultTime,
			duration: 1 //How long the class is, in hours
		}
	];  
  
}]);
