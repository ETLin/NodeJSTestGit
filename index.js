var http = require('http');
var url = require('url');
var fs = require('fs');
var host = '127.0.0.1';
var port = 5000;

http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url);
  console.log('parsedUrl',parsedUrl);

  if (parsedUrl.pathname === '/') {
    fs.readFile('./index.html', 'utf8', sendAsHTML);

  } else if (parsedUrl.pathname === '/upload') {
    var buffers = [];
    req.on('data', function (chunk) { buffers.push(chunk); });
    req.on('end', function () {
      var buf = Buffer.concat(buffers);
      console.log('length ['+buf.length+']');
      fs.writeFile('./uploads.tmp', buf, function (err) {
        if (err) { throw err; }
        
        fs.readFile('./upload.html', 'utf8', function (err, data) {
          if (err) { throw err; }
          data = data.replace('{{length}}', buf.length);
          sendAsHTML(null, data);
        });
      });
    });
  } else {
    console.log('Unknow pathname [' + parsedUrl.pathname + ']');
  }

  function sendAsHTML (err, data) {
    if (err) { throw err; }
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  }
}).listen(port, host);