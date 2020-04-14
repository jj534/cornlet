const listingRouter = require('express').Router();
const Bookmark = require('./../models/Bookmark');

listingRouter.get('/:uid', async (req, res) => {
  try {
    const doc = await Bookmark.findOne({ uid: req.params.uid });
    res.send(doc);
  } catch (e) {
    res.status(500).send(e);
  }
});

listingRouter.put('/:uid/:action/:lid', async (req, res) => {
  try {
    const { uid, lid, action } = req.params;
    const doc = await Bookmark.findOne({ uid });
    let newBookmarks = [...doc.bookmarks];
    
    if (action === 'add') {
      if (!newBookmarks.includes(lid)) newBookmarks.push(lid);
    }
    else if (action === 'remove') {
      if (newBookmarks.includes(lid)) {
        newBookmarks.splice(newBookmarks.indexOf(uid), 1);
      }
    }
    const newDoc = {
      ...doc,
      bookmarks: newBookmarks
    }
    const opts = { new: true, upsert: true };
    const updateRes = await Bookmark.findOneAndUpdate({ uid }, newDoc, opts);
    res.send(updateRes);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = listingRouter;
