const chatroomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHATROOMS_SET':
      return action.payload;

    case 'CHATROOMS_ADD':
      return [...state, action.payload];

    case 'CHATROOMS_REMOVE':
      return state.filter((chatroom) => chatroom._id !== action.payload._id);
    
    case 'CHATROOMS_SOCKET':
      const { cid, type, content, uid, createdAt } = action.payload;
      const cids = state.map((chatroom) => chatroom._id);
      const idx = cids.indexOf(cid);

      if (idx >= 0) {
        // new chat occured in user's chatroom
        console.log('new msg at chatroom', state[idx]);
        delete action.payload.cid;
        const newState = [...state];
        const [chatroom] = newState.splice(idx, 1);
        chatroom.msgs.push(action.payload);
        newState.unshift(chatroom);

        return newState;
      }
      else {
        return state;
      }
      
    default:
      return state
  }
}

export default chatroomsReducer;