/***
 * Services
 */
var WOTapiServices = angular.module('WOTapiServices', ['ngRoute', 'ngResource']);

/***
 * Controllers
 */
var WOTapiControlleurs = angular.module('WOTapiControlleurs', ['WOTapiServices']);

WOTapiControlleurs.controller('principal', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data = Data;
    $routeParams = tank_id = 1;
    console.log($routeParams);
}]);

/*Liste tous les tanks*/
WOTapiControlleurs.controller('listeTanks', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $http.get("https://api.worldoftanks.com/wot/encyclopedia/tanks/?application_id=demo").success(function (response)
    {
        $scope.data = response.data;
        $routeParams.ordre = 'level';
        console.log($routeParams);
    });
    $scope.params = $routeParams;
}]);

/*Liste les caracteristiques d'un tank specifique*/
WOTapiControlleurs.controller('caracTank', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $http.get("https://api.worldoftanks.com/wot/encyclopedia/vehicleprofile/?application_id=demo&tank_id="+$routeParams.tank_id).success(function (response)
    {
        $scope.data = response.data[$routeParams.tank_id];
        console.log($scope.data);
        console.log($routeParams);
    });
    $scope.params = $routeParams;
}]);