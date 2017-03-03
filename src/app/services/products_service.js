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
