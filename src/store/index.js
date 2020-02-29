import { createStore, applyMiddleware } from 'redux';
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

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux: Store
const store = createStore(
  persistedReducer,
  PersistState,
  applyMiddleware(sagaMiddleware)
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(sagas);

// Exports
export { store, persistor };
