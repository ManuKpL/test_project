var testApp = angular.module('testApp', ['ngRoute']);

testApp.controller('pagesController', function () {
  this.greet = 'Hello World'
});

testApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'pagesController'
    });
});
