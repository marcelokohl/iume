import { call, all, takeLatest, put} from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { GetAddressByCep } from '../../../../services/external/cep';
import { Company } from '../../../../services/api/company';

export function* loadAddressByCep({ payload }) {

  yield new Promise(resolve => setTimeout(resolve, 500))

  const { cep } = payload

  try {
    const result = yield call(GetAddressByCep.get, cep)

    if(result.data.erro) {
      yield put(Actions.loadAddressByCepFailed('err'))
      return
    }

    const { bairro, localidade, uf, logradouro } = result.data

    yield put(Actions.loadAddressByCepSuccess(bairro, localidade, uf, logradouro))

  } catch(err) {
    yield put(Actions.loadAddressByCepFailed(err))
  }
}

export function* saveAddress({ payload }) {
  const { companyId, info } = payload

  const data = {
    "restaurant": {
      "address_attributes": {
        "cep": info.cep,
        "street": info.street,
        "number": info.number,
        "complement": info.complement,
        "neighborhood": info.neighborhood
      }
    }
  }

  try {
    yield call(Company.update, companyId, data)

    yield put(Actions.saveAddressSuccess())
  } catch(err) {
    yield put(Actions.saveAddressFailed(err))
  }
}
export default all([
  takeLatest(Types.LOAD_ADDRESS_BY_CEP_REQUEST, loadAddressByCep),
  takeLatest(Types.SAVE_ADDRESS_REQUEST, saveAddress)
])
