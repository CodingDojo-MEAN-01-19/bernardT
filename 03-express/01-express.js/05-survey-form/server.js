// --------Require controller files and folders----------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// --------Setting up Routes ----------
app.get('/', function(req, res) {
  res.render('index');
})

app.post('/result', function(req, res) {
  res.render('result', {data: req.body})
})

app.post('/home', function(req, res) {
  res.redirect('/');
})

// -----create listening------------
app.listen(port, () => console.log(`listening on port ${ port }`));