const chatroomRouter = require('express').Router();
const Chatroom = require('../models/Chatroom');
const User = require('../models/User');

chatroomRouter.post('/create', async (req, res) => {
  try {
    const { lid, msgContent, searcherUid, ownerUid } = req.body;
    const firstMsg = {
      content: msgContent,
      uid: searcherUid,
    }
    const searcher = await User.findOne({ uid: searcherUid });
    const chatroomData = {
      uids: [searcherUid, ownerUid],
      searcher: searcher._id,
      listing: lid,
      msgs: [firstMsg],
    }
    const newChatroom = await new Chatroom(chatroomData).save();
    const populatedChatroom = await newChatroom.populate('searcher listing').execPopulate();
    res.send(populatedChatroom);
  } catch (e) {
    res.status(500).send(e);
  }
});

chatroomRouter.get('/user/:uid', async (req, res) => {
  try {
    const chatrooms = await Chatroom.find({ uids: req.params.uid }).populate('searcher listing');
    res.send(chatrooms);
  } catch (e) {
    res.status(500).send(e);
  }
});

chatroomRouter.get('/:uid/:lid', async (req, res) => {
  try {
    const chatroom = await Chatroom.findOne({ uids: req.params.uid, listing: req.params.lid });
    res.send(chatroom);
  } catch (e) {
    res.status(500).send(e);
  }
});


module.exports = chatroomRouter;
