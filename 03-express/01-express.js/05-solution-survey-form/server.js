
//load the express module
//load the path module
//load the body-parser
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
// invoke const express and store the resulting application in const app
const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//we're going to have /routes/index.js handle all of our routing
require('./routes/index.js')(app);
// setting server to run on port 3000
app.listen(3000, function() {
 console.log("listening on port 3000!");
});