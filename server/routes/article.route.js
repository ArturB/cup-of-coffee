const express = require('express');
const mongoose = require('mongoose');
const app = express();
const articleRoutes = express.Router();
var jwt = require('jsonwebtoken');

const config = require('../config/database');
var secret = config.secret;
// Require article model in our routes module
let Article = require('../models/article');
let User = require('../models/user');



// Defined get data(index or listing) route
articleRoutes.route('/').get((req, res) => {
    Article.find((err, articles) => {
    if(err){
        console.log(err);
        res.send(err);
    }
    else {
        console.log(articles);
        res.send(articles)
    //   res.json(articles);
    }
  });
});


articleRoutes.route('/category').get((req, res) => {
    console.log(req.query.category);
    Article.find({category: req.query.category}, (err, articles) => {
    if(err){
        console.log(req.query.category);
        res.send(err);
    }
    else {
        console.log(articles);
        res.send(articles)
    //   res.json(articles);
    }
  });
});

articleRoutes.route('/article').get((req, res) => {
    console.log(req.query.title);
    Article.findOne({title: req.query.title}, (err, article) => {
    if(err){
        console.log(req.query.title);
        res.send(err);
    }
    else {
        console.log(article);
        res.send(article)
    //   res.json(articles);
    }
  });
});

articleRoutes.use('/', (req, res, next) => {
    jwt.verify(req.query.token, secret, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.sendStatus(401)
        }
        next();
    })
});


articleRoutes.route('/add').post((req, res)  => {
// articleRoutes.post('/', function (req, res) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, (err, user) => {
        if (err) {
            return res.sendStatus(500)
        }
        console.log(user);
        let article = new Article({
            link: req.body.link,	
            title: req.body.title,	
            category: req.body.category,	
            author: user.username,	
            description: req.body.description,	
            likes: req.body.likes,	
            dateModified: req.body.dateModified,	
            // req.body, 
            user: user
        })
        article.save((err, result) => {
            if (err) {
                return res.sendStatus(500)
            }
            // user.article.push(result);
            user.save();
            res.send(result)
        });


    });
});



// let User = require('../models/article');

;

// // Defined get data(index or listing) route
// articleRoutes.route('/').get(function (req, res) {
//     Article.find(function (err, articles){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(articles);
//     }
//   });
// });

// const user = new User({
//     // _id: new mongoose.Types.ObjectId(),
//         username: 'Ian Fleming',
//         email: 'Ian@flra.pl',
//         password: 'fefrrfrfing',
//       })
//     user.save()
//         .then(user => {
//             console.log("User added: ", user)
//             res.status(200).json({'user': 'user in added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });

// Defined store route

    
    // let article = new Article(req.body);
    // article.save()
    //     .then(article => {
    //         console.log("Article added: ", article)
    //         res.status(200).json({'article': 'article in added successfully'});
    //     })
    //     .catch(err => {
    //         res.status(400).send("unable to save to database");
    //     });


// user.save(function (err) {
//     if (err) return handleError(err);

//     const article = new Article({
//         title: 'Casino Royale',
//         user: user._id    // assign the _id from the person
//     });

//     article.save(function (err) {
//         if (err) return handleError(err);
//         // thats it!
//     });
// });

// articleRoutes.route('/add').post(function (req, res) {
//     user.save(function (err) {
//         if (err) return handleError(err);
//         let article = new Article(req.body);
//         article.save(function (err) {
//             if (err) return handleError(err);
//             // thats it!
//         });
//     });
// });
// articleRoutes.post('/', function (req, res) {
//   let article = new Article(req.body);
//   article.save()
//     .then(article => {
//         console.log("Article added: ", article)
//         res.status(200).json({'article': 'article in added successfully'});
//     })
//     .catch(err => {
//         res.status(400).send("unable to save to database");
//     });
// });



// Defined edit route
// articleRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Article.findById(id, function (err, article){
//       res.json(article);
//   });
// });

// //  Defined update route
// articleRoutes.route('/update/:id').post(function (req, res) {
//     Article.findById(req.params.id, function(err, next, article) {
//     if (!article)
//       return next(new Error('Could not load Document'));
//     else {
//         article.person_name = req.body.person_name;
//         article.article_name = req.body.article_name;
//         article.article_gst_number = req.body.article_gst_number;

//         article.save().then(article => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// Defined delete | remove | destroy route
articleRoutes.route('/delete/:id').get(function (req, res) {
    Article.findByIdAndRemove({_id: req.params.id}, function(err, article){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = articleRoutes;

// const express = require('express');
// const app = express();
// const businessRoutes = express.Router();

// // Require Business model in our routes module
// let Business = require('../models/Article');

// // Defined store route
// businessRoutes.route('/add').post(function (req, res) {
//   let business = new Business(req.body);
//   console.log('business ', business);
//   business.save()
//     .then(business => {
//       res.status(200).json({'business': 'business in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

// // Defined get data(index or listing) route
// businessRoutes.route('/').get(function (req, res) {
//     Business.find(function (err, businesses){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(businesses);
//     }
//   });
// });

// // Defined edit route
// businessRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Business.findById(id, function (err, business){
//       res.json(business);
//   });
// });

// //  Defined update route
// businessRoutes.route('/update/:id').post(function (req, res) {
//     Business.findById(req.params.id, function(err, next, business) {
//     if (!business)
//       return next(new Error('Could not load Document'));
//     else {
//         business.person_name = req.body.person_name;
//         business.business_name = req.body.business_name;
//         business.business_gst_number = req.body.business_gst_number;

//         business.save().then(business => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// // Defined delete | remove | destroy route
// businessRoutes.route('/delete/:id').get(function (req, res) {
//     Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

// module.exports = businessRoutes;