const express = require('express');
const articleRoutes = express.Router();

var jwt = require('jsonwebtoken');
const config = require('../config/database');
var secret = config.secret;

let Article = require('../models/article');
let User = require('../models/user');


articleRoutes.route('/').get((req, res) => {
    Article.find((err, articles) => {
    if(err){
        res.send(err);
    }
    else {
        res.send(articles)
    }
  });
});


articleRoutes.route('/category').get((req, res) => {
    Article.find({category: req.query.category}, (err, articles) => {
    if(err){
        res.send(err);
    }
    else {
        res.send(articles)
    }
  });
});



articleRoutes.route('/article').get((req, res) => {
    Article.findOne({_id: req.query._id}, (err, article) => {
        if(err){
            res.sendStatus(404);
        }
        else if (article == null) {
            res.sendStatus(410)
        }

        else if (req.query.token != undefined) {
            let decoded = jwt.decode(req.query.token);
            User.findById(decoded.user._id, (err, user) => {
                if (err) {
                    res.send({message: 'error' })
                }
                else {
                    let likeId = article.likes.indexOf(decoded.user._id);
                    if(likeId != -1) {
                        res.send({article: article, message: 'likeAdded' });
                    }
                    else {
                        res.send({article: article, message: 'likeRemoved' });

                    }
                }
            });
        }

        
        else {
            res.send({article: article, message: 'likeRemoved' })
        }
        
    });
});


articleRoutes.use('/', (req, res, next) => {
    jwt.verify(req.query.token, secret, (err, decoded) => {
        if (err) {
            return res.sendStatus(401)
        }
        next();
    })
});



articleRoutes.route('/favorites').get((req, res) => {
    let decoded = jwt.decode(req.query.token);

    Article.find({likes: decoded.user._id}, (err, articles) => {
    if(err){
        res.send(err);
    }
    else {
        res.send(articles)
    }
  });
});

articleRoutes.route('/add-article').post((req, res)  => {
    let decoded = jwt.decode(req.query.token);

    User.findById(decoded.user._id, (err, user) => {
        if (err) {
            return res.sendStatus(500)
        }
        else {
            let article = new Article({
                artColors: req.body.artColors,	
                title: req.body.title,	
                category: req.body.category,	
                author: req.body.author,	
                description: req.body.description,	
                likes: req.body.likes,	
                dateModified: req.body.dateModified,	
                user: user
            })
            article.save((err, result) => {
                if (err) {
                    if (err.name="ValidationError") {
                        res.sendStatus(422)
                    }
                    else {
                        res.send(err)
                    }
                }
                user.save();
                res.send(result)
            });
        }
        


    });
});

articleRoutes.route('/add-like').post((req, res)  => {
    let decoded = jwt.decode(req.query.token);

    User.findById(decoded.user._id, (err, user) => {
        if (err) {
            return res.sendStatus(500)
        }
        Article.findById(req.body._id, (err, article) => {
            if (err) {
                return res.sendStatus(500)
            }
            else if (article == null) {
                res.sendStatus(410)
            }
            else {
                let likeId = article.likes.indexOf(user._id);
                if(likeId != -1) {
                    article.likes.splice(likeId, 1);
                    article.save();
                    res.send({ message: 'likeRemoved' });
                }
                else {
                    article.likes.push(user);
                    article.save();
                    res.send({ message: 'likeAdded' });

                }
            }
            
    
        });
    });
});

articleRoutes.route('/user-articles').get((req, res) => {
    let decoded = jwt.decode(req.query.token);

    Article.find({user: decoded.user._id}, (err, articles) => {
        if(err){
            res.send(err);
        }
        else {
            res.send(articles)
        }
    });
});    

articleRoutes.route('/edit-article').post((req, res) =>  {
    let decoded = jwt.decode(req.query.token);

    Article.findOne({_id: req.query._id}, (err, article) => {
        if(err){
            res.send(err);
        }
        else {
            if (decoded.user._id == article.user._id) {
                Article.updateOne({_id: req.query._id}, req.body, {new: true}, (err, article) => {  
                    if (err) {
                        if (err.name="ValidationError") {
                            res.sendStatus(422)
                        }
                        else {
                            res.send(err)
                        }
                    }
                    else {
                        res.send(article);

                    }
                })
            }
            else {
                res.sendStatus(403)

            }
        }
    });
   
});


articleRoutes.route('/delete-article').delete(function (req, res) {
    Article.findByIdAndDelete({_id: req.query._id}, function(err, article){
        if(err) res.send(err);
        else res.send(article);
    });
   
});


module.exports = articleRoutes;
