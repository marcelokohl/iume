import { call, all, takeLatest, put} from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Company } from '../../../services/api/company';
import history from '../../../services/history';

export function* createCompany({ payload }) {
  const { name } = payload
  
  const data = { "restaurant": { "name": name, "active": true } }

  try {
    yield call(Company.create, data)

    yield put(Actions.createCompanySuccess())
    
    yield loadOwnerCompanies()
    
    history.push('/admin/company/ok')
  } catch(err) {
    yield put(Actions.createCompanyFailed(err))
  }
}

export function* loadOwnerCompanies() {
  try {
    const result = yield call(Company.all)
    
    const { data } = result.data

    yield put(Actions.loadOwnerCompaniesSuccess(data))
  } catch(err) {
    yield put(Actions.loadOwnerCompaniesFailed(err))
  }
}

function* updateMenuActive({ payload }) {
  const { companyId, active } = payload

  const data = { "restaurant": { "active": active } }

  try {
    yield call(Company.update, companyId, data)
    
    yield put(Actions.updateMenuActiveSuccess(companyId, active))
  } catch(err) {
    yield put(Actions.updateMenuActiveFailed(err))
  }
}

export default all([
  takeLatest(Types.CREATE_COMPANY_REQUEST, createCompany),
  takeLatest(Types.LOAD_OWNER_COMPANIES_REQUEST, loadOwnerCompanies),
  takeLatest(Types.UPDATE_MENU_ACTIVE_REQUEST, updateMenuActive)
])