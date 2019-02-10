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
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote')
// mongoose.Promise = global.Promise;

// Routes
// Root Request
// app.get('/', function(req, res) {
//     // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
//     res.render('index');
// })
// Add User Request 

app.get('/', function(req, res){
    res.render('index');
});

app.post('/quotes', function(req, res){
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err) {
            console.log('Error, try again');
        } 
        else { console.log('Successfully added quote!');
        }
        res.redirect('/');
        });   
    });

    app.get('/quotes', function(req, res){
        console.log("Getting Quotes Page...")
        Quote.find({}, function(err, quotes){
            console.log(quotes);
            console.log(quotes[0])
            if(err){
                console.log("Error, try again")
                throw err;
                res.render('index');
            }
            console.log('My quotes:', quotes);
            res.render('quotes', {quotes} );
        });
    })

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})