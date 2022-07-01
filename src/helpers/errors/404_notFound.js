const { NOT_FOUND } = require('../status_codes');

module.exports = class NotFoundError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, NotFoundError);
		}

		this.name = `NotFoundError`;
		this.status = NOT_FOUND;
		this.message = error?.message ? error.message : 'Resource not found';
		this.description = error?.description
			? error.description
			: "We're sorry, but the resource you requested could not be found.";
	}
};
