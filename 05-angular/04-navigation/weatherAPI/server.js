//Import everything
var express = require('express');
var app = express();

//Angular setup
app.use(express.static( __dirname + '/angularApp/dist/angularApp' ));

app.all("*", (req,res,next) => {
    res.sendFile("index.html", { root: './angularApp/dist/angularApp' })
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});