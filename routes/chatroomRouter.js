const chatroomRouter = require('express').Router();
const Chatroom = require('../models/Chatroom');
const User = require('../models/User');
const Listing = require('../models/Listing');

const findUsersWithMostChats = async () => {
  const chatrooms = await Chatroom.find();
  const map = {};
  chatrooms.forEach((chatroom) => {
    chatroom.uids.forEach((uid) => {
      if (!map[uid]) {
        map[uid] = 1;
      }
      else {
        map[uid] += 1;
      }
    });
  });
  const sortable = [];
  for (const vehicle in map) {
    sortable.push([vehicle, map[vehicle]]);
  }

  sortable.sort((a, b) => a[1] - b[1]);

  const last20 = sortable.slice(Math.max(sortable.length - 20, 0));
  const ownerData = [];
  const userData = [];
  const promises = last20.map((arr) => {
    return new Promise(async (resolve, reject) => {
      try {
        const uid = arr[0];
        const listings = await Listing.find({ 'user.uid': uid });
        const listing = listings[0];

        ownerData.push({
          name: listing.user.name,
          email: listing.user.email,
        });
        resolve();
      }
      catch (e) {
        try {
          const uid = arr[0];
          const user = await User.findOne({ uid });
          userData.push({
            name: user.name,
            email: user.email,
          });
          resolve();
        }
        catch (err) {
          console.log('final error', err);
        }
      }
    })
  })

  Promise.all(promises)
    .then(() => {
      console.log('ownerData', ownerData);
      console.log('userData', userData);
    });
}

chatroomRouter.post('/create', async (req, res) => {
  try {
    const {
      lid, msgContent, searcherUid, ownerUid,
    } = req.body;
    const firstMsg = {
      content: msgContent,
      uid: searcherUid,
    };
    const searcher = await User.findOne({ uid: searcherUid });
    const chatroomData = {
      uids: [searcherUid, ownerUid],
      notifUids: [searcherUid, ownerUid],
      searcher: searcher._id,
      listing: lid,
      msgs: [firstMsg],
    };
    const newChatroom = await new Chatroom(chatroomData).save();
    const populatedChatroom = await newChatroom.populate('searcher listing').execPopulate();
    res.send(populatedChatroom);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

chatroomRouter.get('/user/:uid', async (req, res) => {
  try {
    const chatrooms = await Chatroom.find({ uids: req.params.uid }).populate('searcher listing').sort({ updatedAt: -1 });
    res.send(chatrooms);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

chatroomRouter.get('/:uid/:lid', async (req, res) => {
  try {
    const chatroom = await Chatroom.findOne({ uids: req.params.uid, listing: req.params.lid });
    res.send(chatroom);
  }
  catch (e) {
    res.status(500).send(e);
  }
});


module.exports = chatroomRouter;
