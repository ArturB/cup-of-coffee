var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../config/database');
var secret = config.secret;
var User = require('../models/user');


router.post('/signup', function (req, res, next) {
    var user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10), //10 jest argumentem ozn na ile mocne jest szyfrowanie
        email: req.body.email
    });
    user.save((err, result) => {
        if (err) {
            if (err.name="ValidationError") {
                // res.status(422).send(valErrors)
                res.sendStatus(422)
            }
            else {
                res.send(err)
            }
        }
        else {
            res.send(result);
        }
        // if (!err)
        //     res.send(result);
       
        // // if (err.name === 'ValidationError') {
        // //     var valErrors = [];
        // //     Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        // //     res.status(422).send(valErrors)
        // // }
        // else {
        //     res.sendStatus(401)
        //     //error handling
        // }
 
    });
});

// router.post('/signup', function (req, res, next) {

//         var user = new User({
//             username: req.body.username,
//             password: bcrypt.hashSync(req.body.password, 10), //10 jest argumentem ozn na ile mocne jest szyfrowanie
//             email: req.body.email
//         });
//         user.save(function(err, result) {
//             if (err) {
//                 if (err.name="ValidationError") {
//                     res.json({
//                         success: false, 
//                         message: 'Użytkownik z takim adresem e-mail lub usarname już istnieje'
//                     });
//                 }
//                 else {
//                     res.json({
//                         success: false, 
//                         title: 'Błąd rejestracji!',
//                         err
//                     });
//                 }
//             }
//             else {
//                 res.json({
//                     success: true,
//                     title: 'Rejestracja przebiegła pomyślnie!',
//                     message: 'Możesz się zalogować',
//                     obj: result
//                 });
//             }

//         });
//     // }
// });

router.post('/login', function(req, res) {
    // const body = req.body;
  
    // const user = User.find(user => user.email == body.email);
    // const user = User.findOne(user => user.email == body.email);
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            return  res.sendStatus(401)
        }
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.sendStatus(401);
        }
    // if(!user || body.password != 'todo') return res.sendStatus(401);
        else {
            // let token = jwt.sign({userID: user.id}, secret, {expiresIn: '24h'});
            let token = jwt.sign({user: user}, secret, {expiresIn: '24h'});
            res.send({token});
        }
        
    //     //sprawdzamy czy user (email) istnieje
    //     if (!user) {
    //         return res.send({
    //             success: false, 
    //             message: 'Nieprawidłowy login lub hasło'
    //         });
    //         // return res.send({success: false, message: 'Nieprawidłowy login lub hasło'});
    //     }
    //     //sprawdzamy czy password pasuje do email    
    //     //poniewasz ten bcrypt nie można zdeszyfrować, algorytm, który robił szyfrowanie, sprawdza czy wersja zaszyfrowanego password, który wprowadzamy przy logowaniu jest taka sama jak ta, która istnieje w bd dla tego email. czyli porównuje req.body.password z user.password
    //     if (!bcrypt.compareSync(req.body.password, user.password)) {
    //         return res.send({
    //             success: false, 
    //             message: 'Nieprawidłowy login lub hasło'
    //         });
    //     }
    //     else {
    //         const token = jwt.sign({user: user}, secret, {expiresIn: '24h'});
    //             return res.send({
    //                 success: true,
    //                 message: 'Logowanie się powidło!',
    //                 token: token,
    //                 //userId: user._id
    //             });
    //         }
    });
    
  });



// router.post('/login', function(req, res, next) {
//     User.findOne({email: req.body.email}, function(err, user) {
//         if (err) {
//             return res.status(500).send({
//                 success: false,
//                 title: 'Błąd logowania!',
//                 error: err
//             });
//         }
//         //sprawdzamy czy user (email) istnieje
//         if (!user) {
//             return res.send({
//                 success: false, 
//                 message: 'Nieprawidłowy login lub hasło'
//             });
//             return res.send({success: false, message: 'Nieprawidłowy login lub hasło'});
//         }
//         //sprawdzamy czy password pasuje do email    
//         //poniewasz ten bcrypt nie można zdeszyfrować, algorytm, który robił szyfrowanie, sprawdza czy wersja zaszyfrowanego password, który wprowadzamy przy logowaniu jest taka sama jak ta, która istnieje w bd dla tego email. czyli porównuje req.body.password z user.password
//         if (!bcrypt.compareSync(req.body.password, user.password)) {
//             return res.send({
//                 success: false, 
//                 message: 'Nieprawidłowy login lub hasło'
//             });
//         }
//         else {
//         var token = jwt.sign({user: user}, secret, {expiresIn: '24h'});
//             return res.status(200).send({
//                 success: true,
//                 message: 'Logowanie się powidło!',
//                 token: token,
//                 //userId: user._id
//             });
//         }
//     });
// });



module.exports = router;