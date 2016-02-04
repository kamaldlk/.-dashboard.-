'use strict';
angular.module("dashboard").config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardCtrl'
            })
            .state('dashboardEdit', {
                url: '/dashboardEdit',
                templateUrl: 'templates/dashboardEdit.html',
                controller: 'dashboardEditCtrl'
            })

         
    }
]);