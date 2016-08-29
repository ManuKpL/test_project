testApp.factory('client', function ($rootScope) {
  var client = io.connect();
  return {
    on: function (eventName, callback) {
      client.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(client, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      client.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(client, args);
          }
        });
      })
    },
    removeAllListeners: function (eventName, callback) {
      socket.removeAllListeners(eventName, function() {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    }
  };
});
