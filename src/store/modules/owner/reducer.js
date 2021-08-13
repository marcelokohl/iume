import produce from 'immer';

import { Types } from './actions';

import { createObj } from '../../../utils/handleApiFeedback';

const initialState = {
  apiFeedback: null,
  destroyAccountFeedback: { status: null },
  apiFeedbackRecoverPassword: createObj(['form']),
  apiFeedbackSendEmailRecover: createObj(['form'])
}

export default function owner(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.CREATE_OWNER_REQUEST: {
        draft.apiFeedback = 'loading'
        break;
      }
      case Types.CREATE_OWNER_SUCCESS: {
        draft.apiFeedback = 'success'
        break;
      }
      case Types.CREATE_OWNER_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data
        break
      }
      case Types.DESTROY_OWNER_ACCOUNT_REQUEST: {
        draft.destroyAccountFeedback.status = 'loading'
        break;
      }
      case Types.DESTROY_OWNER_ACCOUNT_SUCCESS: {
        draft.destroyAccountFeedback.status = 'success'
        break;
      }
      case Types.DESTROY_OWNER_ACCOUNT_FAILED: {
        const { data } = action.payload.err.response

        draft.destroyAccountFeedback.status = data
        break;
      }
      case Types.SEND_EMAIL_TO_RECOVER_PASSWORD_REQUEST: {
        draft.apiFeedbackSendEmailRecover.form.status = 'loading'
        break;
      }
      case Types.SEND_EMAIL_TO_RECOVER_PASSWORD_SUCCESS: {
        draft.apiFeedbackSendEmailRecover.form.status = 'success'
        break;
      }
      case Types.SEND_EMAIL_TO_RECOVER_PASSWORD_FAILED: {
        draft.apiFeedbackSendEmailRecover.form.status = 'error'
        break;
      }
      case Types.RECOVER_PASSWORD_REQUEST: {
        draft.apiFeedbackRecoverPassword.form.status = 'loading'
        break;
      }
      case Types.RECOVER_PASSWORD_SUCCESS: {
        draft.apiFeedbackRecoverPassword.form.status = 'success'
        break;
      }
      case Types.RECOVER_PASSWORD_FAILED: {
        draft.apiFeedbackRecoverPassword.form.status = 'error'
        break;
      }
      default:
    }
  });
}
