var client = io.connect('http://localhost:3000')
client.on('hello', function(data) {
  console.log("HELLO " + data.hello);
  client.emit('start stream');
});
client.on('bye', function(data) {
  console.log("BYE " + data.bye)
});
client.on('data', function(data) {
  console.log(data)
});
