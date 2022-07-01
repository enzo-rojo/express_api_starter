const { FORBIDDEN } = require('../status_codes');

module.exports = class ForbiddenError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ForbiddenError);
		}

		this.name = `ForbiddenError`;
		this.status = FORBIDDEN;
		this.message = error?.message
			? error.message
			: 'Access to this resource is forbidden';
		this.description = error?.description
			? error.description
			: 'Sorry, but you are not allowed to access this resource.';
	}
};
