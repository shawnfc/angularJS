var myApp = angular.module("myApp", []);

myApp.controller("mainController", ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [
        {rulename: "Your handle must be 5 characters long."},
        {rulename: "Your handle must be letters or numbers."},
        {rulename: "These rules are awesome."}
    ];

}]);

