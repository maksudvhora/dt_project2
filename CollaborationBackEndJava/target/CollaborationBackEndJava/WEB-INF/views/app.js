var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider	
	.when('/', 
	{
		templateUrl : 'v_home/index.html',
		controller : 'HomeController'
	})
	.when('/frmUserType',
	{
		templateUrl : 'v_usertype/frmUserType.html',
		controller : 'UserTypeController'
	})
	alert("hi");
})