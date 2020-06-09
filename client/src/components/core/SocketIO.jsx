import React from 'react';
import socket from 'src/util/socket';
import { useDispatch } from 'react-redux';

const SocketIO = () => {
  const dispatch = useDispatch();
  // listen for chat
  socket.on('msg', (data) => {
    console.log('socket event: msg', data);
    dispatch({
      type: 'CHATROOMS_SOCKET',
      payload: data,
    });
  })

  return <div />;
};

export default SocketIO;
