const socketio = require('socket.io');
const Chatroom = require('./models/Chatroom');

module.exports.listen = function(app){
    io = socketio.listen(app)

    io.on('connection', (socket) => {
			const { id } = socket.client;
		
			socket.on('msg', async (data) => {
				try {
					io.emit('msg', data);
			
					// save to DB
					const chatroom = await Chatroom.findById(data.cid);
					const newMsgs = [...chatroom.msgs];
					delete data.cid;
					newMsgs.push(data);
					chatroom.msgs = newMsgs;
					chatroom.save();
				}
				catch (e) {
					console.log('socket error', e);
				}
			})
		
			socket.on('disconnect', (data) => {
				// handle disconnect
			});
		});

    return io
}