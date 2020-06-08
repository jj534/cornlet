import React from 'react';
import io from "socket.io-client";

const SocketIO = () => {
  const PORT = process.env.PORT || 8081
  const socket = io.connect(`http://localhost:${PORT}`);

  return <div />;
};

export default SocketIO;
