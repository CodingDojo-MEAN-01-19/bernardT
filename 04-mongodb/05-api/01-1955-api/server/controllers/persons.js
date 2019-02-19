const Person = require('mongoose').model('Person');

module.exports = {
    index(request, response) {
        Person.find({})
        .then(persons => {
          console.log(persons);
          response.json(persons);
        })
        .catch(error => {
          response.json({ message: "Error", error: error });
        })
    },
    show(request, response) {
        Person.findOne({ name: request.params.name })
        .then(person => {
          console.log(person);
          response.json(person);
        })
        .catch(error => {
          response.json({ message: "Error", error: error })
        })
    },
    create(request, response) {
      Person.create({name: request.params.name})
      person.save()
        .then(
          response.redirect('/')
        )
        .catch(error => {
          response.json({ message: "Error", error: error });
        })
    },
    destroy(request, response) {
      Person.findOneAndRemove(request.params.name)
        .then(person => response.redirect('/'))
        .catch(error => {
          response.json({message: "Error", error: error});
        })
    }
};
