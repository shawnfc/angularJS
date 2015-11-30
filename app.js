var myApp = angular.module("myApp", []);

myApp.controller("mainController", ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.alertClick = function() {
        alert("You've clicked!");
    };

    $scope.name = "Freshco Da Flowa"

}]);

