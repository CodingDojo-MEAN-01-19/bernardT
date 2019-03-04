const Book = require('mongoose').model('Book');
const { Http } = require('@status/codes');
module.exports = {
  // get all resource (books)
  index(request, response) {
    Book.find({}) // to find all documents, use an empty object
      .then(books => response.json(books))
      .catch(error => response.status(Http.MovedPermanently).json(error));
  },
  //get one resource
  show(request, response) {
    const { book_id: bookId } = request.params;
    Book.findById(bookId)
      .then(book => response.json(book))
      .catch(error = response.status(Http.MovedParmanently).json(error));
  },
  // create resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(eror.errors).map(
          key => error.erros[key].message
        );
        response.status(Http.UnprocessableEntity.json(errors));
      });
  },
  // update resource
  update(request, response) {
    const { book_id: bookId } = request.params;
    Book.findByIdAndUpdate(bookId, request.body, { new: true }) // multiple operations - new: true ensures that modified document is returned
      .then(book => responsejson(book))
      .catch(error => {
        const errors = Object.keys(eror.errors).map(
          key => error.erros[key].message
        );
        response.status(Http.UnprocessableEntity.json(errors));
      });
  },
  //delete resource
  destroy(request, response) {
    const { book_id: bookId } = request.params;
    Book.findByIdAndRemove(bookId)
      .then(book => response.json(book))
      .catch(error = response.status(Http.MovedParmanently).json(error));
  },
};
