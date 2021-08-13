import produce from 'immer';
import { Types } from './actions';
import { Types as TypesProfile } from '../actions';

import { createObj, resetObj } from '../../../../utils/handleApiFeedback';

const initialState = {
  name: '',
  apiFeedback: createObj(['form','name'])
}

export default function personal(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TypesProfile.LOAD_COMPANY_PROFILE_SUCCESS: {
        const { data } = action.payload.result.data
        
        const { name } = data.attributes

        draft.name = name
        break;
      }
      case Types.SET_INPUT_VALUE: {
        const { key, value } = action.payload
        
        draft[key] = value
        break;
      }
      case Types.RESET_PERSONAL_DATA_FEEDBACK: {
        draft.apiFeedback = resetObj(draft.apiFeedback)
        break;
      }
      case Types.UPDATE_PERSONAL_DATA_REQUEST: {
        draft.apiFeedback.form.status = 'loading'
        break;
      }
      case Types.UPDATE_PERSONAL_DATA_SUCCESS: {
        draft.apiFeedback.form.status = 'success'
        break
      }
      case Types.UPDATE_PERSONAL_DATA_FAILED: {
        const { data } = action.payload.err.response
        
        draft.apiFeedback.form.status = 'error'

        if(data.name) {
          draft.apiFeedback.name.status = 'error'
          draft.apiFeedback.name.message = data.name
        }
        
        break
      }
      default:
    }
  })
}
