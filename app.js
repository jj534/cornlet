const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// MONGODB
const forceProdDB = false;
const isProdDb = forceProdDB || (process.env.NODE_ENV === 'production' && process.env.REACT_APP_DB_PROD);
const dbType = isProdDb ? 'prod' : 'dev';
const URI = isProdDb ? process.env.REACT_APP_DB_PROD : process.env.REACT_APP_DB_DEV;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auto_reconnect: true,
  reconnectTries: 30,
  reconnectInterval: 1000,
  socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 },
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, '*** DB connection error ***'));
db.on('disconnected', console.error.bind(console, '*** DB disconnected ***'));
db.on('reconnected', console.error.bind(console, '*** DB reconnected ***'));
db.once('open', () => {
  console.log('db connection:', dbType);
});

// PORT
const PORT = process.env.PORT || 8081;
const app = express();
const server = app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});

// SOCKET IO
require('./socket').listen(server);

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// MIDDLEWARE
const corsCfg = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};
app.use(cors(corsCfg));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// FORCE HTTPS ON PROD
// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== 'development') {
    return res.redirect(`https://${req.get('host')}${req.url}`);
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
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
