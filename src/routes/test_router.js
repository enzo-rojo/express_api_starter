const express = require('express');
const testController = require('../controllers/test_controller');

const testRouter = express.Router();

testRouter.get('/get', testController.getAll);

module.exports = testRouter;
