import {takeLatest, all, call, put} from 'redux-saga/effects';

import { Types, Actions } from './actions';

import { Owner } from '../../../../services/api/owner';

function* updatePassword({ payload }) {
  const { currentPassword, newPassword } = payload

  const data = {
    "owner": {
      "password": newPassword,
      "password_confirmation": newPassword,
      "password_current": currentPassword,
    }
  }

  try {
    yield call(Owner.update, data)

    yield put(Actions.updatePasswordSuccess())
  } catch(err) {
    yield put(Actions.updatePasswordFailed(err))
  }
}


export default all([
  takeLatest(Types.UPDATE_PASSWORD_REQUEST, updatePassword)
]);
