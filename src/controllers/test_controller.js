const { NotFoundError } = require('../helpers/errors');
const testController = {
	getAll: async ({ res, next }) => {
		try {
			const testData = [];

			if (testData.length === 0) {
				throw new NotFoundError({
					message: 'Data not found',
					description:
						"There's no data in the database. Please add data first.",
				});
			}

			res.status(200).json(testData);
		} catch (err) {
			next(err);
		}
	},
};

module.exports = testController;
