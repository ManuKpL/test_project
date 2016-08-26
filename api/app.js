var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

app.use(express.static('app'));
app.use(express.static('bower_components'));

app.get('/',function (req, res) { res.sendFile('index.html') });

server.listen(port, function () {
  console.log("\nServer started, listening to port 3000...\n")
  console.log("\nsee: http://localhost:3000/\n")
});


require('dotenv').config({silent: true});

var tw = require('./initializers/twitter');
var stream = null;
var paris = '2.24,48.82,2.42,48.90';
var western_europe = '-4.63,39.83,17.02,53.12';
var world = '-180,-90,180,90';
var users = [];

io.on('connection', function (client) {
  client.emit('hello');
  if (users.indexOf(client.id) === -1) {
    users.push(client.id);
  }
  console.log(users.length + ' client(s) connected');

  client.on('start stream', function () {
    if (stream === null) {
      tw.stream('statuses/filter', { locations: western_europe }, function (twStream) {
        console.log('Stream started');
        stream = twStream;
        stream.on('data', function (data) {
          if (users.length > 0) {
            if (data.coordinates) {
              var coordinates = {"lat": data.coordinates.coordinates[0],"lng": data.coordinates.coordinates[1]};
              client.broadcast.emit('new tweet', coordinates);
              client.emit('new tweet', coordinates);
            }
          } else {
            stream.destroy();
            stream = null;
          }
        });
        stream.on('destroy', function (response) {
          console.log('Stream ended');
        });
      });
    }
  });

  client.on('disconnect', function () {
    var index = users.indexOf(client.id);
    if (index !== -1) {
      users.splice(index, 1);
    }
    console.log(users.length + ' client(s) connected');
  });
});
