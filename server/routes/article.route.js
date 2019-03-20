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
    console.log('Artykuł: ', req.query._id);
    Article.findOne({_id: req.query._id}, (err, article) => {
        if(err){
            console.log('CastError');
            res.sendStatus(404);
        }
        else if (article == null) {
            console.log('410', err)
            res.sendStatus(410)
        }

        else if (req.query.token != undefined) {
            let decoded = jwt.decode(req.query.token);
            // if(decoded.user = !null) {
            User.findById(decoded.user._id, (err, user) => {
                if (err) {
                    res.send({message: 'error' })
                    console.log('Authorize error')
                    // return res.sendStatus(500)
                }
                // if (err.status = 401) {
                //     return res.sendStatus(401)
                // }
                
                else {
                    let likeId = article.likes.indexOf(user._id);
                    // let likeStatus = false;
                    console.log('index of like ',likeId);
                    if(likeId != -1) {
                        res.send({article: article, message: 'likeAdded' });
                        console.log('GET like isneieje');
                        // article.likes.splice(indexOf(likeId), 1); 
                    }
                    else {
                        res.send({article: article, message: 'likeRemoved' });
                        console.log('GET like nie istnieje');

                    }
                    // console.log(article);
                    // res.send(article)
                //   res.json(articles);
                }
            });
                // }
                // next();
            // }
            
            // })
            
        }

        
        else {
            res.send({article: article, message: 'likeRemoved' })
            console.log('GET ')
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


articleRoutes.route('/add-article').post((req, res)  => {
// articleRoutes.post('/', function (req, res) {
    let decoded = jwt.decode(req.query.token);

    console.log('artsssssssicle', decoded);
    User.findById(decoded.user._id, (err, user) => {
        if (err) {
            return res.sendStatus(500)
        }
        console.log(user);
        let article = new Article({
            // link: req.body.link,	
            artColors: req.body.artColors,	
            title: req.body.title,	
            category: req.body.category,	
            author: req.body.author,	
            description: req.body.description,	
            likes: req.body.likes,	
            dateModified: req.body.dateModified,	
            // req.body, 
            user: user
        })
        article.save((err, result) => {
            if (err) {
                if (err.name="ValidationError") {
                    // res.status(422).send(valErrors)
                    res.sendStatus(422)
                }
                else {
                    res.send(err)
                }
            }
            // user.article.push(result);
            user.save();
            res.send(result)
        });


    });
});

articleRoutes.route('/add-like').post((req, res)  => {
    let decoded = jwt.decode(req.query.token);

    User.findById(decoded.user._id, (err, user) => {
        if (err) {
            return res.sendStatus(500)
        }
        // Article.findById(req.body._id, (err, article) => {
        Article.findById(req.body._id, (err, article) => {
            if (err) {
                console.log('some', err)
                return res.sendStatus(500)
            }
            // let fine = article.likes.find(x => x === user._id);
            else if (article == null) {
                console.log('410', err)
                res.sendStatus(410)
            }
            else {
                // console.log('410',err, article);
                let likeId = article.likes.indexOf(user._id);
            // let likeStatus = false;
            // console.log('index of like ',likeId);
                if(likeId != -1) {
                    article.likes.splice(likeId, 1);
                    // article.save();
                    // res.send(article);
                    article.save();
                    res.send({ message: 'likeRemoved' });
                    console.log('like został usunięty');
                    // article.likes.splice(indexOf(likeId), 1); 
                }
                else {
                    article.likes.push(user);
                    // article.save();
                    // res.send(article);
                    article.save();
                    res.send({ message: 'likeAdded' });
                    console.log('like został dodany');

                }
            }
            
    
        });
    });
});

articleRoutes.route('/user-articles').get((req, res) => {
    let decoded = jwt.decode(req.query.token);

    console.log(decoded.user._id);
    Article.find({user: decoded.user._id}, (err, articles) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log(articles.length);
            res.send(articles)
        //   res.json(articles);
        }
    });
});    

// Defined delete | remove | destroy route
articleRoutes.route('/edit-article').post((req, res) =>  {
    let decoded = jwt.decode(req.query.token);

    console.log('artsssssssicle', decoded);
    console.log('Edit: ', req.query._id);
    // console.log(decoded.user._id);
    // console.log(req.article._id);
    Article.findOneAndUpdate({_id: req.query._id}, req.body, {new: true}, (err, article) => {
        // if(err) res.send(err);
        if (err) {
            if (err.name="ValidationError") {
                // res.status(422).send(valErrors)
                res.sendStatus(422)
                console.log('ssss')
            }
            else {
                res.send(err)
            }
        }
        else res.send(article);
    });
    // Article.deleteMany({_id: req.query._id}, (err, article) => {
    //     if(err) res.send(err);
    //     else {
    //         // Article.updateOne(err, data => {
    //         //     console.log(data)
    //             res.send(article);

    //         // })
    //     }
    // });
   
});

// Defined delete | remove | destroy route
articleRoutes.route('/delete-article').delete(function (req, res) {
    console.log('Artykuł: ', req.query._id);
    let decoded = jwt.decode(req.query.token);
    // console.log(decoded.user._id);
    // console.log(req.article._id);
    Article.findByIdAndDelete({_id: req.query._id}, function(err, article){
        if(err) res.send(err);
        else res.send(article);
    });
    // Article.deleteMany({_id: req.query._id}, (err, article) => {
    //     if(err) res.send(err);
    //     else {
    //         // Article.updateOne(err, data => {
    //         //     console.log(data)
    //             res.send(article);

    //         // })
    //     }
    // });
   
});

// router.delete('/:id', function(req, res, next) {
//     var decoded = jwt.decode(req.query.token);
//     AcVideo.findById(req.params.id, function (err, acVideo) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'Wystąpił nieoczekiwany błąd',
//                 error: err
//             });
//         }
//         if (!acVideo) {
//             return res.status(500).json({
//                 title: 'Wideo nie zostało znaleziono',
//                 error: {message: 'Wybrane wideo nie istnieje na koncie użytkownika'}
//             });
//         }
//         if (acVideo.user != decoded.user._id) {
//             return res.status(401).json({
//                 title: 'Brak autoryzacji',
//                 error: {message: 'Zaloguj się ponownie'}
//             });
//         }
//         acVideo.remove(function(err, result) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'Wystąpił nieoczekiwany błąd',
//                     error: err
//                 });
//             }
//             res.status(201).json({
//                 message: 'Wideo zostało usuięte z konta użytkownika',
//                 obj: result
//             });
//         });
//     });
// });

module.exports = articleRoutes;
