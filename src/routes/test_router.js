const express = require('express');

const router = express.Router();

router.get('/', async (request, response) => {
	response.status(200).json({ message: 'Test successful' });
});

module.exports = router;
