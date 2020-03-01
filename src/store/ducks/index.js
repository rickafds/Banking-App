import { combineReducers } from 'redux';

import auth from './auth';
import forgot from './forgot';
import navigation from './navigation';

const rootReducer = combineReducers({
  auth,
  forgot,
  navigation,
});

export default rootReducer;
