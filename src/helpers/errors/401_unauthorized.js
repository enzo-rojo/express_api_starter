const { UNAUTHORIZED } = require('../status_codes');

module.exports = class UnauthorizedError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, UnauthorizedError);
		}

		this.name = `UnauthorizedError`;
		this.status = UNAUTHORIZED;
		this.message = error?.message
			? error.message
			: 'You are not authorized to access this resource';
		this.description = error?.description
			? error.description
			: 'Sorry, but you are not authorized to access this resource.';
	}
};
