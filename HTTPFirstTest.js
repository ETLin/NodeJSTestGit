var http = require('http');
var host = '127.0.0.1';
var port = 5000;

console.log('before calling http.createServer');
http.createServer(function (req, res) {
  console.log(req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);

  res.end('ok');
}).listen(port, host, function () {
  console.log('HTTP server started at ' + host + ':' + port);
});
console.log('http.createServer and .listen called');