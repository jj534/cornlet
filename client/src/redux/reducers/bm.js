const initState = {
  notif: false,
  listings: []
}

const bmReducer = (state = initState, action) => {
  switch (action.type) {
    case 'BM_SET':
      return action.payload;
    default:
      return state
  }
}

export default bmReducer;