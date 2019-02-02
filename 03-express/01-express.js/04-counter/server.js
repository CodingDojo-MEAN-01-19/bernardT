
// --------Require controller files and folders----------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'F)\xbc\xc5\xb7w\xefNBLD.\x81\xde\x1c', //generate random secret key using os.urandom(16)
  resave: true, 
  saveUninitialized: true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// --------Setting up Routes ----------

// /* GET 'index' page */
app.get('/', function(request,response) {
  if (!request.session.count) {
    request.session.count = 0;
  }
  request.session.count += 1;
  response.render('index', {sessionCount: request.session.count});
})

/*POST 'counter' from index page */
app.post('/counter', function(request, response){
  request.session.count += 1;
  response.redirect('/');
})

/*POST 'reset' from index page */
app.post('/reset', function(request, response) {
  request.session.count = 0;
  response.redirect('/');
})

// -----create listening------------

app.listen(5000);
console.log("Listening at 5000");