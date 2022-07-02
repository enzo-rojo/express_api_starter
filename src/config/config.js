const config = require('./env');

module.exports = {
	development: {
		username: config.db_user,
		password: config.db_password,
		database: config.db_name,
		host: 'localhost',
		dialect: 'mysql',
		port: config.db_port,
	},
	// },
	// test: {
	// 	username: 'root',
	// 	password: null,
	// 	database: 'database_test',
	// 	host: '127.0.0.1',
	// 	dialect: 'mysql',
	// },
	// production: {
	// 	username: 'root',
	// 	password: null,
	// 	database: 'database_production',
	// 	host: '127.0.0.1',
	// 	dialect: 'mysql',
	// },
};
