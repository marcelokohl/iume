import { all, call, takeLatest, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Emails } from '../../../services/api/emails';
import history from '../../../services/history';

function* checkEmail({ payload }) {
  const { email } = payload

  try {
    yield call(Emails.checkEmail, email)
    
    yield put(Actions.checkEmailSuccess(email))
    
    history.push('/admin/signin')
  } catch(err) {
    const { errors } = err.response.data
 
    if(errors.status === 404) {
      yield put(Actions.emailNotRegistered(email))
      history.push('/admin/signup')
    } else {
      yield put(Actions.checkEmailFailed(err))
    }
  }
}

export default all([
  takeLatest(Types.CHECK_EMAIL_REQUEST, checkEmail)
])