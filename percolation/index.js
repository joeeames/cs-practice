var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + "/"));
//
//app.get('/', function(req, res) {
//  res.sendfile(__dirname + '/index.html');
//});
//
//app.get('/results', function(req, res) {
//  res.sendfile(__dirname + '/index.html');
//});

app.all('*', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});




app.listen(3000);