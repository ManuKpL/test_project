var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

require('dotenv').config({silent: true});

app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));

server.listen(port, function () {
  console.log("\nServer started\n")
});

app.get('/',function (req, res) {
  res.sendFile('index.html');
});

var paris = '2.24,48.82,2.42,48.90';
var western_europe = '-4.63,39.83,17.02,53.12';
var world = '-180,-90,180,90';

var twitterStream = require('./components/twitterStream')

io.on('connection', function (client) {
  twitterStream.addUser(client.id);
  client.emit('hello', world);

  client.on('start stream', function (location) {
    twitterStream.startStream(location, client);
  });

  client.on('disconnect', function () {
    twitterStream.removeUser(client.id);
  });
});
