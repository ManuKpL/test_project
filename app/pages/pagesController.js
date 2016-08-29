testApp.controller('pagesController', function ($scope, client) {
  client.on('hello', function (location) {
    client.emit('start stream', location);
  });
  client.on('precise tweet', function(data) {
    var coordinates = new google.maps.LatLng(data.lng,data.lat);
    // var preciseTweets defined in map.js
    preciseTweets.push(coordinates);
  });
  client.on('average tweet', function(data) {
    var coordinates = new google.maps.LatLng(data.lng,data.lat);
    // var averageTweets defined in map.js
    averageTweets.push(coordinates);
  });
  $scope.$on('$destroy', function (event) {
    client.removeAllListeners();
  });
});
