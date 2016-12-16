var routerApp = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);

routerApp.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
    //For default page loading
    $urlRouterProvider.otherwise('/home');


    $ocLazyLoadProvider.config({
        'debug': true, // For debugging 'true/false'
        'events': true, // For Event 'true/false'
        'modules': [{ // Set modules initially
            name: 'home', // State1 module
            files: ['assets/js/home/homeCntrl.js'],
        }, {
            name: 'contact', // State2 module
            files: ['assets/js/contact/contactCtrl.js']
        }, {
            name: 'service.software',
            files: ['assets/js/service/software/softwareCtrl.js']
        }, {
            name: 'service.hardware',
            files: ['assets/js/service/hardware/hardwareCtrl.js']
        }]
    });



    //For navigating through different pages using state

    $stateProvider.state('home', {
        url: "/home",
        views: {
            "": {
                templateUrl: "home.html",
                controller: 'homeCntrl'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('home'); // Resolve promise and load before view
            }]
        }
    });

    $stateProvider.state('contact', {
        url: "/contact",
        views: {
            "": {
                templateUrl: "contact.html",
                controller: 'contactCtrl'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('contact'); // Resolve promise and load before view
            }]
        }
    });
    $stateProvider.state('service', {
        url: '/service',
        templateUrl: 'service.html',
    });
    $stateProvider.state('service.software', {
        url: "/software",
        views: {
            "": {
                templateUrl: "software.html",
                controller: 'softwareCtrl'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('service.software'); // Resolve promise and load before view
            }]
        }
    });
    $stateProvider.state('service.hardware', {
        url: "/hardware",
        views: {
            "": {
                templateUrl: "hardware.html",
                controller: 'hardwareCtrl'  
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('service.hardware'); // Resolve promise and load before view
            }]
        }
    });

}]);
