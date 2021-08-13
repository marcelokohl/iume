import { call, all, takeLatest, put, select} from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Section } from '../../../services/api/sections';

function* loadSections({ payload }) {
  const { companyId } = payload

  try {
    const result = yield call(Section.all, companyId)

    const { data } = result.data

    yield put(Actions.loadSectionsSuccess(data))
  } catch(err) {
    yield put(Actions.loadSectionsFailed(err))
  }
}

function* createSection({ payload }) {
  const { companyId, section } = payload

  const { name, description } = section

  const data = { 
    "section": { 
      "name": name, 
      "active": true ,
      "description": description
    } 
  }

  try {
    const result = yield call(Section.create, companyId, data)
    
    const newSection = result.data.data
    
    yield put(Actions.createSectionSuccess(newSection))
  } catch(err) {
    yield put(Actions.createSectionFailed(err))
  }
}

function* updateSection({ payload }) {
  const { companyId, section } = payload

  const { id, name, description } = section

  const data = { "section": { "name": name, "description": description } }

  try {
    const result = yield call(Section.update, companyId, id, data)
    
    const updatedSection = result.data.data

    yield put(Actions.updateSectionSuccess(updatedSection))
  } catch(err) {
    yield put(Actions.updateSectionFailed(err))
  }
}

function* updateSectionStatus({ payload }) {
  const { companyId, section } = payload

  const { id, active } = section

  const data = { "section": { "active": active } }
  
  try {
    const result = yield call(Section.update, companyId, id, data)
    
    const newSection = result.data.data

    yield put(Actions.updateSectionStatusSuccess(newSection))
  } catch(err) {
    yield put(Actions.updateSectionStatusFailed(err))
  }
}

function* removeSection({ payload }) {
  const { companyId, sectionId } = payload

  try {
    yield call(Section.delete, companyId, sectionId)

    yield put(Actions.removeSectionSuccess(sectionId))
  } catch(err) {
    yield put(Actions.removeSectionFailed(err))
  }
}

function* sortSections({ payload }) {
  const { companyId } = payload

  const sections = yield select(state => state.productSections.list)

  const sectionIds = sections.map(section => section.id)

  const data = { "section": { "ids": sectionIds } }

  try {
    yield call(Section.sort, companyId, data)

    yield put(Actions.sortSectionsSuccess())
  } catch(err) {
    yield put(Actions.sortSectionsFailed())
  }
}

export default all([
  takeLatest(Types.LOAD_SECTIONS_REQUEST, loadSections),
  takeLatest(Types.CREATE_SECTION_REQUEST, createSection),
  takeLatest(Types.UPDATE_SECTION_REQUEST, updateSection),
  takeLatest(Types.UPDATE_SECTION_STATUS_REQUEST, updateSectionStatus),
  takeLatest(Types.REMOVE_SECTION_REQUEST, removeSection),
  takeLatest(Types.SORT_SECTIONS_REQUEST, sortSections)
])