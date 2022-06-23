const express = require('express');
const exampleErrors = require('../helpers/errorMessages/example');
const router = express.Router();

router.get('/', async (request, response, next) => {
	const result = [];

	try {
		if (result.length > 0) {
			response.status(200).json(result);
		} else {
			throw new Error('notFound');
		}
	} catch (error) {
		next({
			statusCode: exampleErrors[error.message]?.status,
			message: exampleErrors[error.message]?.errorMessage,
		});
	}
});

module.exports = router;
