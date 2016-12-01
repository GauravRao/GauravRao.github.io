var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.data = {
        userName: '',
        email: '',
        phone: '',
        gender: '',
        checkVal1: '',
        checkVal2: '',
        checkVal3: '',
        checkVal4: '',
        submit: function() {
            $scope.answer = $scope.data;
            // console.log($filter("json")($scope.answer));
            console.log($scope.answer);
        },
        reset: function() {
            $scope.data = '';
            $scope.myForm.$setPristine();
        }
    };
});
app.service("SelectService", function() {

    this.getOptions = function() {
        var availableOptions = ['abc', 'pqr', 'xyz', 'lmn'];
        return availableOptions;
    };
});
app.controller("selectController", function($scope, SelectService) {
    $scope.availableOptions = SelectService.getOptions();
    $scope.selectValue = "abc";
});
