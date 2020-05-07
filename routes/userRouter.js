const userRouter = require('express').Router();
const User = require('./../models/User');

let defaultBm = { notif: false, listings: [] };

// get uid's bookmark data
userRouter.get('/:uid/bm', async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid }).populate('bm.listings');
    if (user) {
      res.send(user.bm);
    }
    else res.send(defaultBm);
  } catch (e) {
    console.log('e :>> ', e);
    res.status(500).send(e);
  }
});

userRouter.get('/error', async (req, res) => {
  try {
    const foo = bob.the.builder;
    res.send({})
  } catch (e) {
    res.status(500).send(e);
  }
});

// add or remove lid to uid's bookmarked listings
// opr: add || remove
userRouter.put('/:uid/bm/:opr/:lid', async (req, res) => {
  try {
    const { uid, lid, opr } = req.params;
    const user = await User.findOne({ uid });
    let newBm = defaultBm;
    if (opr === 'add') {
      if (user && !user.bm.listings.includes(lid)) {
        newBm.listings = [...user.bm.listings, lid];
        newBm.notif = true;
      }
      else if (!user) newBm.listings = [lid];
    }
    else if (opr === 'remove') {
      if (user && user.bm.listings.includes(lid)) {
        newBm = user.bm;
        newBm.listings.splice(newBm.listings.indexOf(lid), 1);
      }
    }
    const opts = { new: true, upsert: true };
    const updatedUser = await User.findOneAndUpdate({ uid }, { bm: newBm }, opts);
    res.send(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = userRouter;
