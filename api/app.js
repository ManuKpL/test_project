var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json('Hello world')
});

app.listen(3000, function () {
  console.log("Server started, listening to port 3000... \n\n")
});
