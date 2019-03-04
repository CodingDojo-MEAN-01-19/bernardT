// require mongoose
const mongoose = require('mongoose');
// file server
const fs = require('fs');
// path to make it a little easier to write file paths
const path = require('path');
const modelsPath = path.join(__dirname, '../models');

// set mongoose's promise to the global promise, even if we don't use it, it makes the warning message go away
mongoose.Promise = global.Promise;
// connect to a database, CHANGE THIS PER PROJECT
mongoose.connect('mongodb://localhost/restfulTask', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// save the path to the models folder
mongoose.connection.on('connected', () => console.log('mongodb connected'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('js'))
  .forEach(file => require(path.join(modelsPath, file)));
