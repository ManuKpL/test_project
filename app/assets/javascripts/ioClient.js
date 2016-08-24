var client = io.connect('http://localhost:3000')
client.on('hello', function(data) {
  client.emit('start stream');
});
client.on('data', function(data) {
  console.log(data);
});
