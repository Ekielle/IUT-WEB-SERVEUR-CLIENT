var serverAddress = '127.0.0.1';
var serverPort = 1337;
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(serverPort, serverAddress);

console.log('Server running at http://'+serverAddress+':'+serverPort+'/');