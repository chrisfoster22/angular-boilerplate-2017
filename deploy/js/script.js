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

		.state('portal', {
		    url: "/portal",
		    templateUrl: "views/portal.html"
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
