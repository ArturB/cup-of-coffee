const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./server/config/database');

const articleRoute  = require('./server/routes/article.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useNewUrlParser: true }).then(
  () => {console.log('Database ' + config.db + ' is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// mongoose.connect(config.uri, (err) => {
//   if (err) {
//     console.log('Połączenie z bazą danych jest niemożliwe ', err);
//     return res.status(500).json({
//         title: 'Nie ma połączenia z bazą danych',
//         error: {message: 'Spróbuj później'}
//     });
//   } 
//   else {
//     console.log('Połączenie z bazą danych ' + config.db);
//   }
// });

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/article', articleRoute);
// const port = process.env.PORT || 3000;

// const server = app.listen(port, function(){
//   console.log('Listening on port ' + port);
// });

const app = express();
app.use(bodyParser.json());

// Seting up server to accept cross-origin browser requests
app.use(function (req, res, next) { //allow cross origin requests
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(cors());
app.use('/articles', articleRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});