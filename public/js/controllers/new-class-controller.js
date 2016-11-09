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
