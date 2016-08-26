var client = io.connect('http://localhost:3000')
client.on('hello', function() {
  client.emit('start stream');
});
client.on('new tweet', function(coordinates) {
  console.log(coordinates);
});
