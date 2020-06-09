import io from "socket.io-client";

const PORT = process.env.PORT || 8081
const socket = io.connect(`http://localhost:${PORT}`);

export default socket;