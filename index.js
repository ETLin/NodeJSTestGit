var fs = require('fs');
var express = require('express');
var host = '127.0.0.1';
var port = 5000;

express()
.use(express.bodyParser())
.get('/', function (req, res) {
  res.sendfile('./index.html');
})
.post('/upload', function (req, res) {
  console.log(req.files);

  fs.readFile('./upload.html', 'utf8', function (err, data) {
    if (err) { throw err; }
    data = data.replace('{{length}}', req.files.upload.size);
    res.send(data);
  });
})
.listen(port, host);