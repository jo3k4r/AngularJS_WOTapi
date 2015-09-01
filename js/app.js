
    var pawsApp = angular.module("pawsApp", ['ngRoute', 'ngResource', 'pawsServices', 'pawsControllers']);

    pawsApp.controller('mainController',
    function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });

    pawsApp.config(function($routeProvider) {
          $routeProvider
            .when('/accueil', {
            templateUrl: './js/components/WOT/home.tpl.html'
            })
            .when('/liste', {
            templateUrl: './js/components/WOT/vues/listeTanks.tpl.html'
            })
            .when('/caracTank', {
            templateUrl: './js/components/WOT/vues/caracTank.tpl.html'
            })
            .when('/caracTank/:tank_id', {
            templateUrl: './js/components/WOT/vues/caracTank.tpl.html'
            })
            .otherwise({
            templateUrl: './js/components/WOT/home.tpl.html'
            });
    });

    pawsApp.factory('Data', function () {
      return { message: "Variable Data globale" };
    });
