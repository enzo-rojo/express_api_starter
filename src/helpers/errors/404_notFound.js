const { NOT_FOUND } = require('../status_codes');

module.exports = class NotFoundError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, NotFoundError);
		}
		const { message, description } = error;

		this.name = `NotFoundError`;
		this.status = NOT_FOUND;
		this.message = message;
		this.description = description;
	}
};
