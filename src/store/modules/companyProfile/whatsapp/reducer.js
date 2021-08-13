import produce from 'immer';
import { Types } from './actions';
import { Types as TypesProfile } from '../actions';

import { createObj, resetObj } from '../../../../utils/handleApiFeedback';

const initialState = {
  whatsappStatus: false,
  hasPhone: false,
  phone: { number: '', id: null },
  apiFeedback: createObj(['form','phone'])
}

export default function personal(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TypesProfile.LOAD_COMPANY_PROFILE_SUCCESS: {
        const { included } = action.payload.result.data
        
        if(!included) break

        const phonesRelationship = included.find(item => item.type === 'phones')
        const whatsappRelationship = included.find(item => item.type === 'tool_whatsapps')

        if(phonesRelationship) {
          const { id } = phonesRelationship
          const { number } = phonesRelationship.attributes

          draft.hasPhone = true
          draft.phone.number = number;
          draft.phone.id = id
        }

        if(whatsappRelationship) {
          const { active } = whatsappRelationship.attributes

          draft.whatsappStatus = active
        }

        break;
      }
      case Types.SET_INPUT_VALUE: {
        const { key, value } = action.payload
        
        key === 'phone' && (draft[key].number = value)
        break;
      }
      case Types.CREATE_PHONE_REQUEST: {
        draft.apiFeedback = resetObj(draft.apiFeedback)

        draft.apiFeedback.form.status = 'loading'
        break;
      }
      case Types.CREATE_PHONE_SUCCESS: {
        const { id } = action.payload

        draft.apiFeedback.form.status = 'success'
        draft.hasPhone = true
        draft.phone.id = id
        break;
      }
      case Types.CREATE_PHONE_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback.form.status = 'error'

        if(data.number) {
          draft.apiFeedback.phone.status = 'error'
          draft.apiFeedback.phone.message = data.number
        }

        break
      }
      case Types.UPDATE_PHONE_REQUEST: {
        draft.apiFeedback = resetObj(draft.apiFeedback)

        draft.apiFeedback.form.status = 'loading'
        break;
      }
      case Types.UPDATE_PHONE_SUCCESS: {
        draft.apiFeedback.form.status = 'success'
        break;
      }
      case Types.UPDATE_PHONE_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback.form.status = 'error'

        if(data['phones.number']) {
          draft.apiFeedback.phone.status = 'error'
          draft.apiFeedback.phone.message = data['phones.number']
        }

        break
      }
      case Types.UPDATE_WHATSAPP_STATUS_SUCCESS: {
        const { status } = action.payload

        draft.whatsappStatus = status 
        break;
      }
      default:
    }
  })
}
