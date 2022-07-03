const ErrorHandler = (Error, req, res, next) => {
	res.status(Error?.status || 500);
	res.json({
		error: true,
		message: Error?.message || 'Internal Server Error',
		description: Error?.description,
		fieldErrors: Error?.fieldErrors,
	});
};

module.exports = ErrorHandler;
