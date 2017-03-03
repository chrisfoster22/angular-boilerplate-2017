(function() {

	var myApp = angular.module('myApp', [
		'ui.router',
		'ngSanitize'
	]);

	myApp.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/home");

		$stateProvider
		.state('home', {
		    url: "/home",
		    templateUrl: "views/home.html"
		})

		.state('products', {
		    url: "/products",
		    templateUrl: "views/products.html"
		})
	});

}());
