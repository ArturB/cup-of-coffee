const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
	_id: Schema.Types.ObjectId,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    username: {type: String, required: true},
	articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
});

schema.plugin(mongooseUniqueValidator);

// const User = mongoose.model('User', schema);
module.exports = mongoose.model('User', schema);