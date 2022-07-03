const { BAD_REQUEST } = require('../status_codes');

module.exports = class ValidatorError extends Error {
	constructor(error, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ValidatorError);
		}

		this.name = `ValidatorError`;
		this.status = BAD_REQUEST;
		this.message = 'Les paramètres de votre requête sont invalides';
		this.description = 'Veuillez vérifier les paramètres de votre requête';
		this.fieldErrors = error.fieldErrors;
	}
};
