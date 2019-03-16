var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const config = require('../config/database');
var secret = config.secret;

var User = require('../models/user');


router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, secret, (err, decoded) => {
        if (err) {
            return res.sendStatus(401)
        }
        next();
    })
});


router.get('/', (req, res) => {
    var decoded = jwt.decode(req.query.token);
    console.log(req.query.token);
    var duid = decoded.user._id;
    User.findById({_id: duid}, function (err, user) {
        if (err) {
            return res.send(err)
        }
        else {
            console.log(user);
            res.send(user)

        }
    });
})

// router.get('/', (req, res) => {
//     // const user = users.find(u => u.username === username && u.password === password);
//     var decoded = jwt.decode(req.query.token);
//     var duid = decoded.user._id;
//     User.findById({_id: duid}, (err, user) => {
//         if (user) {
//             const token = jwt.sign({ sub: user.id }, config.secret);
//             const { password, ...userWithoutPassword } = user;
//             return {
//                 user
//             };
//         }
//     });
    
// });


module.exports = router;