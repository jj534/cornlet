const listingRouter = require('express').Router();
const moment = require('moment');
const Listing = require('./../models/Listing');

listingRouter.post('/create', async (req, res) => {
  try {
    // format user props
    const { user } = req.body;
    const props = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
    };
    const data = { ...req.body, user: props };

    // query
    const result = await new Listing(data).save();
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

listingRouter.get('/', async (req, res) => {
  try {
    // format query
    const {
      uid, active, start, end, sort,
    } = req.query;
    const uidQuery = uid ? { 'user.uid': uid } : {};
    const activeQuery = active ? { active } : {};
    const startQuery = start ? { start: { $lt: moment(new Date(start)).endOf('day').toDate() } } : {};
    const endQuery = end ? { end: { $gte: new Date(end) } } : {};
    const query = {
      ...activeQuery,
      ...uidQuery,
      ...startQuery,
      ...endQuery,
    };

    // sort
    const sortTypeToQuery = {
      recent: { sort: { updatedAt: -1 } },
      'price-asc': { sort: { price: 1 } },
      'price-desc': { sort: { price: -1 } },
    };
    const sortQuery = sortTypeToQuery[sort] || { sort: { updatedAt: -1 } };

    const docs = await Listing.find(query, null, sortQuery);
    const notDeletedDocs = docs.filter((doc) => !doc.deleted);
    res.send(notDeletedDocs);
  } catch (e) {
    res.status(500).send(e);
  }
});

listingRouter.get('/:id', async (req, res) => {
  try {
    const doc = await Listing.findById(req.params.id);
    res.send(doc.toObject({ virtuals: true }));
  } catch (e) {
    res.status(500).send(e);
  }
});

listingRouter.put('/:id/update', async (req, res) => {
  try {
    const data = {
      ...req.body,
      updatedAt: new Date(),
    };
    const doc = await Listing.findByIdAndUpdate(req.params.id, data, { new: true });
    res.send(doc);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = listingRouter;
