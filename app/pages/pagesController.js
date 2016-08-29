testApp.controller('pagesController', function ($scope, client) {
  client.on('hello', function (location) {
    client.emit('start stream', location);
  });
  // var tweets defined in map.js
  client.on('new tweet', function(data) {
    var coordinates = new google.maps.LatLng(data.lng,data.lat);
    tweets.push(coordinates);
  });
  $scope.$on('$destroy', function (event) {
    client.removeAllListeners();
  });
});
