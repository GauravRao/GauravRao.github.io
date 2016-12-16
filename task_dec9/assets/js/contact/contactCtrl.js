angular.module("myApp").controller("contactCtrl", function($scope) {
    $scope.data = {
        userName: '',
        email: '',
        phone: '',
        dob: '',
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
