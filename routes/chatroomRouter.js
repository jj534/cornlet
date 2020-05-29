const chatroomRouter = require('express').Router();
const Chatroom = require('../models/Chatroom');

chatroomRouter.post('/create', async (req, res) => {
  try {
    const { users, lid, msg } = req.body;
    const firstMsg = {
      content: msg
    }
    const data = {
      users,
      listing: lid,
      msgs: []
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = chatroomRouter;
