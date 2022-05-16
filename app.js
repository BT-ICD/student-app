/**
 * Learning reference: 
 * https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
 * https://github.com/mdn/express-locallibrary-tutorial
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

// const winston = require('winston');
// const { combine, timestamp, json } = winston.format;


// var logger = require('morgan');
var logger = require('./logger');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student');

var app = express();

//Setup mongoose connection
var mongoose = require('mongoose');
var dev_db_url='mongodb://localhost:27017/studentdb?readPreference=primary&ssl=false';
var db = mongoose.connection;
mongoose.connect(dev_db_url);
// mongoose.Promise = global.Promise; //need to understand
var db= mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error'));
db.on('connected', ()=>{console.log('DB Connected')});
// custLogger.info('Hello Info');
// logger.debug('Hello Debug');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',studentRouter);


// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || 'info',
//   format: combine(timestamp(), json()),
//   transports: [new winston.transports.Console()],
// });

logger.info('Info message');

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

module.exports = app;
