// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const mongooseUniqueValidator = require('mongoose-unique-validator');

// let schema = new Schema({
//     username: {type: String, required: true},
//     password: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     acVideos: [{type: Schema.Types.ObjectId, ref: 'AcVideo'}]
// });

// schema.plugin(mongooseUniqueValidator);

// module.exports = mongoose.model('User', schema);