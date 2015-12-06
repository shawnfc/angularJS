var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});

myApp.service('nameService', function() {
    var self = this;
   this.name = 'Shawn Conrad';
    this.nameLength = function() {
     return self.name.length;
    }

});

myApp.controller("mainController", ['$scope', '$location', '$log', 'nameService', function($scope, $location, $log, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.nameLength());

}]);

myApp.controller("secondController", ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    $scope.num = $routeParams.num || 1;

}]);