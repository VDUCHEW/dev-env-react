var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public/assets'));

app.listen(port);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
