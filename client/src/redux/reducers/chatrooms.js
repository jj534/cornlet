const chatroomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHATROOMS_SET':
      return action.payload;

    case 'CHATROOMS_ADD':
      if (state.length === 0) {
        return [action.payload];
      }
      else {
        return [...state, action.payload];
      }

    case 'CHATROOMS_REMOVE':
      if (state.length === 0) {
        return [];
      }
      else {
        return state.filter((chatroom) => chatroom._id !== action.payload._id);
      }
      
    default:
      return state
  }
}

export default chatroomsReducer;