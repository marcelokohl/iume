import produce from 'immer';
import { Types } from './actions';

const initialState = {
  apiFeedback: null
}

export default function emails(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.RESET_API_FEEDBACK: {
        draft.apiFeedback = null
        break;
      }
      case Types.CHECK_EMAIL_REQUEST: {
        draft.apiFeedback = 'loading'
        break
      }
      case Types.CHECK_EMAIL_SUCCESS: {
        draft.apiFeedback = 'success'
        break
      }
      case Types.CHECK_EMAIL_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data
        break
      }
      default:
    }
  })
}
