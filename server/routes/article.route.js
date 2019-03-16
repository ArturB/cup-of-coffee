const express = require('express');
const app = express();
const articleRoutes = express.Router();

// Require article model in our routes module
let Article = require('../models/article');


// Defined get data(index or listing) route
articleRoutes.route('/').get(function (req, res) {
    Article.find(function (err, articles){
    if(err){
      console.log(err);
    }
    else {
      res.json(articles);
    }
  });
});

// Defined store route
articleRoutes.route('/add').post(function (req, res) {
// articleRoutes.post('/', function (req, res) {
  let article = new Article(req.body);
  console.log("AAAAAA: ", article)
  article.save()
    .then(article => {
      res.status(200).json({'article': 'article in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});



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