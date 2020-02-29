import Reactotron, {
  asyncStorage,
  trackGlobalErrors,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'Banking App' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .use(trackGlobalErrors())
    .use(asyncStorage())
    .useReactNative({
      asyncStorage: true,
    })
    .connect();

  console.tron = tron;

  tron.clear();
}
