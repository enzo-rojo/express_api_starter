const { BAD_REQUEST } = require('../status_codes');

module.exports = class BadRequestError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, BadRequestError);
		}
		// const { message, description } = error;

		this.name = `BadRequestError`;
		this.status = BAD_REQUEST;
		this.message = error?.message
			? error.message
			: 'Your browser sent a request that this server could not understand.';
		this.description = error?.description;
	}
};
