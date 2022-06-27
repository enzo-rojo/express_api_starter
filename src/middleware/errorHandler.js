const ErrorHandler = (Error, req, res, next) => {
	console.log(Error);
	res.status(Error?.status || 500);
	res.json({
		error: true,
		message: Error?.message || 'Internal Server Error',
		description: Error?.description,
	});
};

module.exports = ErrorHandler;
