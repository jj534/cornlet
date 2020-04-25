var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

// MONGODB
const forceProdDB = false;
const isProdDb = forceProdDB || process.env.NODE_ENV === 'production' && process.env.REACT_APP_DB_PROD;
const dbType = isProdDb ? 'prod' : 'dev';
const URI = isProdDb ? process.env.REACT_APP_DB_PROD : process.env.REACT_APP_DB_DEV;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connection:', dbType)
});

// PORT
const PORT = process.env.PORT || 8081;
var app = express();
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// MIDDLEWARE
const corsCfg = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials": true
}
app.use(cors(corsCfg));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// FORCE HTTPS ON PROD
app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
});

// ROUTING
app.use('/api', require('./routes'));

// PROD SERVE FRONTEND
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname)));
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
else {
  app.use(express.static(path.join(__dirname, 'public')));
}

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
