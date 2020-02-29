import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../services/api';
import { forgotError, forgotSucess } from '../ducks/forgot';

function* requestForgot(action) {
  try {
    const { email } = action;
    const status = '201';

    const user = yield call(api.post, 'forgot', {
      email,
    });

    user.status = status ? yield put(forgotSucess()) : yield put(forgotError());
  } catch (err) {
    yield put(forgotError());
  }
}

export default all([takeLatest('forgot/REQUEST', requestForgot)]);
