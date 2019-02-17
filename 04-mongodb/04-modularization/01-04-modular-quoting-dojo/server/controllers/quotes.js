// var  mongoose = require('mongoose');
// var Quote = mongoose.model('Quote');
const Quote = require('mongoose').model('Quote');
module.exports = {
    index(request, response) {
      response.render('index');
    },

    create(request, response) {
      console.log("POST DATA", request.body);
      var quote = new Quote(request.body);
      quote.save()
        .then(quote => {
          console.log(quote);
          response.redirect('/quotes');
        })
        .catch(error => {
          console.log("Error, try again")
          throw err;
          res.render('index');
        });
    },

    show(request, response) {
      Quote.find({})
        .then(quotes => {
          console.log(quotes);
          response.render('quotes', {quotes});
        })
        .catch(console.log);
    }
};
