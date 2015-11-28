var myApp = angular.module("myApp", []);

myApp.controller("mainController", ['$scope', '$filter', function($scope, $filter) {

    $scope.alertClick = function() {
        alert("You've clicked!");
    }

    $scope.name = "Freshco Da Flowa"

}]);

