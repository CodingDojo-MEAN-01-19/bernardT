var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
  console.log(request.url);
  if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/cats') {
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/cars/new') {
    fs.readFile('./views/new_car.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents),
      response.end();
    })
  } else if(request.url === '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
 else if (request.url ==='/images/cats1.jpg') {
    fs.readFile('./images/cats1.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/cats2.jpg') {
    fs.readFile('./images/cats2.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/cats3.jpg') {
    fs.readFile('./images/cats3.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/gm1.jpg') {
    fs.readFile('./images/gm1.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/gm2.jpg') {
    fs.readFile('./images/gm2.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url ==='/images/gm3.jpg') {
    fs.readFile('./images/gm3.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else {
      response.writeHead(404);
      response.end("Page not available!");
  }
})

server.listen(7077);
console.log("Running in localhost at port 7077.")
