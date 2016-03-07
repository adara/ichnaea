var app = require('http').createServer(handler),
	fs = require('fs'),
	io = require('socket.io')(app),
	r = require('rethinkdb');

app.listen(3000);

var dbConfig = {
	host: 'localhost',
	port: 28015,
	db: 'testDB',
	table: 'testTable'
};

function handler(req, res) {
	fs.readFile(__dirname + '/public/index.html',
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
}

var connection = null;
r.connect({host: dbConfig.host, port: dbConfig.port}, function (err, conn) {
	if (err) {
		throw err;
	}
	connection = conn;
});

io.on('connection', function (socket) {
	var address = socket.handshake.address;
	console.log('a user connected', address);

	socket.on('disconnect', function () {
		console.log('user disconnected');
	});

	socket.on('log event', function (event) {
		r.db(dbConfig.db).table(dbConfig.table).insert(event)
			.run(connection, function (err, result) {
				if (err) {
					throw err;
				}
				console.log(event, result);
			});
	});

	r.db(dbConfig.db).table(dbConfig.table).changes().run(connection, function (err, cursor) {
		if (err) {
			throw err;
		}
		cursor.each(function (err, row) {
			if (err) {
				throw err;
			}
			socket.emit('new event', row);
		});
	});
});