testApp.controller('pagesController', function ($scope, client) {
  $scope.counter = 0;
  $scope.preciseCounter = 0;
  $scope.averageCounter = 0;
  client.on('hello', function (location) {
    client.emit('start stream', location);
  });
  client.on('precise tweet', function(data) {
    $scope.counter++;
    $scope.preciseCounter++;
    var coordinates = new google.maps.LatLng(data.lng,data.lat);
    // var worldPreciseTweets defined in map.js
    worldPreciseTweets.push(coordinates);
  });
  client.on('average tweet', function(data) {
    $scope.counter++;
    $scope.averageCounter++;
    var coordinates = new google.maps.LatLng(data.lng,data.lat);
    // var worldAverageTweets defined in map.js
    worldAverageTweets.push(coordinates);
  });
  $scope.$on('$destroy', function (event) {
    client.removeAllListeners();
  });
});
