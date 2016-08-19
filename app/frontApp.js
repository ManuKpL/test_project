var testApp = angular.module('testApp', ['ngRoute']);

testApp.controller('pagesController', function () {
  this.greet = 'Hello World'
});

testApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'pagesController'
    });

  $locationProvider.html5Mode(true);
});
