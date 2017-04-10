var app = angular.module('myApp', ['ui.router', 'ngMaterial']);
app.controller('LoginCtrl', function() {

});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('login')
        .when('/', 'login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'LoginCtrl'
        });
}]);

app.controller('AppController', function($scope) {});
