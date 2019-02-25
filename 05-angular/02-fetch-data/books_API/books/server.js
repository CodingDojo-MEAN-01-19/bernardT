const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app.use(parser.urlencoded({ extended: true })); // express middleware
app.use(parser.json());
app.use(express.static(path.join(__dirname, '/dist/public')));
app.use(require('./server/routes'));

app.listen(port, () => console.log(`express server listening on port ${port}`));
