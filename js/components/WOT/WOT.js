/***
 * Services
 */
var pawsServices = angular.module('pawsServices', ['ngRoute', 'ngResource']);

/***
 * Controllers
 */
var pawsControllers = angular.module('pawsControllers', ['pawsServices']);

pawsControllers.controller('mainPaws', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data = Data;
    $scope.data.tank_id = 1;

}]);

/*Liste tous les tanks*/
pawsControllers.controller('listeTanks', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $http.get("https://api.worldoftanks.eu/wot/encyclopedia/tanks/?application_id=demo").success(function (response)
    {
        $scope.data = response.data;
        console.log($routeParams);
    });
    $scope.params = $routeParams;
}]);

/*Liste les caracteristiques d'un tank specifique*/
pawsControllers.controller('caracTank', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $http.get("https://api.worldoftanks.eu/wot/encyclopedia/vehicleprofile/?application_id=demo&tank_id="+$routeParams.tank_id).success(function (response)
    {
        $scope.data = response.data[$routeParams.tank_id];
        console.log($scope.data);
        console.log($routeParams);
    });
    $scope.params = $routeParams;
}]);