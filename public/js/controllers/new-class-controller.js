angular.module('PlanitApp')

.controller('newClassController', ['$scope', function($scope){
  	var defaultTime = new Date();
  	defaultTime.setHours( 14 );
  	defaultTime.setMinutes( 0 );

	$scope.days = [
		{
			name: 'Monday',
			active: false,
			time: defaultTime
		},
		{
			name: 'Tuesday',
			active: false,
			time: defaultTime
		},
		{
			name: 'Wednesday',
			active: false,
			time: defaultTime
		},
		{
			name: 'Thursday',
			active: false,
			time: defaultTime
		},
		{
			name: 'Friday',
			active: false,
			time: defaultTime
		}
	];  
  
}]);
