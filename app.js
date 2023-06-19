var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan'); // used for logging HTTP requests in debugging
// var mongoose = require('mongoose')
var bodyParser = require('body-parser') //used to process data sent in an HTTP request body
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { resourceLimits } = require('worker_threads');
// const MongoClient = require('mongodb').MongoClient
const { query } = require('express-validator')
const db = require('./models');
const e_db = require('./models/candidate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

(async () => {
  await db.sequelize.sync();
  // await e_db.sequelize.sync();
})();

app.use(session({
  secret : 'usersession',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // route to handle requests to the home page
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(express.json())

app.use(express.urlencoded({
  extended: true
}));

// app.post('./super/submit_form', function(req, res) {
//   console.log(req.body)
//   const superAdminID = req.body.superAdminID;
//   const userID = req.body.userID;
//   const username = req.body.username;
//   const password = req.body.password;
//   const confirmPassword = req.body.confirmPassword;
//   // res.end();
//   res.send(req.body)
// })

// app.get('./users');

// app.post('')

module.exports = app;
