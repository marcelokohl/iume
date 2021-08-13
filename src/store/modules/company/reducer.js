import produce from 'immer';
import { Types } from './actions';

const initialState = {
  apiFeedback: false
}

export default function company(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.CREATE_COMPANY_REQUEST: {
        draft.apiFeedback = 'loading';
        break;
      }
      case Types.CREATE_COMPANY_SUCCESS: {
        draft.apiFeedback = 'success';
        break;
      }
      case Types.CREATE_COMPANY_FAILED: {
        const { data } = action.payload.err.response
        
        draft.apiFeedback = data;
        break;
      }
      default:
    }
  });
}
