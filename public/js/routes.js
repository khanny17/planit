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
		})

        .state('inside', {
            abstract: true,
            templateUrl: 'views/inside.html'
        })

		.state('inside.home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})

		.state('inside.newclass', {
			url: '/newclass',
			templateUrl: 'views/newclass.html'
		});
}])
