import produce from 'immer';
import { Types } from './actions';
import { createObj, resetObj } from '../../../../utils/handleApiFeedback';

const initialState = {
  apiFeedback: createObj([
    'form',
    'suggestion'
  ])
}

export default function viewSuggestion(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SEND_SUGGESTION_REQUEST: {
        draft.apiFeedback = resetObj(draft.apiFeedback)
        
        draft.apiFeedback.form.status = 'loading'

        break;
      }
      case Types.SEND_SUGGESTION_SUCCESS: {
        draft.apiFeedback.form.status = 'success'
        break;
      }
      case Types.SEND_SUGGESTION_FAILED: {
        break
      }
      default:
    }
  });
}
