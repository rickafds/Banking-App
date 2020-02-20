import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  whitelist: ['auth'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(createLogger()));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
