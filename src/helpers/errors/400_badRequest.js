const { BAD_REQUEST } = require('../status_codes');

module.exports = class BadRequestError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, BadRequestError);
		}

		this.name = `BadRequestError`;
		this.status = BAD_REQUEST;
		this.message = error?.message ? error.message : 'Your request is invalid';
		this.description = error?.description
			? error.description
			: 'Please check the request parameters';
	}
};
