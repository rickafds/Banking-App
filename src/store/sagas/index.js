import { all } from 'redux-saga/effects';
import Auth from './auth';
import Forgot from './forgot';

export default function* rootSaga() {
  return yield all([Auth, Forgot]);
}
