const express = require('express'),
  mongoose = require('mongoose'),
  parser = require('body-parser'),
  path = require('path'),
  { Schema } = mongoose,
  port = process.env.PORT || 8000;

const app = express();

app.use(parser.json());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));

require('./server/config/database.js');
app.use(require('./server/config/routes'));

app.listen(port, () => console.log(`Listening on port ${ port}`));
