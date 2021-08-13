import { all, call, takeLatest, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Company } from '../../../../services/api/company';
import { Whatsapp } from '../../../../services/api/tools/whatsapp';

function* createPhone({ payload }) {
  const { companyId, phone } = payload

  const data = { 
    "restaurant": {
      "phones_attributes": [ { "number": normalizePhone(phone) } ]
    }
  }

  try {
    yield call(Company.update, companyId, data)

    const result = yield call(Company.show, companyId, "phones")

    const { included } = result.data

    const phonesRelationship = included.find(item => item.type === 'phones')

    const { id } = phonesRelationship
    
    yield put(Actions.createPhoneSuccess(id))
  } catch(err) {
    yield put(Actions.createPhoneFailed(err))
  }
}

function* updatePhone({ payload }) {
  const { companyId, phone } = payload

  let number = phone.number

  const condition = phone.number.includes(')')
  
  condition && (number = normalizePhone(phone.number))
  
  const data = { 
    "restaurant": {
      "phones_attributes": [ { "id": phone.id, "number": number } ]
    }
  }

  try {
    yield call(Company.update, companyId, data)

    yield put(Actions.updatePhoneSuccess())
  } catch(err) {
    yield put(Actions.updatePhoneFailed(err))
  }
}

function* updateWhatsappStatus({ payload }) {
  const { companyId, phoneId, status } = payload

  const data = { 
    "whatsapp": {
      "phone_id": phoneId,
      "active": status
    }
  }

  try {
    yield call(Whatsapp.update, companyId, data)

    yield put(Actions.updateWhatsappStatusSuccess(status))
  } catch(err) {
    yield put(Actions.updateWhatsappStatusFailed(err))
  }
}

const normalizePhone = (phone) => {
  return phone.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '-').replace(/(\d)(\d{4})$/,"$1-$2")
}

export default all([
  takeLatest(Types.CREATE_PHONE_REQUEST, createPhone),
  takeLatest(Types.UPDATE_PHONE_REQUEST, updatePhone),
  takeLatest(Types.UPDATE_WHATSAPP_STATUS_REQUEST, updateWhatsappStatus)
])