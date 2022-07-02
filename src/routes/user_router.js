const express = require('express');
const userController = require('../controllers/user_controller');

const userRouter = express.Router();

userRouter.get('/get', userController.getAll);
userRouter.post('/create', userController.create);

module.exports = userRouter;
