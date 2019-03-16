const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('./user');

let articleSchema = new Schema({
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

// module.exports = mongoose.model('Article', schema);





// const articleSchema = Schema({
// 	user: {type: Schema.Types.ObjectId, ref: 'User'},
// 	link: {type: String, required: true},	
// 	title: {type: String, required: true},
// 	category: {type: String, required: true},
// 	// author: {type: String, required: true},
// 	description: {type: String, required: true},
// 	// likes: {type: Number, required: true},
// 	likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
// 	dateModified: {type: String, required: true}

// });

module.exports = mongoose.model('Article', articleSchema);
// module.exports = mongoose.model('User', userSchema);