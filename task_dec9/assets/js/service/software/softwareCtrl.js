angular.module("myApp").controller("softwareCtrl", function($scope, $http) {
    $http.get("assets/data/service.json").then(function(response) {
        $scope.answer = response.data.software;
    });
});
