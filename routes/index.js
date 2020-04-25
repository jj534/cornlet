const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    active: true,
  });
});

router.use('/user', require('./userRouter'));
router.use('/listing', require('./listingRouter'));
router.use('/file', require('./fileRouter'));

module.exports = router;

