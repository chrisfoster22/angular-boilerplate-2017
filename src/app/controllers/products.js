angular.module("myApp").controller('ProductsController', function($scope, $http, ProductsService) {

    $scope.products;
    $scope.productsService;

    $scope.$watch('ProductsService.products', function() {
        $scope.ProductsService = ProductsService;
        $scope.products = $scope.ProductsService.products;
    })

});
