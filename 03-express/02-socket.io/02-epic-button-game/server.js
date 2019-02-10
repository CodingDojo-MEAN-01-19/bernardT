const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './public')); 
app.set('view engine', 'ejs');
const server = app.listen(1337);
const io = require("socket.io")(server);
var count = 1;

app.get('/', function(req, res) { 
res.render("index.ejs");
})

io.on('connection', function(socket){ //2 This triggers our server's connection listener to run, and this occurs for every new socket connection. 
    
    socket.on("requestCounter", function() { //3 
        let counter =  count++;
        console.log("counter started by server", counter)
        // return counter;
        io.emit("counterMessage",{counter});
        
    }) 
    socket.emit("counterMessage",{counter:count});

    socket.on("resetRequest", function() { //3 
        count = 0;
        let reset = count;
        console.log("reset started by server", reset)
        // return reset;
        io.emit("resetCounter",{reset});
    }) 
    // io.emit("resetCounter",{reset:count});

}); 



