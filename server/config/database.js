const crypto = require('crypto').randomBytes(256).toString('hex'); 

module.exports = {
	// uri: 'mongodb://localhost:27017/CofeeDB', // Databse URI and database name
	uri: 'mongodb://cup-of-coffee.documents.azure.com:10255/?ssl=true',
	secret: crypto

}