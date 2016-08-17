var express = require('express');
var app = express();

app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));

app.get('/',function (req, res) { res.sendFile('index.html') });

app.listen(3000, function () {
  console.log("\nServer started, listening to port 3000...\n")
  console.log("\nsee: http://localhost:3000/\n")
});
