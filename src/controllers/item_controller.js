const { NotFoundError } = require('../helpers/errors');
const { Item } = require('../models');
const itemController = {
	getAll: async ({ res, next }) => {
		try {
			const testData = await Item.findAll();

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
			const testData = Item.create(body);
			res.status(200).json(testData);
		} catch (err) {
			next(err);
		}
	},
};

module.exports = itemController;
