import { all, call, takeLatest, put } from 'redux-saga/effects';
import { api } from '../../../config/ApiConfig';
import { Auth } from '../../../services/api/auth';
import { Company } from '../../../services/api/company';

import { Types, Actions } from './actions';

import { Actions as CompanyActions } from '../company/actions';
import history from '../../../services/history';

export function* login({ payload }) {
  const { email, password } = payload
  
  const data = {
    "login": {
      "email": email,
      "password": password
    }
  }

  try {
    const result = yield call(Auth.login, data);

    const { token } = result.data

    yield put(Actions.loginSuccess(token))
    
    yield put(Actions.setTokenOnRequests(token))

    const companies = yield call(Company.all)
   
    yield put(CompanyActions.loadOwnerCompaniesSuccess(companies.data.data)) 

    history.push('/admin/menu')
  } catch(err) {
    yield put(Actions.loginFailed(err))
  }
}

export function* logout() {
  try {
    yield call(Auth.logout)

    yield put(Actions.logoutSuccess())

    history.push('/')
  } catch(err) {
    yield put(Actions.logoutFailed(err))
  }
}

function setToken({ payload }) {
  if(!payload) return;

  const { token } = payload.auth;

  if(token) {
    api.defaults.headers.Authorization = `Token token=${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Types.SET_TOKEN_ON_REQUESTS, setToken),
  takeLatest(Types.LOGIN_REQUEST, login),
  takeLatest(Types.LOGOUT_REQUEST, logout)
])