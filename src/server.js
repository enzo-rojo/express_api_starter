const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const cors = require('cors');
const logger = require('morgan');

const routes = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', cors());
app.use('/', routes);

module.exports = httpServer;
