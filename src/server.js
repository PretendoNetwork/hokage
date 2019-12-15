process.title = 'Pretendo - Hokage';

const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');
const config = require('./config.json');

const { http: { port } } = config;
const app = express();

const samurai = require('./samurai');
const ninja = require('./ninja');

// START APPLICATION
app.set('etag', false);
app.disable('x-powered-by');

// Create router
logger.info('Setting up Middleware');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

// import the 2 servers into one
app.use(samurai);
app.use(ninja);

// 404 handler
logger.info('Creating 404 status handler');
app.use((request, response) => {
	response.status(404);
	response.send();
});

// non-404 error handler
logger.info('Creating non-404 status handler');
app.use((error, request, response) => {
	const status = error.status || 500;

	response.status(status);

	response.json({
		app: 'api',
		status,
		error: error.message
	});
});

// Starts the server
logger.info('Starting server');
app.listen(port, () => {
	logger.success(`Server started on port ${port}`);
});