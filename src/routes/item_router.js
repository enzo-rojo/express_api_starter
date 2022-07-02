const express = require('express');
const itemController = require('../controllers/item_controller');

const itemRouter = express.Router();

itemRouter.get('/get', itemController.getAll);
itemRouter.post('/create', itemController.create);

module.exports = itemRouter;
