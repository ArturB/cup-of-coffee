const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./server/config/database');

const articleRoute  = require('./server/routes/article.route');
const userRoute  = require('./server/routes/user.route');
const profileRoute  = require('./server/routes/profile.route');

// const options = { user: 'cup-of-coffee', pass: 'xRn7Y7vFLIUhRpjGe1tKBglXQ3tlCzc32WmFQ3PkYeX8GSNkvR6YiDyIuG8Rp215j8kEpcADzNmNzJfxnJXWqw==' };

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const root = './';

// app.use(express.static(__dirname + '/dist/')); // Provide static directory for frontend
app.use(express.static(path.join(root, 'dist'))); // Provide static directory for frontend


// Seting up server to accept cross-origin browser requests
app.use(function (req, res, next) { //allow cross origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(cors());

app.use('/articles', articleRoute);
app.use('/user', userRoute);
app.use('/profile', profileRoute);

app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
  res.sendFile('dist/index.html', {root});
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});