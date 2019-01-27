var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  console.log(req.url);
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    })
  } else if (req.url === '/ninjas') {
    fs.readFile('ninjas.html', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    })
  } else if (req.url === '/dojos/new') {
    fs.readFile('dojos.html', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    })
  } else if (req.url === '/images/') {
    fs.readFile('blogging.jpg', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'images/jpg'});
      res.write(contents);
      res.end();
    })
  } else {
    res.writeHead(404);
    res.end('File not found!!!');
  }
})

server.listen(9000);
console.log("Running in localhost at port 9000");