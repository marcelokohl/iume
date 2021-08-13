import {takeLatest, all, call, put} from 'redux-saga/effects';

import { Types, Actions } from './actions';
import { Actions as AuthActions } from '../auth/actions';
import { Actions as CompanyActions } from '../company/actions';

import { Owner } from '../../../services/api/owner';
import { Company } from '../../../services/api/company';

import history from '../../../services/history';

function* createOwner({ payload }) {
  const { email, password, passwordConfirmation } = payload

  const data = {
    "owner": {
      "email": email,
      "password": password,
      "password_confirmation": passwordConfirmation
    }
  }

  try {
    const result = yield call(Owner.create, data)

    const { token } = result.data

    yield put(Actions.createOwnerSuccess())

    yield put(AuthActions.loginSuccess(token))

    yield put(AuthActions.setTokenOnRequests(token))

    // facebook pixel
    window.fbq('track', 'CompleteRegistration')

    history.push('/admin/company')
  } catch(err) {
    yield put(Actions.createOwnerFailed(err))
  }
}

function* destroyOwnerAccount() {
  try {
    yield call(Owner.destroy)

    yield put(Actions.destroyOwnerAccountSuccess())

    history.push('/')
  } catch(err) {
    yield put(Actions.destroyOwnerAccountFailed(err))
  }
}

function* sendEmailToRecoverPassword({ payload }) {
  const { email } = payload

  const data = { "recover": { "email": email } }

  try {
    yield call(Owner.sendEmailToRecoverPassword, data)

    yield put(Actions.sendEmailToRecoverPasswordSuccess())

    history.push('/admin/recover')
  } catch(err) {
    yield put(Actions.sendEmailToRecoverPasswordFailed(err))
  }
}

function* recoverPassword({ payload }) {
  const { token, password, passwordConfirmation } = payload

  const data = {
    "recover": {
      "password": password,
      "password_confirmation": passwordConfirmation
    }
  }

  const headers = { headers: { 'Authorization': `Token token=${token}` } }

  try {
    yield call(Owner.recoverPassword, data, headers)

    yield put(AuthActions.setTokenOnRequests(token))

    yield put(AuthActions.loginSuccess(token))

    yield put(Actions.recoverPasswordSuccess())

    yield loadOwnerCompanies()

    history.push('/admin/menu')
  } catch(err) {
    yield put(Actions.recoverPasswordFailed(err))
  }
}

function* loadOwnerCompanies() {
  try {
    const result = yield call(Company.all)

    const { data } = result.data

    yield put(CompanyActions.loadOwnerCompaniesSuccess(data))
  } catch(err) {
    yield put(CompanyActions.loadOwnerCompaniesFailed(err))
  }
}

function* getCurrentOwner() {
  try {
    const result = yield call(Owner.getCurrentOwner)

    const owner = result.data.data

    yield put(Actions.getCurrentOwnerSuccess(owner))
  } catch(err) {
    yield put(Actions.getCurrentOwnerFailed(err))
  }
}

export default all([
  takeLatest(Types.CREATE_OWNER_REQUEST, createOwner),
  takeLatest(Types.DESTROY_OWNER_ACCOUNT_REQUEST, destroyOwnerAccount),
  takeLatest(Types.SEND_EMAIL_TO_RECOVER_PASSWORD_REQUEST, sendEmailToRecoverPassword),
  takeLatest(Types.RECOVER_PASSWORD_REQUEST, recoverPassword),
  takeLatest(Types.GET_CURRENT_OWNER_REQUEST, getCurrentOwner)
]);
