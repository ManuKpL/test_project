var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
require('dotenv').config({silent: true});

app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));

app.get('/',function (req, res) { res.sendFile('index.html') });

app.listen(port, function () {
  console.log("\nServer started, listening to port 3000...\n")
  console.log("\nsee: http://localhost:3000/\n")
});
