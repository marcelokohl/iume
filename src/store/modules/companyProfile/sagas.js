import { all, call, takeLatest, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Company } from '../../../services/api/company';

function* loadCompanyProfile({ payload }) {
  const { companyId } = payload
  
  const included = "address,address.city,address.city.state,phones,tool_whatsapp"

  try {
    const result = yield call(Company.show, companyId, included)

    yield put(Actions.loadCompanyProfileSuccess(result))
  } catch(err) {
    yield put(Actions.loadCompanyProfileFailed(err))
  }
}

export default all([
  takeLatest(Types.LOAD_COMPANY_PROFILE_REQUEST, loadCompanyProfile)
])