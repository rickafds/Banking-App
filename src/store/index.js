import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, PersistState } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const middlewares = [];
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

// Redux: Store
const store = createStore(persistedReducer, PersistState, composer);

sagaMiddleware.run(sagas);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
