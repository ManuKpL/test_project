testApp.controller('pagesController', function ($scope, client) {
  client.on('hello', function (location) {
    client.emit('start stream', location);
  });
  client.on('precise tweet', function(data) {
    var coordinates = new google.maps.LatLng(data.lng,data.lat);
    // var tweets defined in map.js
    tweets.push(coordinates);
  });
  $scope.$on('$destroy', function (event) {
    client.removeAllListeners();
  });
});
