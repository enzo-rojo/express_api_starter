const { SERVER_ERROR } = require('../status_codes');

module.exports = class InternalServerError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, InternalServerError);
		}

		this.name = `InternalServerError`;
		this.status = SERVER_ERROR;
		this.message = error?.message ? error.message : 'Internal server error';
		this.description = error?.description
			? error.description
			: 'Sorry, but an internal server error has occurred.';
	}
};
