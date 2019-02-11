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
mongoose.connect('mongodb://localhost/message_board');
// initiate Schemas:

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true},
	message: {type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}] }, {timestamps: true});

var CommentSchema = new mongoose.Schema({
	_message: {type: Schema.Types.ObjectId, ref: 'Message'},
	name: {type: String, required: true },
	text: {type: String, required: true } }, {timestamps: true});

// now set the models by passing them their respective Schemas:
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);


// store models in variables:

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


app.get('/', function(req,res){

	Message.find({}).populate('comments').exec(function(err, messages){

		res.render('index', {messages: messages})
	})
	
})

app.post('/message', function(req,res){

	// create & save message obj:
	var message = new Message({name: req.body.name, message: req.body.message});


	message.save(function(err){

			if (err){
				throw err;
				res.render('index', {errors: err});
			}
			res.redirect('/');	

		});
	
})

app.post('/comment', function(req,res){
	Message.findOne({_id: req.body.messageId}, function(err, message){
		var comment = new Comment({name: req.body.name, text: req.body.comment});
		// link comment to its message id: via ref
		comment._message = message._id
		console.log("This is comment: " + comment + " AND " + comment._message);
		comment.save(function(err){
			message.comments.push(comment);
			message.save(function(err){
				if(err){
					res.render('index', {errors: err})
					throw err;
				}
				else{
					res.redirect('/')
				}
			})
		})
	})
})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})