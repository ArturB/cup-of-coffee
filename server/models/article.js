const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

let articleSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},	
    artColors: {type: Array, required: true},	
	title: {type: Object, required: true, unique: true},
	category: {type: String, required: true},
	author: {type: String, required: true},
	description: {type: String, required: true},
	likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
	dateModified: {type: String, required: true}
});

articleSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Article', articleSchema);
