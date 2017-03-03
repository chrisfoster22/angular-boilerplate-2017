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

angular.module("myApp").controller('HomeController', function($scope) {

        $scope.message = "What's up?";
        $scope.text = "My other text";

        $scope.addUser = addUser;

        $scope.users = [
                {
                        fname: "Chris",
                        lname: "Foster",
                        location: "Philadelphia"
                },
                {
                        fname: "George",
                        lname: "Cool",
                        location: "Barcelona"
                },
                {
                        fname: "Paul",
                        lname: "McBlarney",
                        location: "Utrecht"
                }
        ];

        function addUser(fname, lname, location) {
                var user = {
                        fname: fname,
                        lname: lname,
                        location: location
                };

                $scope.users.push(user);
        }
});

angular.module("myApp").controller('ProductsController', function($scope, $http, ProductsService) {

    $scope.products;
    $scope.productsService;

    $scope.$watch('ProductsService.products', function() {
        $scope.ProductsService = ProductsService;
        $scope.products = $scope.ProductsService.products;
    })

});

angular.module("myApp").factory('ProductsService', function($http) {

	var service = {};
	// service.getProducts = getProducts;
	getProducts();
	return service;

	function getProducts() {
		$http({
			method: 'GET',
			url: 'http://localhost:3000/products'
		}).then(function successCallback(response) {
		   service.products = response.data;
		}, function errorCallback(error) {
			console.log(error)
		});
	}

});
