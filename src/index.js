require('dotenv').config();

const server = require('./server');
const models = require('./models');

const port = process.env.APP_PORT || 8080;
const env = process.env.NODE_ENV || 'development';

models.sequelize.sync().then(function () {
	/**
	 * Listen on provided port, on all network interfaces.
	 */
	server.listen(port, function () {
		console.log('Express server listening on port ' + port);
	});
});
