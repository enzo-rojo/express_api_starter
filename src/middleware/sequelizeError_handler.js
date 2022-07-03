const { ValidatorError } = require('../helpers/errors/index');
const SequelizeErrorHandler = (Error, req, res, next) => {
	const { name, errors } = Error;
	if (name === 'SequelizeUniqueConstraintError') {
		const fieldErrors = errors.map((error) => ({
			field: error.path,
			message: error.message,
		}));
		const error = new ValidatorError({ fieldErrors });
		next(error);
	}
};

module.exports = SequelizeErrorHandler;
