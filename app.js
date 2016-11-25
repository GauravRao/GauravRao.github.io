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
        name:'xyx',
        age:22
    }
];
})();
