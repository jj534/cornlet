const authRouter = require('express').Router();
const passportGoogle = require('../auth/google');

authRouter.get('/google',
  passportGoogle.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email'] }));

authRouter.get('/google/callback',
  passportGoogle.authenticate('google', {
    successRedirect: `${process.env.REACT_APP_CLIENT_DOMAIN}/auth/callback`,
    failureRedirect: '/failure',
  }));

authRouter.get('/callback', (req, res) => {
  if (req.user) {
    res.send({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
  else {
    res.send({
      success: false,
      message: "user was not authenticated",
    });
  }
});

authRouter.get('/signout', (req, res) => {
  req.logout();
  res.send('OK');
});

module.exports = authRouter;
