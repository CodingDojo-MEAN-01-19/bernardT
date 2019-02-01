// --------Declare node modules ----------
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// --------Create Routes ----------
app.get('/shoes', function(request, response) 
{
    var shoes_array = ["addidas", "nike", "reebok"];
    response.render('shoes', {shoes: shoes_array});
});

app.get('/details/:name', function(request, response) 
{
    var name = request.params.name
    console.log(name);
    var details_array = [
        {brand: "addidas", name:"addidas", title: "adidas Run Duramo Lite 2", description: "Upper - Textile, Lining and Sock - Textile, Sole - Other Materials"},
        {brand: "nike", name: "nike", title:"Nike Run Revolution 4", description: "Upper - Textile, Lining and Sock - Textile, Sole - Other Materials."},
        {brand: "reebok", name: "reebok", title:"Reebok Run Black Energy Lux", description:"Upper - Textile, Lining and Sock - Textile, Sole - Other Materials."},
    ];
    for(var i in details_array)
    {
        if (details_array[i].brand == name)
        {
            var context = details_array[i];
        }
    }
    response.render('details', {shoe : context});
});

// -----create listening------------
app.listen(8000, function() {
  console.log("server running on port 8000");
})