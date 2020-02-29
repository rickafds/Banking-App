import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer = __DEV__
  ? compose(console.tron.createEnhancer(), applyMiddleware(SagaMiddleware))
  : applyMiddleware(SagaMiddleware);

const store = createStore(persistedReducer, enhancer);

SagaMiddleware.run(sagas);

const persistor = persistStore(store);

export { store, persistor };
