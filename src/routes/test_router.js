const express = require('express');
const exampleErrors = require('../helpers/errorMessages/example');
const { InternalServerError, ForbiddenError } = require('../helpers/errors');
const router = express.Router();

router.get('/', async (request, response, next) => {
	const result = [];

	try {
		if (result.length > 0) {
			response.status(200).json(result);
		} else {
			throw new ForbiddenError();
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
