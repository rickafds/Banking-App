import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import auth from './auth';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(rootPersistConfig, auth),
});

export default persistReducer(rootPersistConfig, rootReducer);
