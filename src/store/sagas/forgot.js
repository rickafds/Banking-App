import { call, put, takeLatest, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import api from '../../services/api';
import { forgotError, forgotSucess } from '../ducks/forgot';

function* requestForgot(action) {
  try {
    const { email } = action;

    const user = yield call(api.post, 'forgot', {
      email,
    });
    if (user.status === 201) {
      yield put(forgotSucess());
      yield put(NavigationActions.navigate({ routeName: 'ForgotPassword' }));
    }
  } catch (err) {
    yield put(forgotError());
  }
}

export default all([takeLatest('forgot/REQUEST', requestForgot)]);
