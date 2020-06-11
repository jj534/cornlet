import io from "socket.io-client";

const URL = process.env.NODE_ENV === 'development'
	? 'http://localhost:8081'
	: process.env.REACT_APP_ENV === 'release'
	? 'https://cornlet-release.herokuapp.com'
	: 'https://www.cornlet.com'
	
const socket = io.connect(URL);

export default socket;