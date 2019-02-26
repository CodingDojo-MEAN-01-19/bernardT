const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  id: Number,
  title: String,
  author: String,
  publisher: String,
  year: Number,
  pages: Number,
});

module.exports = mongoose.model('Book', BookSchema);
