const listingRouter = require('express').Router();
const Listing = require('./../models/Listing')

listingRouter.post('/create', async (req, res) => {
  try {
    // format user props
    const { user } = req.body;
    const props = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL
    }
    const data = Object.assign({}, req.body, { user: props })
    
    // query
    const result = await new Listing(data).save();
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
})

listingRouter.get('/', async (req, res) => {
  try {
    // format query
    const { uid, active } = req.query;
    const uidQuery = uid ? { 'user.uid': uid } : {};
    const activeQuery = active ? { active } : {};
    const query = {
      ...activeQuery,
      ...uidQuery
    };
    
    // query
    const docs = await Listing.find(query);
    res.send(docs);
  } catch (e) {
    res.status(500).send(e);
  }
})

listingRouter.get('/:id', async (req, res) => {
  try {
    const doc = await Listing.findById(req.params.id)
    res.send(doc);
  } catch (e) {
    res.status(500).send(e);
  }
})

listingRouter.put('/:id/update', async (req, res) => {
  try {
    const doc = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(doc);
  } catch (e) {
    res.status(500).send(e);
  }
})

listingRouter.get('/strut', async (req, res) => {
  try {
    
  } catch (e) {
    res.status(500).send(e);
  }
})

module.exports = listingRouter;
