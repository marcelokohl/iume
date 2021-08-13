import produce from 'immer';

import { Types } from './actions';
import { Types as TypesProfile } from '../actions';

import { createObj, resetObj } from '../../../../utils/handleApiFeedback';

const initialState = {
  disableNeighborhood: true,
  hasAddress: false,

  cep: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',

  apiFeedback: createObj([
    'form',
    'cep',
    'street',
    'number',
    'complement',
    'neighborhood',
    'city',
    'state'
  ])
}

export default function address(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TypesProfile.LOAD_COMPANY_PROFILE_SUCCESS: {
        const { included } = action.payload.result.data
        
        if(!included) break

        const addressRelationship = included.filter(item => item.type === 'addresses')
        const cityRelationship = included.filter(item => item.type === 'cities')
        const stateRelationship = included.filter(item => item.type === 'states')

        if(addressRelationship) {
          const { cep, street, number, complement, neighborhood } = addressRelationship[0].attributes
          draft.hasAddress = true
          draft.cep = cep; 
          draft.street = street
          draft.number = number
          draft.complement = complement
          draft.neighborhood = neighborhood
        }

        if(cityRelationship) {
          const cityName = cityRelationship[0].attributes.name
          draft.city = cityName
        }

        if(stateRelationship) {
          const stateAcronym = stateRelationship[0].attributes.acronym
          draft.state = stateAcronym
        }

        break;
      }
      case Types.SET_INPUT_VALUE: {
        const { key, value } = action.payload

        if(key === 'cep' && value.length < 9) {
          draft.street = ''
          draft.number = ''
          draft.complement = ''
          draft.neighborhood = ''
          draft.city = ''
          draft.state = ''
        }
        
        draft[key] = value

        break;
      }
      case Types.LOAD_ADDRESS_BY_CEP_REQUEST: {        
        draft.apiFeedback = resetObj(draft.apiFeedback)
        draft.apiFeedback.cep.status = 'loading'
        break;
      }
      case Types.LOAD_ADDRESS_BY_CEP_SUCCESS: {
        const { neighborhood, city, state, street } = action.payload

        draft.neighborhood = neighborhood

        !neighborhood.length ? (draft.disableNeighborhood = false) :
          (draft.disableNeighborhood = true)

        draft.street = street
        draft.city = city
        
        draft.state = state
        draft.apiFeedback.cep.status = 'success'
        break;
      }
      case Types.LOAD_ADDRESS_BY_CEP_FAILED: {
        draft.disableNeighborhood = true
        
        draft.street = ''
        draft.number = ''
        draft.complement = ''
        draft.neighborhood = ''
        draft.city = ''
        draft.state = ''
        
        draft.apiFeedback.cep.status = 'error'
        draft.apiFeedback.cep.message = ['cep não encontrado']
        break;
      }
      case Types.SAVE_ADDRESS_REQUEST: {
        draft.apiFeedback = resetObj(draft.apiFeedback)

        draft.apiFeedback.form.status = 'loading'
        break;
      }
      case Types.SAVE_ADDRESS_SUCCESS: {
        draft.apiFeedback.form.status = 'success'
        draft.disableNeighborhood = true
        draft.hasAddress = true
        
        break;
      }
      case Types.SAVE_ADDRESS_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback.form.status = 'error'
        
        if(data['address.cep']) {
          draft.apiFeedback.cep.status = 'error'
          draft.apiFeedback.cep.message = data['address.cep']
        }

        if(data['address.street']) {
          draft.apiFeedback.street.status = 'error'
          draft.apiFeedback.street.message = data['address.street']
        }
        
        if(data['address.number']) {
          draft.apiFeedback.number.status = 'error'
          draft.apiFeedback.number.message = data['address.number']
        }

        if(data['address.complement']) {
          draft.apiFeedback.complement.status = 'error'
          draft.apiFeedback.complement.message = data['address.complement']
        }

        if(data['address.neighborhood']) {
          draft.apiFeedback.neighborhood.status = 'error'
          draft.apiFeedback.neighborhood.message = data['address.neighborhood']
        }

        if(data['address.city']) {
          draft.apiFeedback.city.status = 'error'
          draft.apiFeedback.city.message = data['address.city']
        }

        if(data['address.state']) {
          draft.apiFeedback.state.status = 'error'
          draft.apiFeedback.state.message = data['address.state']
        }

        break;
      }
      default:
    }
  })
}
