const mysql = require('mysql');


if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
const connection = mysql.createConnection({
	port: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});
  }
connection.connect(function(err) {
	if (err) throw err;
	console.log('db connected');
});

module.exports = connection;
