var http = require('http');
var host = '127.0.0.1';

http.createServer(function (req, res) {

console.log(req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);

console.log('Host:' + host);
}).listen(5000, host);