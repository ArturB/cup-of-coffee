const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
	// uri: 'mongodb://localhost:27017/CofeeDB', // Databse URI and database name
	// uri: 'mongodb://cup-of-coffee:xRn7Y7vFLIUhRpjGe1tKBglXQ3tlCzc32WmFQ3PkYeX8GSNkvR6YiDyIuG8Rp215j8kEpcADzNmNzJfxnJXWqw==@cup-of-coffee.documents.azure.com:10255/?ssl=true&replicaSet=globaldb', // Databse URI and database name
	uri: 'mongodb://cup-of-coffee.documents.azure.com:10255/?ssl=true', // Databse URI and database name
	// user: '',
	// password: '',
	secret: crypto, // Cryto-created secret
	db: 'CoffeeDB' // Database name
}