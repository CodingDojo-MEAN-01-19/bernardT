const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs'); // working with file system to read a directory

const modelsPath = path.join(__dirname, '../models');
// const modelsPath = path.resolve('server', 'models'); revolves top down entire structure

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => console.log('mongodb connected'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('js'))
  .forEach(file => require(path.join(modelsPath, file)));
