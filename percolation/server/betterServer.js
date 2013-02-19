var http = require('http'),
  fs = require('fs'),
  path = require('path'),
  url = require('url');

var server = http.createServer(function onRequest(req, res) {
  var urlParts = url.parse(req.url);

  var doc = '.' + urlParts.pathname;
  console.log(doc);
//  if(doc === './') {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    fs.createReadStream('index.html').pipe(res);
//  } else {

    fs.exists(doc, function fileExists(exists) {
      if(exists) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.createReadStream(doc).pipe(res);

      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
      }
    });
//  }
}).listen(3000);