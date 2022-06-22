const express = require('express');

const testRouter = require('./test_router');

const mainRouter = express.Router();

mainRouter.use('/test', testRouter);

module.exports = mainRouter;
