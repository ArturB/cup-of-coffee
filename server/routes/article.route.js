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
    console.log('Artykuł: ', req.query.title);
    Article.findOne({title: req.query.title}, (err, article) => {
        if(err){
            console.log(req.query.title);
            res.send(err);
        }

        if (req.query.token != undefined) {
            jwt.verify(req.query.token, secret, (err, decoded) => {
                if (err) {
                    console.log(err);
                    // return res.sendStatus(401)
                    res.send({article: article, message: 'likeRemoved' })
                }
                else {
                    // console.log(req.query.token);
                    let decoded = jwt.decode(req.query.token);
                    // if(decoded.user = !null) {
                    User.findById(decoded.user._id, (err, user) => {
                        if (err) {
                            res.send({article: article, message: 'likeRemoved' })
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
                }
                // next();
            })
            
            // }
            
        }
        // console.log(decoded.user)

        
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


articleRoutes.route('/add').post((req, res)  => {
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
                return res.sendStatus(500)
            }
            // let fine = article.likes.find(x => x === user._id);
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
    
        });
    });
});

    

// Defined delete | remove | destroy route
articleRoutes.route('/delete/:id').get(function (req, res) {
    Article.findByIdAndRemove({_id: req.params.id}, function(err, article){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = articleRoutes;
