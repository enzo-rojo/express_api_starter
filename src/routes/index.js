const express = require('express');

const testRouter = require('./test_router');
const userRouter = require('./user_router');
const itemRouter = require('./item_router');

const mainRouter = express.Router();

mainRouter.use('/test', testRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/item', itemRouter);

module.exports = mainRouter;
