var http = require('http');
var host = '127.0.0.1';

http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  var body = 
'<html>'+
'<head>'+
  '<title>An Example Page</title>'+
'</head>'+
'<body>'+
  'Hello World, this is a very simple HTML document.'+
'</body>'+
'</html>'
  
  res.setHeader('Content-Length', body.length);
  res.end(body);
}).listen(5000, host);