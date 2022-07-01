require('dotenv').config();

const server = require('./server');

const port = process.env.APP_PORT || 8080;
const env = process.env.NODE_ENV || 'development';

server.listen(port, async () => {
	console.debug(`Server is listening on port ${port}`);
	console.debug(`Current environment is ${env}`);
});
