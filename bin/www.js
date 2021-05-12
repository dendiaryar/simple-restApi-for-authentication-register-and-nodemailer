import http from 'http';
import config from '../config/config';
import app from '../src/server';

/**
 * create Http server.
 */

const server = http.createServer(app);

function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? `pipe ${addr}`
		: `port ${addr.port}`;

	console.log(`the server started listining on port ${bind}`, 'info');
}

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string'
		? `Pipe ${port}`
		: `Port ${port}`;

	// handle specific listen errors with friendly messages
	switch (error.code) {
	case 'EACCES':
		console.log(`${bind} requires elevated privileges`);
		process.exit(1);
	case 'EADDRINUSE':
		console.log(`${bind} is already in use`);
		process.exit(1);
	default:
		throw error;
	}
}

server.listen(3000);
server.on('error', onError);
server.on('listening', onListening);
