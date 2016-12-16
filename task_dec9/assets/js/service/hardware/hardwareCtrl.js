angular.module("myApp").controller("hardwareCtrl", function($scope, $http) {
    $http.get("assets/data/service.json").then(function(response) {
        $scope.answer = response.data.hardware;
    });
});
