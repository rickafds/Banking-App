import {call, put, takeLatest, all} from 'redux-saga/effects';
import api from '../../services/api';

function* requestLogin(action) {
  try {
    const {payload} = action;
    const user = yield call(api.post, 'session', {
      cpf: payload.cpf,
      password: payload.password,
    });
    console.tron.log('user', user);
  } catch (e) {
    console.tron.log('error', e);
  }
}

export default all([takeLatest('auth/REQUEST', requestLogin)]);
