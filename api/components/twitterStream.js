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
