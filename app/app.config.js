'use strict';

angular.module('news').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '../views/homepage.html',
        }).when('/phones', {
            template: '<phone-list></phone-list>'
        }).when('/list/:type', {
            template: '<product-list></product-list>'
        }).when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).otherwise('/phones');
        $locationProvider.html5Mode(true);
}
]);
