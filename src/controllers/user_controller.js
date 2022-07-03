const { NotFoundError } = require('../helpers/errors');
const { User } = require('../models');
const userController = {
	getAll: async () => {
		const users = await User.findAll();

		if (users.length === 0) {
			throw new NotFoundError({
				message: 'Data not found',
				description: "There's no data in the database. Please add data first.",
			});
		}

		return users;
	},
	create: async (data) => {
		const newUser = await User.create(data);
		return newUser;
	},
};

module.exports = userController;
