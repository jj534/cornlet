import { combineReducers } from 'redux';
import user from './user';
import authing from './authing';
import bm from './bm';
import tempValues from './tempValues';

const rootReducer = combineReducers({
  user,
  authing,
  bm,
  tempValues,
})

export default rootReducer