import produce from 'immer';

import { Types } from './actions';

import { createObj, resetObj } from '../../../../utils/handleApiFeedback';

const initialState = {
  apiFeedback: createObj([
    'form',
    'currentPassword'
  ])
}

export default function password(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.UPDATE_PASSWORD_REQUEST: {
        draft.apiFeedback = resetObj(draft.apiFeedback)

        draft.apiFeedback.form.status = 'loading'
        break;
      }
      case Types.UPDATE_PASSWORD_SUCCESS: {
        draft.apiFeedback = resetObj(draft.apiFeedback)

        draft.apiFeedback.form.status = 'success'
        break;
      }
      case Types.UPDATE_PASSWORD_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback.form.status = 'error'

        if(data.password_current) {
          draft.apiFeedback.currentPassword.status = 'error'
          draft.apiFeedback.currentPassword.message = data.password_current
        }
        
      }
      default:
    }
  })
}
