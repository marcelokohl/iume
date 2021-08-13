import { all, call, takeLatest, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Company } from '../../../../services/api/company';

function* updateSlug({ payload }) {
  const { companyId, slug } = payload

  const data = { "restaurant": { "slug": slug } }

  try {
    const result = yield call(Company.update, companyId, data)
    
    const company = result.data.data

    yield put(Actions.updateSlugSuccess(company))
  } catch(err) {
    yield put(Actions.updateSlugFailed(err))
  }
}

function* checkSlugAvailability({ payload }) {
  const { slug } = payload

  const data = { "restaurant": { "slug": slug } }

  try {
    yield call(Company.checkSlugAvailability, data)
    
    yield put(Actions.checkSlugAvailabilitySuccess())
  } catch(err) {
    yield put(Actions.checkSlugAvailabilityFailed(err))
  }
}

export default all([
  takeLatest(Types.UPDATE_SLUG_REQUEST, updateSlug),
  takeLatest(Types.CHECK_SLUG_AVAILABILITY_REQUEST, checkSlugAvailability)
])