const ErrorHandler = (Error, req, res, next) => {
	res.status(Error?.statusCode || 500);
	res.json({
		error: true,
		message: Error?.message || 'Internal Server Error',
		description: Error?.description,
	});
};

module.exports = ErrorHandler;
