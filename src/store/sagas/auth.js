import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../services/api';
import { loginError, loginSucess } from '../ducks/auth';

function* requestLogin(action) {
  try {
    const { payload } = action;
    const user = yield call(api.post, 'session', {
      cpf: payload.cpf,
      password: payload.password,
    });
    yield put(loginSucess(user));
  } catch (e) {
    yield put(loginError());
  }
}

export default all([takeLatest('auth/REQUEST', requestLogin)]);
