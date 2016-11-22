var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider	
	.when('/home', 
	{
		templateUrl: 'v_home/home.html',
		controller: 'HomeController'
	})
	.when('/usertype',
	{
		templateUrl: 'v_usertype/frmUserType.html',
		controller: 'UserTypeController'
	})
	.otherwise({redirectTo: '/'});
})