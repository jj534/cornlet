const userRouter = require('express').Router();
const Listing = require('./../models/Listing');

// get uid's bookmarked listings
userRouter.get('/:uid/bm', async (req, res) => {
  try {
    const docs = await Listing.find({});
    const result = docs.filter((listing) => listing.bmed.includes(req.params.uid));
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

// add lid to uid's bookmarked listings
userRouter.put('/:uid/bm/add/:lid', async (req, res) => {
  try {
    // TODO
    const docs = await Listing.find({});
    const result = docs.filter((listing) => listing.bmed.includes(req.params.uid));
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

// remove lid from uid's bookmarked listings
userRouter.get('/:uid/bm/remove/:lid', async (req, res) => {
  try {
    // TODO
    const docs = await Listing.find({});
    const result = docs.filter((listing) => listing.bmed.includes(req.params.uid));
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = userRouter;
