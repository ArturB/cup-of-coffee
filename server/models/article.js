const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    // user: {type: Schema.Types.ObjectId, ref: 'User'},	
    user: {type: Object},	
    // // articleId: {type: Number, required: true},	
    link: {type: String, required: true},	
	title: {type: String, required: true},
	category: {type: String, required: true},
	// author: {type: String, required: true},
	// author: [{type: Schema.Types.ObjectId, ref: 'AcVideo'}],
	description: {type: String, required: true},
	likes: {type: Number, required: true},
	// likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
	dateModified: {type: String, required: true}
});

module.exports = mongoose.model('Article', schema);
