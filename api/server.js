const http = require('http');
const deliver = require('./apiDeliver');
require('colors');

const server = http.createServer((req, res) => {
	if (req.url == '/') {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end('<h1>403</h1><hr><p>Forbidden</p>');
	} else {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(deliver(req.url));
	}
});

server.listen(8069, '0.0.0.0', () => {
	console.log('REST API is running!'.green);
});
