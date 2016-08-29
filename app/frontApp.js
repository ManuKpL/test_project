var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'pagesController'
    });

  $locationProvider.html5Mode(true);
});
