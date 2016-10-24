angular.module('PlanitApp')

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
function( $stateProvider,   $urlRouterProvider,   $locationProvider) {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);

	//Define States here
	$stateProvider
		.state('login', {
			url: '/',
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		
		.state('register', {
			url: '/register',
			templateUrl: 'views/register.html',
			controller: 'registerController'
		});
}])