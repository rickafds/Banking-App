import { combineReducers } from 'redux';

import auth from './auth';
import forgot from './forgot';

const rootReducer = combineReducers({
  auth,
  forgot,
});

export default rootReducer;
