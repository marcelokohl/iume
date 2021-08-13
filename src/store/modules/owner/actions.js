export const Types = {
  CREATE_OWNER_REQUEST: '@owner/CREATE_OWNER_REQUEST',
  CREATE_OWNER_SUCCESS: '@owner/CREATE_OWNER_SUCCESS',
  CREATE_OWNER_FAILED: '@owner/CREATE_OWNER_FAILED',

  GET_CURRENT_OWNER_REQUEST: '@owner/GET_CURRENT_OWNER_REQUEST',
  GET_CURRENT_OWNER_SUCCESS: '@owner/GET_CURRENT_OWNER_SUCCESS',
  GET_CURRENT_OWNER_FAILED: '@owner/GET_CURRENT_OWNER_FAILED',

  SEND_EMAIL_TO_RECOVER_PASSWORD_REQUEST: '@owner/SEND_EMAIL_TO_RECOVER_PASSWORD_REQUEST',
  SEND_EMAIL_TO_RECOVER_PASSWORD_SUCCESS: '@owner/SEND_EMAIL_TO_RECOVER_PASSWORD_SUCCESS',
  SEND_EMAIL_TO_RECOVER_PASSWORD_FAILED: '@owner/SEND_EMAIL_TO_RECOVER_PASSWORD_FAILED',

  RECOVER_PASSWORD_REQUEST: '@owner/RECOVER_PASSWORD_REQUEST',
  RECOVER_PASSWORD_SUCCESS: '@owner/RECOVER_PASSWORD_SUCCESS',
  RECOVER_PASSWORD_FAILED: '@owner/RECOVER_PASSWORD_FAILED',

  DESTROY_OWNER_ACCOUNT_REQUEST: '@owner/DESTROY_OWNER_ACCOUNT_REQUEST',
  DESTROY_OWNER_ACCOUNT_SUCCESS: '@owner/DESTROY_OWNER_ACCOUNT_SUCCESS',
  DESTROY_OWNER_ACCOUNT_FAILED: '@owner/DESTROY_OWNER_ACCOUNT_FAILED',
}

export const Actions = { 
  createOwnerRequest: (email, password, passwordConfirmation) => ({
    type: Types.CREATE_OWNER_REQUEST,
    payload: { email, password, passwordConfirmation }
  }),
  
  createOwnerSuccess: () => ({ 
    type: Types.CREATE_OWNER_SUCCESS
  }),
  
  createOwnerFailed: (err) => ({ 
    type: Types.CREATE_OWNER_FAILED,
    payload: { err }
  }),



  getCurrentOwnerRequest: () => ({
    type: Types.GET_CURRENT_OWNER_REQUEST
  }),
  
  getCurrentOwnerSuccess: (owner) => ({ 
    type: Types.GET_CURRENT_OWNER_SUCCESS,
    payload: { owner }
  }),
  
  getCurrentOwnerFailed: (err) => ({ 
    type: Types.GET_CURRENT_OWNER_FAILED,
    payload: { err }
  }),



  destroyOwnerAccountRequest: () => ({
    type: Types.DESTROY_OWNER_ACCOUNT_REQUEST
  }),
  
  destroyOwnerAccountSuccess: () => ({ 
    type: Types.DESTROY_OWNER_ACCOUNT_SUCCESS
  }),
  
  destroyOwnerAccountFailed: (err) => ({ 
    type: Types.DESTROY_OWNER_ACCOUNT_FAILED,
    payload: { err }
  }),



  sendEmailToRecoverPasswordRequest: (email) => ({
    type: Types.SEND_EMAIL_TO_RECOVER_PASSWORD_REQUEST,
    payload: { email }
  }),

  sendEmailToRecoverPasswordSuccess: () => ({
    type: Types.SEND_EMAIL_TO_RECOVER_PASSWORD_SUCCESS
  }),

  sendEmailToRecoverPasswordFailed: (err) => ({
    type: Types.SEND_EMAIL_TO_RECOVER_PASSWORD_FAILED,
    payload: { err }
  }),



  recoverPasswordRequest: (token, password, passwordConfirmation) => ({
    type: Types.RECOVER_PASSWORD_REQUEST,
    payload: { token, password, passwordConfirmation }
  }),

  recoverPasswordSuccess: () => ({
    type: Types.RECOVER_PASSWORD_SUCCESS
  }),

  recoverPasswordFailed: (err) => ({
    type: Types.RECOVER_PASSWORD_FAILED,
    payload: { err }
  }),
}
