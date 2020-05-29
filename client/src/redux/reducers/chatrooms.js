const chatroomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHATROOMS_SET':
      return action.payload;

    case 'CHATROOMS_ADD':
      return [...state, action.payload];

    case 'CHATROOMS_REMOVE':
      return state.filter((chatroom) => chatroom._id !== action.payload._id);
      
    default:
      return state
  }
}

export default chatroomsReducer;