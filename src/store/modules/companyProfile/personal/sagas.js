import { all, call, takeLatest, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Company } from '../../../../services/api/company';

function* updatePersonalData({ payload }) {
  const { companyId, name } = payload

  const data = { "restaurant": { "name": name } }

  try {
    const result = yield call(Company.update, companyId, data)
    
    const company = result.data.data

    yield put(Actions.updatePersonalDataSuccess(company))
  } catch(err) {
    yield put(Actions.updatePersonalDataFailed(err))
  }
}

export default all([
  takeLatest(Types.UPDATE_PERSONAL_DATA_REQUEST, updatePersonalData)
])