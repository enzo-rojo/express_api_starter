const express = require('express');
const userController = require('../controllers/user_controller');
const { userValidator } = require('../helpers/validators');
const { ValidatorError } = require('../helpers/errors');
const userRouter = express.Router();

// GET ALL USERS
userRouter.get('/get', async (req, res, next) => {
	try {
		const users = await userController.getAll({ res, next });

		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
});

// CREATE USER
userRouter.post('/create', async (req, res, next) => {
	try {
		const fieldErrors = await userValidator(req.body);

		if (fieldErrors) {
			throw new ValidatorError({ fieldErrors });
		}

		const newUser = await userController.create(req.body, { res, next });

		res.status(200).json({ newUser, message: "L'utilisateur a été créé" });
	} catch (err) {
		next(err);
	}
});

module.exports = userRouter;
