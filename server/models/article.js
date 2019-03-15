var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    // articleId: {type: Number, required: true},	
    link: {type: String, required: true},	
	title: {type: String, required: true},
	category: {type: String, required: true},
	author: {type: String, required: true},
	description: {type: String, required: true},
	likes: {type: Number, required: true},
	dateModified: {type: String, required: true}
});

module.exports = mongoose.model('Article', schema);
