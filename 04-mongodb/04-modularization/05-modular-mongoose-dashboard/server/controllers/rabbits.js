// var  mongoose = require('mongoose');
// var Rabbit = mongoose.model('Rabbit');
const Rabbit = require('mongoose').model('Rabbit');
module.exports = {
  index(request, response) {
    Rabbit.find({})
      .then(rabbits => {
        console.log(rabbits);
        response.render('index', { rabbits });
      })
      .catch(console.log);
  },

  show(request, response) {
    Rabbit.findById(request.params.id)
      .then(rabbit => {
        console.log(rabbit);
        response.render('show', { rabbit });
      })
      .catch(console.log);
  },
  create(request, response) {
    console.log(request.body)
    const rabbit = new Rabbit(request.body);
    rabbit.save()
      .then (rabbit => {
        console.log(rabbit);
        response.redirect('/')
      })
      .catch(error => {
        console.log('bad time to breed');
      });
  },

  edit(request, response) {
    Rabbit.findById(request.params.id)
      .then(rabbit => {
        console.log(rabbit);
        response.render('edit', { rabbit });
      })
      .catch(console.log);
  },

  update(request, response) {
    Rabbit.findByIdAndUpdate(request.params.id, request.body)
      .then (() => {
        response.redirect('/');
      })
      .catch(console.log);
  },

  new(request, response) {
    response.render('new');
  },

  destroy(request, response) {
    Rabbit.findByIdAndRemove(request.params.id)
      .then(rabbit => response.redirect('/'))
      .catch(console.log);
  }
};

