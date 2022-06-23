const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/notFound_handler');
const routes = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', cors());
app.use('/', routes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = app;
