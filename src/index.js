import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';
import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Router from './navigation/Navigator';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
