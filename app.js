(function() {
    var app = angular.module('myApp', []);
    app.controller("ValueController", function() {
        this.value = valueDemo;
    });
    var valueDemo = [{
        name: 'abc',
        age: 22
    },
    {
        name:'pqr',
        age:22
    },
    {
      name:'xyz',
      age:22
    }
];
})();
