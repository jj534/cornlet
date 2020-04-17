import { combineReducers } from 'redux';
import user from './user';
import authing from './authing';

const rootReducer = combineReducers({
  user,
  authing,
})

export default rootReducer