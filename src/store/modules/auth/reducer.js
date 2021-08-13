import produce from 'immer';
import { Types } from './actions';
import { Types as OwnerTypes } from '../owner/actions';

const initialState = {
  token: null,
  tokenRecoverPass: null,
  logged: false,
  apiFeedback: null
}

export const auth = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.ACCESS_DENIED: {
        draft.token = null

        draft.logged = false

        draft.apiFeedback = null
        break;
      }
      case Types.RESET_API_FEEDBACK: {
        draft.apiFeedback = null
        break;
      }
      case Types.LOGIN_REQUEST: {
        draft.apiFeedback = 'loading';
        break;
      }
      case Types.LOGIN_SUCCESS: {
        draft.token = action.payload.token

        draft.apiFeedback = 'success';

        draft.logged = true;
        break;
      }
      case Types.LOGIN_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data;
        break;
      }
      case Types.LOGOUT_SUCCESS: {
        draft.token = null

        draft.logged = false
        break;
      }
      case Types.SAVE_TOKEN_TO_RECOVER_PASSWORD: {
        draft.tokenRecoverPass = action.payload.token
        break;
      }
      case OwnerTypes.RECOVER_PASSWORD_SUCCESS: {
        draft.tokenRecoverPass = null
        break;
      }
      default:
    }
  });
}


const initialLogoutState = {
  apiLogoutFeedback: { status: null }
}

export const logout = (state = initialLogoutState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOGOUT_REQUEST: {
        draft.apiLogoutFeedback.status = 'loading'
        break;
      }
      case Types.LOGOUT_SUCCESS: {
        draft.apiLogoutFeedback.status = 'success'
        break;
      }
      case Types.LOGOUT_FAILED: {
        draft.apiLogoutFeedback.status = null
        break;
      }
      default:
    }
  });
}