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

myApp.controller("mainController", ['$scope', '$log', function($scope, $log) {

    $scope.people = [
        {
            name: "Shawn Conrad",
            address: "555 Main St.",
            city: "New York",
            state: "NY",
            zip: "10010"
        },
        {
            name: "Grace Conrad",
            address: "356 Able St",
            city: "New York",
            state: "NY",
            zip: "10010"
        },
        {
            name: "Sidney Conrad",
            address: "55 Moto Court",
            city: "New York",
            state: "NY",
            zip: "10010"
        }
    ];

    $scope.formattedAddress = function(person) {
        return person.address + ", " + person.city + ", " + person.state + " " + person.zip;
    };

}]);

myApp.controller("secondController", ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService) {



}]);

myApp.directive('searchResult', function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/search-result.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        compile: function(elem, attrs) {

            console.log('Compiling...');
            //elem.removeAttr("class")
            console.log(elem.html());

            return {

                post: function(scope, elements, attrs) {

                    console.log(scope);
                    console.log(elements);

                }

            }
        }
    }
});