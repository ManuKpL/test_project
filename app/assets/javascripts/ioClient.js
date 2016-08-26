var client = io.connect(window.location.host)
client.on('hello', function() {
  client.emit('start stream');
});

// var tweets defined in map.js
client.on('new tweet', function(data) {
  var coordinates = new google.maps.LatLng(data.lng,data.lat);
  tweets.push(coordinates);
});

