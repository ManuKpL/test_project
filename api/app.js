var express = require('express');
var app = express();

var rootRouter = require('./routes/root')

app.use(express.static('app'));
app.use('/', rootRouter);

app.listen(3000, function () {
  console.log("Server started, listening to port 3000... \n")
});
