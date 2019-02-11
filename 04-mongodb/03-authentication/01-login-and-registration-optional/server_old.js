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

//error messages statements
var flash = require('express-flash');
app.use(flash());

//session statements
var session = require("express-session");
app.set('trust proxy', 1) // trust first proxy
app.use(session({
	secret: 'F)\xbc\xc5\xb7w\xefNBLD.\x81\xde\x1c', //generate random secret key using os.urandom(16)
	resave: true, 
	saveUninitialized: true,
	cookie: { maxAge: 6000}
  }));

//bcrypt statements
var bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 10;

// Require mongoose (to receive post data from database)

var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_reg');

// initiate Schemas:
var UserSchema = new mongoose.Schema(
    {
    firstname: { 
        type: String, 
        required: [true, 'First name is required.'], 
        minlength: [2, 'First name must be at least 2 characters.'],
        trim: true
    },
    lastname: { 
        type: String, 
        required: [true, 'Last name is required.'], 
        minlength: [2, 'Last name must be at least 2 characters.'],
        trim: true
    },
    birthday: {
        type: Date, 
        required: [true, "Please enter your birthdate."],
        validate: { validator: function(value) 
            {
                var now = new Date();
                now.setUTCHours(0,0,0,0);
                var then = new Date(value);
                return then < now;
            },
            message: "Birthday must be in the past."
        }
    },
    password: {
        type: String, 
        required: [true, "Password is required."], 
        minlength: [4,"Minimum length 4 characters."]
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: [true, "You could not be logged in."],
        validate: {
            validator: function(value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: "Email format invalid."
        }
    },
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hashed_password => {
        this.password = hashed_password;
        next();
    })
    .catch(error => {
        console.log(error);
    });
})

UserSchema.plugin(uniqueValidator);

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function(request, response) {
    var errors = request.session.errors;
    request.session.errors = [];
    response.render("index", {errors:errors});
});

app.post('/register', function(request, response) {
    console.log("THIS IS REGISTER ");
    
    if (request.body.password !== request.body.pwconf) {
        for(var key in error.errors){
            request.flash('errors', error.errors[key].message);
            }
        }
    var newuser = new User({
    firstname : request.body.firstname,
    lastname : request.body.lastname,
    birthday : request.body.birthday,
    email : request.body.email,
    password : request.body.password,
    });
    newuser.save(function(error){
        console.log(" below the info", error)
        if (error){
            for(var key in error.errors){
                request.flash('errors', error.errors[key].message);
            }
            response.redirect("/");
        }
        else{
            console.log("success from the page.");
            request.session.firstname = newuser.firstname;
            request.session.lastname = newuser.lastname;
            request.session.id = newuser.id;
            response.redirect('/success');
        }
    })
    console.log(newuser);
});

app.post('/login', (request, response) => {

    console.log(" THIS IS LOGIN  ", request.body);
        User.findOne({email: request.body.email}, function(error, user){
            if (error){
                console.log("We have an error!", error);
                response.redirect("/");
            }
            else {
                if (user){
                    console.log(user);
                    bcrypt.compare(request.body.password, user.password, function(error, result){
                        if(result) {
                            request.session.firstname = user.firstname;
                            request.session.lastname = user.lastname;
                            request.session.user_id = user._id; 
                            response.redirect("/success");
                        }
                        else {
                            request.flash("errors", "incorrect username or password.");
                            console.log("login error:", error);
                            response.redirect("/");
                        }
                    })
                }
                ///only here if email not in DB
                else{
                    request.flash("errors", "incorrect username or password.");
                    console.log('user does not exist in DB');
                    response.redirect('/');
                }
        }
    })
});

app.get("/success", function(request, response){
    User.findOne({_id: request.session.user_id}, function(err, user){
            if(err) {
                response.redirect("/");
            }
            else {
                response.render("success", {user: user});
            }
        });
});
    
app.post('/logout', function(request, response){
    request.session.destroy();
    response.redirect('/');
    console.log("LOGOUT SUCCESSFUL.");
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

