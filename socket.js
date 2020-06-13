const socketio = require('socket.io');
const Chatroom = require('./models/Chatroom');
const sendMsgNotifEmail = require('./util/sendMsgNotifEmail');

module.exports.listen = (app) => {
  const io = socketio.listen(app);

  io.on('connection', (socket) => {
    socket.on('msg', async (data) => {
      try {
        io.emit('msg', data);

        // save to DB
        const chatroom = await Chatroom.findById(data.cid).populate('searcher listing');
        const newMsgs = [...chatroom.msgs];

        // set other user to unread
        const otherUserUid = chatroom.uids.filter((uid) => uid !== data.uid)[0];
        if (!chatroom.notifUids.includes(otherUserUid)) {
          chatroom.notifUids.push(otherUserUid);
        }

        // send email notif to other user
        const isSearcher = otherUserUid === chatroom.searcher.uid;
        const email = isSearcher ? chatroom.searcher.email : chatroom.listing.user.email;
        const firstName = isSearcher ? chatroom.listing.user.name.split(' ')[0] : chatroom.searcher.name.split(' ')[0];

        sendMsgNotifEmail(email, firstName, data.content);

        // add msg to chatroom
        const dataWithoutCid = {
          ...data,
          cid: undefined,
        };
        newMsgs.push(dataWithoutCid);
        chatroom.msgs = newMsgs;

        chatroom.save();
      }
      catch (e) {
        console.log('socket error', e);
      }
    });

    socket.on('new chatroom', async (chatroom) => {
      try {
        io.emit('new chatroom', chatroom);

        // chatroom can only be created by searcher
        // send email notif to listing owner
        const { name } = chatroom.searcher;
        const firstName = name.split(' ')[0];
        const { email } = chatroom.listing.user;
        sendMsgNotifEmail(email, firstName, chatroom.msgs[0].content);
      }
      catch (e) {
        console.log('socket error', e);
      }
    });

    socket.on('chatroom seen', async (data) => {
      try {
        io.emit('chatroom seen', data);

        // save to DB
        const chatroom = await Chatroom.findById(data.cid);
        const newNotifUids = [...chatroom.notifUids];
        if (newNotifUids.includes(data.uid)) {
          newNotifUids.splice(newNotifUids.indexOf(data.uid), 1);
        }
        chatroom.notifUids = newNotifUids;
        chatroom.save();
      }
      catch (e) {
        console.log('socket error', e);
      }
    });

    socket.on('disconnect', () => {
      // handle disconnect
    });
  });

  return io;
};
