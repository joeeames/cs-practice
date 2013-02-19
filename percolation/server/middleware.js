var connect = require('connect'),
    fs = require('fs');

var interceptorFunction = function (request, response, next) {

}

var server = connect().
  use(connect.static(__dirname, '.')).
  use(interceptorFunction).
  use(function onRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('index.html').pipe(res);
  }).listen(3000);