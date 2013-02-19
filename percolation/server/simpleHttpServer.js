var http = require('http');

var server = http.createServer(function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plan'});
    response.write('this is a simple server');
    response.end();
}).listen(3000);