const { NotFoundError } = require('../helpers/errors');
const { User } = require('../models');
const userController = {
	getAll: async ({ res, next }) => {
		try {
			const testData = await User.findAll();

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
	create: async ({ body, res, next }) => {
		try {
			const testData = User.create(body);
			res.status(200).json(testData);
		} catch (err) {
			next(err);
		}
	},
};

module.exports = userController;
