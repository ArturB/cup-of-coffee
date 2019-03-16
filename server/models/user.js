const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
	// _id: Schema.Types.ObjectId,
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true, 
        // minlength : [6,'Password must be atleast 6 character long'],
        // maxlength : [24,'Password must be max 24 character long'],
    },
    username: {type: String, required: true, unique: true},
	// articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
});

schema.plugin(mongooseUniqueValidator);

// Custom validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// const User = mongoose.model('User', schema);
module.exports = mongoose.model('User', schema);