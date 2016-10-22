module.exports = {
  startStream: startStream,
  addUser: addUser,
  removeUser: removeUser
}

var tw = require('../initializers/twitter');
var stream = null;
var users = [];

function startStream(location, client) {
  if (stream === null) {
    tw.stream('statuses/filter', { locations: location }, function (twStream) {
      console.log('Stream started');
      stream = twStream;
      stream.on('data', function (data) {
        if (users.length > 0) {
          if (data.coordinates) {
            var coordinates = {
              "lat": data.coordinates.coordinates[0],
              "lng": data.coordinates.coordinates[1]
            };
            client.broadcast.emit('precise tweet', coordinates);
            client.emit('precise tweet', coordinates);
          } else {
            var bounding_box = data.place.bounding_box.coordinates[0];
            var first = bounding_box[0];
            var second = bounding_box[2];
            var coordinates = {
              "lat": (first[0] + second[0]) / 2,
              "lng": (first[1] + second[1]) / 2
            }
            client.broadcast.emit('average tweet', coordinates);
            client.emit('average tweet', coordinates);
          }
        } else {
          stream.destroy();
        }
      });
      stream.on('destroy', function (response) {
        console.log('Stream destroyed');
        stream = null;
      });
      stream.on('end', function (response) {
        console.log('Stream ended');
        stream = null;
      });
    });
  }
}

function addUser(user) {
  if (users.indexOf(user) === -1) {
    users.push(user);
  }
  logUsers();
}

function removeUser(user) {
  var index = users.indexOf(user);
  if (index !== -1) {
    users.splice(index, 1);
  }
  logUsers();
}

function logUsers() {
  console.log(users.length + ' client(s) connected');
}
