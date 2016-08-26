var client = io.connect('http://localhost:3000')
client.on('hello', function() {
  client.emit('start stream');
});

var tweets = new google.maps.MVCArray();
var heatmap = new google.maps.visualization.HeatmapLayer({
    data: tweets,
    radius: 10
  });
heatmap.setMap(map);

client.on('new tweet', function(data) {
  var coordinates = new google.maps.LatLng(data.lng,data.lat);
  tweets.push(coordinates);
  console.log(data);
});

