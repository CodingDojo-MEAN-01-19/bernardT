// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Require mongoose (to receive post data from database)
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_rabbit');
var RabbitSchema = new mongoose.Schema({
    name: String,
    description: String
}, {timestamps: true})
mongoose.model('Rabbit', RabbitSchema);
var Rabbit = mongoose.model('Rabbit')

app.get('/new', function(req,res){
	res.render('new');
})
app.get('/', function(req,res){
	Rabbit.find({}, function(err, rabbits){
		if (err){
			console.log('Error is: ' + err);
			res.render('index', {errors: err, rabbits: rabbits});
		} else {
			console.log('Rabbits came back as: ' + rabbits);
			res.render('index', {errors: err, rabbits: rabbits});
		}
	})
})

app.post('/', function(req, res){
	console.log("POST DATA", req.body);
	var rabbit = new Rabbit({name: req.body.name, description: req.body.description });
	rabbit.save(function(err){
		if (err) {
			console.log('ERROR! Something went wrong');
			res.redirect('/');
		} else {
			console.log('New rabbit born!!');
			res.redirect('/');
		}
	})

})

app.get('/show/:_id', function(req,res){
	console.log("i found you: " + Rabbit.findOne( {_id: req.params._id} ));
	 Rabbit.findOne({_id: req.params._id}, function(err, rabbit) {
	 	if (err){
	 		console.log("Error: " + err);
	 		res.render('show',  {error: err });
	 	} else {
	 		res.render('show',  {rabbit: rabbit });
	 	}
	 });
	
})

app.get('/edit/:_id', function(req,res){
	Rabbit.findOne({_id: req.params._id}, function(err, rabbit) {
	 	if (err){
	 		console.log("Error: " + err);
	 		res.render('edit',  {error: err });
	 	} else {
	 		res.render('edit',  {rabbit: rabbit });
	 	}
	 });
})

app.post('/update/:_id', function(req,res){
	Rabbit.findOne({_id: req.params._id}, function(err, rabbit){
		rabbit.name = req.body.name;
		rabbit.description = req.body.description;
		rabbit.save(function(err){
			if (err){
				console.log("Error: " + err);
				res.redirect('/');
			}
		})
	});

	res.redirect('/');
})

app.get('/destroy/:_id', function(req,res){

	Rabbit.remove({_id: req.params._id}, function(err){
			if (err){
				console.log("Error: " + err);
			}
	});
	res.redirect('/');
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})