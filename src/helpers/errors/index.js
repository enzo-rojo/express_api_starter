const BadRequestError = require('./400_badRequest');
const UnauthorizedError = require('./401_unauthorized');
const ForbiddenError = require('./403_forbidden');
const NotFoundError = require('./404_notFound');
const InternalServerError = require('./500_internalServerError');
const ValidatorError = require('./400_validator');

module.exports = {
	BadRequestError,
	UnauthorizedError,
	ForbiddenError,
	NotFoundError,
	InternalServerError,
	ValidatorError,
};
