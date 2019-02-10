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
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {timestamps: true})

mongoose.model('User', UserSchema);

var User = mongoose.model('User')
// mongoose.Promise = global.Promise;

// Routes
// Root Request
// app.get('/', function(req, res) {
//     // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
//     res.render('index');
// })
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var user_document = new User({name: req.body.name, age: req.body.age});
    user_document.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a user!');
        }
        res.redirect('/');
    })
})

app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            console.log('something went wrong');
            throw err;
        }
        console.log('My Users:', users);
        res.render('index', {users} );

        // res.redirect('/');
      // This is the method that finds all of the users from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the users
      // Keep in mind that everything you want to do AFTER you get the users from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
    })
  })


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})