var express = require('express');                             // Require the Express Module
var mongoose = require('mongoose');
var parser = require('body-parser');                      // Require body-parser (to receive post data from clients)
var path = require('path');                                   // Require path

var { Schema } = mongoose;
const port = process.env.PORT || 8000;                         // Setting our Server to Listen on Port: 8000
var app = express();                                          // Create an Express App


app.use(parser.urlencoded({ extended: true }));           // Integrate body-parser with our App
app.use(express.static(path.join(__dirname, './client/static')));    // Setting our Static Folder Directory

app.set('view engine', 'ejs');                                // Setting our View Engine set to EJS
app.set('views', path.join(__dirname, './client/views'));            // Setting our Views Folder Directory

require('./server/config/database.js');
// require('./server/config/routes.js')(app);

app.use(require('./server/config/routes'));

app.listen(port, () => console.log(`Listening on port ${ port}`));
