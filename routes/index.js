const express = require('express');
const testScript = require('./testScript');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    active: true,
  });
});

router.use('/user', require('./userRouter'));
router.use('/listing', require('./listingRouter'));
router.use('/file', require('./fileRouter'));
router.use('/chatroom', require('./chatroomRouter'));
router.use('/auth', require('./authRouter'));
router.use('/', require('./helpers'));

testScript();

module.exports = router;
