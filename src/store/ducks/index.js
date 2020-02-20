import {combineReducers} from 'redux';

import auth from './auth';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(rootPersistConfig, auth),
});

export default persistReducer(rootPersistConfig, rootReducer);
